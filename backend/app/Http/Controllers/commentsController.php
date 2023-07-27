<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class commentsController extends Controller
{
    public function addComments(Request $request){
        DB::table('comments')->insert([
            'id_product'=> $request->productId,
            'id_client'=> $request->clientId,
            'rating'=> $request->dataComments['nbRate'],
            'message'=> $request->dataComments['message'],
        ]);
        return DB::table('comments')
                    ->join('client','client.IdClient','=','comments.id_client')
                    ->where('comments.id_product', '=',$request->productId)
                    ->select('comments.*','client.Firstname', 'client.Lastname')
                    ->get();
    }

    public function getAllCommentsByProduct(Request $request){
        $comments = DB::table('comments')
                    ->join('client','client.IdClient','=','comments.id_client')
                    ->where('comments.id_product', '=',$request->productId)
                    ->select('comments.*','client.Firstname', 'client.Lastname')
                    ->get();
        return $comments;
    }
}

