"bundle";
(function() {
var define = System.amdDefine;
define("app/libreria/logger.js", ["require", "exports"], function(require, exports) {
  "use strict";
  exports.log = function(texto) {
    console.log(texto);
  };
});

})();
(function() {
var define = System.amdDefine;
define("app/tareas/tareaservice.js", ["require", "exports", "../libreria/logger"], function(require, exports, logger_1) {
  "use strict";
  var tareaservice = (function() {
    function tareaservice() {
      this.ListaTareas = [];
      this.l = logger_1.log;
      this.l("Inicio");
    }
    tareaservice.prototype.addTarea = function(texto) {
      this.l("Añado tarea texto");
      this.ListaTareas.push(texto);
      this.l("termino Añadir tarea");
    };
    tareaservice.prototype.delTarea = function(indice) {
      this.l("Elimino tarea");
      this.ListaTareas.splice(indice, 1);
      this.l("termino Añadir tarea");
    };
    tareaservice.prototype.getTareas = function() {
      this.l("Devuelvo tareas");
      return this.ListaTareas;
    };
    return tareaservice;
  }());
  exports.tareaservice = tareaservice;
});

})();
(function() {
var define = System.amdDefine;
define("app/tareas/tareas.js", ["require", "exports", "./tareaservice", "jquery"], function(require, exports, tareaservice_1, $) {
  "use strict";
  var Validar = function(texto) {
    var boton = $("#boton");
    if (texto.length !== 0) {
      boton.removeAttr("disabled");
    } else {
      boton.attr("disabled", "disabled");
    }
  };
  $(function() {
    var tarserv = new tareaservice_1.tareaservice();
    var RellenarLista = function(lista) {
      lista.empty();
      $.each(tarserv.getTareas(), function(index, item) {
        lista.append("<li data-id='" + index + "' class='list-group-item'><span><span class='badge'>" + (index + 1) + "</span> " + item + "</span><span style='float:right' class='glyphicon glyphicon-remove'></li>");
      });
    };
    Validar("");
    $("#caja").on("keyup", function(e) {
      e.preventDefault();
      Validar($("#caja").val().trim());
    });
    $("#boton").on("click", function(e) {
      e.preventDefault();
      var $caja = $("#caja");
      var txtTarea = $caja.val().trim();
      tarserv.addTarea(txtTarea);
      RellenarLista($("#lista"));
      $caja.val("").focus().select();
      Validar("");
    });
    $("#lista").delegate(".glyphicon-remove", "click", function(e) {
      e.preventDefault();
      var indice = $(e.target).parent().data("id");
      tarserv.delTarea(indice);
      RellenarLista($("#lista"));
    });
  });
});

})();
(function() {
var define = System.amdDefine;
define("app/main.js", ["require", "exports", "./vendor", "./tareas/tareas"], function(require, exports) {
  "use strict";
});

})();