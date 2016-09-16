'use strict';

var setupControllers = angular.module('setup.controllers', ['setup.services'])

setupControllers.controller("setupController", function ($scope, initialSetupService) {

	/*initialSetupService.getInitialSetUpStatus(baseURL).query({}, function (data){
		console.debug(data.length);
		var dataStoreSize = data.length;
		//$scope.dashboards = data;
		if (data.response == 404){
			console.debug('proceed to insert')
		}
		
		
		//initialSetupService.initialRunSetup(baseURL, data);
		, 
	});*/
	var initializeDashboards = function(baseURL, dataStoreName, dBoard, defaultDashlet){
		initialSetupService.initialRunSetup(baseURL, dataStoreName, dBoard, defaultDashlet);
	}

	for (var noDashboards = 0; noDashboards < default_dashboards.length; noDashboards++){
		
		var status = initializeDashboards(baseURL, default_dataStore, default_dashboards[noDashboards], default_dashlet);
		console.debug(status)
	}
	

});