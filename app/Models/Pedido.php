<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
   	protected $fillable = [
   		'data','total'
   	];   	

   	/*public $rules = [
   		'sku' => 'required|min:2|max:100',
   		'nome' => 'required|min:2|max:100',
   		'descricao' => 'required|min:2|max:1000',
   		'preco' => 'required'
   	];*/

   	public function produtos() 
   	{
   		return $this->belongsToMany(Produto::class);
   	}
}
