import { Negociacao } from './Negociacao';
import { logarTempoDeExecucao } from '../helpers/decorators/index';
import { InterfaceAdaptada } from '../models/InterfaceAdaptada';

export class Negociacoes implements InterfaceAdaptada<Negociacoes>{
       
    // declaracao de um vetor
    private _negociacoes : Negociacao[] = [];
   
    adiciona(negociacao : Negociacao){
        this._negociacoes.push(negociacao);
    }

    //metodo retorna um array de negociacao
    @logarTempoDeExecucao(true)
    paraArray() : Negociacao[]{
        //[].concat cria uma copia do array para evitar alteracoes no array original
        return ([] as Negociacao[]).concat(this._negociacoes); //define o vetor [] do tipo Negociacao
    }

    paraTexto() : void{
        console.log(JSON.stringify(this._negociacoes));
    }

    igual(objeto: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(objeto.paraArray);
    }

}