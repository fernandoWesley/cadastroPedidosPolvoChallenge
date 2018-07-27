<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
   	protected $fillable = [
   		'sku','nome','descricao', 'preco'
   	];   	

   	/*public $rules = [
   		'sku' => 'required|min:2|max:100',
   		'nome' => 'required|min:2|max:100',
   		'descricao' => 'required|min:2|max:1000',
   		'preco' => 'required'
   	];*/
}
