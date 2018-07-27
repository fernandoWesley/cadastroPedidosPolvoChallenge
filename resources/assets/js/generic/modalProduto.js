//PRODUTO

function mudaPaginaModal(categoriaDiversosPesquisa,parteNomePesquisa,marcaPesquisa,paginaAtual,totalRegistros)
{
	document.getElementById("iconeAjax").style.display = "block";
	var url = 'Main.php?do=produto&action=listarPaginado';
	var pars = "acao=MD&categoriaDiversosPesquisa="+categoriaDiversosPesquisa+"&parteNomePesquisa="+parteNomePesquisa+"&marcaPesquisa="+marcaPesquisa+"&paginaAtual="+paginaAtual+"&totalRegistros="+totalRegistros;
	buscaDadosAjax(url,pars,'edicaoProduto');
}

function editarProdutoModal() {
	Modalbox.show("Main.php?do=produto&action=iniciar&acao=MD", {title: "Produto", width: 1000, height:800});
	document.getElementById('parteNomePesquisa').focus();
}

function pesquisarProduto()
{
	document.getElementById("iconeAjax").style.display = "block";
	categoriaDiversosPesquisa	= document.getElementById("categoriaDiversosPesquisa").value;
	parteNomePesquisa    		= document.getElementById("parteNomePesquisa").value;
	marcaPesquisa    		= document.getElementById("marcaPesquisa").value;
	var url = 'Main.php?do=produto&action=listarPaginado&acao=MD';
	var pars = "parteNomePesquisa="+parteNomePesquisa+"&categoriaDiversosPesquisa="+categoriaDiversosPesquisa+"&marcaPesquisa="+marcaPesquisa;
	buscaDadosAjax(url,pars,'edicaoProduto');
}

function editarProduto(codigo,acao,categoriaDiversosPesquisa,parteNomePesquisa,marcaPesquisa,paginaAtual,totalRegistros)
{	
	document.getElementById("iconeAjax").style.display = "block";
	new Ajax.Request(
      'Main.php?do=produto&action=editarProdutoPelaModal',
      {
            method:'post',
            parameters: {codigo:codigo, acao:acao, parteNomePesquisa:parteNomePesquisa, marcaPesquisa:marcaPesquisa, paginaAtual:paginaAtual,totalRegistros:totalRegistros},
            onSuccess: function(transport){
				var response = transport.responseText;
				document.getElementById('edicaoProduto').innerHTML = response;
				jQuery(document).ready(function() {						
					jQuery("#categoriaDiversosProduto").multiselect();			
				});
        }
      }
	);
}	

function incluirProdutoModal(){
		
	document.getElementById("iconeAjax").style.display = "block";
	new Ajax.Request(
      'Main.php?do=produto&action=incluirProdutoPelaModal',
      {
            method:'post',
            parameters: document.getElementById("frmProdutos").serialize(),
            onSuccess: function(transport){
				var response = transport.responseText;
				document.getElementById('edicaoProduto').innerHTML = response;
				jQuery(document).ready(function() {
					jQuery.noConflict();
					jQuery("#categoriaDiversosProduto").multiselect();			
				});
            }
      }
	);	
}
	
function alterarProdutoModal(){
		
	document.getElementById("iconeAjax").style.display = "block";
	new Ajax.Request(
      'Main.php?do=produto&action=alterarProdutoPelaModal',
      {
            method:'post',
            parameters: document.getElementById("frmProdutos").serialize(),
            onSuccess: function(transport){
				var response = transport.responseText;
				document.getElementById('edicaoProduto').innerHTML = response;
				jQuery(document).ready(function() {
					jQuery.noConflict();
					jQuery("#categoriaDiversosProduto").multiselect();			
				});
            }
      }
	);
}

function replicarProdutoModal(codigo,acao,categoriaDiversosPesquisa,parteNomePesquisa,marcaPesquisa,paginaAtual,totalRegistros) 
{			
	document.getElementById("iconeAjax").style.display = "block";
	new Ajax.Request(
      'Main.php?do=produto&action=replicarProdutoPelaModal',
      {
            method:'post',
            parameters: {acao:acao,codigo:codigo,categoriaDiversosPesquisa:categoriaDiversosPesquisa,parteNomePesquisa:parteNomePesquisa,marcaPesquisa:marcaPesquisa,paginaAtual:paginaAtual,totalRegistros:totalRegistros},
            onSuccess: function(transport){
				var response = transport.responseText;
				document.getElementById('edicaoProduto').innerHTML = response;	
				jQuery(document).ready(function() {						
					jQuery("#categoriaDiversosProduto").multiselect();			
				});				
            }
      }
	);	
}

function redirecionaModal(link,categoriaDiversosPesquisa,parteNomePesquisa,marcaPesquisa,paginaAtual,totalRegistros) {
		
	new Ajax.Request(
      link,
      {
            method:'post',
            parameters: {parteNomePesquisa:parteNomePesquisa,categoriaDiversosPesquisa:categoriaDiversosPesquisa, marcaPesquisa:marcaPesquisa, paginaAtual:paginaAtual,totalRegistros:totalRegistros},
            onSuccess: function(transport){
				var response = transport.responseText;
				document.getElementById('edicaoProduto').innerHTML = response;
				jQuery(document).ready(function() {
					jQuery.noConflict();
					jQuery("#categoriaDiversosProduto").multiselect();			
				});
            }
      }
	);
} 

