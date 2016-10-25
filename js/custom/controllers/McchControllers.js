'use strict';

angular.module('mcch.controllers', ['dashboard.services', 'rbc.services'])

.controller("mcchController", function ($scope) {
	$scope.dashboard = "Main mcch Landing page";

})

.controller("mcchSystemCtrl", function ($scope) {
	$scope.mcchsystem = "mcch System";

})

.controller("mcchInputsCtrl", function ($scope) {
	$scope.mcchInput = "mcch INPUTS";

})

.controller("mcchServDlvryCtrl", function ($scope) {
	$scope.mcchSrvDlvy = "mcch SERVICE DELIVERY";

})

.controller("mcchCoverageCtrl", function ($scope) {
	$scope.mcchCoverage = "mcch COVERAGE";

})
.controller("mcchOutcomesCtrl", function ($scope) {
	$scope.mcchOutcomes = "mcch OUTCOMES";

});