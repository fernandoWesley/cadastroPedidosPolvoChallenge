<?php

namespace App\Http\Controllers\Produto;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Produto\ProdutoFormRequest;
use App\Models\Produto;

class ProdutoController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    private $produto;
    private $totalPage = 20;

    public function __construct(Produto $produto)
    {
        $this->produto = $produto;    
    }

     public function index()
    {
        $produtos = $this->produto->paginate($this->totalPage);
        $title = 'Listagem dos produtos';
    	return view('produtos.index', compact('produtos','title'));
    }

    public function create()
    {
        $title = 'Cadastrar novo produto';
    	return view('produtos.create-edit', compact('title'));
    }

    public function store(ProdutoFormRequest $request)
    {
       
        // recupera todos os dados enviados do form do cadastro de produto 
        $dataForm = $request->all();            

        $source = array('.', ',');
        $replace = array('', '.');
        $dataForm['preco'] = str_replace($source, $replace, $dataForm['preco']);

        // Cadastra produto
        $insert = $this->produto->create($dataForm);

        if ( $insert ) {
            return redirect()->route('produtos.index')->withSuccess('Produto incluido com sucesso');
        } else {
            return redirect()->route('produtos.create-edit')->with(['errors' => 'Falha ao incluir']);;
        }

        return 'Cadastrando .....'	;
    }

    public function show($id)
    {
    	 //Recupera produto pelo id
        $produto = $this->produto->find($id);     

        $produto->preco = number_format($produto->preco,2,",",".");   

        $title = "Exibir Produto: {$produto->nome}";

        return view('produtos.show', compact('title','produto'));



    }

    public function edit($id)
    {                
        //Recupera produto pelo id
        $produto = $this->produto->find($id);        

        $title = "Editar Produto: {$produto->nome}";

        $produto->preco = number_format($produto->preco,2,",",".");

        return view('produtos.create-edit', compact('title','produto'));


    }

    public function update(ProdutoFormRequest $request, $id)
    {
        // Recupera todos os dados do formulário
        $dataForm = $request->all();

        $source = array('.', ',');
        $replace = array('', '.');
        $dataForm['preco'] = str_replace($source, $replace, $dataForm['preco']);

        // Recupera o produto para editar
        $produto = $this->produto->find($id);

        // Atualiza o produto no BD.
        $update = $produto->update($dataForm);

        // Verifica se houve sucesso na alteração
        if ( $update )
            return redirect()->route('produtos.index')->withSuccess('Produto alterado com sucesso');
        else
            return redirect()->route('produtos.edit','$id')->with(['errors' => 'Falha ao alterar']);    
    }

    public function destroy($id)
    {
        $produto = $this->produto->find($id);

        $delete = $produto->delete();   

        if ( $delete ) {
            return redirect()->route('produtos.index')->withSuccess('Produto deletado com sucesso');
        } else {
            return redirect()->route('produtos.show','$id')->with(['errors' => 'Falha ao excluir']);    
        }
    } 


}
