define(["require", "exports", "../libreria/logger"], function (require, exports, logger_1) {
    "use strict";
    var tareaservice = (function () {
        function tareaservice() {
            this.ListaTareas = [];
            this.l = logger_1.log;
            this.l("Inicio");
        }
        tareaservice.prototype.addTarea = function (texto) {
            this.l("Añado tarea texto");
            this.ListaTareas.push(texto);
            this.l("termino Añadir tarea");
        };
        tareaservice.prototype.delTarea = function (indice) {
            this.l("Elimino tarea");
            this.ListaTareas.splice(indice, 1);
            this.l("termino Añadir tarea");
        };
        tareaservice.prototype.getTareas = function () {
            this.l("Devuelvo tareas");
            return this.ListaTareas;
        };
        return tareaservice;
    }());
    exports.tareaservice = tareaservice;
});
//# sourceMappingURL=tareaservice.js.map