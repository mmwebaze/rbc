/*'use strict';

angular.module('dashboard.controllers', ['dashboard.services', 'rbc.services']).

controller("dashboardController", function ($scope, dashboardService, generateAnalyticService) {
	//console.debug($scope.dashboard);
	dashboardService.getDashboards(baseURL).get({
		dashboard: 'HIV_COVERAGE'
	}, function (dashboardDashlets) {
		//
		var numberDashlets = dashboardDashlets.dashlets.length;
		var rows = dashboardRows(numberDashlets);
		var dashletCount = 0;
		var rowCount = 0;
		var dashlets = dashboardDashlets.dashlets;

		$('#dash').append('<div id=row' + rowCount + ' class=row></div>')
		for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			var analyticLink = dashlets[d].link;
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					$('#row' + rowCount).append('<div class="col-md-6 col-sm-6 col-xs-12"><div class="x_panel"><div class="x_title"><small>' + title + '</small><div class="clearfix"></div></div><div class="x_content"><div id=graphx' + uid + ' style="width:530; height:400px;"></div></div></div></div>');

					if (chartType == 'bar') {
						//$('#graphx').append('<div id="chart"><svg style="height:80px"></svg></div>');
						//generateBullet(uid);
						generateBar(uid);
					}
					if (chartType == 'pie') {
						generatePichart(uid);
					}
					if (chartType == 'line') {
						generateBullet(uid)
					}
					if (chartType == 'tacho') {
						generateGauge(uid)
					}


					if (dashletCount == 2) {
						rowCount = rowCount + 1;
						$('#dash').append('<div id=row' + rowCount + ' class=row></div>')
						dashletCount = 0;
					}
				});

			}
			generateAnalytics(analyticLink, chartTitle, dashletUid, typeOfChart, d);
		}
	});
})*/