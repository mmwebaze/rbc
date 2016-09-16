'use strict';

var es = angular.module('explore.services', ['ngResource']);

es.service('exploreService', function ($resource) {
	return {
		getDashlets: function (baseURL) {
			return $resource(baseURL + 'dataStore/rbcdashboard/:dashboard', {
				dashboard: '@dashboard'
			});
		}
	}
});