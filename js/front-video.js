var player,
    loop_s,
    loop_e,
    loop_timer,
    isFullscreen = false,
    isIOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform.replace(' Simulator', '')) >= 0;

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match&&match[7].length===11){
        return match[7];
    }else{
        return false;
    }
}

function playFullVideo(){
    isFullscreen = true;

    player.seekTo(0);
    player.unMute();
    player.playVideo();
    clearInterval(loop_timer);

    if(!isIOS){$('.video-banner').addClass('playFullVideo');

        $(window).on('keyup',function(e){
            if(e.keyCode === 27){
                isFullscreen = false;
                onPlayerReady();
            }

        }).on('click','knapnavn',function(){

            isFullscreen = false,
                onPlayerReady();
        });
    }
}

function onFullScreenChange() {
    var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
    if(fullscreenElement === null){
        isFullscreen = false;
        onPlayerReady();

    }
}


function onPlayerReady() {
    $('.video-banner').removeClass('playFullVideo');

    if(isIOS){
        $('#ytplayer').css('opacity','0');
        $('.video-container').addClass('playing');
    }
    player.mute();

    if(typeof loop_s !== 'undefined' && !isFullscreen){

        player.seekTo(loop_s);
        player.playVideo();

        if(loop_e > 0){
            loop_timer = setInterval(function(){
                player.seekTo(loop_s);
            },loop_e * 1000);
        }
    }

    else{
        player.playVideo();
    }
}




if($('.home .video-container').length){


    document.addEventListener("fullscreenchange", onFullScreenChange, false);
    document.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
    document.addEventListener("mozfullscreenchange", onFullScreenChange, false);
    $('#ytplaybtn').on('click', function(e){e.preventDefault();});
    document.getElementById('ytplaybtn').addEventListener('click', playFullVideo);

    var $ytplayer = $('#ytplayer'),
        $wrapper = $('.video-container');

    loop_s = parseInt($ytplayer.attr('data-loop-s'));
    loop_e = parseInt($ytplayer.attr('data-loop-e'));

    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    function onYouTubePlayerAPIReady() {

        player = new YT.Player('ytplayer', {
            videoId : youtube_parser($ytplayer.attr('data-src')),
            modestbranding : 1,
            controls : 0,
            showinfo : 0,
            events : {

                'onReady': onPlayerReady,
                'onStateChange' : function(e){

                    if (e.data === YT.PlayerState.PLAYING) {
                        $wrapper.addClass('playing');
                    }

                    if (e.data === YT.PlayerState.ENDED) {
                        onPlayerReady();
                    }
                }
            }
        });

    }

}
