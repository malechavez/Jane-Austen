// identificar con un id al formulario, campos y al boton
//extraer los datos de los campos email y psw

//funcion que compare el email y psw con validos 
//se utilizan harcodeadas

//nos dirige a la tienda o incorrecto 

function validarForm() {
    const emailValido = "admin@gmail.com";
    const pswValida = "janeAusten123";

    const usrEmail = document.getElementById('email').value;
    const usrPsw = document.getElementById('contraseña').value;

    let esValido = true;

    //condicionales
    if (usrEmail.length < 1) {
        mostrarError('empty_email', 'El campo email no puede estar vacío');
        esValido = false;
    } else {
        ocultarError('empty_email');
    }

    if (usrPsw.length < 1) {
        mostrarError('empty_psw', 'El campo contraseña no puede estar vacío');
        esValido = false;
    } else {
        ocultarError('empty_psw');
    }

    if(emailValido !== usrEmail || pswValida !== usrPsw) {
        mostrarError('login_error', 'Los datos no son válidos');
        esValido = false;
    } else {
        ocultarError('login_error');
    }

    return esValido;
}

function mostrarError(fieldId, message) {
        const errorElement = document.getElementById(fieldId);
        errorElement.textContent = message;
        errorElement.style.display = 'block'
    }

function ocultarError(fieldId) {
        const errorElement = document.getElementById(fieldId);
        errorElement.style.display = 'none';
    }


    //agregar listener  al boton

    const btnIngresar = document.getElementById('boton');
    btnIngresar.addEventListener('click', function(event) {
        event.preventDefault();
        if(validarForm())
        {
            window.location.href = "tienda.html";
        } else
        {
            
        }
    });