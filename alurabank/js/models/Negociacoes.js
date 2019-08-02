class Negociacoes {
    constructor() {
        // declaracao de um vetor
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    //metodo retorna um array de negociacao
    paraArray() {
        //[].concat cria uma copia do array para evitar alteracoes no array original
        return [].concat(this._negociacoes);
    }
}
