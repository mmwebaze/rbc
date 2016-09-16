var filters = angular.module('filterServices', [])

filters.service('dashboardFilterService', function () {
	return {
		filterForDashboard: function (item) {
			console.debug(item+' ****');
			//return $http.get(baseURL+'dataStore/rbcdashboard');
			
			if (item !== 'periods')
				return item;
		}
	}
});