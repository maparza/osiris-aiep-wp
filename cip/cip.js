var OsirisApp = window.OsirisApp || {};
OsirisApp.Alcances = OsirisApp.Alcances || {};

$(document).ready(function () {
	"use strict";
	SP.SOD.executeFunc('sp.js', 'SP.ClientContext', OsirisApp.Alcances.Init);
});