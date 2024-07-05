# Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Scomponete sempre il problema in sotto problemi, senza andare troppo nel dettaglio questa volta. Andate nel dettaglio solo quando non riusciti ad implementare in codice qualcosa.

Numero di push: 15 circa

# Consigli del giorno

Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

# Scomposizione del problema

Dichiaro una variabile per il bottone e lo recupero dal dom tramite l'ID

Dichiaro una variabile per la griglia e recupero l'elemento dal dom tramite l'ID

Creo un evento click per il bottone che andrà a generare il tutto

    utilizzo un ciclo FOR di 100 iterazioni per creare la griglia di gioco 10x10

        dichiaro una variabile per la creazione del singolo quadrato

        inserisco il numero progressivo nel quadrato

        appendo il quadrato all'interno della griglia

        creo un evento click per il quadrato creato
            il quadrato selezionato dall'utente dovrà cambiare colore al momento del click
            console.log (numero della cella selezionata)

