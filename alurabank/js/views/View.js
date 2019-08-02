class View {
    constructor(elemento) {
        this._view = document.querySelector(elemento);
    }
    update(modelo) {
        this._view.innerHTML = this.template(modelo);
    }
}
