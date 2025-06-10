

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

      let allInputs = this.getView().getModel("AddProducts").getProperty("/Prodotti")

      let requiredInputs

      allInputs.forEach(element => {
        console.log(element);
        // debugger
        if (element.prodotto && element.quantita_giacenza) {
          requiredInputs = true

        } else {
          // debugger
          requiredInputs = false
          console.log("manca");
          MessageBox.error("Nome e Quantià sono dei campi obbligatori");
        }
        // debugger
      });

      if (requiredInputs) {
        console.log("ce tutto");
        this.byId("modifica").setVisible(true)
        this.byId("undo").setVisible(false)
        this.byId("barra").setVisible(false)


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


        this.checkOfferte()
      }

    },

    checkOfferte: function () {
      let campiSconto = this.oModel.getProperty("/Prodotti").map(p => p.sconto)


      console.log(campiSconto);


      let campoOffertte = this.byId("statoOfferte")

      let oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
      let testoTradotto = oResourceBundle.getText("text_nessuna");

      console.log(campoOffertte);

      let offerteIndex = 0

      campiSconto.forEach(element => {

        if (element) {
          offerteIndex++
        }

        if (offerteIndex > 0) {
          campoOffertte.setState("Success");
          campoOffertte.setText(offerteIndex)
        } else if (offerteIndex == 0) {
          campoOffertte.setState("Error");
          campoOffertte.setText(testoTradotto)
        }

      });
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
          initialFocus: MessageBox.Action.CANCEL,
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
    onlyNumbers: function (oEvent) {
      let oInput = oEvent.getSource();
      let contenuto = oInput.getValue();

      if (/^[0-9.,]*$/.test(contenuto)) {
        console.log("okok");
      } else {
        console.log("nonono");

        let arrayCaratteri = contenuto.split("");

        arrayCaratteri.splice(arrayCaratteri.length - 1, 1);

        let nuovoValore = arrayCaratteri.join("");

        oInput.setValue(nuovoValore);
        sap.m.MessageToast.show("Questo campo accetta solo numeri", {
          duration: 1000,
          width: "20em",

        });
      }
    },

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

    add: function () {

      this.byId("barra").setVisible(true)

      // let asd =sap.ui.core.format.DateFormat.getDateInstance({ pattern: "d MMM yyyy" }, sap.ui.getCore().getConfiguration().getFormatLocale()).format(new Date()),
      const newProductRow = {
        categoria: "",
        data_aggiornamento: new Date().toLocaleDateString({
          day: "2-digit",
          month: "2-digit",
          year: "2-digit"
        }),
        origine: "",
        prodotto: "",
        prezzo_unitario: "",
        quantita_giacenza: "",
        sconto: "",
      };

      this.getView().getModel("AddProducts").getProperty("/Prodotti").push(newProductRow)

      let prova = this.getView().getModel("AddProducts").getProperty("/Prodotti")

      this.getView().getModel("AddProducts").setProperty("/Prodotti", prova)

      console.log(this.getView().getModel("AddProducts").getProperty("/Prodotti"));

      this.byId("modifica").firePress()
    },

    getRouter: function () {

      return sap.ui.core.UIComponent.getRouterFor(this);
    },

   
    _gestioniProdottiMatched: function () {
      var sUrl = this.getOwnerComponent().getModel().sServiceUrl;
      var that = this;

      that.makeAjaxRequest(
        sUrl + "fruttarolo",
        function (data) {
          that.getView().getModel("AddProducts").setProperty('/Prodotti', data.value)
        }.bind(that),
        function (error) { }.bind(that));
      },

    makeAjaxRequest: function (url, successCallback, errorCallback) { //funzione per le chiamate jquery.ajax
      let that = this
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

    getArray: function () {
      console.log(this.getView().getModel("AddProducts").getProperty("/Prodotti"));
    },

  });
});



// categoria obbligatorio
// prezzo obbligatorio

// expression binding

// se il campo ce o non ce, euroi di conseguenza

// messasgebox con i18n