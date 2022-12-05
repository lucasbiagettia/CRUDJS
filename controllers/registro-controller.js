import { clientServices } from "../service/client-service.js";
const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-nombre]").value;
    clientServices.crearCliente (nombre, email).then(respuesta => {
        window.location.href= "/screens/registro_completado.html"

    }).catch ((err) => console.log(err));
});