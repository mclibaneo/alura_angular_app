class View {
    constructor(elemento) {
        this._view = $(elemento);
    }
    update(modelo) {
        this._view.html(this.template(modelo));
    }
}
