'use strict';

angular.module('hiv.controllers', ['dashboard.services', 'rbc.services'])

.controller("hivController", function ($scope) {
	$scope.dashboard = "HIV Dashboard";

})

.controller("hivSystemCtrl", function ($scope, dashboardService, generateAnalyticService) {
	var dashboardName = 'HIV_SYSTEM';
	dashboardService.getDashboards(baseURL).get({dashboard: 'HIV_SYSTEM'}, function (dashboardDashlets) {
		//
		var numberDashlets = dashboardDashlets.dashlets.length;
		var rows = dashboardRows(numberDashlets);
		var dashletCount = 0;
		var rowCount = 0;
		var dashlets = dashboardDashlets.dashlets;

		var rowAddHivSystem = $('#dashHivSystem').append('<div id=hivSysRow' + rowCount + ' class=row></div>');
		for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			var analyticLink = dashlets[d].link + analyticsConfigFilterOu;
			//var analyticLink = 'http://localhost:8181/dhis/api/analytics.json?dimension=pe\\:LAST_5_YEARS&dimension=dx\\:y0B9TaG5LG7;OClx1UoIvix&filter=ou\\:LEVEL-1&tableLayout=true&columns=dx&rows=pe&hideEmptyRows=true';
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d, dashboardName) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					generateDashlets(rowAddHivSystem, 'hivSysRow', rowCount, dashletCount, data, title, uid, chartType, d, dashboardName, 1);
				});

			}
			generateAnalytics(analyticLink, chartTitle, dashletUid, typeOfChart, d, dashboardName);
		}
	});
})

.controller("hivInputsCtrl", function ($scope, dashboardService, generateAnalyticService) {
	var dashboardName = 'HIV_INPUTS';
	dashboardService.getDashboards(baseURL).get({dashboard: dashboardName}, function (dashboardDashlets) {
		var numberDashlets = dashboardDashlets.dashlets.length;
		var rows = dashboardRows(numberDashlets);
		var dashletCount = 0;
		var rowCount = 0;
		var dashlets = dashboardDashlets.dashlets;

		var rowHivInput = $('#dashHivInputs').append('<div id=hivInputsRow' + rowCount + ' class=row></div>');
		for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			var analyticLink = dashlets[d].link + analyticsConfigFilterOu;
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d, dashboardName) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					generateDashlets(rowHivInput, 'hivInputsRow', rowCount, dashletCount, data, title, uid, chartType, d, dashboardName, 1);
				});

			}
			generateAnalytics(analyticLink, chartTitle, dashletUid, typeOfChart, d, dashboardName);
		}
	});

})

.controller("hivServDlvryCtrl", function ($scope, dashboardService, generateAnalyticService) {
	var dashboardName = 'HIV_SERVICE_DELIVERY';
	dashboardService.getDashboards(baseURL).get({
		dashboard: dashboardName
	}, function (dashboardDashlets) {
		//
		var numberDashlets = dashboardDashlets.dashlets.length;
		var rows = dashboardRows(numberDashlets);
		var dashletCount = 0;
		var rowCount = 0;
		var dashlets = dashboardDashlets.dashlets;

		var rowHivDlvy = $('#dashHivDelivery').append('<div id=hivDlvyRow' + rowCount + ' class=row></div>');
		for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			var analyticLink = dashlets[d].link + analyticsConfigFilterOu;
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d, dashboardName) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					generateDashlets(rowHivDlvy, 'hivDlvyRow', rowCount, dashletCount, data, title, uid, chartType, d, dashboardName, 1);
				});

			}
			generateAnalytics(analyticLink, chartTitle, dashletUid, typeOfChart, d, dashboardName);
		}
	});

})

.controller("hivCoverageCtrl", function ($scope, dashboardService, generateAnalyticService) {
	var dashboardName = 'HIV_COVERAGE';
	dashboardService.getDashboards(baseURL).get({dashboard : dashboardName}, function (dashboardDashlets) {
		//
		var numberDashlets = dashboardDashlets.dashlets.length;
		//console.debug(numberDashlets+" ***************************************")
		//$('#dashHivCoverage').append('**** HIV Coverage number of dashlets'+numberDashlets)
		var rows = dashboardRows(numberDashlets);
		var dashletCount = 0;
		var rowCount = 0;
		var dashlets = dashboardDashlets.dashlets;

		var rowAddHivCoverage = $('#dashHivCoverage').append('<div id=hivCoverageRow' + rowCount + ' class=row></div>');
		for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			var analyticLink = dashlets[d].link + analyticsConfigFilterOu;
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d, dashboardName) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					generateDashlets(rowAddHivCoverage, 'hivCoverageRow', rowCount, dashletCount, data, title, uid, chartType, d, dashboardName, 1);
				});

			}
			generateAnalytics(analyticLink, chartTitle, dashletUid, typeOfChart, d, dashboardName);
		}
	});

})
.controller("hivOutcomesCtrl", function ($scope, dashboardService, generateAnalyticService) {
	var dashboardName = 'HIV_OUTCOMES';
	dashboardService.getDashboards(baseURL).get({
		dashboard: 'HIV_OUTCOMES'
	}, function (dashboardDashlets) {
		//
		var numberDashlets = dashboardDashlets.dashlets.length;
		var rows = dashboardRows(numberDashlets);
		var dashletCount = 0;
		var rowCount = 0;
		var dashlets = dashboardDashlets.dashlets;

		var rowHivOutcomes = $('#dashHivOutcomes').append('<div id=hivOutcomesRow' + rowCount + ' class=row></div>');
		for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			var analyticLink = dashlets[d].link + analyticsConfigFilterOu;
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d, dashboardName) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					generateDashlets(rowHivOutcomes,'hivOutcomesRow', rowCount, dashletCount, data, title, uid, chartType, d, dashboardName, 1);
				});

			}
			generateAnalytics(analyticLink, chartTitle, dashletUid, typeOfChart, d, dashboardName);
		}
	});

})

.controller("HivTabCtrl", function ($scope) {

	$scope.tab = 1;
	$scope.selectTab = function (setTab) {
		console.debug(setTab);
			//$( "#HIV_main" ).remove();
			this.tab = setTab;
		};
		$scope.isSelected = function (checkTab) {

			return this.tab === checkTab;
		}
});