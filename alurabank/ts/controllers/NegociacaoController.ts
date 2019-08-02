class NegociacaoController{
    //declara atributos do tipo Element pois recebe ele do html
    private _inputData : HTMLInputElement;
    private _inputQuantidade : HTMLInputElement;
    private _inputValor : HTMLInputElement;

    constructor(){
        //busca pelo ID do elemento a partir da pagina html
        //uso do casting <> explicito para conversao de tipos
        this._inputData = <HTMLInputElement> document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement> document.querySelector('#valor');
    }

    adiciona(event : Event){

        //para evitar que o form recarregue a pagina
        event.preventDefault();

        //cria o objeto negociacao com os parametros 
        const negociacao = new Negociacao(
            //necessario converter do tipo inputHtml para data
            new Date(this._inputData.value.replace(/-/g, ',')),
            //necessario converter par tipo numerico
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        ); 

        //imprime no console
        console.log(negociacao);
        console.log(negociacao.volume);
    }

}