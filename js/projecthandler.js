/*
 *
 * This script changes the content of the project.html page
 * depending on the url parameter "project"
 *
 */

$(document).ready(function() {
  var project = getParameter('project');

  if(project == 'avm') {
    $('#avmproject').show();
  } else {
    $('#avmproject').hide();
  }

  if(project == 'doorslocks') {
    $('#doorslocks').show();
  } else {
    $('#doorslocks').hide();
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
