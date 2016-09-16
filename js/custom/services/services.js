'use strict';

var rbcServices = angular.module('rbc.services', ['ngResource'])

rbcServices.service('dashboardService', function ($resource) {
	return {
		getDashboards: function (baseURL) {
			return $resource(baseURL + 'dataStore/rbcdashboard/:dashboard', {
				dashboard: '@dashboard'
			});
		}
	}
});

rbcServices.service('dataElementService', function ($resource) {
	return {
		getDataElements: function (baseURL) {
			return $resource(baseURL + 'dataElements.json?fields=id,displayName&paging=false', {});
		}
	}
});

rbcServices.service('generateUidService', function ($resource) {
	this.generateUid = function (baseURL) {
		return $resource(baseURL + 'system/uid.json', {});
	}
});

rbcServices.service('analyticService', function ($http) {
	//return {
	this.getAnalyticsData = function (baseURL, dx, pe, ou) {
		console.debug(baseURL + 'analytics.json?dimension=dx:' + dx + '&dimension=pe:' + pe + '&dimension=ou:' + ou + ';');
		return $http.get(baseURL + 'analytics.json?dimension=dx:' + dx + '&dimension=pe:' + pe + '&dimension=ou:' + ou + ';');
	}

	this.getAnalyticsLink = function (baseURL, dx, pe, ou) {
			return baseURL + 'analytics.json?dimension=dx\\:' + dx + '&dimension=pe\\:' + pe + '&dimension=ou\\:' + ou
		}
		//}
});

rbcServices.service('generateAnalyticService', function ($resource) {
	this.getData = function (link) {
		//console.debug(link);
		return $resource(link, {});
	}
});

rbcServices.factory('orgUnitService', function ($resource) {
	return {
		getOrgs: function (baseURL) {
			return $resource(baseURL + 'organisationUnits.json?fields=id,displayName&paging=false', {
				uid: "@uid"
			});
		}
	}
});

rbcServices.service('targetService', function ($http) {
	return {
		getTargets: function (baseURL, dx, pe, ou) {
			return $http.get(baseURL + 'analytics.json?dimension=dx:' + dx + '&dimension=pe:' + pe + '&dimension=ou:' + ou);
		}
	}
});

rbcServices.factory('orgUnitByLevelService', function ($resource) {
	return {
		getOrgs: function (baseURL, orgUnitLevel) {
			return $resource(baseURL + 'organisationUnits.json?filter=level\\:eq:orgUnitLevel&fields=id,displayName&paging=false', {
				orgUnitLevel: "@orgUnitLevel"
			});
		}
	}
});