

// stiamo usando la table "esercitazione" dal percorso indicato dopo ../
//con l'alias di "my"
using esercitazione as my from '../db/data-model';

// qua dico che "CatalogFruttarolo" è il nome del nostro ervizio
// e "fruttarolo" sara il db che viene proiettato grazie ai collegamenti fatti sopra
// my ovvero fruttrolo è fruttarolo.fruttarolo dentro il db fruttarolo
service CatalogFruttarolo {
// tabelle per le app
entity fruttarolo as projection on my.fruttarolo
}


