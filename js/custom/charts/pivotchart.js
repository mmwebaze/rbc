
function createTable(id, data){
	var bindto = '#graphx'+id;
	var DTable = '<table class="table table-bordered table-striped table_dashboard">';
	var colLength = data[0].length;
	for (var i = 0; i < data.length; i++){
		DTable+=('<tr>')
		//var dTableCol = '<td>';
		for(var j = 0; j < colLength; j++){
			var colValue = data[i][j];
			var bgColor = '';
			if (colValue == null)
				colValue = '';
			else{
				if (j >= 0 && i == 0)
					bgColor = '#ffffff';
				else if (i>=0 && j == 0)
					bgColor = '#ffffff';
				else {
					if (colValue < 1200)
						bgColor = "#FF0000"
					else
						bgColor = "#00FF00";
				}
			}
			DTable+='<td bgcolor='+bgColor+'>'+colValue+'</td>';
		}
		DTable+='</tr>';
	}
	DTable+='</table>';
	$(bindto).append(DTable);
}

function generateTable(id, data){
	var binto = '#graphx' + id;
	var table = '<table class="table table-bordered table-striped table_explorer">'
	for (var i = 0; i < data[0].length; i++){
		var rowBegin = '<tr>';
		var colR = '';
		for (var k = 0; k < data.length; k++){
			colR = colR+'<td>'+data[k][i]+'</td>';
		}
		rowBegin = rowBegin+colR+'</tr>';
		table = table+rowBegin;

	}
	table = table+'</table>'
	$(binto).append(table);
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

function getDataHtmlTable(){
	var header = Array();

	$("table thead tr th").each(function(i, v){
		header[i] = $(this).text();
	})

	alert(header);

	var data = Array();

	$("table tbody tr").each(function(i, v){
		data[i] = Array();
		$(this).children('td').each(function(ii, vv){
			data[i][ii] = $(this).text();
		}); 
	})

	alert(data);
}

function embedHtmlTable(id){
	
	/*$( "#graphx"+id ).load( "http://localhost:8181/dhis/api/reportTables/DHyPchxCX7j/data.html .gridDiv", function(){
		
		$(".gridDiv" ).on();
		//getDataHtmlTable();
		console.debug("***")
		//$("table").addClass("table-bordered");

	} );*/
	$.get("http://localhost:8181/dhis/api/reportTables/DHyPchxCX7j/data.html", function(data, status){
		$( "#graphx"+id ).html($(data).find('div .gridDiv').html());
		getDataHtmlTable();
        //alert("Data: " + data + "\nStatus: " + status);
    });

}