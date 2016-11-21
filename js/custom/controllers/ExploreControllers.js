angular.module('explore.controllers', ['explore.services', 'rbc.services'])

.controller('exploreController', function ($scope, $routeParams, exploreService, generateAnalyticService, orgUnitLevelService, getOrgUnitsByLevelService) {
	$scope.uidSelected = $routeParams.dashletId;
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
			var myEl = angular.element( document.querySelector( '#graphx0' ) );
			myEl.empty();
			console.debug($scope.selectedLevel.level);
			getOrgUnitsByLevelService.getLevelOrgUnits(baseURL, $scope.selectedLevel.level).then(function(orgUnitsChildren){
				$scope.orgUnitsChildren = orgUnitsChildren.data['organisationUnits'];
				$scope.defaultOrgUnit = $scope.orgUnitsChildren[0]
			});

			//if ($scope.selectedLevel.level == 1){
				exploreService.getDashlets(baseURL).get({dashboard: $routeParams.dashboard}, function (dashlets) {

					/*generateAnalyticService.getData(getAnalyticLink($routeParams.dashletId, dashlets.dashlets)+analyticsConfigFilterOu).get({}, function (data) {
						var dataRows = parseTableLayout(data, 1);
						generateDrilldown(chartType, dataRows);
					});*/
					var recreateExplorer = function(link){
						console.debug("****-"+link);
						var linkArray = link.split("&")
						console.debug(linkArray)
						var newLink = ''
						var isPeriodFiltered = 1;
						if ($scope.selectedLevel.level == 1){
							newLink = linkArray[0]+"&"+linkArray[1]+"&filter=ou\\:LEVEL-"+$scope.selectedLevel.level+analyticsConfigFilterOu;
						}
						else{
							isPeriodFiltered = 0;
							newLink = linkArray[0]+"&dimension=ou\\:LEVEL-"+$scope.selectedLevel.level+"&filter=pe\\:"+linkArray[1].split(":")[1]+analyticsConfigFilterPe;
						}
						console.debug(newLink)
						generateAnalyticService.getData(newLink).get({}, function (data) {
							generateDrilldown(chartType, parseTableLayout(data, isPeriodFiltered));
						});
					}
					recreateExplorer(getAnalyticLink($routeParams.dashletId, dashlets.dashlets));
				});
				
				/*var recreateExplorer = function(link){
					console.debug("****-"+link)
					var linkArray = link.split("&")
					var newLink = linkArray[0]+"&dimension=ou\\:"+orgUnitSelected+"&filter=pe\\:"+linkArray[1].split(":")[1]+exploreAnalyticConfig;
					generateAnalyticService.getData(newLink).get({}, function (data) {
						generateDrilldown(chartType, parseTableLayout(data, 0));	
					});
				
				}
				recreateExplorer(getAnalyticLink($routeParams.dashletId, dashlets.dashlets));		*/
			/*}
			else{
				var myEl = angular.element( document.querySelector( '#graphx0' ) );
				myEl.empty();
			}*/
			
		}
	});

	
	var dashboardSelected = $routeParams.dashboard;
	var chartType = $routeParams.chartType;
	
	exploreService.getDashlets(baseURL).get({
		dashboard: dashboardSelected
	}, function (dashlets) {
		generateAnalyticService.getData(getAnalyticLink($routeParams.dashletId, dashlets.dashlets)+analyticsConfigFilterOu).get({}, function (data) {
			var dataRows = parseTableLayout(data, 1);
			generateDrilldown(chartType, dataRows);
		});
		$scope.viewChart = function(levelSelected, orgUnitSelected){
			console.debug(levelSelected+" -- "+orgUnitSelected);
			var recreateExplorer = function(link){
				var linkArray = link.split("&")
				var newLink = linkArray[0]+"&dimension=ou\\:"+orgUnitSelected+"&filter=pe\\:"+linkArray[1].split(":")[1]+exploreAnalyticConfig;
				generateAnalyticService.getData(newLink).get({}, function (data) {
					generateDrilldown(chartType, parseTableLayout(data, 0));	
				});
				
			}
			recreateExplorer(getAnalyticLink($routeParams.dashletId, dashlets.dashlets));		
			
		}
	});

});