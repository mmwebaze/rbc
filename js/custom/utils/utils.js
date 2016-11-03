/*Updates dashlets available in dataStore*/
function updateDashboard(numberDashlets, dashlets, uid, chartTitle, link, typeChart) {
	newDashlet.id = uid;
	newDashlet.title = chartTitle;
	newDashlet.link = link;
	newDashlet.chartType = typeChart;

	var updatedDashboard = {
		"dashlets": ""
	}

	if (numberDashlets === DASHBOARD_MAX) {

		dashlets.unshift(newDashlet);
		console.debug(dashlets)

		//then delete last from array
		dashlets.pop();

		updatedDashboard.dashlets = dashlets;
	} else {
		dashlets.unshift(newDashlet);

		updatedDashboard.dashlets = dashlets;
	}

	return updatedDashboard;
}
/*returns number of rows for the dashboard based on the number of available
dashlets*/
function dashboardRows(numberDashlets) {

	if (numberDashlets % 3 == 0)
		return numberDashlets / 3;
	else{
		var reminder = numberDashlets % 3;
		console.debug('reminder ->'+reminder);
		var rows = (numberDashlets - reminder)/3;
		
		//return (numberDashlets + 1) / 2;

		return rows + 1;
	}
}

function manipulateData(metaDataNames, rows) {
	var dataRow = [];
	for (var row = 0; row < rows.length; row++) {
		row = 0;
		console.debug(row);
		var tempArry = [];
		tempArry.push(rows[row][0]);
		tempArry.push(rows[row][2]);
		rows.splice(row, 1);

		for (var j = 0; j < rows.length; j++) {
			console.debug('In ' + rows.length);
			if (tempArry[0] == rows[j][0]) {
				tempArry.push(rows[j][2]);
				//remove array from rows
				rows.splice(j, 1);
			}
		}
		if (rows.length == 1)
			row--;
		dataRow.push(tempArry);
	}
	//console.debug(rowNames);
	console.debug(dataRow);
	return dataRow;
}
function setExploreSize(id){
	var chartDim = {height: 250, width: 300};

	if (id == 0) {
		chartDim.height = chartDim.height * 2;
		chartDim.width = chartDim.width * 2;
	}

	return chartDim;
}
function generateLine(id) {
	var DimChart = setExploreSize(id)
	
	var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: DimChart.height,
			width: DimChart.width
		},
		data: {
			x: 'x',
			columns: [
			['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
			['data1', 30, 200, 100, 400, 150, 250],
			['data2', 130, 100, 140, 200, 150, 50]
			],
			type: 'spline'
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%Y-%m-%d'
				}
			}
		},
		grid: {
			y: {
				lines: [

				{
					value: 350,
					text: 'target',
					position: 'middle'
				}
				]
			}
		}
	});
}

function generatePichart(id) {
	var DimChart = setExploreSize(id);

	var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: DimChart.height,
			width: DimChart.width
		},
		data: {
			columns: [
			['data1', 30],
			['data2', 120],
			],
			type: 'donut',
			onclick: function (d, i) {
				console.log("onclick", d, i);
			},
			onmouseover: function (d, i) {
				console.log("onmouseover", d, i);
			},
			onmouseout: function (d, i) {
				console.log("onmouseout", d, i);
			}
		},
		donut: {
			title: "%TB Patients"
		}
	});
}

function generateGauge(id) {
	var DimChart = setExploreSize(id);

	var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: DimChart.height,
			width: DimChart.width
		},
		data: {
			columns: [
			['ANC: Coverage', 91.4]
			],
			type: 'gauge',

			onmouseover: function (d, i) {
				console.log("onmouseover", d, i);
			}
		},
		grid: {
			y: {
				lines: [

				{
					value: 350,
					text: 'target',
					position: 'middle'
				}
				]
			}
		}
	})
}

function generateBar(id/*, dataRows*/) {
	var DimChart = setExploreSize(id);

	var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: DimChart.height,
			width: DimChart.width
		},
		data: {
			//x: 'x',
			//columns: dataRows
			columns: [
			['Births', 30, 200, 100, 400, 150, 250],
			['BCG', 130, 100, 140, 200, 150, 50]
			]
			,
			type: 'bar'
		},
		/*axis: {
			x: {
				type: 'category'

			}
		},*/
		bar: {
			width: {
				ratio: 0.5 // this makes bar width 50% of length between ticks
			}
			// or
			//width: 100 // this makes bar width 100px
		}
	});
}

function generateStackedBar(id) {
	var DimChart = setExploreSize(id);

	var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: DimChart.height,
			width: DimChart.width
		},
		data: {
			columns: [
			['data1', -30, 200, 200, 400, -150, 250],
			['data2', 130, 100, -100, 200, -150, 50],
			['data3', -230, 200, 200, -300, 250, 250]
			],
			type: 'bar',
			groups: [
			['data1', 'data2']
			]
		},
		grid: {
			y: {
				lines: [{value:0}]
			}
		}
	});
}
/*Embeds DHIS2 generated table into custom dashboard*/
function embedPivotTable(id){
	Ext.onReady(function() {

		DHIS.getTable({
			url: 'http://localhost:8181/dhis/',
			//url: 'https://dhis2.jsi.com/dss/',
			el: "graphx"+id,
			//"id": "kqFYaIXuTn1",
			"id": "T9cw92kNiDI",
			fontSize: "normal",
			legendSet: {"id": "s50spdzKeSU"}
			//legendSet: {"id": "LrxfadsFqch"}
		});
	});
}

/*Replaces commas found in multiple selected data elements*/
function replaceCommas(dx){
	var dxString = dx.toString();
	var replaceWith = ";"
	dxString = dxString.replace(/,/g, replaceWith)
	alert(dxString+' ***')
	return dxString;
}

function getAnalyticLink(dashletUid, dashlets) {
	for (var dashletCount = 0; dashletCount < dashlets.length; dashletCount++) {
		var idDash = dashlets[dashletCount].id;
		//console.debug(idDash);
		if (dashletUid == dashlets[dashletCount].id) {
			console.debug(idDash);
			return dashlets[dashletCount].link;
		}
	}
}