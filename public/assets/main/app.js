


//function when user clicks on a thumbnail it loads that thumbnails video into the videoholder
function goThumbToVideo(d){
  var thumbVidUrl= d.getAttribute("data-vid");

  $('.gmVideoHolder').empty()
  $('.gmVideoOptions').empty()
  $('.gmVideoHolder').append('<iframe class="gmVideo" style="width:100%;height:100%" frameborder="0" allowfullscreen src="https://www.youtube.com/embed/' + thumbVidUrl + '" >' + '</iframe>');
  $('.gmVideoOptions').append('<div class="gmMainVidTitle">' + vidTitle +'</div>' + vidDownloadButton);


}





//make search request after clicking on search button
function keyWordsearch(){
   gapi.client.setApiKey("AIzaSyD0YSEl2wfZp3a6dJFKIU6rWLLhSJYyRwo");
   gapi.client.load('youtube', 'v3', function() {
           makeRequest();
   });
     }

 function makeRequest() {
   var q = $('#query').val();
   var request = gapi.client.youtube.search.list({
           q: q,
           part: 'snippet',
           maxResults: 3
   });
   request.execute(function(response)  {
           $('#results').empty()
           $('.gmVideoHolder').empty()
           $('.gmVideoOptions').empty()
           var srchItems = response.result.items;
           $.each(srchItems, function(index, item) {
           vidTitle = item.snippet.title;
           vidThumbPicture =  item.snippet.thumbnails.high.url;
           vidURL = item.id.videoId;
           vidDownloadButton = '<a class="gmDownload" href="//www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v='+ vidURL +'"> Download </a>';
           vidThumbimg = '<div class="gmThumbPhoto"><img id="thumb" class="thumbImage" src="'+vidThumbPicture +'" alt="No  Image Available." style="width:214.468085106px;height:120px"></div>';
          //  vidURLHolder = '<div class="urlTouseonIframe" style="display:hidden;">' + vidURL + '</div>';

           $('#results').append('<a id="thumbnailToVideo" class="thumbnailLoadsVideo" data-vid="'+ vidURL +'"  onclick="goThumbToVideo(this);">' + '<div class="gmThumbHolder">' + vidThumbimg + '<div class="gmThumbTitle" style="font-family:GalanoBold;">'+ vidTitle + '</div>' + '</a>' + '<div class="thumbDownloadButton">' + vidDownloadButton + '</div>' + '</div>');
          //  $('.gmVideoOptions').append('<div class="gmMainVidTitle">' + vidTitle +'</div>' + vidDownloadButton);
          //  $('.gmVideoHolder').append('<iframe class="gmVideo" style="width:100%;height:100%" frameborder="0" allowfullscreen src="https://www.youtube.com/embed/' + vidURL + '" >' + '</iframe>');

   })
})
}






// <a href='//www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=i62Zjga8JOM' style='text-decoration:none;color:#03a730;'>
//   <img src='//www.youtubeinmp3.com/icon/download.png' style='vertical-align:middle;'> <strong>Download MP3</strong>
// </a>
