$(document).ready(function () {
	"use strict";
	var URL = ' http://localhost:8181/dhis/api/';
	//C3 objects
	var columnsData = [];
	var dataValues = [];
	var periodValues = [];
	var x = {
		bindto : '#chart',
		data : {
			columns : [],
			type : ''
		},
		axis : {
			x : {
				label : 'X Label'
			},
			y : {
				label : 'Y Label'
			}
		}
	};
	function setChartSettings(chartType) {
		if (chartType == 'bar') {
			x.bar =  {
					/* width : {
						ratio : 0.5 // this makes bar width 50% of length between ticks
					} */
					// or
					width: 50 // this makes bar width 100px
			};
		}
	}
	function generatePichart(columnsData, periodData, chartType) {
		console.debug(periodData);
		setChartSettings(chartType);
		//x.x = 'x';
		//x.data.columns = periodData;
		x.data.columns = columnsData;
		x.data.type = chartType;
		console.debug(x);
		var chart = c3.generate(x);
	}
	function dhisAnalytics(dataElements) {
		var dx = dataElements.join(';');
		var analyticsEndpoint = 'analytics.json?dimension=dx:' + dx + '&dimension=pe:2015;2016&dimension=ou:Kku1LsPfrLK;ELbYPUJl3Rv';
		console.debug(analyticsEndpoint);
		$.getJSON(URL + analyticsEndpoint, function (result) {
			//var MetaDatax = result.metaData;
			$.each(result.rows, function (id, item) {
				columnsData.push(item);
			});

			for (var i = 0; i < dataElements.length; i++) {
				var arr = [];
				//console.debug(dataElements[i] + ' = ' + i);
				arr.push(dataElements[i]);
				for (var j = 0; j < columnsData.length; j++) {
					console.debug('>>> ' + arr[0] + ' -' + columnsData[j][0]);
					if (arr[0] == columnsData[j][0]) {
						console.debug('*** ' + arr[i] + ' -' + columnsData[j][0]);
						arr.push(columnsData[j][columnsData.length - 1]);
						periodValues.push(columnsData[j][1]);

					}
				}
				arr[0] = $('#data-dim-results option[value="' + arr[0] + '"]').html();
				dataValues.push(arr);
			}
			generatePichart(dataValues, periodValues, $("#chart-type option:selected").val());
		});
	}

	$("#viz-generator").click(function () {
		var foo = $('#data-dim-results').val();
		dhisAnalytics(foo);
		dataValues = [];
		columnsData = [];
	});
});
