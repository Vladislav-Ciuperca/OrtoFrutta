<<<<<<< HEAD
//questo è il mio backend
// devo importarmi le 


const cds = require('@sap/cds');
const fetch = require("node-fetch")


module.exports = class CatalogFruttarolo extends cds.ApplicationService {

    async init() {

    }
    async functionGetFlusso() {

        console.log("banana");

    }
}
=======
const cds = require('@sap/cds')
const fetch = require('node-fetch')

module.exports = class CatalogFruttarolo extends cds.ApplicationService {
    async init() {

        this.on('functionGetFlusso', async (req) => {

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Basic c2ItNjNjYjhlYWYtNzFiNC00ZjVjLWFmZDAtYzFkZWQwZWQzYmJhIWI2MzQ5OHxpdC1ydC1hZmMyM2IzZHRyaWFsIWIxOTY6Y2Q1MTA4MTItNjg2MS00OWIzLWI2NDEtN2U5YTNmNzE3MDVhJDlEdzk4bVNpMloyVGlVaGhJUmhjMlhJOXVJVDJid3d1bmNIMFpaWHhQYnM9");

            const raw = JSON.stringify(req.data);

            console.log(raw);
            console.log(myHeaders);

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("https://afc23b3dtrial.it-cpitrial03-rt.cfapps.ap21.hana.ondemand.com/http/updatedrive", requestOptions)
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.error(error));



        });

        await super.init();
    }
    async functionGetFlussoDue() {

        console.log("inizio a fare le mie cosine");

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Basic c2ItNjNjYjhlYWYtNzFiNC00ZjVjLWFmZDAtYzFkZWQwZWQzYmJhIWI2MzQ5OHxpdC1ydC1hZmMyM2IzZHRyaWFsIWIxOTY6Y2Q1MTA4MTItNjg2MS00OWIzLWI2NDEtN2U5YTNmNzE3MDVhJDlEdzk4bVNpMloyVGlVaGhJUmhjMlhJOXVJVDJid3d1bmNIMFpaWHhQYnM9");

        const raw = JSON.stringify({
            "arrayProducts": [{
                    "categoria": "frutta",
                    "prodotto": "mele",
                    "prezzo_unitario": "1,80",
                    "quantita_giacenza": "20 kg",
                    "origine": "Italy"
                },
                {
                    "categoria": "frutta",
                    "prodotto": "kiwi",
                    "prezzo_unitario": "2,51",
                    "quantita_giacenza": "70 kg",
                    "origine": "New Zeland"
                },
                {
                    "categoria": "verdura",
                    "prodotto": "piselli",
                    "prezzo_unitario": "2,83",
                    "quantita_giacenza": "60 kg",
                    "origine": "India"
                },
                {
                    "categoria": "frutta",
                    "prodotto": "pere",
                    "prezzo_unitario": "1,97",
                    "quantita_giacenza": "53 kg",
                    "origine": "Cina"
                },
                {
                    "categoria": "frutta",
                    "prodotto": "avocado",
                    "prezzo_unitario": "2,26",
                    "quantita_giacenza": "27 kg",
                    "origine": "messico"
                },
                {
                    "categoria": "frutta",
                    "prodotto": "banane",
                    "prezzo_unitario": "1,40",
                    "quantita_giacenza": "24 kg",
                    "origine": "Indonesia"
                },
                {
                    "categoria": "verdura",
                    "prodotto": "ciliege",
                    "prezzo_unitario": "6,12",
                    "quantita_giacenza": "6 kg",
                    "origine": "sudamerica"
                }
            ]
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://afc23b3dtrial.it-cpitrial03-rt.cfapps.ap21.hana.ondemand.com/http/updatedrive", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

        console.log("finisco le mie cosine");
    }
}




// chiamata post da frontednd
>>>>>>> dev_svilupppo
