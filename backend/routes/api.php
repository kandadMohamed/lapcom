<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('user', [\App\Http\Controllers\AuthController::class, 'user']);
Route::post('user-login', [\App\Http\Controllers\AuthController::class, 'user']);
Route::prefix('user')->group(function () {
    Route::post('create-account', function () {
        // Matches The "/admin/users" URL
    });
});


// ? Routes For Auth
Route::post('user-create-account',[\App\Http\Controllers\AuthController::class, 'createAccount']);
Route::post('user-loggedIn',[\App\Http\Controllers\AuthController::class, 'loggedIn']);

// ? Routes For Categories
Route::get('categorie',[\App\Http\Controllers\CategorieController::class, 'getAllCategories']);

// ? Routes For products
Route::get('product-categorie',[\App\Http\Controllers\ProduitController::class, 'getProductByCategorie']);
Route::get('get-product',[\App\Http\Controllers\ProduitController::class, 'getProducts']);
Route::post('get-single-product',[\App\Http\Controllers\ProduitController::class, 'getSingleProduct']);
Route::post('add-product',[\App\Http\Controllers\ProduitController::class, 'addProduct']);
Route::post('delete-product',[\App\Http\Controllers\ProduitController::class, 'deleteProduct']);

// ? Routes For Comments
Route::post('add-comment-product',[\App\Http\Controllers\commentsController::class, 'addComments']);
Route::post('get-comment-product',[\App\Http\Controllers\commentsController::class, 'getAllCommentsByProduct']);

// ? Routes For Cart shop
Route::post('cart-shop-client',[\App\Http\Controllers\CartController::class, 'getCartByClient']);
Route::post('cart-shop-delete-product',[\App\Http\Controllers\CartController::class, 'deleteProductById']);
Route::post ('cart-shop-update-product', [\App\Http\Controllers\CartController::class, 'upDateCartQuantity']);
Route::post ('cart-shop-add-product', [\App\Http\Controllers\CartController::class, 'addProductToCart']);

// ? Routes For Account
Route::post('lost-password',[\App\Http\Controllers\AuthController::class, 'lostPassword']);

// ? Routes For Villes
Route::get('get-all-villes',[\App\Http\Controllers\villeController::class, 'getAllVilles']);

// ? Routes For Adresses
Route::post('get-adresse-user',[\App\Http\Controllers\adressesController::class, 'getAdressesByUser']);

// ? Routes For Orders
Route::post('add-orders-user',[\App\Http\Controllers\ordersController::class, 'addOrdersByUser']);
