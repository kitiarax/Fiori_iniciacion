/*global QUnit*/

sap.ui.define([
	"logaligroup/invoices_yo/controller/MainView_yo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MainView_yo Controller");

	QUnit.test("I should test the MainView_yo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
