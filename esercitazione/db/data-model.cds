using {
    cuid,
    managed,
    sap.common.CodeList
} from '@sap/cds/common';


namespace esercitazione;



entity fruttarolo : cuid {
    categoria: String;
    prodotto: String;
    quantita_giacenza: String;
    prezzo_unitario: String;
    origine: String;
    sconto: String;
    data_aggiornamento: String;
}

