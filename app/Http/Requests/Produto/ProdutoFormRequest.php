<?php

namespace App\Http\Requests\Produto;

use Illuminate\Foundation\Http\FormRequest;

class ProdutoFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'sku' => 'required|min:2|max:100',
            'nome' => 'required|min:2|max:100',
            'descricao' => 'required|min:2|max:1000',
            'preco' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'sku.required' => 'O campo sku é de preenchimento obrigatório!',
            'nome.required' => 'O campo nome é de preenchimento obrigatório!',
            'descricao.required' => 'O campo descrição é de preenchimento obrigatório!',
            'preco.required' => 'O campo preço é de preenchimento obrigatório!'
        ];
    }
}
