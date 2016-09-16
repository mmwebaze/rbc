/*jslint white:true */
/*global angular */
(function () {

	var rbcapp = angular.module('rbcapp', [
	'd2Menu', 'ngRoute', 'ui.bootstrap',
	'rbc.services',
	//'chartServices',
	//'rbcapp.services',
	//'dashboard.services',
	//'alert.services',
	'period.services',
	'setup.services',
	'alert.controllers',
	'setup.controllers',
	'explore.controllers',
	'malaria.controllers',
	'visualizer.controllers',
	'dashboard.controllers'
	]);


	rbcapp.config(function ($routeProvider) {
		$routeProvider
			.when("/hiv", {
				templateUrl: "partials/hiv.html"
					//controller : "nationalController"
					//controller: "extJsController"
			})
			.when("/malaria", {
				templateUrl: "partials/malaria.html",
				controller: "malariaController"
			})
			.when("/mcch", {
				templateUrl: "partials/mcch.html"
					//controller : "nationalController"
					//controller: "extJsController"
			})
			.when("/mppd", {
				templateUrl: "partials/mppd.html"
					//controller : "districtController"
			})
			.when("/tb", {
				templateUrl: "partials/tb.html"
					//controller : "districtController"
			})
			.when("/visualizer", {
				templateUrl: "partials/visualizer.html"
					//controller : "visualizerController"
			})
			.when("/about", {
				templateUrl: "partials/about.html"
					//controller : "aboutController"
			})
			.when("/explore/:dashboard/:dashletId/:chartType", {
				templateUrl: "partials/explore.html"
					//controller : "exploreController"
			})
			.when("/setup", {
				templateUrl: "partials/setup.html",
				controller : "setupController"
			})
			.otherwise({
				redirectTo: "national"
			});
	});

	rbcapp.controller("dashboardsController", function ($scope, dashboardService) {

		dashboardService.getDashboards(baseURL).query({}, function (allDashboards) {
			$scope.dashboards = allDashboards;
			$scope.defaultDashboard = allDashboards[0];
			$scope.filterDashboard = function (item) {
				if (item !== 'periods')
					return item;
			}
		});
	});
	rbcapp.controller("dimensionController", function ($scope, dataElementService, periodService, orgUnitService) {
		$scope.typeChart = 'bar';
		$scope.selectedRadio = function (v) {
			console.debug(v)
			$scope.typeChart = v
		}
		dataElementService.getDataElements(baseURL).get({}, function (allDataElements) {
			$scope.dataElements = allDataElements.dataElements;
			$scope.selectedDataElement = allDataElements.dataElements[0];
		});

		var relativePeriods = periodService.getPeriods();
		$scope.periods = relativePeriods.periods;
		$scope.selectedPeriod = relativePeriods.periods[0];

		orgUnitService.getOrgs(baseURL).get({}, function (org) {
			$scope.orgUnits = org.organisationUnits;
			$scope.selectedOrgUnit = org.organisationUnits[0];
		});
	});
	rbcapp.controller("hivSystemCtrl", function ($scope) {
		$scope.name = "michael";
	});
	rbcapp.controller("TabCtrl", function ($scope) {

		this.tab = 1;
		$scope.selectTab = function (setTab) {
			console.debug(setTab)
			$( "#malaria_main" ).remove();
			this.tab = setTab;
		};
		$scope.isSelected = function (checkTab) {

			return this.tab === checkTab;
		}
	});
}());