'use strict';

angular.module('alert.controllers', ['dashboard.services'])

.controller("alertController", function ($scope, dashboardService, generateAnalyticService) {
	$scope.totalVisits = 2000;
	var targetTotalVisits = 3000;
	if ($scope.totalVisits < targetTotalVisits) {
		$('#alert1').addClass("blink_bad");
		$('.blink_bad').blink();
	} else {
		$('#alert1').addClass("blink_warning");
	}

	var dashboardName = 'ALERTS';
	dashboardService.getDashboards(baseURL).get({
		dashboard: dashboardName
	}, function (alertDashlets) {
		//
		var numberDashlets = alertDashlets.dashlets.length;
		var rows = dashboardRows(numberDashlets);
		var dashletCount = 0;
		var rowCount = 0;
		var dashlets = alertDashlets.dashlets;
		console.debug(dashlets);

	
		/*for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			var analyticLink = dashlets[d].link+analyticsConfigFilterOu;
			//var analyticLink = 'http://localhost:8181/dhis/api/analytics.json?dimension=pe\\:LAST_5_YEARS&dimension=dx\\:y0B9TaG5LG7;OClx1UoIvix&filter=ou\\:LEVEL-1&tableLayout=true&columns=dx&rows=pe&hideEmptyRows=true';
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d, dashboardName) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					generateDashlets(rowMalariaSys, 'malarisSysRow', rowCount, dashletCount, data, title, uid, chartType, d, dashboardName, 1);
				});

			}
			generateAnalytics(analyticLink, chartTitle, dashletUid, typeOfChart, d, dashboardName);
		}*/
	});
});