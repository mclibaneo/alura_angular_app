class NegociacaoController{

    //declara atributos do tipo Element pois recebe ele do html
   private _inputData : JQuery;
   private _inputQuantidade : JQuery;
   private _inputValor : JQuery;
   private _negociacoes = new Negociacoes(); //ao atribuir valor o tipo ja e inferido
   private _negociacoesView = new NegocioesView("#negociacoesView");
   private _mensagemView = new MensagemView("#mensagemView");


    constructor(){
        //busca pelo ID do elemento a partir da pagina html
        //uso do casting <> explicito para conversao de tipos
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');        
    }

    adiciona(event : Event){

        //para evitar que o form recarregue a pagina
        event.preventDefault();

        //cria o objeto negociacao com os parametros 
        const negociacao = new Negociacao(
            //necessario converter do tipo inputHtml para data
            new Date(this._inputData.val().replace(/-/g, ',')),
            //necessario converter par tipo numerico
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        ); 

        //adiciona negociacao no array
        this._negociacoes.adiciona(negociacao);

        //adiciona na view
        this._negociacoesView.update(this._negociacoes);

        //add mensagem na tela
        this._mensagemView.update("Negociação adicionada com sucesso!");

        //imprime no console os elementos do array
        console.log(this._negociacoes.paraArray().forEach(n => {
           console.log(n.data); 
           console.log(n.quantidade);
           console.log(n.valor);
        }));

    }

}