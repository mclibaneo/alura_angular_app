class Negociacoes{
    
    // declaracao de um vetor
    private _negociacoes : Negociacao[] = [];

    adiciona(negociacao : Negociacao){
        this._negociacoes.push(negociacao);
    }

    //metodo retorna um array de negociacao
    paraArray() : Negociacao[]{
        //[].concat cria uma copia do array para evitar alteracoes no array original
        return [].concat(this._negociacoes);
    }

}