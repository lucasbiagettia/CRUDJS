import { clientServices } from "../service/client-service.js";

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
  
    if (id === null) {
      window.location.href = "/screens/error.html";
    }
  
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");
    try {
      const perfil = await clientServices.detalleCliente(id)
      if (perfil.nombre && perfil.email){
        nombre.value = perfil.nombre;
        email.value = perfil.email;
      }
      else{
        throw new Error();
      }  
    }catch (error){
      /*console.log(error);
      alert ("hubo un error");*/
      window.screen.href = "/screen/error.html";
    }
    
};

obtenerInformacion();

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
  
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clientServices.actualizarCliente(nombre, email, id).then(() => {
      window.location.href = "/screens/edicion_concluida.html";
    });
  });