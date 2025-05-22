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


        }
    });
});