class NegociacaoController {
    constructor() {
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
        //imprime no console
        console.log(negociacao);
    }
}
