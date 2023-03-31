
const conmutar = () => {
    $("#menu").toggle(1000)
}

$(document).ready(function(){
    $("h1").click(conmutar)
})

function enviarFormulario(){
    let nombre = verificarNombre();
    let apellido = verificarApellido();
    let correo = verificarCorreo();
    let contra = verificarContra();

    if(nombre == 1  && apellido == 1 && correo == 1 && contra == 1){
        document.formulario1.submit();
    }

}
function verificarNombre(){
    var caracNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var nombre = document.getElementById("nombre");
    if(nombre.value){
        if (!caracNombre.exec(nombre.value))
        {
            nombre.focus();
            $("#ComprobarNombre").html("* El campo para el nombre solo admite letras mayúsculas, minúsculas y espacios.");
            $("#ComprobarNombre").css("color", "red");
            return 0;
        }
        else{
            $("#ComprobarNombre").html("* Nombre válido.");
            $("#ComprobarNombre").css("color", "green");
            return 1;
        }
    }else{
        nombre.focus();
        $("#ComprobarNombre").html("* Ingresa tu nombre, por favor.");
        $("#ComprobarNombre").css("color", "red");
        return 0;
        
    }   
}

function verificarApellido(){
    var caracNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var apellidos = document.getElementById("apellidos");
    if(apellidos.value){
        if (!caracNombre.exec(apellidos.value))
        {    
            apellidos.focus();
            $("#ComprobarApellido").html("* El campo para los apellidos solo admite letras mayúsculas, minúsculas y espacios.");
            $("#ComprobarApellido").css("color", "red");
            return 0;
        }
        else{
            $("#ComprobarApellido").html("* Apellidos válidos.");
            $("#ComprobarApellido").css("color", "green");
            return 1;
        }
    } else{
        $("#ComprobarApellido").html("* Ingresa tus apellidos, por favor.");
        $("#ComprobarApellido").css("color", "red");
        return 0;
    } 
}

function verificarCorreo(){
    var caracCorreo=/^\w+@(\w+\.)+\w{2,4}$/;
    var correo = document.getElementById("correo");
    if(correo.value){
        if (!caracCorreo.exec(correo.value))
        {
            correo.focus();
            $("#ComprobarEmail").html("* Correo no válido.");
            $("#ComprobarEmail").css("color", "red");
            return 0;
        }
        else{
            $("#ComprobarEmail").html("* Correo válido.");
            $("#ComprobarEmail").css("color", "green");
            return 1;
        }
    }else{
        $("#ComprobarEmail").html("* Ingresa tu correo, por favor.");
        $("#ComprobarEmail").css("color", "red");
        return 0;
    }
}

function verificarContra(){
    var caracContra = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    var pass = document.getElementById("contra1");
    var conpass = document.getElementById("contra2");
    alert
    if(pass.value && conpass.value){
        if (caracContra.test(pass.value) && caracContra.test(conpass.value))
        {
            if (pass.value != conpass.value) {
                $("#ComprobarContra").html("* Las contraseñas no coinciden.");
                $("#ComprobarContra").css("color", "red");
                return 0;
            } else {
                $("#ComprobarContra").html("* Las contraseñas son válidas y coinciden.");
                $("#ComprobarContra").css("color", "green");
                return 1; 
            }
            
        }
        else{
            pass.focus();
            $("#ComprobarContra").html("* Las contraseñas debe contener de 8 a 16 caracteres, una minúcula, una mayúscula y un número.");
            $("#ComprobarContra").css("color", "red"); 
            return 0;
        }  
    } else{
        $("#ComprobarContra").html("* Ingresa una contraseña y confírmala.");
        $("#ComprobarContra").css("color", "red");
        return 0;
    }
}

