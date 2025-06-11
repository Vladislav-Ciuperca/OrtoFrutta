const cds = require ('@sap/cds') 
const fetch = require ('node-fetch') 

module.exports = class CatalogFruttarolo extends cds.ApplicationService{
        async init (){

        }

        async functionGetFlusso(){
            console.log("banana");
            
        }
}