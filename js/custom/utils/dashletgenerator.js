function generateDashlets(addRowId, rowDomain, rowCount, dashletCount, data, title, uid, chartType, d){
	var dataRows = parseTableLayout(data);
	$('#'+rowDomain+'' + rowCount).append('<div class="col-md-4 col-sm-4 col-xs-12"><div class="x_panel"><div class="x_title"><small>' + title + '</small><ul class="nav navbar-right panel_toolbox"><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-caret-square-o-down"></i></a> <ul class="dropdown-menu" role="menu"><li><a href="#/explore/MALARIA_SYSTEM/' + uid + '/' + chartType + '">Explore</a></li></ul></li></ul><div class="clearfix"></div></div><div class="x_content" style="overflow-x: auto; overflow-y: auto; max-height: 275px;"><div id=graphx' + uid + ' style="width:400px;"></div></div></div></div>');

	switch(chartType){
		case 'bar':
						//generateBar(0, dataRows);
			//var dataRows = manipulateData(data.metaData.names, data.rows);
			generateBar(uid, dataRows);
			//generateBarDemo(uid);
			break;
		case 'tacho':
			generateGauge(uid);
			break;
		case 'pie':
			dataRows.splice(0,1)
			console.debug(dataRows)
			generatePichart(uid, dataRows, title)
			break;
		case 'line':
			generateLine(uid, dataRows)
			break;
		case 'stacked':
			generateStackedBar(uid)
			break;
		case 'pivot':
			createTable(uid, dataRows);
			//embedPivotTable(uid);
			break;
	}

	if (dashletCount == 3) {
		rowCount = rowCount + 1;
		//$('#dashMalariaSystem').append('<div id=row' + rowCount + ' class=row></div>')
		addRowId.append('<div id='+rowDomain+''+ rowCount + ' class=row></div>')
		dashletCount = 0;
	}
}