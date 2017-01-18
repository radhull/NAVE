import { tareaservice } from "./tareaservice";
import * as $ from "jquery";

const Validar = (texto : string) => {
    var boton=$("#boton");
    if(texto.length !== 0) {
        boton.removeAttr("disabled");
    } else {
        boton.attr("disabled", "disabled");
    }
}



$(() => {
    let tarserv = new tareaservice();

    const RellenarLista =(lista: any)=> {
        lista.empty();
        $.each(tarserv.getTareas(),(index,item)=> {
            lista.append("<li data-id='" + index + "' class='list-group-item'><span><span class='badge'>" + (index + 1) +"</span> " + item + "</span><span style='float:right' class='glyphicon glyphicon-remove'></li>");
        } );
    }

    Validar("");

    $("#caja").on("keyup",(e)=>{
        e.preventDefault();
        Validar($("#caja").val().trim());
    });

    $("#boton").on("click", (e)=> {
        e.preventDefault();

        var $caja = $("#caja");
        var txtTarea = $caja.val().trim();

        tarserv.addTarea(txtTarea);

        RellenarLista($("#lista"));

        $caja.val("").focus().select();
        Validar("");
    });

    $("#lista").delegate(".glyphicon-remove","click",(e)=> {
        e.preventDefault();

        let indice:number = $(e.target).parent().data("id");

        tarserv.delTarea(indice);
        RellenarLista($("#lista"));
    });
});

