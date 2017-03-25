sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap-photo-book.controller.Main", {

		oModel: {},

		onInit: function() {

			$.get("model/example.json", function(response) {
				this.oModel = new JSONModel(response);
				this.getView().setModel(this.oModel);
			}.bind(this));

		}

	});
});