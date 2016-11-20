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
		var rows = (numberDashlets - reminder)/3;
		
		//return (numberDashlets + 1) / 2;

		return rows + 1;
	}
}

function parseTableLayout(data){
	var dx = data.metaData.dx;
	var dataRows = data.rows;
	var pe = data.metaData.pe;
	var xAxis = ['x']
	var waarde = [];
	var columns = [];
	for (var k = 0; k < dx.length; k++){
		var namen = [];
		namen.push(dx[k]);
		waarde.push(namen);
	}
	for (var i =0; i < dataRows.length; i++){

		for(var k = 0; k < waarde.length; k++){
			waarde[k].push(dataRows[i][4 + k])
		}
	}	
	columns.push(xAxis.concat(pe))
	return columns.concat(waarde)
}

function parseReportTable(rows, headers){
	var waarde = [];
	for (var k = 7; k < headers.length; k++){
		var namen = [];
		namen.push(headers[k]['name']);
		waarde.push(namen);
	}
	var columns = [];
	var orgUnits = ['x'];
	for (var i =0; i < rows.length; i++){
		orgUnits.push(rows[i][1]);

		for (var k = 0; k < waarde.length; k++){
			waarde[k].push(rows[i][7 + k]);
		}
	}
	columns.push(orgUnits);
	for (var k = 0; k < waarde.length; k++){
		columns.push(waarde[k]);
	}
	
	return columns;
}

function setExploreSize(id){
	var chartDim = {height: 250, width: 300};

	if (id == 0) {
		chartDim.height = chartDim.height * 2;
		chartDim.width = chartDim.width * 5;
	}

	return chartDim;
}

/*Replaces commas found in multiple selected data elements*/
function replaceCommas(dx){
	var dxString = dx.toString();
	var replaceWith = ";"
	dxString = dxString.replace(/,/g, replaceWith)
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