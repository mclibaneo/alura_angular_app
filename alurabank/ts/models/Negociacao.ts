import { InterfaceAdaptada } from "./InterfaceAdaptada";

export class Negociacao implements InterfaceAdaptada<Negociacao>{
    
    //construtor ja define atributos e tipos da classe nos proprios parametros
    constructor(
        readonly data: Date, // a propriedaed readonly encapula o private e o metodo get
        readonly quantidade: number, 
        readonly valor:number
        ){}

    get volume(){
        return this.quantidade * this.valor;
    }

    paraTexto() : void{
        console.log(
            `Negociação Data: ${this.data}, Quantidade: ${this.quantidade}, Valor: ${this.valor}, Volume: ${this.volume}`
        );
    }

    igual(negociacao : Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate()
                && this.data.getMonth() == negociacao.data.getMonth()
                && this.data.getFullYear() == negociacao.data.getFullYear();
    }
    

}