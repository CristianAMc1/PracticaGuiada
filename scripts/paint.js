'use strict';
import { checkAvg } from "./validate.js";
const cardE = document.getElementById('cardsEstudiantes');
const students = [];
const cardB = document.getElementById('cardProfesors');
const profesor = [];

const paintCard = (typ) => {
    typ = typ.toUpperCase();
    
    if (typ === 'ESTUDIANTE') {
        const fragmentEstudent = document.createDocumentFragment();
        const templateEstudent = document.querySelector('#templateEstudiante ').content;
        for (let i of students) {
            const cloneEstud = templateEstudent.cloneNode(true);
            cloneEstud.querySelector(".title-cardE").innerHTML = "Datos del Estudiante";
            cloneEstud.querySelector('.data-cardE').innerHTML = `NOMBRE: ${i.nombre.toUpperCase()} APELLIDOS: ${i.apellido.toUpperCase()}`;
            cloneEstud.querySelector('.text-promedio').innerHTML = `PROMEDIO ES: ${i.promedio}`;
            cloneEstud.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.promedio)}`;
            fragmentEstudent.appendChild(cloneEstud);
        }
        cardE.appendChild(fragmentEstudent);
    }
   if (typ === 'PROFESOR') {
    const fragmentProfesor = document.createDocumentFragment();
    const templateProfesor = document.createDocumentFragment('#templateProfesor');
    for (let i of profesor) {
        const cloneProf = templateProfesor.cloneNode(true);
        cloneProf.querySelector(".title-cardP").innerHTML = "Datos del Profesor";
        cloneProf.querySelector('.data-cardP').innerHTML = `NOMBRE: ${i.nombre.toUpperCase()} APELLIDOS: ${i.apellido.toUpperCase()} EDAD: ${i.edad.toUpperCase()}`;
        cloneProf.querySelector('.data-profesion').innerHTML = `PROFESION: ${i.profesion.toUpperCase()}`;
        fragmentProfesor.appendChild(cloneProf);
     }
     cardB.appendChild(fragmentProfesor);
  }

   
  
};

const addStudent = (name, lastName,avg) => {
    //Objeto literal de JS
    let student = {
        nombre: name,
        apellido: lastName,
        promedio: avg,
    }
    students.push(student);
    alert("Se agrego estudiante");

};
const addProf = (name, lastName,avg) => {
    //Objeto literal de JS
    let prof= {
        nombre: name,
        apellido: lastName,
        edad: edades,
        profesion: profesi
        
    }
    profesor.push(prof);
    alert("Se agrego un profesor");

};

const modalAlert = (cad) => {
    const alerta = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src = "./img/X.png";
    img.setAttribute("class","close");
    texto.setAttribute("class", "textAlerta");
    alerta.setAttribute("id", "alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML= `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function() {
        document.getElementById("alerta").remove();
    }
}
export{paintCard,addStudent,modalAlert, addProf};