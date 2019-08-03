System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(elemento, escapar = false) {
                    this._view = $(elemento);
                    this._escape = escapar;
                }
                update(modelo) {
                    this._view.html(this.template(modelo));
                }
            };
            exports_1("View", View);
        }
    };
});
