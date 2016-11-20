angular.module('explore.controllers', ['explore.services', 'rbc.services'])

.controller('exploreController', function ($scope, $routeParams, exploreService, generateAnalyticService, orgUnitLevelService, getOrgUnitsByLevelService) {
	var exploreAnalyticConfig = '&tableLayout=true&columns=dx&rows=ou&hideEmptyRows=true';
	orgUnitLevelService.getOrgUnitLevels(baseURL).get({}, function(allLevels){
		$scope.orgLevels = allLevels.organisationUnitLevels;
		$scope.orgLevels.sort(function(a,b){
			return a.level - b.level
		})
		//console.debug($scope.orgLevels)
		$scope.selectedLevel = allLevels.organisationUnitLevels[0];

		$scope.filterLevels = function(level){

			//if (DRILLDOWN_LEVELS.length == 0 )
			//	return level
			//else{

				if (level['displayName'] == 'National')
 					return level;
 				else if (level['displayName'] == 'District')
 					return level;
 				else if (level['displayName'] == 'Province')
 					return level;	
			//}
		}
		$scope.update = function() {
			console.debug($scope.selectedLevel.level);
			getOrgUnitsByLevelService.getLevelOrgUnits(baseURL, $scope.selectedLevel.level).then(function(orgUnitsChildren){
				console.debug(orgUnitsChildren.data['organisationUnits']);
				$scope.orgUnitsChildren = orgUnitsChildren.data['organisationUnits'];
				$scope.defaultOrgUnit = $scope.orgUnitsChildren[0]
			});
			
		}
	});

	$scope.uidSelected = $routeParams.dashletId;
	var dashboardSelected = $routeParams.dashboard;
	var chartType = $routeParams.chartType;
	
	exploreService.getDashlets(baseURL).get({
		dashboard: dashboardSelected
	}, function (dashlets) {
		generateAnalyticService.getData(getAnalyticLink($routeParams.dashletId, dashlets.dashlets)+analyticsConfigurations).get({}, function (data) {
			//generateReportTableService.getData('http://localhost:8181/dhis/api/reportTables/DHyPchxCX7j/data.json').get({}, function (data) {
			//var dataRows = parseReportTable(data.rows, data.headers);
			var dataRows = parseTableLayout(data);
			console.debug(dataRows);
			generateDrilldown(chartType, dataRows);

			/*switch(chartType){
				case 'bar':
				//generateBar(0, dataRows);
				//var dataRows = manipulateData(data.metaData.names, data.rows);
				generateBar(0, dataRows);
				break;
				case 'tacho':
				generateGauge(0, dataRows);
				break;
				case 'pie':
				dataRows.splice(0,1)
				generatePichart(0, dataRows, "title here")
				break;
				case 'line':
				generateLine(0, dataRows)
				break;
				case 'stacked':
				generateStackedBar(0, dataRows)
				break;
				case 'pivot':
				//embedPivotTable(0);
				//embedHtmlTable(0);
				
				//generateTable(0, dataRows);
				createTable(0, dataRows);
				
				break;
			}*/
		});
		$scope.viewChart = function(levelSelected, orgUnitSelected){
			console.debug(levelSelected+" -- "+orgUnitSelected);
			var recreateExplorer = function(link){
				var linkArray = link.split("&")
				var newLink = linkArray[0]+"&dimension=ou\\:"+orgUnitSelected+"&filter=pe\\:"+linkArray[1].split(":")[1]+exploreAnalyticConfig;
				generateAnalyticService.getData(newLink).get({}, function (data) {
					generateDrilldown(chartType, parseTableLayout(data));	
				});
				
			}
			recreateExplorer(getAnalyticLink($routeParams.dashletId, dashlets.dashlets));		
			
		}
	});

});