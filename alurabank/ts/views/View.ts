abstract class View<T>{
    private _view : Element;

    constructor(elemento : string){
        this._view = document.querySelector(elemento);
    }

    update(modelo : T) : void{
        this._view.innerHTML = this.template(modelo);
    }

    //template(modelo : T) : string{
    //    throw new Error("Necessario implementacao do metodo");
    //}

    //o metodo template pode ficar assim
        //mas, e necessario a classe ser abstrata
    abstract template (modelo : T) : string;
}