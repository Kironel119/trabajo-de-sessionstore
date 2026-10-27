//Funcion de Sesión Storage
//alert("Bienvenido a la página 1");
function guardar(){
    const nombre = document.getElementById("nombre").value;
    const ciudad = document.getElementById("ciudad").value;
    /*if(nombre === "" || ciudad === ""){
        alert("Por favor, ingresa tu nombre y ciudad");
        return;
    }*/
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("ciudad", ciudad);
    window.location.href = "pagina2.html";
}

document.getElementById("btn-guardar").addEventListener("click", guardar);