


const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log("fourthTeacher:", fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = 'Patrick';
console.log("teachers:", teachers);
// stampo per vedere se è cambiato


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();// rimuove l'ultimo elemento e lo salva in lastTeacher
console.log("teachers:" , teachers);
// stampo per vedere se è cambiato
//luca è stato rimosso

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();// rimuove il primo elemento e lo salva in firstTeacher
console.log("teachers:" , teachers);
// stampo per vedere se è cambiato
//nathan è stato rimosso

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa'); //aggiunge vanessa alla fine
console.log("teachers:" , teachers);
// stampo per vedere se è cambiato
//vanessa è stato aggiunto alla fine


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah'); //aggiunge sarah all'inizio
console.log("teachers:" , teachers);
// stampo per vedere se è cambiato
//sarah è stato aggiunto all'inizio

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers

// e salvalo nella variabile lewisIndex
let lewisIndex = null;
for (let i = 0; i < teachers.length; i++) {  // Cicla su tutti gli elementi dell'array
  if (teachers[i] === 'Lewis') {  // Se l'elemento corrente è 'Lewis'
    lewisIndex = i; // Salva l'indice dell'elemento
    break; // Interrompe il ciclo una volta trovato l'elemento
  }
}
console.log("lewisIndex:", lewisIndex); // stampo per vedere l'indice di lewis



// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0; // controlla se la lunghezza dell'array è 0