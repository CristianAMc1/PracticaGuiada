import { validateString,vAvg, checkAvg } from "./validate.js";
import{ paintCard, addStudent, modalAlert,} from "./paint.js";

let btnAgregar = document.getElementById('btnAgregar');
const bntMostrar = document.getElementById('btnMostrar');

/* Generar eventos
    1.Colocando el metodo en el atributo onclick, onmauseover, onmauseout de la etiqueta.
    2.Mediante propiedad
*/


btnAgregar.onclick = function(){
    const op = document.getElementById('opcion').value;
    if(op="estudiante"){
        const name = document.getElementById('nombre').value;
        const lastName = document.getElementById('apellido').value;
        const avg = parseFloat(document.getElementById('promedio').value);
        

        //console.log(`${name} ${lastName} ${avg} ${op}`);

        if(validateString(name) && validateString(lastName) && op !=0){
            if((!isNaN(avg)) && (vAvg (avg))){
                addStudent(name, lastName,avg,edad);
                modalAlert("Agregado")
            }else{
                document.querySelector('#promedio').value="";
                modalAlert("Promedio invalido");
            }
        }else{
            modalAlert("Datos invalidos, revisar los datos");
        }
    }

    if(op = "profesor"){
        const name = document.getElementById('nombre').value;
        const lastName = document.getElementById('apellido').value;
        const profesion = parseFloat(document.getElementById('profesion').value);
        if(validateString(name) && validateString(lastName) &&  validateString(profesion) && op == "profesor"){
            addProfe(name,lastName,profesion, edad);
            modalAlert("Profesor agregado")
        }else{
            modalAlert(" .. ");
        }
        
    }
    
        document.querySelector('#nombre').value="";
        document.querySelector('#apellido').value="";
        document.querySelector('#promedio').value="";
        document.querySelector('#edad').value="";
        document.querySelector('#profesion').value="";
    
    }






    bntMostrar.addEventListener("click", function() {
        paintCard("ESTUDIANTE");
});
