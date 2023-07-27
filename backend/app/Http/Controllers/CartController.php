<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function getCartByClient(Request $request){
        $cartShop = DB::table('panier')
                        ->join('client','panier.id_client','=','client.IdClient')
                        ->join('produit','panier.id_product','=','produit.IdProduit')
                        ->select(
                            'produit.IdProduit as product_id',
                            'produit.Title as product_title',
                            'produit.Photo as product_img',
                            'produit.Prix as product_price',
                            'produit.TauxPromotion as product_promotion',
                            'panier.couleur as product_color',
                            'panier.quantity as product_qantity'
                        )
                        ->where('client.IdClient','=',$request->user)
                        ->get();
        return  $cartShop;
    }

    public function deleteProductById(Request $request){
        DB::table('panier')
            ->where('id_client', $request->clientId)
            ->where('id_product', $request->productId)
            ->delete();
        
        $objetoRequest = new \Illuminate\Http\Request();
        $objetoRequest->setMethod('POST');
        $objetoRequest->request->add([
            'user' => $request->clientId
        ]);
        return $this->getCartByClient($objetoRequest);
    }

    public function upDateCartQuantity(Request $request){
        
        // ? Get Quantity Product
        $quantityProduct = DB::table('produit')
                                ->select('QteStock')
                                ->where('idProduit', '=', $request->itemId)
                                ->get();
        
                                
        // ? Check If Quantity Product Existe
        if($quantityProduct[0]->QteStock > $request->quantity){
            DB::table('panier')
                ->where('id_client', $request->clientInfo['IdClient'])
                ->where('id_product','=',$request->itemId)
                ->update(['quantity' => $request->quantity]);
        }

        $objetoRequest = new \Illuminate\Http\Request();
        $objetoRequest->setMethod('POST');
        $objetoRequest->request->add([
            'user' => $request->clientInfo['IdClient']
        ]);
        return $this->getCartByClient($objetoRequest);
        
    }
    
    public function addProductToCart(Request $request){

        
        $product = DB::table('panier')
            ->where('id_client', $request->clientId)
            ->where('id_product','=',$request->productId)
            ->get();
            
        if(count($product)>0){
            $objetoRequest = new \Illuminate\Http\Request();
            $objetoRequest->setMethod('POST');
            $objetoRequest->request->add([
                'clientId' => $request->clientId,
                'itemId' => $request->productId,
                'quantity'=> $product[0]->quantity + 1
            ]);
            DB::table('panier')
                ->where('id_client', $request->clientId)
                ->where('id_product','=',$request->productId)
                ->update(['quantity' => $product[0]->quantity + 1]);
        }else{
            DB::table('panier')->insert([
                'id_product'=> $request->productId['IdProduit'],
                'id_client'=> $request->clientId,
                'quantity'=> 1,
                'couleur'=> 'red',
            ]);
        }
        $objetoRequest = new \Illuminate\Http\Request();
        $objetoRequest->setMethod('POST');
        $objetoRequest->request->add([
            'user' => $request->clientId
        ]);
        return $this->getCartByClient($objetoRequest);
    } 
}
