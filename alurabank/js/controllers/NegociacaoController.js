System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, DiaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegocioesView("#negociacoesView");
                    this._mensagemView = new index_1.MensagemView("#mensagemView");
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this.diaUtil(data)) {
                        this._mensagemView.update("Somente negociações em dia útil");
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso!");
                    console.log(this._negociacoes.paraArray().forEach(n => {
                        console.log(n.data);
                        console.log(n.quantidade);
                        console.log(n.valor);
                    }));
                }
                diaUtil(data) {
                    if (data.getDay() == DiaSemana.Domingo || data.getDay() == DiaSemana.Sabado)
                        return false;
                    return true;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaSemana) {
                DiaSemana[DiaSemana["Domingo"] = 0] = "Domingo";
                DiaSemana[DiaSemana["Segunda"] = 1] = "Segunda";
                DiaSemana[DiaSemana["Terca"] = 2] = "Terca";
                DiaSemana[DiaSemana["Quarta"] = 3] = "Quarta";
                DiaSemana[DiaSemana["Quinta"] = 4] = "Quinta";
                DiaSemana[DiaSemana["Sexta"] = 5] = "Sexta";
                DiaSemana[DiaSemana["Sabado"] = 6] = "Sabado";
            })(DiaSemana || (DiaSemana = {}));
        }
    };
});
