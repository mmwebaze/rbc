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
		// or
		//width: 100 // this makes bar width 100px
	},
	legend: {
		show: true
	}
};

var dummyDataStackedBar = {
	bindto: '#graphx' + id,
	size: {
		height: DimChart.height,
		width: DimChart.width
	},
	data: {
		columns: [
		['data1', -30, 200, 200, 400, -150, 250],
		['data2', 130, 100, -100, 200, -150, 50],
		['data3', -230, 200, 200, -300, 250, 250]],
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
};