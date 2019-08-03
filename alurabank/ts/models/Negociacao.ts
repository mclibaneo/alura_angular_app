export class Negociacao{
    
    //construtor ja define atributos e tipos da classe nos proprios parametros
    constructor(
        readonly data: Date, // a propriedaed readonly encapula o private e o metodo get
        readonly quantidade: number, 
        readonly valor:number
        ){}

    get volume(){
        return this.quantidade * this.valor;
    }

}