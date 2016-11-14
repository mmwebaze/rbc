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
	'visualizer.controllers'
	/*'dashboard.controllers'*/
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
				redirectTo: "hiv"
			});
	});

	
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