@extends('templates.template2')


@section('content')

<h1 class="title-pg" style="margin-top: 50px">	
	Produto: <b>{{$produto->nome}}</b>	
</h1>

<p><b>Sku: {{$produto->sku}}</b></p>
<p><b>Preço: {{$produto->preco}}</b></p>
<p><b>Descrição: {{$produto->descricao}}</b></p>

<hr>

{!! Form::open(['route' => ['produtos.destroy', $produto->id] ,'method' => 'DELETE']) !!}
	{!! Form::submit("Deletar  Produto: $produto->nome", ['class' => 'btn btn-danger']) !!}	
{!! Form::close() !!}

@endsection

