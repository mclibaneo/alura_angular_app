class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes(); //ao atribuir valor o tipo ja e inferido
        //busca pelo ID do elemento a partir da pagina html
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        //para evitar que o form recarregue a pagina
        event.preventDefault();
        //cria o objeto negociacao com os parametros 
        const negociacao = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        //adiciona negociacao no array
        this._negociacoes.adiciona(negociacao);
        //imprime no console os elementos do array
        console.log(this._negociacoes.paraArray().forEach(n => {
            console.log(n.data);
            console.log(n.quantidade);
            console.log(n.valor);
        }));
    }
}