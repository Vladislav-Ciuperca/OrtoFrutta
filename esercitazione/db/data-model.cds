using {
    cuid,
    managed,
    sap.common.CodeList
} from '@sap/cds/common';


namespace esercitazione;



entity fruttarolo : cuid {
    categoria: String;
    prodotto: String;
    prezzo_unitario: String;
    giacenza: String;
    data_aggiornamento: String;
    sconto: String;
    origine: String
}
