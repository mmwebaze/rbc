angular.module('explore.controllers', ['explore.services', 'rbc.services'])

.controller('exploreController', function ($scope, $routeParams, exploreService, generateReportTableService) {
	$scope.uidSelected = $routeParams.dashletId;
	var dashboardSelected = $routeParams.dashboard;
	var chartType = $routeParams.chartType;
	console.debug(chartType);
	exploreService.getDashlets(baseURL).get({
		dashboard: dashboardSelected
	}, function (dashlets) {
		//generateAnalyticService.getData(getAnalyticLink($routeParams.dashletId, dashlets.dashlets)).get({}, function (data) {
			generateReportTableService.getData('http://localhost:8181/dhis/api/reportTables/DHyPchxCX7j/data.json').get({}, function (data) {

			//var dataRows = manipulateData(sampleAnalyticData.metaData, sampleAnalyticData.rows);
			var dataRows = parseReportTable(data.rows, data.headers);
			console.debug(dataRows);

			switch(chartType){
				case 'bar':
				//generateBar(0, dataRows);
				//var dataRows = manipulateData(data.metaData.names, data.rows);
				generateBar(0, dataRows);
				break;
				case 'tacho':
				generateGauge(0);
				break;
				case 'pie':
				generatePichart(0)
				break;
				case 'line':
				generateLine(0)
				break;
				case 'stacked':
				generateStackedBar(0)
				break;
				case 'pivot':
				//embedPivotTable(0);
				//embedHtmlTable(0);
				generateTable(0, dataRows);
				
				break;
			}
			

			/*switch(chartType){
				case 'bar':
					generateBar(0, dataRows);
					break;
				case 'tacho':
					generateGauge(0);
					break;
				case 'pie':
					generatePichart(0)
					break;
				case 'line':
					generateLine(0)
					break;
			}*/


		});
		//console.debug();
	});

});