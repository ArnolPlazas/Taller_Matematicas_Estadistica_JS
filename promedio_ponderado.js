const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
]

// Crearemos un nuevo arreglo de solo números a partir de multiplicar cada nota con sus créditos.
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit
})

// Crearemos una nueva variable sumOfNotesWithCredit que tenga como resultado la suma de todos los elementos del arreglo notesWithCredit
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal
    }
);



// crear un nuevo arreglo credits únicamente con los créditos de cada materia y otra nueva variable sumOfCredits que recorra el arreglo credits y sume sus elementos.

const credits = notes.map(function (noteObject) {
    return noteObject.credit
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal
    }
)

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits

console.log(promedioPonderadoNotasConCreditos);

