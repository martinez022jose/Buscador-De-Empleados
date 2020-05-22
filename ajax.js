
//Variables
var buttonBusqueda = document.querySelector('#buttonSearch');
var buttonUpdate = document.querySelector('#buttonUpdate');
var busqueda = document.querySelector('.itemToSearch');
var registro = document.querySelector('#record');
var empleados = new Array();
getEmpleados(empleados);

//Eventos
buttonBusqueda .addEventListener('click', buscarElemento);
busqueda.addEventListener('keyup',buscarElemento);
buttonUpdate.addEventListener('click',listarEmpleados);

//Funciones
function resetInput(input){
    input.innerHTML = '';
}

function validarEspacioEnBlanco(){
    if(busqueda.value == ''){
        return true;
    }
    return false;

}

function validarExistenciaRegistro(){
    if(registro.innerHTML == ''){
        return true;
    } 
    return false; 

}

function realizarBusqueda(valorABuscar){
    for(let i=0; i<empleados.length;i++){
        var nombre = empleados[i].Nombre.toLowerCase();
        if(nombre.indexOf(valorABuscar)!=-1){
            registro.innerHTML+=
            `<tr>
            <td>${empleados[i].Nombre}</td>
            <td>${empleados[i].Apellido}</td>
            <td>${empleados[i].Puesto}</td>
            <td>${empleados[i].Sueldo}</td>
            <td>${empleados[i].Skills}</td>
            </tr>`;

        }}
    

}

function buscarElemento(){
    resetInput(registro);
    if(validarEspacioEnBlanco()){
        busqueda.placeholder = "Debe ingresar un nombre";
    }else{
        const valorABuscar = busqueda.value.toLowerCase();
        realizarBusqueda(valorABuscar);
    
    }
   
}


function getEmpleados(empleados){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","empleados.json", true);
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4  && this.status == 200) {
        var empleadosJson = JSON.parse(xhr.responseText);
        for(var i =0;i<empleadosJson.length;i++){
           empleados[i] = empleadosJson[i];
           
        }
     }
     }
     xhr.send(null);
}

function listarEmpleados(){
    resetInput(registro);
    var xhr = new XMLHttpRequest();
    xhr.open("GET","empleados.json", true);
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4  && this.status == 200) {
        var empleadosJson = JSON.parse(xhr.responseText);
        for(var i =0;i<empleadosJson.length;i++){
            registro.innerHTML+=`
            <tr>
            <td>${empleadosJson[i].Nombre}</td>
            <td>${empleadosJson[i].Apellido}</td>
            <td>${empleadosJson[i].Puesto}</td>
            <td>${empleadosJson[i].Sueldo}</td>
            <td>${empleadosJson[i].Skills}</td>`;
            resetBuscador(busqueda);
           
        }
     }
     }
     xhr.send(null);
}

listarEmpleados();

function resetBuscador(buscador){
    buscador.value = null;

}




