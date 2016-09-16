$(document).ready(function () {
	"use strict";
	var URL = 'http://localhost:8181/dhis/api/';

	/*Dimension functions*/

	function getDataElements() {
		var deEndpoint = 'dataElements.json';

		$.ajax({
			type: 'GET',
			url: URL + deEndpoint,
			success: function (response) {
				$.each(response.dataElements, function (i, item) {

					$('#data-dim-results').append($("<option></option>").attr("value", item.id).text(item.displayName));
					//console.debug(item.id + ' - ' + item.displayName);
				});
			},
			error: function (response) {

			}
		});
	}

	function getDataElementGroups() {
		var deGrpsEndpoint = 'dataElementGroups.json';
	}

	function getIndicators() {
		var indicatorEndpoint = 'indicators.json';
	}

	function getPeriods() {

	}

	function getOrganisationUnits() {
		var orgUnitEndpoint = 'organisationUnits.json';

		$.getJSON(URL + orgUnitEndpoint, function (result) {
			$.each(result.organisationUnits, function (id, item) {
				$('#orgunit-dim').append($("<option></option>").attr("value", item.id).text(item.displayName));
			});
		});
	}

	/*Action changes to dimensions*/
	getDataElements();
	getOrganisationUnits();

	$("#data-dim").change(function () {
		$('#data-dim-results option').remove();
		getDataElements();
	});
});