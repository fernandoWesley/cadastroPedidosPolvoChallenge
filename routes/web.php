<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/addItem/{nomeProduto}', 'Pedido\PedidoController@addItem');
Route::get('/listarProdutosPorDescricao/{parteNomeProduto}', 'Pedido\PedidoController@listarProdutosPorDescricao');

Route::resource ('produto/produtos', 'Produto\ProdutoController');
Route::resource ('produto/painel/', 'Painel\PainelController');
Route::resource ('produto/pedidos', 'Pedido\PedidoController');




