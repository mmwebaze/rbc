var baseURL = 'http://localhost:8181/dhis/api/';
var DASHBOARD_MAX = 4;
var newDashlet = {
	"id": "",
	"title": "",
	"link": "My modified link",
	"chartType": "chart",
	"target": 4000
};
var default_setup = {
  "name": "RBC_SETUP",
  "value": "0"
};
var default_dashlet = {"dashlets":[]};
var default_dataStore = 'rbcdashboard';
var default_dashboards = [
"HIV_COVERAGE",
"HIV_INPUTS",
"HIV_OUTCOMES",
"HIV_SERVICE_DELIVERY",
"HIV_SYSTEM",
"MALARIA_COVERAGE",
"MALARIA_INPUTS",
"MALARIA_OUTCOMES",
"MALARIA_SERVICE_DELIVERY",
"MALARIA_SYSTEM",
"MCCH_COVERAGE",
"MCCH_INPUTS",
"MCCH_OUTCOMES",
"MCCH_SERVICE_DELIVERY",
"MCCH_SYSTEM",
"MPPD_COVERAGE",
"MPPD_INPUTS",
"MPPD_OUTCOMES",
"MPPD_SERVICE_DELIVERY",
"MPPD_SYSTEM",
"TB_COVERAGE",
"TB_INPUTS",
"TB_OUTCOMES",
"TB_SERVICE_DELIVERY",
"TB_SYSTEM"
];

var sampleAnalyticData = {
	"metaData": {
		"names": {
			"2014Q1": "Jan to Mar 2014",
			"2014Q2": "Apr to Jun 2014",
			"FbKK4ofIv5R": "Measles Coverage <1 y",
			"ImspTQPwCqd": "Sierra Leone",
			"eTDtyyaSA7f": "Fully Immunized Coverage"
		}
	},
	"rows": [
		[
			"eTDtyyaSA7f",
			"2014Q2",
			"81.1"
		],
		[
			"eTDtyyaSA7f",
			"2014Q1",
			"74.7"
		],
		[
			"FbKK4ofIv5R",
			"2014Q2",
			"88.9"
		],
		[
			"FbKK4ofIv5R",
			"2014Q1",
			"84.0"
		],
		[
			"eTDtyyaSA7f",
			"2014Q1",
			"22.7"
		],
		[
			"eTDtyyaSA7f765tg",
			"2014Q1",
			"100"
		],
		[
			"Time3145",
			"2014Q1",
			"75"
		],
		[
			"Time3145",
			"2014Q1",
			"39"
		]
	]
};
//81.1, 74.7 and 88.9 and 84.0