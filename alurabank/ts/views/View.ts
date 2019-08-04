import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T>{
    //add bilbioteca do JQUERY 
        //(https://github.com/DefinitelyTyped/DefinitelyTyped)
    private _view : JQuery;
    private _escape : boolean;

    //este construtor assume o ultimo parametro como indefinido
   /*  constructor(elemento : string, escapar? : boolean){
        this._view = $(elemento);
        this._escape = escapar;
    } */

    //neste construtor o ultimo parametro tem valor padrao de falso
    constructor(elemento : string, escapar : boolean = false){
        this._view = $(elemento);
        this._escape = escapar;
    }

    @logarTempoDeExecucao()
    update(modelo : T) : void{
        this._view.html(this.template(modelo));
    }

    //template(modelo : T) : string{
    //    throw new Error("Necessario implementacao do metodo");
    //}

    //o metodo template pode ficar assim
        //mas, e necessario a classe ser abstrata
    abstract template (modelo : T) : string;
}