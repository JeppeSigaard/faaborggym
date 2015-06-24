
$(function() {
    
    var listStyle = Math.floor(Math.random()*(10-1+1)+1), nlistStyle;
    $('#page-center li').each(function(){
        
        $(this).attr('data-list-style',listStyle);
        
        nlistStyle = Math.floor(Math.random()*(10-1+1)+1);
        if (nlistStyle === listStyle){nlistStyle ++;}
        listStyle = nlistStyle;
    });
    
    console.log('Chromecast available');
    
    
});