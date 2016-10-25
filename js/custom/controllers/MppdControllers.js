'use strict';

angular.module('mppd.controllers', ['dashboard.services', 'rbc.services'])

.controller("mppdController", function ($scope) {
	$scope.dashboard = "Main mppd Landing page";

})

.controller("mppdSystemCtrl", function ($scope) {
	$scope.mppdsystem = "mppd System";

})

.controller("mppdInputsCtrl", function ($scope) {
	$scope.mppdInput = "mppd INPUTS";

})

.controller("mppdServDlvryCtrl", function ($scope) {
	$scope.mppdSrvDlvy = "mppd SERVICE DELIVERY";

})

.controller("mppdCoverageCtrl", function ($scope) {
	$scope.mppdCoverage = "mppd COVERAGE";

})
.controller("mppdOutcomesCtrl", function ($scope) {
	$scope.mppdOutcomes = "mppd OUTCOMES";

});