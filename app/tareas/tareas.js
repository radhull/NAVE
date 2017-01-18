define(["require", "exports", "./tareaservice", "jquery"], function (require, exports, tareaservice_1, $) {
    "use strict";
    var Validar = function (texto) {
        var boton = $("#boton");
        if (texto.length !== 0) {
            boton.removeAttr("disabled");
        }
        else {
            boton.attr("disabled", "disabled");
        }
    };
    $(function () {
        var tarserv = new tareaservice_1.tareaservice();
        var RellenarLista = function (lista) {
            lista.empty();
            $.each(tarserv.getTareas(), function (index, item) {
                lista.append("<li data-id='" + index + "' class='list-group-item'><span><span class='badge'>" + (index + 1) + "</span> " + item + "</span><span style='float:right' class='glyphicon glyphicon-remove'></li>");
            });
        };
        Validar("");
        $("#caja").on("keyup", function (e) {
            e.preventDefault();
            Validar($("#caja").val().trim());
        });
        $("#boton").on("click", function (e) {
            e.preventDefault();
            var $caja = $("#caja");
            var txtTarea = $caja.val().trim();
            tarserv.addTarea(txtTarea);
            RellenarLista($("#lista"));
            $caja.val("").focus().select();
            Validar("");
        });
        $("#lista").delegate(".glyphicon-remove", "click", function (e) {
            e.preventDefault();
            var indice = $(e.target).parent().data("id");
            tarserv.delTarea(indice);
            RellenarLista($("#lista"));
        });
    });
});
//# sourceMappingURL=tareas.js.map