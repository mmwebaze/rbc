'use strict';

angular.module('tb.controllers', ['dashboard.services', 'rbc.services'])

.controller("tbController", function ($scope) {
	$scope.dashboard = "Main tb Landing page";

})

.controller("tbSystemCtrl", function ($scope) {
	$scope.tbsystem = "tb System";

})

.controller("tbInputsCtrl", function ($scope) {
	$scope.tbInput = "tb INPUTS";

})

.controller("tbServDlvryCtrl", function ($scope) {
	$scope.tbSrvDlvy = "tb SERVICE DELIVERY";

})

.controller("tbCoverageCtrl", function ($scope) {
	$scope.tbCoverage = "tb COVERAGE";

})
.controller("tbOutcomesCtrl", function ($scope) {
	$scope.tbOutcomes = "tb OUTCOMES";

});