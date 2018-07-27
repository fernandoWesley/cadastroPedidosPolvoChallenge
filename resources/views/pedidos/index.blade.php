@extends('templates.template2')


@section('content')

<h1 class="title-pg" style="margin-top: 50px; margin-bottom: 30px">
	Listagem dos pedidos
	<a href="{{route('pedidos.create')}}" class="btn btn-primary btn-add" style="margin-left:87%; margin-top:-8%">	
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
		<th>Data</th> 
		<th>Total</th> 		
		<th width="110px">Ações</th> 
	</tr>

	@foreach($pedidos as $pedidoAux)	
	<tr>
		<td>{{$pedidoAux->data}}</td> 
		<td>{{  'R$ '.number_format($pedidoAux->total, 2, ',', '.') }}  </td> 		
		<td>		
			<a href="{{route('pedidos.show', $pedidoAux->id)}}" class="actions delete">
				<img src="{{ asset('/images/icon_exibir.png') }}" width="24" height="24">
			</a>
			<a href="{{route('pedidos.edit', $pedidoAux->id)}}" class="actions edit">
				<img src="{{ asset('/images/icon_editar.png') }}" width="24" height="24">
			</a>			
		</td> 
	</tr>	

	@endforeach()
</table>

{!! $pedidos->links() !!}

@endsection

