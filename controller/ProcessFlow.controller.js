sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("tmc.icecream.demo.controller.ProcessFlow", {

		onNavButtonPressed: function() {
			this.getOwnerComponent().getRouter().navTo("home");
		},

		getValuesDelta: function(fFirstValue, fSecondValue) {
			return fSecondValue - fFirstValue;
		},

		onNodePressed: function(oEvent) {
			var sItemTitle = oEvent.getParameters().getTitle();
			MessageToast.show(this.getResourceBundle().getText("processFlowNodeClickedMessage", [sItemTitle]));
		},

		getResourceBundle: function() {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		}
	});
});
