sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (Controller) => {
  "use strict";

  return Controller.extend("gestionalerepartofruttacoop.controller.View1", {
    onInit() {
      this.AddModel = new sap.ui.model.json.JSONModel()

      this.getView().setModel(this.AddModel, "AddProducts");
      this.getView().getModel("AddProducts").setProperty("/Prodotti", []);

      console.log(this.getView().getModel("AddProducts").getProperty("/Prodotti", []));

      this.getRouter().getRoute("RouteView1").attachPatternMatched(this._gestioniProdottiMatched, this);

      
    },
    onEdit: function () {
		// 	MessageToast.show(evt.getSource().getId() + " Pressed");
     this.byId("onSave").setVisible(false);

    this.byId("input_prodotto").setVisible(true)
    this.byId("text_prodotto").setVisible(false)
    
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

		},
<<<<<<< HEAD

<<<<<<< HEAD
    //   this.byId("edit").setVisible(false);
    // },

<<<<<<< HEAD
=======
    // onEdit: function () {
    //   console.log();

    //   this.byId("save").setVisible(false);
    // },

=======
>>>>>>> a9617c2 (cambio fuinzione)
    onSave: function () {
      // 	MessageToast.show(evt.getSource().getId() + " Pressed");
      //  this.byId("onSave").setVisible(false);
  
      this.byId("input_prodotto").setVisible(false)
      this.byId("text_prodotto").setVisible(true)
      
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
  
      },

<<<<<<< HEAD
    //   this.byId("save").setVisible(false);
    // },

    onSave: function () {
      // 	MessageToast.show(evt.getSource().getId() + " Pressed");
      //  this.byId("onSave").setVisible(false);
      this.byId("onEdit").setVisible(false);

      this.byId("input_prodotto").setVisible(false)
      this.byId("text_prodotto").setVisible(true)
      
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
  
      },

    //   this.byId("edit").setVisible(false);
    // },

<<<<<<< HEAD
>>>>>>> 0a6a01b (cambio fuinzione)
=======
    // onEdit: function () {
    //   console.log();

    //   this.byId("save").setVisible(false);
    // },

    onSave: function () {
      // 	MessageToast.show(evt.getSource().getId() + " Pressed");
      //  this.byId("onSave").setVisible(false);
  
      this.byId("input_prodotto").setVisible(false)
      this.byId("text_prodotto").setVisible(true)
      
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
  
      },

    //   this.byId("edit").setVisible(false);
    // },

<<<<<<< HEAD
>>>>>>> f25c122 (Revert "cambio origine e data")
=======
    // onEdit: function () {
    //   console.log();

    //   this.byId("save").setVisible(false);
    // },
		// 	MessageToast.show(evt.getSource().getId() + " Pressed");
     this.byId("onSave").setVisible(false);

    this.byId("input_prodotto").setVisible(true)
    this.byId("text_prodotto").setVisible(false)
    
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

		},

=======
    
>>>>>>> d164a14 (commit)
    onSave: function () {
      // 	MessageToast.show(evt.getSource().getId() + " Pressed");
      //  this.byId("onSave").setVisible(false);
      this.byId("edit").setVisible(true);
      this.byId("undo").setVisible(false);
      
      this.byId("input_prodotto").setVisible(false)
      this.byId("text_prodotto").setVisible(true)
      
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

      
  
      },

    //   this.byId("edit").setVisible(false);
    // },

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 18a9001 (Revert "cambio origine e data")
=======
=======
>>>>>>> 3246643 (Revert "cambio origine e data")
    // onEdit: function () {
    //   console.log();

    //   this.byId("save").setVisible(false);
    // },

    onSave: function () {
      // 	MessageToast.show(evt.getSource().getId() + " Pressed");
      //  this.byId("onSave").setVisible(false);
  
      this.byId("input_prodotto").setVisible(false)
      this.byId("text_prodotto").setVisible(true)
      
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
  
      },

    //   this.byId("edit").setVisible(false);
    // },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b536e36 (Revert "cambio origine e data")
=======
    // onEdit: function () {
    //   console.log();

    //   this.byId("save").setVisible(false);
    // },

    onSave: function () {
      // 	MessageToast.show(evt.getSource().getId() + " Pressed");
      //  this.byId("onSave").setVisible(false);
  
      this.byId("input_prodotto").setVisible(false)
      this.byId("text_prodotto").setVisible(true)
      
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
  
      },

    //   this.byId("edit").setVisible(false);
    // },

<<<<<<< HEAD
>>>>>>> 0b15c4c (Revert "cambio origine e data")
=======
    // onEdit: function () {
    //   console.log();

    //   this.byId("save").setVisible(false);
    // },

    onSave: function () {
      // 	MessageToast.show(evt.getSource().getId() + " Pressed");
      //  this.byId("onSave").setVisible(false);
  
      this.byId("input_prodotto").setVisible(false)
      this.byId("text_prodotto").setVisible(true)
      
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
  
      },

    //   this.byId("edit").setVisible(false);
    // },

<<<<<<< HEAD
>>>>>>> aeb1540 (Revert "cambio origine e data")
=======
=======
>>>>>>> ae6cd9d (Revert "cambio origine e data")
    // onEdit: function () {
    //   console.log();

    //   this.byId("save").setVisible(false);
    // },


    // onSave: function () {
    //   console.log();

<<<<<<< HEAD
=======
>>>>>>> a9617c2 (cambio fuinzione)
    //   this.byId("edit").setVisible(false);
    // },

>>>>>>> c2c9540 (Revert "cambio origine e data")
=======
>>>>>>> 3246643 (Revert "cambio origine e data")
=======
    //   this.byId("edit").setVisible(false);
    // },

>>>>>>> ae6cd9d (Revert "cambio origine e data")


    getRouter: function () {

      return sap.ui.core.UIComponent.getRouterFor(this);
    },

    _gestioniProdottiMatched: function () {
      var sUrl = this.getOwnerComponent().getModel().sServiceUrl;
      var that = this
      that.makeAjaxRequest(
        sUrl + "fruttarolo",
        function (data) {
          that.getView().getModel("AddProducts").setProperty('/Prodotti', data.value)
        }.bind(that),
        function (error) { }.bind(that));
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