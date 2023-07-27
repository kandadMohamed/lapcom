<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use Illuminate\Http\Request;

class ordersController extends Controller
{
    public function addOrdersByUser(Request $request){
        
        $date = Carbon::now();

        DB::table('orders')->insert([
            'id_client' => $request-> clientId,
            'id_adresse'=> 1,
            'date_order'=>  $date->toDateString(),
            'etat' => 'pending',
            'payment_methode' => $request->paymentMethode
        ]);

        $lastOrder = DB::table('orders')
            ->where('id_client', $request-> clientId)
            ->orderBy('id_order', 'desc')
            ->first();

        $cart = $request->cartItems;
        foreach ($cart as $cartItem) {
            $item = json_decode(json_encode($cartItem));
            DB::table('details_order')->insert([
                'id_order' => $lastOrder->id_order,
                'id_product'=> $item->product_id,
                'qteOrder'=>  $item->product_qantity
            ]);
            $produtQuantity = DB::table('produit')
                                ->select('qteStock')
                                ->where('IdProduit', '=', $item->product_id)
                                ->get();
            $updateQte =  $produtQuantity[0]->qteStock - $item->product_qantity;
            DB::table('produit')
                ->where('IdProduit', $item->product_id)
                ->update(['qteStock' => $updateQte]);
        }

        DB::table('panier')->delete();
        $order = DB::table('details_order')
                    ->join('produit','produit.IdProduit','=','details_order.id_product')
                    ->select(
                        'produit.IdProduit',
                        'produit.Photo',
                        'produit.Prix',
                        'produit.TauxPromotion',
                        'produit.Title',
                        'details_order.qteOrder'
                    )
                    ->where('id_order', $lastOrder->id_order)
                    ->get();
        return response()->json([
            'status' => 'fulfilled',
            'orderItems' => $order,
            'orderInfo'=> $lastOrder
        ]);
    }
}