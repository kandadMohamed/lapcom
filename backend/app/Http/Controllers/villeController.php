<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class villeController extends Controller
{
    public function getAllVilles(){
        $villes = DB::table('ville')
            ->get();
        return $villes;
    }
}
