import { saludar } from "./saludos";
import * as $ from "jquery";

$(document).ready(() => {
    let nombres = ["Javier", "Pepe", "Raúl"];
    saludar("Juan", "Pablo");
    saludar(...nombres);
});

function fun2(hola: string) {
    console.log(hola);
    console.log(hola);
}