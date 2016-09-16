'use strict';

var setupServices = angular.module('setup.services', ['ngResource'])

setupServices.service("initialSetupService", function($resource, $http){

	this.getInitialSetUpStatus = function(baseURL, dataStoreName){

		//return $resource(baseURL + 'constants.json?filter=displayName\\:eq:RBC_SETUP&fields=id,displayName&paging=false', {});
		return $resource(baseURL + 'dataStore/'+dataStoreName, {});
	}

	this.initialRunSetup = function(baseURL, dataStoreName, dBoard, defaultDashlet){
		$http.post(baseURL + 'dataStore/'+dataStoreName+'/'+dBoard, defaultDashlet, {headers: {'Content-Type': 'application/json'}})
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