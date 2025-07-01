/*global QUnit*/

sap.ui.define([
	"com/project2/project2/controller/WorklistView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("WorklistView Controller");

	QUnit.test("I should test the WorklistView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
