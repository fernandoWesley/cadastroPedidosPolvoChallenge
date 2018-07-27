<?php

namespace App\Http\Controllers\Pedido;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Http\Controllers\Controller;
use App\Http\Requests\Pedido\PedidoFormRequest;
use App\Models\Pedido;
use App\Models\Produto;
use Illuminate\Support\Facades\Response;

class PedidoController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    private $pedido;
    private $totalPage = 20;

    public function __construct(Pedido $pedido)
    {
        $this->pedido = $pedido;    
    }

     public function index()
    {
        $pedidos = $this->pedido->paginate($this->totalPage);
        $title = 'Listagem dos pedidos';
    	return view('pedidos.index', compact('pedidos','title'));
    }

    public function create()
    {
    	$product = new Produto();
    	$products = $product->all();
        $title = 'Cadastrar novo pedido';
    	return view('pedidos.create-edit', compact('title','products'));
    }

    public function store(PedidoFormRequest $request)
    {
        // recupera todos os dados enviados do form do cadastro do pedido 
        $dataForm = $request->all();

        //return $dataForm;
        $produtosAux = $request->only('codigoItem');      

        $collectionProdutos = array();  

        $total = 0;

       for ($i = 0; $i < count($produtosAux['codigoItem']); $i++) {

        	//$produtoModel = new Produto();

        	//$produtoAux = $produtoModel->find($produtosAux['codigoItem'][$i]);
       		if (($produtosAux['codigoItem'][$i]) != "") {
       			$prodAux = new Produto();
       			$prodAux = $prodAux->find($produtosAux['codigoItem'][$i]);

       			$total = $total + $prodAux->preco;

        		array_push($collectionProdutos, $produtosAux['codigoItem'][$i]);
       		}
        }	
         //$collectionProdutos;

        $dataForm['total'] = $total;

        
        // Cadastra pedido
        $insert = $this->pedido->create($dataForm);

        $this->pedido->id = $insert->id;

        $this->pedido->produtos()->sync($collectionProdutos);

        if ( $insert ) {
            return redirect()->route('pedidos.index')->withSuccess('Pedido incluido com sucesso');
        } else {
            return redirect()->route('pedidos.create-edit')->with(['errors' => 'Falha ao incluir']);;
        }        
    }

    public function show($id)
    {
    	 //Recupera pedido pelo id
        $pedido = $this->pedido->find($id);   

        $pedido->total = number_format($pedido->total,2,",",".");    

         $produtos = $pedido->produtos; 

        $title = "Exibir Pedido: {$pedido->nome}";

        return view('pedidos.show', compact('title','pedido','produtos'));



    }

    public function edit($id)
    {                
        //Recupera pedido pelo id
        $pedido = $this->pedido->find($id);        

        $pedido->total = number_format($pedido->total,2,",",".");    

        $produtos = $pedido->produtos;

        $product = new Produto();
    	$products = $product->all();

        $title = "Editar Pedido: {$pedido->nome}";

        return view('pedidos.create-edit', compact('title','pedido','produtos','products'));


    }

    public function update(PedidoFormRequest $request, $id)
    {
        // Recupera todos os dados do formulário
        $dataForm = $request->all();

        
        //return $dataForm;
        $produtosAux = $request->only('codigoItem');      

        $collectionProdutos = array();  

        $total = 0;

       for ($i = 0; $i < count($produtosAux['codigoItem']); $i++) {

        	//$produtoModel = new Produto();

        	//$produtoAux = $produtoModel->find($produtosAux['codigoItem'][$i]);
       		if (($produtosAux['codigoItem'][$i]) != "") {
       			$prodAux = new Produto();
       			$prodAux = $prodAux->find($produtosAux['codigoItem'][$i]);

       			$total = $total + $prodAux->preco;

        		array_push($collectionProdutos, $produtosAux['codigoItem'][$i]);
       		}
        }	
         //$collectionProdutos;

        $dataForm['total'] = $total;

        // Recupera o pedido para editar
        $pedido = $this->pedido->find($id);       

        // Atualiza o pedido no BD.
        $update = $pedido->update($dataForm);

        $pedido->produtos()->sync($collectionProdutos);

        // Verifica se houve sucesso na alteração
        if ( $update )
            return redirect()->route('pedidos.index')->withSuccess('Pedido alterado com sucesso');
        else
            return redirect()->route('pedidos.edit','$id')->with(['errors' => 'Falha ao alterar']);    
    }

    public function destroy($id)
    {
        $pedido = $this->pedido->find($id);

        $delete = $pedido->delete();   

        if ( $delete ) {
            return redirect()->route('pedidos.index')->withSuccess('Pedido deletado com sucesso');
        } else {
            return redirect()->route('pedidos.show','$id')->with(['errors' => 'Falha ao excluir']);    
        }
    }

    /*public function addItem($id)
    {

    	$product = new Produto();
        $product = $product->find($id);   

        $source = array('.', ',');
        $replace = array('', '.');
        $product['preco'] = "R$ ".number_format($product['preco'], 2, ',', ' ');
        /*$produtos = $pedido->produtos()->getQuery()->get(['id', 'produto']);* /
        return Response::json($product);       
    }*/

    public function addItem($nomeProduto)
    {    	
    	$product = new Produto();
       // $product = $product->find($id); 

        //$product = $product->where('nome','=',$nomeProduto);  
		$product = Produto::where('nome','=',$nomeProduto)->get();
      
        $source = array('.', ',');
        $replace = array('', '.');
        $product[0]['preco'] = "R$ ".number_format($product[0]['preco'], 2, ',', ' ');
        /*$produtos = $pedido->produtos()->getQuery()->get(['id', 'produto']);*/
        return Response::json($product);       
    }

    public function listarProdutosPorDescricao($produtoNome)
    {

    	//$query = Input::get('parteNomeProduto');
	 	$produtos = Produto::where('nome','like','%'.$produtoNome.'%')->get();

	 	$collectionProdutos = array();
	 	
	 	for ($i = 0; $i < count($produtos); $i++) {	 		
	 		array_push($collectionProdutos, $produtos[$i]->nome);
	 		$i++;
	 	}
	 	return response()->json($collectionProdutos);    	

    }

     public function voltar()
    {
    	return redirect()->route('painel.index');            
    }
}
