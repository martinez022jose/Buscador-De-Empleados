
var buttonBusqueda = document.querySelector('#buttonSearch');
var busqueda = document.querySelector('.itemToSearch');
var registro = document.querySelector('#record');
var empleados = new Array();
getEmpleados(empleados);
//listarEmpleados(empleados);

buttonBusqueda .addEventListener('click', buscarElemento);
busqueda.addEventListener('keyup',buscarElemento);


function resetInput(input){
    input.innerHTML = '';
};

function validarEspacioEnBlanco(){
    if(busqueda.value == ''){
        return true;
    }
    return false;

};

function existenciaRegistro(){
    if(registro.innerHTML == ''){
        return true;

    } 
    return false; 

};

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

};

function buscarElemento(){
    resetInput(registro);
    if(validarEspacioEnBlanco()){
        busqueda.placeholder = "Debe ingresar nombre";
    }else{
        const valorABuscar = busqueda.value.toLowerCase();
        realizarBusqueda(valorABuscar);
        
        if(existenciaRegistro()){
            mensajeError="No hay registro";
            registro.innerHTML+=`
            <tr>
            <td>${mensajeError}</td>
            </tr>`;
        }

       

    }
};

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
};

(function listarEmpleados(){
        for(var i = 0;i<empleados.length;i++){
            registro.innerHTML+=
            `<tr>
            <td>${empleados[i].Nombre}</td>
            <td>${empleados[i].Apellido}</td>
            <td>${empleados[i].Puesto}</td>
            <td>${empleados[i].Sueldo}</td>
            <td>${empleados[i].Skills}</td>
            </tr>`;
        }

})();



