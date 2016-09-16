'use strict';

angular.module('visualizer.controllers', ['dashboard.services', 'chartServices', 'rbc.services','visualizer.services'])

.controller("createChartController", function ($scope, createChartService) {

	$scope.createChart = function (dx, pe, ou) {
		createChartService.createChart('bullet', baseURL, dx, pe, ou);
	}
})

.controller("SaveChartController", function ($scope, dashletService, analyticService, generateUidService, updateDashboardService,generateAnalyticService, $http) {
	$scope.saveChart = function (typeChart, chartTitle, selectedDashboard, dx, pe, ou) {

		var getLink = function(dx, pe, ou){
			return analyticService.getAnalyticsLink(baseURL, dx, pe, ou);
		};
		var visualHasData = true;
			//var link = analyticService.getAnalyticsLink(baseURL, dx, pe, ou);
			var link = getLink(dx, pe, ou);

			var checkForData = function(link, visual){
				generateAnalyticService.getData(link).get({}, function (data) {

				//var visual = true;
					if (data.rows.length == 0){
						console.debug(' ***** before '+visual)
						visual = true
						console.debug(' ***** after '+visual)
						return visual;
					}else
						return visual;
				});
			}

			if (chartTitle != null) {
				var statusT = checkForData(link, visualHasData);
				console.debug('statusT is '+statusT)
				if (statusT){
					var getUid = function(){
						return generateUidService.generateUid(baseURL).get({});
					}
					var uid = getUid();


					dashletService.getDashlets(baseURL, selectedDashboard).then(function (response) {
						var numberDashlets = response.data.dashlets.length;
						var dashlets = response.data.dashlets

						updateDashboardService.updateDashboardDashlet(selectedDashboard, numberDashlets, dashlets, uid.codes[0], chartTitle, link, typeChart);

					});
				}
				else
					alert('Visual has no data...');
			} 
			else
				alert('Please submit title for the graph');
		}
	})