//Funcion para leer el nombre guardado y mostrarlo en la página 2
alert("Bienvenido a la página 2");
function mostrarNombre() {
    const nombre= sessionStorage.getItem("nombre");//Lo lee de la Bodega
    if(nombre===null || nombre===""){
     document.getElementById("saludo").innerHTML = "Buenas Don/Doña desconocid@";
    }
    else{
     document.getElementById("saludo").innerHTML = "Hola, buenas bienvenid@ " + nombre;
    }
}
//Funcion para borrar el nombre guardado en la bodega
function borrar(){
    sessionStorage.removeItem("nombre");
    mostrarNombre();
}
document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);