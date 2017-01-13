

function makeRequest(q) {
  var request = gapi.client.youtube.search.list({
          q: q,
          part: 'snippet',
          id: 'snipet',
          maxResults: 10
  });

  request.execute(function(response) {
    $('#results').empty();
    var resultItems = response.result.items;
    $.each(resultItems, function(index, item) {
      vidTitle = item.snippet.title;
      vidThumburl =  item.snippet.thumbnails.default.url;
      vidURL = item.id.videoId;
      vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image Available." style="width:204px;height:128px"></pre>';
      $('#results').append('<pre>' + vidTitle + vidThumbimg +  vidURL +'</pre>');
    });
  });
}


function init() {
  gapi.client.setApiKey('AIzaSyD0YSEl2wfZp3a6dJFKIU6rWLLhSJYyRwo');
  gapi.client.load('youtube', 'v3', function() {
    data = jQuery.parseJSON( '{ "data": [{"name":"dean 21"}] }' );
    $.each(data["data"], function(index, value) {
            console.log(data);
      makeRequest(value["name"]);
    });
  });

}


<a href='//www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=i62Zjga8JOM' style='text-decoration:none;color:#03a730;'>
  <img src='//www.youtubeinmp3.com/icon/download.png' style='vertical-align:middle;'> <strong>Download MP3</strong>
</a>







// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: '-vH2eZAM30s',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }















//beyond this point is my code, everything works///

function makeRequest(q) {
  var request = gapi.client.youtube.search.list({
          q: q,
          part: 'snippet',
          id: 'snipet',
          maxResults: 3
  });

  request.execute(function(response) {
    $('#results').empty();
    var resultItems = response.result.items;
    $.each(resultItems, function(index, item) {
      vidTitle = item.snippet.title;
      vidThumburl =  item.snippet.thumbnails.default.url;
      vidURL = item.id.videoId;
      vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image Available." style="width:204px;height:128px"></pre>';
      $('#results').append('<pre>' + vidTitle + vidThumbimg +  vidURL +'</pre>');
      $('#html5').append('<iframe class="gmVideo" style="width:640px;height:360px" frameborder="0" allowfullscreen src="https://www.youtube.com/embed/' + vidURL + '" >' + '</iframe>')
      // var url = url.replace("watch?v=", "v/");
    });
  });
}


function init() {
  gapi.client.setApiKey('AIzaSyD0YSEl2wfZp3a6dJFKIU6rWLLhSJYyRwo');
  gapi.client.load('youtube', 'v3', function() {
    data = jQuery.parseJSON( '{ "data": [{"name":"dean 21"}] }' );
    $.each(data["data"], function(index, value) {
            console.log(data);
      makeRequest(value["name"]);
    });
  });

}
