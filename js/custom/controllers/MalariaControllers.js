'use strict';

angular.module('malaria.controllers', ['dashboard.services', 'rbc.services'])

.controller("malariaController", function ($scope) {
	$scope.dashboard = "Main Malaria Landing page ppp";

})

.controller("malariaSystemCtrl", function ($scope, dashboardService, generateAnalyticService) {
	//console.debug($scope.dashboard);
	dashboardService.getDashboards(baseURL).get({
		dashboard: 'MALARIA_SYSTEM'
	}, function (dashboardDashlets) {
		//
		var numberDashlets = dashboardDashlets.dashlets.length;
		console.debug(numberDashlets)
		var rows = dashboardRows(numberDashlets);
		var dashletCount = 0;
		var rowCount = 0;
		var dashlets = dashboardDashlets.dashlets;

		$('#dash').append('<div id=row' + rowCount + ' class=row></div>');
		for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			var analyticLink = dashlets[d].link;
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					$('#row' + rowCount).append('<div class="col-md-6 col-sm-6 col-xs-12"><div class="x_panel"><div class="x_title"><small>' + title + '</small><ul class="nav navbar-right panel_toolbox"><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-caret-square-o-down"></i></a> <ul class="dropdown-menu" role="menu"><li><a href="#/explore/MALARIA_SYSTEM/' + uid + '/' + chartType + '" target="_blank">Explore</a></li></ul></li></ul><div class="clearfix"></div></div><div class="x_content"><div id=graphx' + uid + ' style="width:530; height:400px;"></div></div></div></div>');
					
					if (chartType == 'bar') {
						var dataRows = manipulateData(data.metaData.names, data.rows);
						generateBar(uid, dataRows);
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
})

.controller("malariaInputsCtrl", function ($scope) {
	$scope.malariaInput = "MALARIA INPUTS";

})

.controller("malariaServDlvryCtrl", function ($scope) {
	$scope.malariaSrvDlvy = "MALARIA SERVICE DELIVERY";

})

.controller("malariaCoverageCtrl", function ($scope) {
	$scope.malariaCoverage = "MALARIA COVERAGE";

})
.controller("malariaOutcomesCtrl", function ($scope) {
	$scope.malariaOutcomes = "MALARIA OUTCOMES";

});