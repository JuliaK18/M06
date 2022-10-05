//Fer una funció que pugui ocultar el títol
function ocultarMsg(){
    document.getElementById("msg").style.visibility = 'hidden';

}
//Fer validació

alert("Hola" );

function validation(){

    let user = document.getElementById("login").value;
    let pass = document.getElementById("Contrasenya").value;
    let email = document.getElementById("mail").value;
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(user.length  === 0){
        alert("Falta posar l'usuari!" + "  " );
        document.getElementById("login").style.borderColor = "red";
        document.getElementById("msg").innerHTML = "Introdueix l'usuari";
        document.getElementById("msg").style.color = "red";

    }else if(email.length  === 0){
    alert("Falta posar el correu!" + "  " );
    document.getElementById("mail").style.borderColor = "red";
    document.getElementById("msg").innerHTML = "Introdueix el correu";
    document.getElementById("msg").style.color = "red";
    } else if(validEmail.test(email) ){
        alert('correu correcte')
    } else if(pass.length  === 0){
        alert("Falta posar la contrasenya!" + "  " );
        document.getElementById("Contrasenya").style.borderColor = "red";
        document.getElementById("msg").innerHTML = "Introdueix la  contrasenya";
        document.getElementById("msg").style.color = "red";
        
    }else if(user.length  === 0 & pass.length  === 0 & mail.length  === 0) {
            document.getElementById("msg").innerHTML = "Introdueix les dades pertinents!";
            document.getElementById("msg").style.color = "red";
    } else {
        document.getElementById("msg").style.color = "green";
        document.getElementById("msg").innerHTML = "Inici Sessió!";
        document.getElementById("login").style.borderColor = "grey";
        document.getElementById("Contrasenya").style.borderColor = "grey";
        redireccionar();

    }
}


function redireccionar(){
    setTimeout(function () { window.location.href = "https://agora.xtec.cat/insmontsia/"});
}

function myFunction() {
  alert('Espera!');
    setTimeout(function(){
    }, 3000);
    return false;
}