function editarCategoriaProdutoPelaCompra()
{		
	teste='false';
	var qtdDocumentos = document.getElementById("qtdDocumentos").value;
	var y = 0;
	for (x = 0;x <= (qtdDocumentos - 1); x++) {
		if (document.getElementById("selecionado" + x).value == "1") {
			teste = 'true';				
		}			
	}
	if (teste == 'true') {
		document.getElementById("iconeAjaxListar").style.display = "block";
		new Ajax.Request('Main.php?do=produto&action=editarCategoriaProdutoPelaModal', {
			method: 'post',
			parameters: document.getElementById("frmProdutos").serialize(),
			onSuccess: function(transport){
				var response = transport.responseText;
				document.getElementById('edicaoProduto').innerHTML = response;
				jQuery(document).ready(function() {
					jQuery("#categorias").multiselect();
					jQuery("#marcas").multiselect();
				});
			}
		});
	}
	else
		alert("Selecione ao menos um produto!");
				
}

function alterarCategoriaProdutoPelaCompra()
{			
	document.getElementById("iconeAjaxCategoriaProdutos").style.display = "block";
	new Ajax.Request(
      'Main.php?do=produto&action=alterarCategoriaProdutoPelaModal',
      {
            method:'post',
            parameters: document.getElementById("frmProdutos").serialize(),
            onSuccess: function(transport){
				var response = transport.responseText;
				document.getElementById('pesquisarProduto').innerHTML = response;					
            }
      }
	);					
}

// MARCA PRODUTO

function incluirProdutoMarca(){
	document.getElementById("iconeAjax").style.display = "block";
	
	var url = 'Main.php?do=produto&action=incluirProdutoMarcaPelaModal';
	var pars = 	document.getElementById("frmProdutos").serialize();
	buscaDadosAjax(url,pars,'edicaoProduto');
}

function alterarProdutoMarca(){
	document.getElementById("iconeAjax").style.display = "block";

	var url = 'Main.php?do=produto&action=alterarProdutoMarcaPelaModal';
	var pars = 	document.getElementById("frmProdutos").serialize();
	buscaDadosAjax(url,pars,'edicaoProduto');
}

function cancelarEditar() {
	codigo = document.getElementById("codigo").value;
	categoriaDiversosPesquisa = document.getElementById("categoriaDiversosPesquisa").value;
	parteNomePesquisa = document.getElementById("parteNomePesquisa").value;
	marcaPesquisa = document.getElementById("marcaPesquisa").value;
	paginaAtual = document.getElementById("paginaAtual").value;
	totalRegistros = document.getElementById("totalRegistros").value;
	var pars = "acao=MD&categoriaDiversosPesquisa="+categoriaDiversosPesquisa+"&parteNomePesquisa="+parteNomePesquisa+"&marcaPesquisa="+marcaPesquisa+"&paginaAtual="+paginaAtual+"&totalRegistros="+totalRegistros;		
	var url = 'Main.php?do=produto&action=produtoMarca';
	buscaDadosAjax(url,pars,"editarMarca");	
}

function editarProdutoMarca(codigoProduto,codigoMarca,acao) {
		
	document.getElementById("iconeAjax").style.display = "block";
	new Ajax.Request(
      'Main.php?do=produto&action=editarProdutoMarcaPelaModal',
      {
            method:'post',
            parameters: {codigo:codigoProduto,marca:codigoMarca,acao:acao},
            onSuccess: function(transport){
				var response = transport.responseText;
				document.getElementById('editarMarca').innerHTML = response;		
				document.getElementById("iconeAjax").style.display = "none";
            }
      }
	);		
}

// MARCA
function incluirMarca(codigo,categoriaDiversosPesquisa,parteNomePesquisa,marcaPesquisa,paginaAtual,totalRegistros)
{
	nome = document.getElementById("nome").value;
	var url = 'Main.php?do=produto&action=incluirMarcaPelaModal';
	var pars = 	'nome='+nome+'&acao=I&codigo='+codigo+'&categoriaDiversosPesquisa='+categoriaDiversosPesquisa+'&parteNomePesquisa='+parteNomePesquisa+'&marcaPesquisa='+marcaPesquisa+'&paginaAtual='+paginaAtual+'&totalRegistros='+totalRegistros;
	buscaDadosAjax(url,pars,'edicaoProduto');
}

//QUANDO CLICADO NO CHECKBOX, ALTERA O VALOR DE SELECIONADO NA MODAL PESQUISAR PRODUTO
function mudaSelecionado(codigo)
{		
	selecionado = "selecionado" + codigo;		
	if(document.getElementById(selecionado).value == "0") {				
		document.getElementById(selecionado).value = "1";																													
	} else {
		document.getElementById(selecionado).value = "0";						
	}						
}	
	
function habilitaSelecionado(codigo)
{
	document.getElementById("selecionadoImg" + codigo).src ="WEB-INF/pages/images/icones/icon_setalado.gif";				
}
function desabilitaSelecionado(codigo)
{
	document.getElementById("selecionadoImg" + codigo).src ="WEB-INF/pages/images/icones/icon_seta.png";
}

function mudaSelecionadoGeral(){
	var qtdDocumentos = document.getElementById("qtdDocumentos").value;
	if(document.getElementById("selMaster").value == "0") {				
		document.getElementById("selMaster").value = "1";
		for (x = 0;x <= (qtdDocumentos - 1); x++) {
			document.getElementById("selecionado" + x).value = "1";
			document.getElementById("selecionado" + x).checked = true;
		}																															
	} else {
		document.getElementById("selMaster").value = "0";	
		for (x = 0;x <= (qtdDocumentos - 1); x++) {
			document.getElementById("selecionado" + x).value = "0";
			document.getElementById("selecionado" + x).checked = false;
		}					
	}						
}