@extends('templates.template2')


@section('content')

<h1 class="title-pg" style="margin-top: 50px; margin-bottom: 30px">
	Listagem dos produtos
	<a href="{{route('produtos.create')}}" class="btn btn-primary btn-add" style="margin-left: 87%; margin-top:-8%">	
		<span class="glyphicon glyphicon-plus"></span>
		Cadastrar
	</a>	
</h1>

 @if(session('success')) 
 	<br>
 	<div style="background-color: #47e83c; padding: 10px">
		<b>{{session('success')}}</b>
	</div>
	<br>
 @endif 



<table class="table  table-striped">
	<tr>
		<th>SKU</th> 
		<th>Nome</th> 
		<th>Descrição</th> 
		<th>Preço</th> 
		<th width="110px">Ações</th> 
	</tr>

	@foreach($produtos as $produtoAux)	
	<tr>
		<td>{{$produtoAux->sku}}</td> 
		<td>{{$produtoAux->nome}}</td> 
		<td>{{$produtoAux->descricao}}</td> 
		<td>{{  'R$ '.number_format($produtoAux->preco, 2, ',', '.') }}  </td> 
		<td>		
			<a href="{{route('produtos.show', $produtoAux->id)}}" class="actions delete">
				<img src="{{ asset('/images/icon_exibir.png') }}" width="24" height="24">
			</a>
			<a href="{{route('produtos.edit', $produtoAux->id)}}" class="actions edit">
				<img src="{{ asset('/images/icon_editar.png') }}" width="24" height="24">
			</a>			
		</td> 
	</tr>	

	@endforeach()
</table>

{!! $produtos->links() !!}

@endsection

