jQuery.noConflict();
jQuery(document).ready(function($){
	$("head").append('<link rel="stylesheet" type="text/css" href="http://ncdthemes.com/version/style.css" />');
	
	var theme = 'J LINE 1.2';
	var version_name = 'jline';
	
	$('<div id="versionContent"><div id="versionBox"><div id="unable">Unable to check for update.</div><div id="version"></div></div></div>').prependTo('body');
	
	$('#unable').delay(3000).animate({opacity: 1}, "slow");
	
	$('<p id="themeName">'+ theme +'</p>').prependTo('#versionBox');
	$('#version').load('http://ncdthemes.com/version/index.html #' + version_name, function() {	
		$('#jline').has('span').each(function(){
			$('#unable').hide();
			if($('#version:contains("1.2")').length > 0) { 
				$("#version").replaceWith('<div id="currentVersion">Your theme is up to date!</div>');
				$('#currentVersion').delay("800").animate({opacity: 1}, "slow");
			}
			else{
				$('#themeName').remove();
				$('#version').replaceWith('<div id="available"></div><div id="updateWrap"></div>');
				$('#available').load('http://ncdthemes.com/version/index.html #' + version_name + 'Update');
				$('#updateWrap').load('http://ncdthemes.com/version/index.html #update');
				$('#available, #updateWrap').delay("800").animate({opacity: 1}, "slow");
			}
		});	
	});
	$('#versionBox').delay("500").animate({opacity: 1}, "slow");
});