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
	'hiv.controllers',
	'malaria.controllers',
	'mppd.controllers',
	'mcch.controllers',
	'tb.controllers',
	'visualizer.controllers',
	'dashboard.controllers'
	]);


	rbcapp.config(function ($routeProvider) {
		$routeProvider
			.when("/hiv", {
				templateUrl: "partials/hiv.html",
				controller: "hivController"
			})
			.when("/malaria", {
				templateUrl: "partials/malaria.html",
				controller: "malariaController"
			})
			.when("/mcch", {
				templateUrl: "partials/mcch.html",
				controller : "mcchController"
			})
			.when("/mppd", {
				templateUrl: "partials/mppd.html",
				controller : "mppdController"
			})
			.when("/tb", {
				templateUrl: "partials/tb.html",
				controller : "tbController"
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
				redirectTo: "malaria"
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
	rbcapp.controller("dimensionController", function ($scope, dataElementService, periodService, orgUnitService, dataElementGroupsService) {
		$scope.typeChart = 'bar';
		$scope.selectedRadio = function (selectedChart) {
			console.debug(selectedChart);
			$scope.typeChart = selectedChart;
		}

		dataElementGroupsService.getDataElementGroups(baseURL).get({}, function(allDataElementGroups){
			$scope.dataElementGroups = allDataElementGroups.dataElementGroups;
			$scope.selectedDataElementGroup = allDataElementGroups.dataElementGroups[0];
		});

		$scope.selectDataElementGroup = function(vt){
			console.debug(vt);
			dataElementGroupsService.getDataElementGroupElements(baseURL).get({deGrpId:vt}, function(grpDataElements){
				$scope.dataElements = grpDataElements.dataElements;
				//$scope.selectedDataElement = grpDataElements.dataElements[0];
				$scope.selectedDataElement = [];
			});
		}

		/*dataElementService.getDataElements(baseURL).get({}, function (allDataElements) {
			$scope.dataElements = allDataElements.dataElements;
			$scope.selectedDataElement = allDataElements.dataElements[0];
		});*/

		

		var relativePeriods = periodService.getPeriods();
		$scope.periods = relativePeriods.periods;
		$scope.selectedPeriod = relativePeriods.periods[0];

		orgUnitService.getOrgs(baseURL).get({}, function (org) {
			$scope.orgUnits = org.organisationUnits;
			$scope.selectedOrgUnit = org.organisationUnits[0];
		});
	});
	/*rbcapp.controller("hivSystemCtrl", function ($scope) {
		$scope.name = "michael";
	});*/
	rbcapp.controller("TabCtrl", function ($scope) {

		this.tab = 1;
		$scope.selectTab = function (setTab) {
			$( "#malaria_main" ).remove();
			this.tab = setTab;
		};
		$scope.isSelected = function (checkTab) {

			return this.tab === checkTab;
		}
	});
}());