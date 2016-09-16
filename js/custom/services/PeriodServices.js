var periodServices = angular.module('period.services',[])

periodServices.service('periodService', function () {
	return {
		getPeriods: function () {
			return {
				"periods": [{
						"id": "THIS_WEEK",
						"textValue": "This Week"
					}, {
						"id": "LAST_WEEK",
						"textValue": "Last Week"
					}, {
						"id": "LAST_4_WEEKS",
						"textValue": "Last 4 Weeks"
					}, {
						"id": "LAST_12_WEEKS",
						"textValue": "Last 12 Weeks"
					}, {
						"id": "LAST_52_WEEKS",
						"textValue": "Last 52 Weeks"
					}, {
						"id": "THIS_YEAR",
						"textValue": "This Year"
					}, {
						"id": "LAST_YEAR",
						"textValue": "Last Year"
					}, {
						"id": "LAST_5_YEARS",
						"textValue": "Last Five Years"
					}, {
						"id": "THIS_FINANCIAL_YEAR",
						"textValue": "This Financial Year"
					}, {
						"id": "LAST_FINANCIAL_YEAR",
						"textValue": "Last Financial Year"
					}, {
						"id": "LAST_5_FINANCIAL_YEARS",
						"textValue": "Last 5 Financial Years"
					}
				]
			}
		}
	}
});