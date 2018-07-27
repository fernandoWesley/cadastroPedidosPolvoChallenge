@extends('templates.template2')

@section('content')

	<h1 class="title-pg" style="margin-top: 50px">Gestão Pedidos</h1>

	@if ( isset($errors) && count($errors) > 0)
		<div class="alert alert-danger">
			@foreach( $errors->all() as $error ) 
				<p>{{$error}}</p>
			@endforeach
		</div>
	@endif

	@if ( isset ($pedido) )
		<form class="form" method="post" action="{{route('pedidos.update', $pedido->id)}}">
		{!! method_field('PUT') !!}
	@else
		<form class="form" method="post" action="{{route('pedidos.store')}}">				
	@endif
	
		{!! csrf_field() !!}

		<div class="form-group">
			<input type="text" name="data" id="data" placeholder="Data" class="form-control" value="{{$pedido->data or old('data')}}">
		</div>	

		<div class="form-group">
			<input type="text" name="total" placeholder="Total" class="form-control" value="{{$pedido->total or old('total')}}" readonly>
		</div>		

		<div id="novasId"></div>		

		<hr>	

		<h3>Itens Produto</h3>	

		<div class="ui-widget">		  
		  <input id="produtoAuto"  placeholder="Produto" style="width:400px" onkeyup="javascript: listarItem();">
		  <input type="button" name="bt_incluir" class="btn btn-secondary btn-sm" id="bt_incluir" value="Incluir Item" onclick="javascript: addItem();">
		</div>			
		
			<table class="table  table-striped" id="products-table" nome="products-table" style="margin-top: 20px">
				<tr>
					<th>SKU</th> 
					<th>Nome</th> 
					<th>Descrição</th> 
					<th>Preço</th> 
					<th width="110px">Ações</th> 
				</tr>
				@if ( isset ($produtos))				

					@for ($i = 0; $i < count($produtos); $i++)
						<input type="hidden" name="codigoItem[{{$i}}]" id="codigoItem{{$i}}" value="{{$produtos[$i]->id}}">
						<tr id="tr{{$i}}">
							<td>{{$produtos[$i]->sku}}</td> 
							<td>{{$produtos[$i]->nome}}</td> 
							<td>{{$produtos[$i]->descricao}}</td> 
							<td>{{  'R$ '.number_format($produtos[$i]->preco, 2, ',', '.') }}</td> 
							<td>								
								<input type="button" class="btn btn-secondary btn-sm" id="bt_excluir{{$produtos[$i]->id}}" value="Excluir Item" onclick="javascript: deleteItem('{{$produtos[$i]->id}}', '{{$i}}');">											
							</td> 
						</tr>
					@endfor
				@endif		
		</table>

		@if ( isset ($produtos))	
			<input type="hidden" id="qtdItens" name="qtdItens" value="{{count($produtos)}}">
		@else	
			<input type="hidden" id="qtdItens" name="qtdItens" value="0">
		@endif		
		

		<button class="btn btn-primary">Enviar</button>
	</form>	
@endsection

@section('post-script')
	<script type="text/javascript">
		function addItem() {
			
            //var idProduto = $('select[name=produtoItem]').val();   
            var nomeProduto = $( "#produtoAuto" ).val()

            //$.get('/produto/public/addItem/' + idProduto, function (product) {
            	$.get('/produto/public/addItem/' + nomeProduto, function (product) {
					var productAux = product[0];                                	
                	$qtd = document.getElementById('qtdItens').value;

				    var newRow = $("<tr id='tr"+$qtd+"'>");
				    var cols = "";

				    cols += "<td>"+productAux.sku+"</td>";
				    cols += "<td>"+productAux.nome+"</td>";
				    cols += "<td>"+productAux.descricao+"</td>";
				    cols += "<td>"+productAux.preco+"</td>";
				    cols += "<td>";		 				 

					cols += "<input type=\"button\" class=\"btn btn-secondary btn-sm\" id=\"bt_excluir"+productAux.id+"\" value=\"Excluir Item\" onclick=\"javascript: deleteItem('"+productAux.id+"','"+$qtd+"');\"> ";

					cols += '</td>';

				    newRow.append(cols);
				    $("#products-table").append(newRow);  

				    $qtdAtualizada = parseInt($qtd) + 1;

				    document.getElementById('qtdItens').value = $qtdAtualizada;				

				    $("#novasId").append(
					    $('<input>', {
					        type: 'hidden',
					        val: productAux.id,
					        name: 'codigoItem['+ $qtd +']',
					        id: 'codigoItem'+ $qtd
					    })
					);	    

					 $("#produtoAuto").val = "";
        });
		}



		function deleteItem(codigoItem, index) {		
            
            document.getElementById('tr'+index).style.display = "none";
            document.getElementById('codigoItem'+index).value = "";

            $qtd = document.getElementById('qtdItens').value;

			$qtdAtualizada = parseInt($qtd) - 1;

			document.getElementById('qtdItens').value = $qtdAtualizada;			   
		}
	</script>
	
	<script>
 	 function listarItem() {

	  	parteNomeProduto = $( "#produtoAuto" ).val();
	    $.get('/produto/public/listarProdutosPorDescricao/' + parteNomeProduto, function (collectionProdutos) {
	  	    var availableTags = [];
	  	   
		for (var i = 0; i < collectionProdutos.length; i++) {	 		
		 	
			availableTags.push(collectionProdutos[i]);
	 	}

	    $( "#produtoAuto" ).autocomplete({
	      source: availableTags
	    });
    });
	} 
  </script>



  @endsection

