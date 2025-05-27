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
    data_aggiornamento: String;
    sconto: String;
    origine: String
}

