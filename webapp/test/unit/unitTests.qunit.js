/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"logaligroup/invoices_yo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
