'use strict';

angular.module('hiv.controllers', ['dashboard.services', 'rbc.services'])

.controller("hivController", function ($scope) {
	$scope.dashboard = "Main HIV Landing page";

})

.controller("hivSystemCtrl", function ($scope) {
	$scope.hivsystem = "hiv System";

})

.controller("hivInputsCtrl", function ($scope) {
	$scope.hivInput = "hiv INPUTS";

})

.controller("hivServDlvryCtrl", function ($scope) {
	$scope.hivSrvDlvy = "hiv SERVICE DELIVERY";

})

.controller("hivCoverageCtrl", function ($scope) {
	$scope.hivCoverage = "hiv COVERAGE";

})
.controller("hivOutcomesCtrl", function ($scope) {
	$scope.hivOutcomes = "hiv OUTCOMES";

});