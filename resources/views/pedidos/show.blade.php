@extends('templates.template2')


@section('content')

<h1 class="title-pg" style="margin-top: 50px">	
	Pedido: <b>{{$pedido->id}}</b>	
</h1>

<p><b>Data: {{$pedido->data}}</b></p>
<p><b>Total: {{$pedido->total}}</b></p>

<table class="table  table-striped">
	<tr>
		<th>SKU</th> 
		<th>Nome</th> 
		<th>Descrição</th> 
		<th>Preço</th> 		
	</tr>

	@foreach($produtos as $produtoAux)	
	<tr>
		<td>{{$produtoAux->sku}}</td> 
		<td>{{$produtoAux->nome}}</td> 
		<td>{{$produtoAux->descricao}}</td> 
		<td>{{  'R$ '.number_format($produtoAux->preco, 2, ',', '.') }}</td>		
	</tr>	

	@endforeach()
</table>

<hr>

{!! Form::open(['route' => ['pedidos.destroy', $pedido->id] ,'method' => 'DELETE']) !!}
	{!! Form::submit("Deletar  Pedido: $pedido->nome", ['class' => 'btn btn-danger']) !!}	
{!! Form::close() !!}

@endsection

