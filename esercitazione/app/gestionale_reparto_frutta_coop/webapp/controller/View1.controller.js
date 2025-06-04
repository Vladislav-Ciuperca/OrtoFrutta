sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/MessageBox",
  "sap/m/MessageToast",
], function (Controller, Filter, FilterOperator, MessageBox, MessageToast) {
  "use strict";


  return Controller.extend("gestionalerepartofruttacoop.controller.View1", {

    onInit() {
      this.AddModel = new sap.ui.model.json.JSONModel()

      this.getView().setModel(this.AddModel, "AddProducts");
      this.getView().getModel("AddProducts").setProperty("/Prodotti", []);

      console.log(this.getView().getModel("AddProducts").getProperty("/Prodotti", []));

      this.getRouter().getRoute("RouteView1").attachPatternMatched(this._gestioniProdottiMatched, this);


      this.oModel = this.getView().getModel("AddProducts");


    },


    onEdit: function () {

      // let parseModel = this.getView().getModel("AddProducts").getProperty('/Prodotti')

      console.log(this.getView().getModel("AddProducts").getProperty('/Matcher'));



      // this.getView().getModel("AddProducts").setProperty('/Matcher',parseModel)

      // console.log(this.getView().getModel("AddProducts").getProperty('/Matcher'))




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
      var that = this
      var oModel = this.getView().getModel("AddProducts");

      var currentData = oModel.getProperty("/Prodotti");

      var initialData = this.savedData;

      var isEqual = JSON.stringify(currentData) === JSON.stringify(initialData);

      console.log(currentData);
      console.log(initialData);
      console.log(isEqual);


      if (isEqual) {
        console.log("Nessuna modifica");
        this.undoShit()
      } else {
        console.log("Hai fatto modifiche");
        MessageBox.confirm("Vuoi annulare le modifiche?", {
          icon: MessageBox.Icon.WARNING,
          title: "Annulla",
          actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
          emphasizedAction: MessageBox.Action.OK,
          // initialFocus: MessageBox.Action.CANCEL,
          // styleClass: sResponsivePaddingClasses,
          dependentOn: this.getView(),

          onClose: function (oAction) {
            if (oAction === MessageBox.Action.OK) {
              console.log("hai premuto ok zio");
              that.undoShit()
            } else if (MessageBox.Action.CANCEL) {
              console.log("hai premuto cancel");

            }
          }
        })
      }



    },

    // let actualModel = this.getView().getModel("AddProducts").getProperty('/Prodotti')

    // console.log("1",  this.parseModel);
    // console.log("2", actualModel);

    // for (let i = 0; i <  this.parseModel.length; i++) {
    //   const parseElement =  this.parseModel[i];
    //   const actualElement = actualModel[i];
    //   console.log(JSON.stringify( this.parseModel));
    //   console.log(JSON.stringify(actualElement));
    // }

    // 

    undoShit: function () {
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


    onDelete: function (oEvent) {

      let that = this
      var clickIndex = oEvent.getSource().getParent().sId.split("row")[oEvent.getSource().getParent().sId.split("row").length - 1]

      let focusObject = this.getView().getModel("AddProducts").getProperty("/Prodotti")[clickIndex].prodotto

      console.log(focusObject);



      MessageBox.confirm("Stai cancellando l' elemento " + focusObject, {
        icon: MessageBox.Icon.WARNING,
        title: "Elimina",
        actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
        emphasizedAction: MessageBox.Action.OK,
        // initialFocus: MessageBox.Action.CANCEL,
        // styleClass: sResponsivePaddingClasses,
        dependentOn: this.getView(),

        onClose: function (oAction) {
          if (oAction === MessageBox.Action.OK) {
            // definisco il numero dell'indice dell'oevent
            var numero = oEvent.getSource().getParent().sId.split("row")[oEvent.getSource().getParent().sId.split("row").length - 1]
            console.log(numero);
            // console log dell'elemento nell'arrey che andrò a cancellare
            console.log("sto cancellando", that.getView().getModel("AddProducts").getProperty("/Prodotti")[numero]);

            // tolto  l'ellemento dall'arrey usando "numero"
            // splice accetta 2 valori : il primo è l'indice dove agire il secondo è il numero di elementi da "spliceare" dopo quell indice
            // esempio splice(all'indice 3 , per una volta)
            that.getView().getModel("AddProducts").getProperty("/Prodotti").splice(numero, 1)
            // console log del modello per vedere cos'hp cancellato
            console.log(that.getView().getModel("AddProducts").getProperty("/Prodotti"));
            // mi "salvo" il nuovo modello temporaneo in una variabile
            var getModello = that.getView().getModel("AddProducts").getProperty("/Prodotti")
            // prendo il mio modello attuale e gli dico che adesso è uguale al mio modello temporaneo vhe è getModello
            that.getView().getModel("AddProducts").setProperty("/Prodotti", getModello)
            console.log("hai premuito ok amore");
          } else if (oAction === MessageBox.Action.CANCEL) {
            console.log("non te ghe premuo na sega tesoro");

          }
        },

      });

    },
    // debug: function () {

    //   console.log(this.savedData);


    // },

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



    getRouter: function () {

      return sap.ui.core.UIComponent.getRouterFor(this);
    },

    _gestioniProdottiMatched: function () {
      var sUrl = this.getOwnerComponent().getModel().sServiceUrl;
      var that = this
      that.makeAjaxRequest(
        sUrl + "fruttarolo",
        function (data) {
          // console.log(data.value);
          // that.savedData = data.value

          // console.log(this.savedData);


          that.getView().getModel("AddProducts").setProperty('/Prodotti', data.value)

          that.savedData = JSON.parse(JSON.stringify(that.oModel.getProperty("/Prodotti")));

        }.bind(that),
        function (error) {}.bind(that));
    },

    makeAjaxRequest: function (url, successCallback, errorCallback) { //funzione per le chiamate jquery.ajax
      let that = this
      jQuery.ajax({
        url: url,
        dataType: "json",
        success: function (data) {
          if (typeof successCallback === "function") {
            successCallback(data);

            that.getView().getModel("AddProducts").setProperty('/Matcher', data.value)
            // // console.log("asdasd", data.value);

            // that.arrayThingy = []

            // that.arrayThingy.push(data.value)
            // that.savedData = that.arrayThingy[0]
            // console.log("mnmnmnmnmnmmmnm",that.savedData);
          }
        },
        error: function (error) {
          if (typeof errorCallback === "function") {
            errorCallback(error);
          }
        },
      });
    },

    getArray: function () {
      console.log(this.getView().getModel("AddProducts").getProperty("/Prodotti"));
    },

    // save: function () {
    //   var categoria = this.getView().getModel("AddProducts").getProperty("/categoria")
    //   var prodotto = this.getView().getModel("AddProducts").getProperty("/prodotto")
    //   var quantita_giacenza = this.getView().getModel("AddProducts").getProperty("/quantita_giacenza")
    //   var prezzo_unitario = this.getView().getModel("AddProducts").getProperty("/prezzo_unitario")
    //   var data_aggiornamento = this.getView().getModel("AddProducts").getProperty("/data_aggiornamento")
    //   var sconto = this.getView().getModel("AddProducts").getProperty("/sconto")
    //   var origine = this.getView().getModel("AddProducts").getProperty("/origine")

    //   var obj = {
    //     "categoria": categoria,
    //     "prodotto": prodotto,
    //     "quantita_giacenza": quantita_giacenza,
    //     "prezzo_unitario": prezzo_unitario,
    //     "data_aggiornamento": data_aggiornamento,
    //     "sconto": sconto,
    //     "origine": origine,
    //   }

    //   var sUrl = this.getOwnerComponent().getModel().sServiceUrl;
    //   jQuery.ajax({
    //     url: sUrl + "fruttarolo",
    //     contentType: "application/json",
    //     type: "POST",
    //     data: JSON.stringify(obj),
    //     dataType: "json",
    //     success: function () {
    //       console.log("bella li");
    //     },
    //     error: function () {
    //       console.log("belloooooooooo");
    //     }
    //   })
    // },
  });
});



// {"ID":"04c096b3-10cc-4553-8cb3-cbe7ae14ecf4","categoria":"frutta","data_aggiornamento":"Italy","origine":null,"prezzo_unitario":"1,80","prodotto":"mele","quantita_giacenza":"20 kg","sconto":null}
// {"ID":"04c096b3-10cc-4553-8cb3-cbe7ae14ecf4","categoria":"frutta","data_aggiornamento":"Italy","origine":null,"prezzo_unitario":"1,80","prodotto":"mele","quantita_giacenza":"20 kg","sconto":null}