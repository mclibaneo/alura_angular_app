import { Negociacao } from './index';
export class Negociacoes{
    
    // declaracao de um vetor
    private _negociacoes : Negociacao[] = [];

    adiciona(negociacao : Negociacao){
        this._negociacoes.push(negociacao);
    }

    //metodo retorna um array de negociacao
    paraArray() : Negociacao[]{
        //[].concat cria uma copia do array para evitar alteracoes no array original
        return ([] as Negociacao[]).concat(this._negociacoes); //define o vetor [] do tipo Negociacao
    }

}