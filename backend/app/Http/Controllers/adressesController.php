<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class adressesController extends Controller
{
    public function getAdressesByUser(Request $request){
        $userAdresses = DB::table('adresses')
                        ->join('ville','ville.id_ville','=','adresses.city')
                        ->where('id_client', $request->clientId)
                        ->select('adresses.*','ville.title', 'ville.prix')
                        ->get();
        return $userAdresses;
    }
}
