import { Negociacao, NegociacaoParcial } from "../models/index";

export class NegociacaoService{
    obterNegociacoes(handler : ResponseHandler) : Promise<any | Negociacao[]>{        
        return fetch("http://localhost:8080/dados") //busca elementos de uma API
                .then(res => handler(res)) //passa uma funcao handler para verificar se a resposta esta ok
                .then(res => res.json()) //transforma a resposta para trabalhar com json
                .then((dados : NegociacaoParcial[]) =>
                    dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                ) //then encadeado pega o json da resposta e retorna array de negociacoes
                .catch(err => console.log(err)); //se houver erro ira imprimir no console 
    }
}
/**
 * Interface ResponseHandler
 * Define que a funcao deve receber um objeto do tipo Response
 * e devolve um objeto tbm do tipo Response
*/
export interface ResponseHandler{
    (res : Response) : Response
}