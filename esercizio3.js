const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
    students.push(student); // [ 'Paul', 'George', 'Lucas', 'Marco' ]
    // è possibile aggiungere un elemento attraverso il metodo "push".
    // A seconda dei parametri che passo, posso aggiungere uno o due elementi, anche dichiarato tramite const, purchè non sia cambiata la riassegnazione della variabile e l'arrey sia modificara aggiungendo un elemento riferito alla variabile.

}

addStudent('Marco');
console.log(students);