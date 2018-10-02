/*
 *
 * This script disables transitions, transforms,
 * and animations on all objects within the
 * .transitiondiv div when the url parameter
 * "intro" is equal to off
 *
 */

$(document).ready(function() {
  var intro = getParameter('intro');

  if(intro == 'off') {
    $('.transitiondiv').find('*').addClass('notransition');
  }
});

function getParameter(theParameter) {
  var params = window.location.search.substr(1).split('&');

  for (var i = 0; i < params.length; i++) {
    var p=params[i].split('=');

  	if (p[0] == theParameter) {
  	  return decodeURIComponent(p[1]);
  	}
  }
  return false;
}
