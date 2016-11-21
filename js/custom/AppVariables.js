//var baseURL = 'https://dhis2.jsi.com/dss/api/';
var baseURL = 'http://localhost:8181/dhis/api/';
var ALERT_DASHBOARD_MAX = 6;
var DASHBOARD_MAX = 6;
var analyticsConfigFilterOu = '&tableLayout=true&columns=dx&rows=pe&hideEmptyRows=true';
var analyticsConfigFilterPe = '&tableLayout=true&columns=dx&rows=ou&hideEmptyRows=true';
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

var default_alert_dataStore = 'rbcalerts'
var default_alert_dashboards = [
"HIV",
"MALARIA",
"MCCH",
"MPPD",
"TB"
];

var DRILLDOWN_LEVELS = ['National','District','Province'];