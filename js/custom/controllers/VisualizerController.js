'use strict';

angular.module('visualizer.controllers', ['dashboard.services', 'chartServices', 'rbc.services','visualizer.services'])

.controller("createChartController", function ($scope, createChartService) {

	$scope.createChart = function (dx, pe, ou) {
		createChartService.createChart('bullet', baseURL, dx, pe, ou);
	}
})

.controller("SaveChartController", function ($scope, dashletService, analyticService, generateUidService, updateDashboardService,generateAnalyticService, $http) {
	$scope.saveChart = function (typeChart, chartTitle, selectedDashboard, dx, pe, ou, targetPerform, targetIconset, selectedTargetDataElement, selectedTargetPeriod, selectedIndicators) {
		console.debug('Indicators '+selectedIndicators)
		console.debug('Data Elements '+dx+','+selectedIndicators)
		var dxx = [];
		if (selectedIndicators !== undefined)
			dxx.push(selectedIndicators);
		if (dx !== undefined)
			dxx.push(dx)

		if (selectedIndicators === undefined && dx === undefined)
			console.debug('dataElements and indicators cannot both be empty');

		console.debug('Indicators and Data Elements '+dxx.toString())

		var getLink = function(dx, pe, ou){
			return analyticService.getAnalyticsLink(baseURL, dx, pe, ou);
		};
		
			var link = getLink(dxx, pe, ou);
			console.debug(link);
			if (chartTitle != null) {
				//var statusT = checkForData(link, visualHasData);
				//console.debug('statusT is '+statusT)
				//if (statusT){
					var getUid = function(){
						return generateUidService.generateUid(baseURL).get({});
					}
					var uid = getUid();

					dashletService.getDashlets(baseURL, selectedDashboard).then(function (response) {
						var numberDashlets = response.data.dashlets.length;
						var dashlets = response.data.dashlets

						updateDashboardService.updateDashboardDashlet(selectedDashboard, numberDashlets, dashlets, uid.codes[0], chartTitle, link, typeChart, targetPerform, targetIconset, selectedTargetDataElement, selectedTargetPeriod);

					});
				//}
				//else
				//	alert('Visual has no data...');
			} 
			else
				alert('Please submit title for the graph');
		}
	})

	.controller("dashboardsController", function ($scope, dashboardService) {

		dashboardService.getDashboards(baseURL).query({}, function (allDashboards) {
			$scope.dashboards = allDashboards;
			$scope.defaultDashboard = allDashboards[0];
			$scope.filterDashboard = function (item) {
				if (item !== 'periods')
					return item;
			}
		});
	})
	.controller("dimensionController", function ($scope, dataElementService, periodService, orgUnitService, dataElementGroupsService, orgUnitLevelService, indicatorService) {
		$scope.typeChart = 'bar';
		$scope.selectedRadio = function (selectedChart) {
			console.debug(selectedChart);
			$scope.typeChart = selectedChart;
		}

		$scope.targetPerform = '+ve';
		$scope.targetIconset = 'TREND';


		dataElementGroupsService.getDataElementGroups(baseURL).get({}, function(allDataElementGroups){
			$scope.dataElementGroups = allDataElementGroups.dataElementGroups;
			$scope.selectedDataElementGroup = allDataElementGroups.dataElementGroups[0];
		});

		dataElementGroupsService.getDataElementGroups(baseURL).get({}, function(allDataElementGroups){
			$scope.targetDataElementGroups = allDataElementGroups.dataElementGroups;
			$scope.selectedTargetDataElementGroup = allDataElementGroups.dataElementGroups[0];
		});

		$scope.selectDataElementGroup = function(vt){
			console.debug(vt);
			dataElementGroupsService.getDataElementGroupElements(baseURL).get({deGrpId:vt}, function(grpDataElements){
				$scope.dataElements = grpDataElements.dataElements;
				//$scope.selectedDataElement = grpDataElements.dataElements[0];
				$scope.selectedDataElement = [];
			});
		}

		$scope.selectTargetDataElementGroup = function(vte){
			console.debug(vte+" target change");
			dataElementGroupsService.getDataElementGroupElements(baseURL).get({deGrpId:vte}, function(grpDataElements){
				$scope.targetDataElements = grpDataElements.dataElements;
				$scope.selectedTargetDataElement = $scope.targetDataElements[0];
			});
		}

		indicatorService.getIndicators(baseURL).get({}, function (allIndicators) {
			$scope.indicators = allIndicators.indicators;
			$scope.selectedIndicators = [];
		});


		orgUnitLevelService.getOrgUnitLevels(baseURL).get({}, function(allLevels){
			$scope.orgLevels = allLevels.organisationUnitLevels;
			$scope.selectedLevel = allLevels.organisationUnitLevels[2];
		});
		

		var relativePeriods = periodService.getPeriods();
		$scope.periods = relativePeriods.periods;
		//$scope.selectedPeriod = relativePeriods.periods[0];
		$scope.selectedPeriod = [];
		$scope.selectedTargetPeriod = relativePeriods.periods[0];

		orgUnitService.getOrgs(baseURL).get({}, function (org) {
			$scope.orgUnits = org.organisationUnits;
			$scope.selectedOrgUnit = org.organisationUnits[0];
		});
	});