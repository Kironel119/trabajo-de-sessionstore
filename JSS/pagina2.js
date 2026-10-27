//Funcion para leer el nombre guardado y mostrarlo en la página 2
//alert("Bienvenido a la pagina 2");
function mostrarNombre() {
    const nombre= localStorage.getItem("nombre");//Lo lee de la Bodega
    const ciudad = localStorage.getItem("ciudad");
    if(nombre===null || nombre==="" || ciudad===null || ciudad===""){
     document.getElementById("saludo").innerHTML = "Buenas Don/Doña desconocid@";
    }
    else{
     document.getElementById("saludo").innerHTML = "Hola, buenas bienvenid@ " + nombre + " de " + ciudad;
    }
}
//Funcion para borrar el nombre guardado en la bodega
function borrar(){
    localStorage.removeItem("nombre");
    localStorage.removeItem("ciudad");
    mostrarNombre();
}
document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);
