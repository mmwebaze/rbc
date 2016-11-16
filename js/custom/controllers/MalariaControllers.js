'use strict';

angular.module('malaria.controllers', ['dashboard.services', 'rbc.services'])

.controller("malariaController", function ($scope) {
	$scope.dashboard = "MALARIA Dashboard";

})

.controller("malariaHomeController", function ($scope) {
	$scope.malariaHome = "MALARIA Summary here";

})

.controller("malariaSystemCtrl", function ($scope, dashboardService, generateAnalyticService) {
	dashboardService.getDashboards(baseURL).get({
		dashboard: 'MALARIA_SYSTEM'
	}, function (dashboardDashlets) {
		//
		var numberDashlets = dashboardDashlets.dashlets.length;
		var rows = dashboardRows(numberDashlets);
		var dashletCount = 0;
		var rowCount = 0;
		var dashlets = dashboardDashlets.dashlets;

		var rowMalariaSys = $('#dashMalariaSystem').append('<div id=malarisSysRow' + rowCount + ' class=row></div>');
		for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			//var analyticLink = dashlets[d].link+analyticsConfigurations;
			var analyticLink = 'http://localhost:8181/dhis/api/analytics.json?dimension=pe\\:LAST_5_YEARS&dimension=dx\\:y0B9TaG5LG7;OClx1UoIvix&filter=ou\\:LEVEL-1&tableLayout=true&columns=dx&rows=pe&hideEmptyRows=true';
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					generateDashlets(rowMalariaSys, 'malarisSysRow', rowCount, dashletCount, data, title, uid, chartType, d);
				});

			}
			generateAnalytics(analyticLink, chartTitle, dashletUid, typeOfChart, d);
		}
	});
})

.controller("malariaInputsCtrl", function ($scope, dashboardService, generateAnalyticService) {
	dashboardService.getDashboards(baseURL).get({
		dashboard: 'MALARIA_INPUTS'
	}, function (dashboardDashlets) {
		//
		var numberDashlets = dashboardDashlets.dashlets.length;
		var rows = dashboardRows(numberDashlets);
		var dashletCount = 0;
		var rowCount = 0;
		var dashlets = dashboardDashlets.dashlets;

		var rowMalariaInputs = $('#dashMalariaInputs').append('<div id=malariaInputsRow' + rowCount + ' class=row></div>');
		for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			var analyticLink = dashlets[d].link+analyticsConfigurations;
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					generateDashlets(rowMalariaInputs, 'malariaInputsRow', rowCount, dashletCount, data, title, uid, chartType, d);
				});

			}
			generateAnalytics(analyticLink, chartTitle, dashletUid, typeOfChart, d);
		}
	});

})

.controller("malariaServDlvryCtrl", function ($scope, dashboardService, generateAnalyticService) {
	dashboardService.getDashboards(baseURL).get({
		dashboard: 'MALARIA_SERVICE_DELIVERY'
	}, function (dashboardDashlets) {
		//
		var numberDashlets = dashboardDashlets.dashlets.length;
		var rows = dashboardRows(numberDashlets);
		var dashletCount = 0;
		var rowCount = 0;
		var dashlets = dashboardDashlets.dashlets;

		var rowMalariaDlvy = $('#dashMalariaDelivery').append('<div id=malariaDlvyRow' + rowCount + ' class=row></div>');
		for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			var analyticLink = dashlets[d].link+analyticsConfigurations;
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					generateDashlets(rowMalariaDlvy, 'malariaDlvyRow', rowCount, dashletCount, data, title, uid, chartType, d);
				});

			}
			generateAnalytics(analyticLink, chartTitle, dashletUid, typeOfChart, d);
		}
	});

})

.controller("malariaCoverageCtrl", function ($scope, dashboardService, generateAnalyticService) {
	dashboardService.getDashboards(baseURL).get({
		dashboard: 'MALARIA_COVERAGE'
	}, function (dashboardDashlets) {
		//
		var numberDashlets = dashboardDashlets.dashlets.length;
		var rows = dashboardRows(numberDashlets);
		var dashletCount = 0;
		var rowCount = 0;
		var dashlets = dashboardDashlets.dashlets;

		var rowMalariaCov = $('#dashMalariaCoverage').append('<div id=malariaCovRow' + rowCount + ' class=row></div>');
		for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			var analyticLink = dashlets[d].link+analyticsConfigurations;
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					generateDashlets(rowMalariaCov, 'malariaCovRow', rowCount, dashletCount, data, title, uid, chartType, d);
				});

			}
			generateAnalytics(analyticLink, chartTitle, dashletUid, typeOfChart, d);
		}
	});

})
.controller("malariaOutcomesCtrl", function ($scope, dashboardService, generateAnalyticService) {
	dashboardService.getDashboards(baseURL).get({
		dashboard: 'MALARIA_OUTCOMES'
	}, function (dashboardDashlets) {
		//
		var numberDashlets = dashboardDashlets.dashlets.length;
		var rows = dashboardRows(numberDashlets);
		var dashletCount = 0;
		var rowCount = 0;
		var dashlets = dashboardDashlets.dashlets;

		var rowMalariaOutcomes = $('#dashMalariaOutcomes').append('<div id=malariaOutcomesRow' + rowCount + ' class=row></div>');
		for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			var analyticLink = dashlets[d].link+analyticsConfigurations;
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					generateDashlets(rowMalariaOutcomes, 'malariaOutcomesRow', rowCount, dashletCount, data, title, uid, chartType, d);
				});

			}
			generateAnalytics(analyticLink, chartTitle, dashletUid, typeOfChart, d);
		}
	});

})

.controller("MalariaTabCtrl", function ($scope) {

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