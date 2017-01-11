



var gmYoutubeSearch = 'dean 21';


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
  gapi.client.setApiKey('');
  gapi.client.load('youtube', 'v3', function() {
    data = jQuery.parseJSON( '{ "data": [{"name":"' + gmYoutubeSearch + '"}] }' );
    $.each(data["data"], function(index, value) {
            console.log(data);
      makeRequest(value["name"]);
    });
  });

}



// var playerInfoList = [{id:'player',height:'390',width:'640',videoId:'M7lc1UVf-VE'},{id:'player1',height:'390',width:'640',videoId:'M7lc1UVf-VE'}];
//
//       function onYouTubeIframeAPIReady() {
//         if(typeof playerInfoList === 'undefined')
//            return;
//
//         for(var i = 0; i < playerInfoList.length;i++) {
//           var curplayer = createPlayer(playerInfoList[i]);
//         }
//       }
//       function createPlayer(playerInfo) {
//           return new YT.Player(playerInfo.id, {
//              height: playerInfo.height,
//              width: playerInfo.width,
//              videoId: playerInfo.videoId
//           });
//       }
//


// 2. This code loads the IFrame Player API code asynchronously.
      // var tag = document.createElement('script');
      //
      // tag.src = "https://www.youtube.com/iframe_api";
      // var firstScriptTag = document.getElementsByTagName('script')[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      //
      // // 3. This function creates an <iframe> (and YouTube player)
      // //    after the API code downloads.
      // var player;
      // function onYouTubeIframeAPIReady() {
      //   player = new YT.Player('player', {
      //     height: '390',
      //     width: '640',
      //     videoId: 'TlYJD-ffL8I',
      //     events: {
      //       // 'onReady': onPlayerReady,
      //       // 'onStateChange': onPlayerStateChange
      //     }
      //   });
      // }

      // 4. The API will call this function when the video player is ready.
      // function onPlayerReady(event) {
      //   event.target.playVideo();
      // }

      // // 5. The API calls this function when the player's state changes.
      // //    The function indicates that when playing a video (state=1),
      // //    the player should play for six seconds and then stop.
      // var done = false;
      // function onPlayerStateChange(event) {
      //   if (event.data == YT.PlayerState.PLAYING && !done) {
      //     setTimeout(stopVideo, 6000);
      //     done = true;
      //   }
      // }
      // function stopVideo() {
      //   player.stopVideo();
      // }
