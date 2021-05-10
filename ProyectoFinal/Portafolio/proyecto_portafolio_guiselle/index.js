function menuResponsive() {
    document
      .getElementById("header-nav-menu")
      .classList.toggle("header--nav--dropdown");
  }

  function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor))
     {
      console.log("La dirección de email " + valor + " es correcta.");
    } else {
        console.log("La dirección de email es incorrecta.");
    }
  }
  window.onload = function () {
    const botonSubmit = document.querySelector("button[type=submit]");
  
    const camposRequeridos = document.querySelectorAll("[required]");
    console.log(camposRequeridos);
  
    botonSubmit.addEventListener("click", function (event) {
      // equivalente a decir function(event)
      console.log("El evento se disparó!");
      event.preventDefault();
  
      const inputId = document.getElementById("telefono");
      const id = inputId.value;
      if (id.length >= 11) {
        alert("Teléfono con cumple formato!");
      }
  
      const email = document.getElementById("correo");
      console.log(email.value);
      validarEmail(email.value);
    });
  };
  

  function sacarValores() {
    const inputNombre = document.getElementById("nombre");
    const inputCorreo = document.getElementById("correo");
    const inputTelefono = document.getElementById("telefono");
  
    const nombre = inputNombre.value;
    const correo = inputCorreo.value;
    const telefono = inputTelefono.value;
  
    console.log("Nombre", nombre);
    console.log("Correo", correo);
    console.log("Telefóno", telefono);
  
    document.getElementById("valores").innerHTML = "Nombre es : " + nombre + " -- El correo es: " + correo + " -- El telefono es: " + telefono;
  }