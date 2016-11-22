
function generateBar(id, dataRows) {
	var DimChart = setExploreSize(id);
	/*if (id == 0){
		dataRows.splice(0,1)

	}*/
	var graphObj = {
		bindto: '#graphx' + id,
		size: {
			height: DimChart.height,
			width: DimChart.width
		},
		data: {
			x: 'x',
			columns: dataRows,
			
			type: 'bar'
		},
		axis: {
			x: {
				type: 'category'

			}
		},
		bar: {
			width: {ratio: 0.5},
		},
		legend: {
			show: true
		}
	};
	/*if (id == 0){
		delete graphObj.data.x
		delete graphObj.axis
	}*/

	var chart = c3.generate(graphObj);
}

function generateStackedBar(id, dataRows) {
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