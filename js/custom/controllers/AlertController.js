'use strict';

angular.module('alert.controllers', []).

controller("alertController", function ($scope) {
	$scope.totalVisits = 2000;
	var targetTotalVisits = 3000;
	if ($scope.totalVisits < targetTotalVisits) {
		$('#alert1').addClass("blink_bad");
		$('.blink_bad').blink();
	} else {
		$('#alert1').addClass("blink_warning");
	}

});