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

		$('#dashMalariaSystem').append('<div id=row' + rowCount + ' class=row></div>');
		for (var d = 0; d < numberDashlets; d++) {
			dashletCount = dashletCount + 1;
			var analyticLink = dashlets[d].link;
			var chartTitle = dashlets[d].title;
			var typeOfChart = dashlets[d].chartType;
			var dashletUid = dashlets[d].id;

			var generateAnalytics = function (link, title, uid, chartType, d) {
				var mData = generateAnalyticService.getData(link).get({}, function (data) {
					$('#row' + rowCount).append('<div class="col-md-4 col-sm-4 col-xs-12"><div class="x_panel"><div class="x_title"><small>' + title + '</small><ul class="nav navbar-right panel_toolbox"><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-caret-square-o-down"></i></a> <ul class="dropdown-menu" role="menu"><li><a href="#/explore/MALARIA_SYSTEM/' + uid + '/' + chartType + '">Explore</a></li></ul></li></ul><div class="clearfix"></div></div><div class="x_content" style="overflow-x: auto; overflow-y: auto; max-height: 275px;"><div id=graphx' + uid + ' style="width:400px;"></div></div></div></div>');
					
					switch(chartType){
						case 'bar':
						//generateBar(0, dataRows);
						var dataRows = manipulateData(data.metaData.names, data.rows);
						generateBar(uid/*, dataRows*/);
						break;
						case 'tacho':
						generateGauge(uid);
						break;
						case 'pie':
						generatePichart(uid)
						break;
						case 'line':
						generateLine(uid)
						break;
						case 'stacked':
						generateStackedBar(uid)
						break;
						case 'pivot':
						embedPivotTable(uid);
						break;
					}

					if (dashletCount == 3) {
						rowCount = rowCount + 1;
						$('#dashMalariaSystem').append('<div id=row' + rowCount + ' class=row></div>')
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