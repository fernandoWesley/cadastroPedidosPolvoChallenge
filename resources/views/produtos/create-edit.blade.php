@extends('templates.template2')

@section('content')

	<h1 class="title-pg" style="margin-top: 50px">Gestão Produto</h1>

	@if ( isset($errors) && count($errors) > 0)
		<div class="alert alert-danger">
			@foreach( $errors->all() as $error ) 
				<p>{{$error}}</p>
			@endforeach
		</div>
	@endif

	@if ( isset ($produto) )
		<form class="form" method="post" action="{{route('produtos.update', $produto->id)}}">
		{!! method_field('PUT') !!}
	@else
		<form class="form" method="post" action="{{route('produtos.store')}}">				
	@endif
	
		{!! csrf_field() !!}

		<div class="form-group">
			<input type="text" name="sku" placeholder="Sku" class="form-control" value="{{$produto->sku or old('sku')}}">
		</div>		
		<div class="form-group">	
			<input type="text" name="nome" placeholder="Nome" class="form-control" value="{{$produto->nome or old('nome')}}">
		</div>	
		<div class="form-group">
			<textarea name="descricao" placeholder="Descrição" class="form-control">{{$produto->descricao or old('descricao')}}</textarea>
		</div>		
		<div class="form-group">	
			<input type="text" name="preco" id="preco" placeholder="preço" class="form-control" value="{{$produto->preco or old('preco')}}" onkeydown="mascara(this, mvalor);">
		</div>		
		

		<button class="btn btn-primary">Enviar</button>
	</form>	
@endsection


@section('post-script')
<script type="text/javascript">
    	//INICIO DA FUNÇÃO MARCARA: NÃO PERMITE COLOCAR LETRAS NO qtdMedida e coloca a mascara de moeda NO qtdMedida
		function mascara(o,f){
		    v_obj=o
		    v_fun=f
		    setTimeout("execmascara()",1)
		}
		
		function execmascara(){
		    v_obj.value=v_fun(v_obj.value)
		}		
		
		function mvalor(v){
			    v=v.replace(/\D/g,"");//Remove tudo o que não é dígito
			    v=v.replace(/(\d)(\d{8})$/,"$1.$2");//coloca o ponto dos milhões
			    v=v.replace(/(\d)(\d{5})$/,"$1.$2");//coloca o ponto dos milhares
			 
			    v=v.replace(/(\d)(\d{2})$/,"$1,$2");//coloca a virgula antes dos 2 últimos dígitos
			    return v;
		}	
		//TERMINO DA FUNÇÃO MASCARA 	
    </script>      
@endsection