'use strict';

var ds = angular.module('dashboard.services', ['ngResource'])

ds.service('updateDashletService', function ($http) {
	return {
		updateDashlets: function (baseURL, dashboard, data) {
			//return $http.get(baseURL+'analytics.json?dimension=dx:' + dx + '&dimension=pe:'+pe+'&dimension=ou:'+ou+';');
			return $http.put(baseURL + 'dataStore/rbcdashboard/' + dashboard);
		}
	}
});

ds.service('dashletService', function ($http) {
	return {
		getDashlets: function (baseURL, dashboard) {
			//return $http.get(baseURL+'analytics.json?dimension=dx:' + dx + '&dimension=pe:'+pe+'&dimension=ou:'+ou+';');
			return $http.get(baseURL + 'dataStore/rbcdashboard/' + dashboard);
		}
	}
});

ds.service('dashboardService', function ($resource) {
	return {
		getDashboards: function (baseURL) {
			return $resource(baseURL + 'dataStore/rbcdashboard/:dashboard', {
				dashboard: '@dashboard'
			});
		}
	}
});