using {
    cuid,
    managed,
    sap.common.CodeList
} from '@sap/cds/common';


namespace demo;

entity info_studenti : cuid {
    nome_studente     : String;
    cognome_studente  : String;
    email_studente    : String;
    telefono_studente : String;

}
