var file = fs.createWriteStream("file.jpg");
var request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
  response.pipe(file);
});











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
           $('#html5').empty()
           var srchItems = response.result.items;
           $.each(srchItems, function(index, item) {
           vidTitle = item.snippet.title;
           vidTitle = item.snippet.title;
           vidThumburl =  item.snippet.thumbnails.high.url;
           vidURL = item.id.videoId;
           vidDownloadButton = '<a class="gmDownload" href="//www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v='+ vidURL +'"> Download </a>';
           vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image Available." style="width:204px;height:128px"></pre>';
           $('#results').append('<pre>' + vidTitle + vidThumbimg +  vidURL +'</pre>' + vidDownloadButton);
           $('#html5').append('<iframe class="gmVideo" style="width:840px;height:660px" frameborder="0" allowfullscreen src="https://www.youtube.com/embed/' + vidURL + '" >' + '</iframe>');

   })
})
}



// <a href='//www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=i62Zjga8JOM' style='text-decoration:none;color:#03a730;'>
//   <img src='//www.youtubeinmp3.com/icon/download.png' style='vertical-align:middle;'> <strong>Download MP3</strong>
// </a>
