//Definisco la funzione che creerà i quadrati
function createSquare(){
    // dichiaro una variabile per creare un elemento all'interno del DOM
    let currentElement = document.createElement('div')

    //assegno la classe square all'elemento creato
    currentElement.classList.add('square')

    // restituisco il quadrato contenuto nella variabile creata precedentemente
    return currentElement
}

// Dichiaro una variabile per il bottone e lo recupero dal dom tramite l'ID
const button = document.getElementById('start')

// Dichiaro una variabile per la griglia e recupero l'elemento dal dom tramite l'ID
const grid = document.getElementById('field')