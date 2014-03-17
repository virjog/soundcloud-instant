
$('#search').keyup(function() {
    $.ajax({
      url: "https://api.soundcloud.com/tracks.json?" + $('#search').serialize(),
      dataType: 'json',
      beforeSend:
        function(data){
          $('#sounds').empty();
        },
      success:
        function(data){
          $('#sounds').html('')
          var items = [];
          $.each(data, function(key, val){
            items.push("<div id='tracks_list'><a data-artist='"+val.user.username+"' data-title='"+val.title+ "' data-url=" + val.stream_url + " href='javascript:void();'><li><h2>"+val.title+"</h2>\
            <span class='plays'>" + val.user.username+ " plays  -  <b>"+ val.user.username+  "</b></span></li></a>");
          });
          $('#sounds').html(items.join(' '));
          trackClick();

        }
    });

});
window.onload = function() {
  document.getElementById("q").focus();
};

var clientid = 'client_id=2010872379d388118fe90f01ace38d03';

function trackClick(){
  $('#tracks_list a').click(function(){
    var url= $(this).data('url') +"?"+ clientid;
    var title= $(this).data('title');
    var artist = $(this).data('artist');
    $(this).addClass('playedSong');
    $('#navbar h2').html(title);
    var audioPlayer = document.getElementById('player');
  audioPlayer.src = url;
  audioPlayer.load();
  document.getElementById('player').play();
  document.title="Playing - Soundcloud Instant"
    return false;

  });
}