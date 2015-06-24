/* This little gem makes all better. woah! */

$(function(){
    

    // Vis kun video, hvis video er slået til //
    var videoInclude = $('#video_include');
    function hideForVideo(val){
        ar = ['#postimagediv','#image_filter','#subheading'];
        for (var i=0,  tot=ar.length; i < tot; i++) {
            if(val.is(":checked")){ 
                $(ar[i]).slideUp(100);
            }
            else{
                $(ar[i]).slideDown(100);
            }
        }
    }
    
    hideForVideo(videoInclude);
    videoInclude.bind('change',function(){hideForVideo(videoInclude);});







}); // END READY