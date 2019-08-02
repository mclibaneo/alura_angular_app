abstract class View<T>{
    //add bilbioteca do JQUERY 
        //(https://github.com/DefinitelyTyped/DefinitelyTyped)
    private _view : JQuery;

    constructor(elemento : string){
        this._view = $(elemento);
    }

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