// stiamo usando la table "esercitazione" dal percorso indicato dopo ../
// con l'alias di "my"
using esercitazione as my from '../db/data-model';

// qua dico che "CatalogFruttarolo" è il nome del nostro servizio
// e "fruttarolo" sarà il db che viene proiettato grazie ai collegamenti fatti sopra
// my ovvero fruttarolo è fruttarolo.fruttarolo dentro il db fruttarolo
service CatalogFruttarolo {
    // tabelle per le app
    entity fruttarolo as projection on my.fruttarolo;

    action functionGetFlusso(
        arrayProducts : array of {
            categoria          : String;
            data_aggiornamento : String;
            ID                 : UUID;
            origine            : String;
            prezzo_unitario    : String;
            prodotto           : String;
            quantita_giacenza  : String;
            sconto             : String;
        }
    ) returns String;

    // ✅ Aggiunto qui sotto
    function clearFruttarolo() returns String;
}
