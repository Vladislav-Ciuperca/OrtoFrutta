// stiamo usando la table "esercitazione" dal percorso indicato dopo ../
//con l'alias di "my"
using esercitazione as my from '../db/data-model';

// qua dico che "CatalogFruttarolo" è il nome del nostro ervizio
// e "fruttarolo" sara il db che viene proiettato grazie ai collegamenti fatti sopra
// my ovvero fruttrolo è fruttarolo.fruttarolo dentro il db fruttarolo
service CatalogFruttarolo {
    // tabelle per le app
    entity fruttarolo as projection on my.fruttarolo;
<<<<<<< HEAD
    function functionGetFlusso() returns fruttarolo;
=======

    action functionGetFlusso(

    arrayProducts : array of {
        // ID        : UUID;
        // ID_UTENTE : UUID;
        // ATIVITA   : String;
        categoria          : String;
        data_aggiornamento : String;
        ID                 : UUID;
        origine            : String;
        prezzo_unitario    : String;
        prodotto           : String;
        quantita_giacenza  : String;
        sconto             : String;

    }) returns String;

>>>>>>> dev_svilupppo
}
