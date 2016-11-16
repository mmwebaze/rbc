/*Embeds DHIS2 generated GIS map into custom dashboard*/
function embedGisMap(id){
	Ext.onReady(function() {

		DHIS.getMap({
			"url": 'http://localhost:8181/dhis/',
			"el": "graphx"+id,
			"id": "qNJbH7bqRts",
		});

	});
}