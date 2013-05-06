function displaySkiReport (feedResponse) {
	for(var i=0;i<feedResponse.entries.length;i++){
	  var itemString = feedResponse.entries[i].content;
	  $('#foto').append(itemString); 
	}
	$('#foto').append('More: <a href="http://500px.com/chenhm">500px</a> or <a href="http://coldlight.lofter.com/?mydomainr=true">Lofter</a>')
}

function parseRSS(url, callback) {
  $.ajax({
	url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
	dataType: 'json',
	success: function(data) {
	  callback(data.responseData.feed);
	}
  });
}

$(function() {              
	parseRSS("http://500px.com/chenhm/rss", displaySkiReport);
});
