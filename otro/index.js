const age = 17
let mensaje;

if (age < 18) {
    mensaje = "No puedes pasar";
}
else {
    mensaje = "Puedes pasar";
}

(age < 18 ) ? mensaje = "No puedes pasar" : mensaje = "Puedes pasar";

/* console.log ("console", mensaje) */

//Spread operator

const numbers = [ 1,2];
const numbers2 = [3,4];

const allnumbers = [ ...numbers, ...numbers2];

const letters = "MANUELACASTRO";

const arrayOfLetters = [ ...letters];
/* console.log (arrayOfLetters); */

const alumno = {
    name: "Manuela",
    apellido: "Castro"
}

const masinfoalumno = {
    edad: 29,
    estudios: [ "React", "Desarrollo Web"]
}

const allinfo = { ...alumno, ...masinfoalumno};
console.log (allinfo);