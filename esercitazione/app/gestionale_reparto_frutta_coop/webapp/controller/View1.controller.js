sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
], function (Controller, Filter, FilterOperator) {
  "use strict";


  return Controller.extend("gestionalerepartofruttacoop.controller.View1", {
    onInit() {
      this.AddModel = new sap.ui.model.json.JSONModel()

      this.getView().setModel(this.AddModel, "AddProducts");
      this.getView().getModel("AddProducts").setProperty("/Prodotti", []);

      console.log(this.getView().getModel("AddProducts").getProperty("/Prodotti", []));

      this.getRouter().getRoute("RouteView1").attachPatternMatched(this._gestioniProdottiMatched, this);


    },

    // onSearch: function (oEvent) {
    //   console.log("scrivendo.....");

    //   var sQuery = oEvent.getSource().getValue();
    //   var aFilters = [];

    //   if (sQuery && sQuery.length > 0) {
    //     var filter = new Filter([

    //         new Filter("prodotto", FilterOperator.Contains, sQuery),

    //       ],
    //     );

    //     aFilters.push(filter);
    //     // console.log(aFilters);
    //   }
    //   var oList = this.byId("tabella");
    //   var oBinding = oList.getBinding("rows");
    //   oBinding.filter(aFilters, "Application");


    // },



    onEdit: function () {
      this.byId("modifica").setVisible(false)
      this.byId("undo").setVisible(true)
      this.byId("barra").setVisible(true)

      this.byId("input_categoria").setVisible(true)
      this.byId("text_categoria").setVisible(false)

      this.byId("input_nome").setVisible(true)
      this.byId("text_nome").setVisible(false)

      this.byId("input_quanita").setVisible(true)
      this.byId("text_quantita").setVisible(false)

      this.byId("input_prezzo").setVisible(true)
      this.byId("text_prezzo").setVisible(false)

      this.byId("input_sconto").setVisible(true)
      this.byId("text_sconto").setVisible(false)

      this.byId("input_data").setVisible(true)
      this.byId("text_data").setVisible(false)

      this.byId("input_origine").setVisible(true)
      this.byId("text_origine").setVisible(false)

      this.byId("delete").setVisible(true)

    },

    onSave: function () {


      this.byId("modifica").setVisible(true)
      this.byId("undo").setVisible(false)

      this.byId("input_categoria").setVisible(false)
      this.byId("text_categoria").setVisible(true)

      this.byId("input_nome").setVisible(false)
      this.byId("text_nome").setVisible(true)

      this.byId("input_quanita").setVisible(false)
      this.byId("text_quantita").setVisible(true)

      this.byId("input_prezzo").setVisible(false)
      this.byId("text_prezzo").setVisible(true)

      this.byId("input_sconto").setVisible(false)
      this.byId("text_sconto").setVisible(true)

      this.byId("input_data").setVisible(false)
      this.byId("text_data").setVisible(true)

      this.byId("input_origine").setVisible(false)
      this.byId("text_origine").setVisible(true)

      this.byId("barra").setVisible(false)

      this.byId("delete").setVisible(false)

    },

    onUndo: function () {

      this.byId("modifica").setVisible(true)
      this.byId("undo").setVisible(false)
      this.byId("barra").setVisible(false)

      this._gestioniProdottiMatched()

      this.byId("input_categoria").setVisible(false)
      this.byId("text_categoria").setVisible(true)

      this.byId("input_nome").setVisible(false)
      this.byId("text_nome").setVisible(true)

      this.byId("input_quanita").setVisible(false)
      this.byId("text_quantita").setVisible(true)

      this.byId("input_prezzo").setVisible(false)
      this.byId("text_prezzo").setVisible(true)

      this.byId("input_sconto").setVisible(false)
      this.byId("text_sconto").setVisible(true)

      this.byId("input_data").setVisible(false)
      this.byId("text_data").setVisible(true)

      this.byId("input_origine").setVisible(false)
      this.byId("text_origine").setVisible(true)
      this.byId("delete").setVisible(false)

    },

    debug: function () {
      console.log(this.getView().getModel("AddProducts").getProperty("/Prodotti", []));

    },

    onDelete: function (oEvent) {


      // definisco il numero dell'indice dell'oevent
      var numero = oEvent.getSource().getParent().sId.split("row")[oEvent.getSource().getParent().sId.split("row").length - 1]
      console.log(numero);
      // console log dell'elemento nell'arrey che andrò a cancellare
      console.log("sto cancellando", this.getView().getModel("AddProducts").getProperty("/Prodotti")[numero]);

      // tolto  l'ellemento dall'arrey usando "numero"
      // splice accetta 2 valori : il primo è l'indice dove agire il secondo è il numero di elementi da "spliceare" dopo quell indice
      // esempio splice(all indice 3 , per una volta)
      this.getView().getModel("AddProducts").getProperty("/Prodotti").splice(numero, 1)
      // console log del modello per vedere cos'hp cancellato
      console.log(this.getView().getModel("AddProducts").getProperty("/Prodotti"));
      // mi "salvo" il nuovo modello temporaneo in una variabile
      var getModello = this.getView().getModel("AddProducts").getProperty("/Prodotti")
      // prendo il mio modello attuale e gli dico che adesso è uguale al mio modello temporaneo vhe è getModello
      this.getView().getModel("AddProducts").setProperty("/Prodotti", getModello)

    },

    add: function () {

      this.byId("barra").setVisible(true)

      const newProductRow = {
        categoria: "",
        prodotto: "",
        giacenza: "",
        prezzo_unitario: "",
        sconto: "",
        data_aggiornamento: new Date().toISOString(),
        origine: "",
      };

      this.getView().getModel("AddProducts").getProperty("/Prodotti").push(newProductRow)

      let prova = this.getView().getModel("AddProducts").getProperty("/Prodotti")
      // console.log(prova);

      this.getView().getModel("AddProducts").setProperty("/Prodotti", prova)

      console.log(this.getView().getModel("AddProducts").getProperty("/Prodotti"));

      this.byId("modifica").firePress()
    },

    debug: function () {
      console.log(this.getView().getModel("AddProducts").getProperty("/Prodotti"));

    },




    getRouter: function () {

      return sap.ui.core.UIComponent.getRouterFor(this);
    },

    _gestioniProdottiMatched: function () {
      var sUrl = this.getOwnerComponent().getModel().sServiceUrl;
      var that = this
      that.makeAjaxRequest(
        sUrl + "fruttarolo",
        function (data) {
          console.log(data.value);

          that.getView().getModel("AddProducts").setProperty('/Prodotti', data.value)
        }.bind(that),
        function (error) {}.bind(that));
    },

    makeAjaxRequest: function (url, successCallback, errorCallback) { //funzione per le chiamate jquery.ajax
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
      });
    },


  });
});