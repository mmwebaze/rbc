SELECT ou.uid, ou.name as orgname, de.shortname as name, de.code dataelementcode, de.uid as dataelement, ps.iso as period, dv.value, dv.storedby, dv.lastupdated FROM datavalue dv 
INNER JOIN organisationunit ou on (dv.sourceid = ou.organisationunitid) 
INNER JOIN _periodstructure ps on (dv.periodid = ps.periodid) 
INNER JOIN dataelement de on (de.dataelementid = dv.dataelementid) WHERE de.code = '8723' AND dv.value != '0' LIMIT 100

select * from dataelement where shortname LIKE 'FP_%'