import * as $ from "jquery";

export const saludar = (...nombres) => {
    const saludos = $("#saludos")
    nombres.forEach((nombre) => 
        saludos.append(`<div>Hola ${nombre}</div>`));
};
