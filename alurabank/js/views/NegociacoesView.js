class NegocioesView {
    constructor(elemento) {
        this._view = document.querySelector(elemento);
    }
    update(modelo) {
        this._view.innerHTML = this.template(modelo);
    }
    template(modelo) {
        // O ` cria um campo string sem a necessecidade de concatenacao por +
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${modelo.paraArray().map(negociacao => `
                            <tr>
                                <td>${negociacao.data.getDate()} / ${negociacao.data.getMonth() + 1} / ${negociacao.data.getFullYear()}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                            `).join('')}
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>  
        `;
    }
}
