var chartServices = angular.module('chartServices', ['rbc.services'])

chartServices.service('createChartService', function (analyticService) {
	this.createChart = function (chartType, baseURL, dx, pe, ou) {
		analyticService.getAnalyticsData(baseURL, dx, pe, ou).then(function (response) {
			if (chartType == 'bullet') {
				console.debug(response.data.rows[0])

				nv.addGraph(function () {
					var chart = nv.models.bulletChart();

					d3.select('#chart svg')
						.datum(createBulletChart(220, 250))
						.transition().duration(1000)
						.call(chart);

					return chart;
				});
			} else if (chartType == 'gauge') {
				console.debug('other gauge')
			}
		});
	}

});