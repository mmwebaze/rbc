angular.module('explore.controllers', ['explore.services', 'rbc.services'])

.controller('exploreController', function ($scope, $routeParams, exploreService, generateAnalyticService) {
	$scope.uidSelected = $routeParams.dashletId;
	var dashboardSelected = $routeParams.dashboard;
	var chartType = $routeParams.chartType;
	console.debug(chartType);
	exploreService.getDashlets(baseURL).get({
		dashboard: dashboardSelected
	}, function (dashlets) {
		generateAnalyticService.getData(getAnalyticLink($routeParams.dashletId, dashlets.dashlets)).get({}, function (data) {

			//var dataRows = manipulateData(sampleAnalyticData.metaData, sampleAnalyticData.rows);
			var dataRows = manipulateData(data.metaData.names, data.rows);
			generateBar(0, dataRows);
		});
		//console.debug();
	});

});