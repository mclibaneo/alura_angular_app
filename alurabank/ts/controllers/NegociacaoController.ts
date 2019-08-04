import { NegocioesView, MensagemView } from '../views/index';
import { Negociacao, Negociacoes, NegociacaoParcial } from '../models/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';

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
   private _negociacaoService = new NegociacaoService();


    constructor(){
        //busca pelo ID do elemento a partir da pagina html
        //uso do casting <> explicito para conversao de tipos
        this._negociacoesView.update(this._negociacoes);    
    }

    @throttle() // este decorator posterga a execucao para 0,5s evitando muitas requisicoes seguidas
    adiciona(){
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
        this._negociacoes.paraTexto();
        negociacao.paraTexto();
    }

    private diaUtil(data : Date) : boolean{
        if(data.getDay() == DiaSemana.Domingo || data.getDay() == DiaSemana.Sabado) return false;
        return true;
    }

    //async torna o metodo assincrono que trabalha com um objeto do tipo Promise
    @throttle()
    async importaDados(){
        try{
            //await espera a execucao em segundo plano e o retorno de uma promisse
            const negociacoesParaImportar = await this._negociacaoService
            .obterNegociacoes(res => {
                if(res.ok) return res;
                throw new Error(res.statusText);
            }); //obterNegociacoes devolve um array de negociacao a funcao acima verifica se a resposta esta ok
            const importadas = this._negociacoes.paraArray();
            //usa filter para evitar duplicacao nas negociacoes
            negociacoesParaImportar
                .filter((n : Negociacao) => 
                        !importadas.some(negociacaoImportada => n.igual(negociacaoImportada))) 
                .forEach((n : Negociacao) => {
                    this._negociacoes.adiciona(n);
                    this._negociacoesView.update(this._negociacoes);
            });            
        }catch(err){
            this._mensagemView.update(err.message); //mostra mensagem lancada pelo erro na view
        }
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