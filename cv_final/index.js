const nombre = document.getElementById("nom");
const email = document.getElementById("mail");
const texto = document.getElementById("txt");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = ""
    let entrar = false
    
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    
    if (nombre.value.length <4){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`
        entrar = true
    }

    if (texto.value.length <8) {
        warnings += `El texto es demasiado corto <br>`
        entrar = true 
    }

    if (entrar){
        parrafo.innerHTML = warnings
    }
    else  {
        parrafo.innerHTML = "enviado!"
    }
})