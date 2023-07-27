<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProduitController extends Controller
{
    public function getProductByCategorie(Request $request){

        $categories = DB::table('categories')->get();
        
        $productsCat = array();
        foreach($categories as $catItem){
            $product = DB::table('produit')
                            ->where('IdCat', $catItem->IdCat)
                            ->take(4)
                            ->get();
            if(count($product)>1){
                $productsCat['cat-'.$catItem->IdCat] = $product;
            }
        }
        return $productsCat;
    }

    public function getProducts(Request $request){

        $filterCategorie = $request->categories;
        $filterNameProduct = $request->nameProduct;
        $numberProduct = $request->numberProductInPage;
        $filterPrice =  json_decode($request->price);
        $filterSortPrice = $request->sortPrice;

        if($filterCategorie == 0){
            $productCount = DB::table('produit')
                                ->Where('Title', 'like', "%$filterNameProduct%")
                                ->whereBetween('Prix', [$filterPrice->min, $filterPrice->max])
                                ->orderBy('Prix', $request->sortPrice)
                                ->get();
            $product = DB::table('produit')
                            ->Where('Title', 'like', "%$filterNameProduct%")
                            ->whereBetween('Prix', [$filterPrice->min, $filterPrice->max])
                            ->orderBy('Prix', $request->sortPrice)
                            ->paginate($request->numberProductInPage);
            
        }else{
            $productCount = DB::table('produit')
                        ->where('IdCat', '=', $filterCategorie)
                        ->Where('Title', 'like', "%$filterNameProduct%")
                        ->whereBetween('Prix', [$filterPrice->min, $filterPrice->max])
                        ->orderBy('Prix', $request->sortPrice)
                        ->get();
            $product = DB::table('produit')
                        ->where('IdCat', '=', $filterCategorie)
                        ->Where('Title', 'like', "%$filterNameProduct%")
                        ->whereBetween('Prix', [$filterPrice->min, $filterPrice->max])
                        ->orderBy('Prix', $request->sortPrice)
                        ->paginate($request->numberProductInPage);
        }
            


        return array(
            'productCount'=> count($productCount),
            'product'=>$product
        );
    }

    public function getSingleProduct(Request $request){
        $product = DB::table('produit')
                    ->join('categories','categories.IdCat','=','produit.IdCat')
                    ->where('IdProduit', '=', $request->productId)
                    ->select('produit.*','categories.Title as catTitle', 'categories.IdCat as catId')
                    ->get();
        return $product;
    }

    public function addProduct(Request $request){
        // if ($request->hasFile('image') ) {
        //     $file = $request->file('image');
        //     $filename = $file->getClientOriginalExtension();
        //     $fileName = date('His') . ".$filename";
        //     $request->file('image')->storeAs('products/', strtolower($fileName),'public');
            
        //     $date = Carbon::now();
        //     DB::table('produit')->insert([
        //         'Title'=> $request->input('title'),
        //         'Description'=> $request->input('desc'),
        //         'Photo'=> strtolower($fileName),
        //         'Prix'=> $request->input('price'),
        //         'QteStock'=> $request->input('Quantity'),
        //         'QteEnReptureStock'=> $request->input('QuantityR'),
        //         'TauxPromotion'=> $request->input('promotion'),
        //         'Date'=> $date->toDateString(),
        //         'IdCat'=> $request->input('cat'),
        //         'couleur'=> 'red'
        //     ]);

            
        //     return response()->json(['message' => 'Successfully upload an image']) ;
        // }

        $basic  = new \Nexmo\Client\Credentials\Basic('key', 'secret');
        $client = new \Nexmo\Client($basic);

        $message = $client->message()->send([
            'to' => '212695208671',
            'from' => 'Nexmo',
            'text' => 'A text message sent using the Nexmo SMS API'
        ]);

        dd('message send successfully');
        
    }

    public function deleteProduct(Request $request){
        DB::table('produit')->where('IdProduit', '=', $request->productId)->delete();
    }
}

