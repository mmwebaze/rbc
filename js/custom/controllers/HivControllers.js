'use strict';

angular.module('hiv.controllers', ['dashboard.services', 'rbc.services'])

.controller("hivController", function ($scope) {
	$scope.dashboard = "HIV Dashboard";

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

})
.controller("HivTabCtrl", function ($scope) {

	$scope.tab = 1;
	$scope.selectTab = function (setTab) {
		console.debug(setTab);
			//$( "#malaria_main" ).remove();
			this.tab = setTab;
		};
		$scope.isSelected = function (checkTab) {

			return this.tab === checkTab;
		}
});