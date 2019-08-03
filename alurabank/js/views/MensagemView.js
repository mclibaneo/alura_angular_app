System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, MensagemView;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends index_1.View {
                template(modelo) {
                    return `
            <p class="alert alert-info">${modelo}</p>
        `;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
