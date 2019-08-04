System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInject(seletor) {
        return function (propriedadeAlvo, propriedadeNome) {
            let elemento;
            const getter = function () {
                if (!elemento) {
                    console.log(`buscando elemento ${seletor} para injetar em ${propriedadeNome}`);
                    elemento = $(seletor);
                }
                return elemento;
            };
            Object.defineProperty(propriedadeAlvo, propriedadeNome, {
                get: getter
            });
        };
    }
    exports_1("domInject", domInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
