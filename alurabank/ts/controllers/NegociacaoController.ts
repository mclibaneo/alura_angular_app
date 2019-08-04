import { NegocioesView, MensagemView } from '../views/index';
import { Negociacao, Negociacoes } from '../models/index';
import { domInject } from '../helpers/decorators/index';

export class NegociacaoController{

   
   @domInject('#data') //faz um lazyloading da propriedade para busca-la somento quando necessario 
   //declara atributos do tipo Element pois recebe ele do html
   private _inputData : JQuery; // o '_' antes do nome da varivael indica que ela eh private
   @domInject('#quantidade')
   private _inputQuantidade : JQuery;
   @domInject('#valor')
   private _inputValor : JQuery;
   private _negociacoes = new Negociacoes(); //ao atribuir valor o tipo ja e inferido
   private _negociacoesView = new NegocioesView("#negociacoesView");
   private _mensagemView = new MensagemView("#mensagemView");


    constructor(){
        //busca pelo ID do elemento a partir da pagina html
        //uso do casting <> explicito para conversao de tipos
        this._negociacoesView.update(this._negociacoes);    
    }

    adiciona(event : Event){

        //para evitar que o form recarregue a pagina
        event.preventDefault();

        //necessario converter do tipo inputHtml para data
        let data = new Date(this._inputData.val().replace(/-/g, ','));
        if(!this.diaUtil(data)){
            this._mensagemView.update("Somente negociações em dia útil");
            return;            
        }

        //cria o objeto negociacao com os parametros 
        const negociacao = new Negociacao(            
            data,             
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

    private diaUtil(data : Date) : boolean{
        if(data.getDay() == DiaSemana.Domingo || data.getDay() == DiaSemana.Sabado) return false;
        return true;
    }

}

enum DiaSemana{
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}