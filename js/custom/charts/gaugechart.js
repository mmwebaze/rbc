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