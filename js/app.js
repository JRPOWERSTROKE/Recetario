//variable que mantinene el estado del menu
let menuVisible = false;

//funcion que oculta o mestra el menu
function mostrarOcultar(){
    if(menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//funcion para ocultar el menu cuando se selecciona una opcion
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}