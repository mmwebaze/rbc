function generateLine(id, data) {
	var DimChart = setExploreSize(id)
	
	var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: DimChart.height,
			width: DimChart.width
		},
		data: {
			x: 'x',
			xFormat: '%Y',
			columns: data,
			type: 'spline'
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%Y'
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