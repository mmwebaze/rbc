function createBulletChart(currentValue, targetValue) {
	var range = 0;
	if (currentValue > targetValue)
		range = currentValue + 100;
	if (targetValue > currentValue)
		range = targetValue + 100;
  return {
  	"title":"Revenue",		//Label the bullet chart
  	"subtitle":"US$, in thousands",		//sub-label for bullet chart
  	//"ranges":[300],	 //Minimum, mean and maximum values.
	"ranges":[range],	
  	//"measures":[220],		 //Value representing current measurement (the thick blue line in the example)
	"measures":[currentValue],
  	//"markers":[250]			 //Place a marker on the chart (the white triangle marker)
	"markers":[targetValue]	
  };
}