'use strict';

var visualizerServices = angular.module('visualizer.services', [])

visualizerServices.service('updateDashboardService', function ($http) {

	this.updateDashboardDashlet = function(selectedDashboard, numberDashlets, dashlets, uidCodes, chartTitle, link, typeChart){
		$http.put(baseURL + 'dataStore/'+default_dataStore+'/' + selectedDashboard, updateDashboard(numberDashlets, dashlets, uidCodes, chartTitle, link, typeChart), {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.success(function (data, status, headers, config) {
			console.debug(data)
		})
		.error(function (data, status, headers, config) {
			alert("failure message: " + JSON.stringify({
				data: data
			}));
		});
	}
});