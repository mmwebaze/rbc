function generatePichart(id, data, title) {
	var DimChart = setExploreSize(id);

	var chart = c3.generate({
		bindto: '#graphx' + id,
		size: {
			height: DimChart.height,
			width: DimChart.width
		},
		data: {
			columns: data,
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
			title: title
		}
	});
}