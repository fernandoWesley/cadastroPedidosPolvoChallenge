<?php

namespace App\Http\Controllers\Painel;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Http\Controllers\Controller;

class PainelController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

     public function index()
    {
    	$title = 'Sistema de Pedidos';
    	return view('painel.index', compact('title'));
    }
}
