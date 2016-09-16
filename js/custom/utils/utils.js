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
		console.debug('add dashlet')
		dashlets.unshift(newDashlet);

		updatedDashboard.dashlets = dashlets;
	}

	return updatedDashboard;
}
/*returns number of rows for the dashboard based on the number of available
dashlets*/
function dashboardRows(numberDashlets) {

	if (numberDashlets % 2 == 0)
		return numberDashlets / 2;
	else
		return (numberDashlets + 1) / 2;
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

function generateBullet(id) {

	var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: 400,
			width: 530
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
	var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: 400,
			width: 530
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
	var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: 400,
			width: 530
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

function generateBar(id, dataRows) {
	var height = 400,
		width = 530;
	if (id == 0) {
		height = height * 2;
		width = width * 3;
	}
	var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: height,
			width: width
		},
		data: {
			//x: 'x',
			columns: dataRows //[
				//['x', 'm', 'y', 'z', 'a', 'b', 'k'],
				//['Births', 30, 200, 100, 400, 150, 250],
				//['BCG', 130, 100, 140, 200, 150, 50]
				/*]*/
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
	/*var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: 400,
			width: 530
		},
		data: {
			rows: [
  ['Births', 'BCG'],
  [90, 120],
  [40, 160],
  [50, 200],
  [120, 160],
  [80, 130],
  [90, 220],
],
			type: 'bar'
		},
		bar: {
			width: {
				ratio: 0.5 // this makes bar width 50% of length between ticks
			}
			// or
			//width: 100 // this makes bar width 100px
		}
	});*/

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