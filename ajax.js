
var busqueda = document.querySelector('#buttonSearch');

busqueda .addEventListener('click', buscarElemento);
console.log(document.querySelector('.mostrarRegistros'));
var fila = document.querySelector('#registro');

function buscarElemento(){

    return "hola";
}

(function listarElementos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','empleados.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
           var listaDeEmpleados = (JSON.parse(this.responseText));
           for(var item of listaDeEmpleados){
               console.log(item.Skills.length);
               var i = 0;
               fila.innerHTML+=
                ` <tr>
                    <td>${item.Nombre}</td>
                    <td>${item.Apellido}</td>
                    <td>${item.Puesto}</td>
                    <td>${item.Sueldo}</td>
                    <td>${item.Skills}</td>
            
                </tr>`;
           }}}
})();



