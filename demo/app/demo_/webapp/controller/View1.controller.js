sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel"
], function (Controller, Filter, FilterOperator, JSONModel)

{
    "use strict";

    return Controller.extend("progetto1.controller.View1", {
        // al caricamento della pagina
        onInit() {
            // add model hai una variabile globale che puoi richiamarti in quella wiew e all'inerno c'è una libreria per richiamre il modello VARIABILE CON ALL'INTERNO UNA LIBRERIA
            this.AddModel = new sap.ui.model.json.JSONModel();
            
            // SETMODEL LO STO SETTANDO CON QUESTA VIEW (ADD -> e gli sto dichiarando la libreria)
            this.getView().setModel(this.AddModel, "AddUser");
            this.getView().getModel("AddUser").setProperty("/Users", []);


            // richiama la funzione - ogni volta che entro nella view (nella wiew va su this. --> e scrivi)
            this.getRouter().getRoute("RouteView1").attachPatternMatched(this._gestioniUtentiMatched, this);
        },

        onSearch: function (oEvent) {
          var sQuery = oEvent.getSource().getValue();
          var aFilters = [];

          if (sQuery && sQuery.length > 0) {
            var filter = new Filter({
              filters:[
                new Filter("nome_studente", FilterOperator.Contains, sQuery),
                new Filter("email_studente", FilterOperator.Contains, sQuery),
                new Filter("telefono_studente", FilterOperator.Contains, sQuery),
              ],
            });

            aFilters.push(filter);
            console.log(sQuery);
          };
            
          var oList = this.byId("ItemsST");
          var oBinding = oList.getBinding("items");
          oBinding.filter(aFilters);
        },
    
        

        visibile: function () {
          this.byId("detail").setVisible(true)
          this.getView().getModel("AddUser").setProperty("/Name")
          this.getView().getModel("AddUser").setProperty("/Mail")
          this.getView().getModel("AddUser").setProperty("/Telefono")
          this.byId("save").setVisible(true)
        },

       
        

    

        save: function () {
          var Name = this.getView().getModel("AddUser").getProperty("/Name")
          var Mail = this.getView().getModel("AddUser").getProperty("/Mail")
          var Telefono = this.getView().getModel("AddUser").getProperty("/Telefono")
          var obj = {
            "nome_studente": Name,
            "email_studente": Mail,
            "telefono_studente": Telefono,
          }

          var sUrl = this.getOwnerComponent().getModel().sServiceUrl;        
          jQuery.ajax({
                  url: sUrl + "info_studenti",
                  contentType: "application/json",
                  type: "POST",
                  data: JSON.stringify(obj),
                  dataType: "json",
                  success: function () {
                  console.log("bella li");
                    
  
                  },
                  error: function () {
                  console.log("belloooooooooo");
                  
  
                  }
                })
        },


 
       


      

// una funzione accetta un paramentro che in questo caso è oEvent - è this tis dell'elento in questione 
        OnListItemPress: function (oEvent){
          // console.log(oEvent.getSource().getTitle())
          this.byId("detail").setVisible(true)
          // view prende la view    - setproperty crea un campo (una sezione)  ovent è tutto la sorse è la piccola parte dell'xml
          this.getView().getModel("AddUser").setProperty("/Name", oEvent.getSource().getTitle())
          this.getView().getModel("AddUser").setProperty("/Mail", oEvent.getSource().getInfo())
          this.getView().getModel("AddUser").setProperty("/Telefono", oEvent.getSource().getDescription())
          // console.log(this.getView().getModel("AddUser").getData());
          this.byId("save").setVisible(false)
        },



        getRouter: function () {

          return sap.ui.core.UIComponent.getRouterFor(this);},

        _gestioniUtentiMatched: function (){
            var sUrl = this.getOwnerComponent().getModel().sServiceUrl;
            var that = this
                    that.makeAjaxRequest(
                      sUrl + "info_studenti",
                      function (data) {
                        that.getView().getModel("AddUser").setProperty('/Users', data.value)

                      }.bind(that),
                    //   dove trova gli errori
                      function (error) {
                      }.bind(that));
        },

        // funziona d'appoggio - più utlizzabili 
        // c'è la GET per richiamre questa funzione ci sono dei paramentri, alcuni sono quelli che torneranno - url lo passiamo noi
        makeAjaxRequest: function (url, successCallback, errorCallback) {     //funzione per le chiamate jquery.ajax
            jQuery.ajax({
              url: url,
              dataType: "json",
              success: function (data) {
                if (typeof successCallback === "function") {
                  successCallback(data);
                }
              },
              error: function (error) {
                if (typeof errorCallback === "function") {
                  errorCallback(error);
                }
              },
              // async: false,
            });
          },
        });
});