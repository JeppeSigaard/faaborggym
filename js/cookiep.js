function smamoSetCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function smamoGetCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}


function makeCookieNotificationElement(){

    var cn = $('<div id="cookie-notify"></div>');
    
    var cnDIV = $('<div></div>');
    
    var cnSpan = $('<span>Faaborg Gymnasiums hjemmeside anvender cookies</span>');
    
    var cnLink = $('<a href="http://faaborg-gym.dk/cookie/">Læs mere</a>');
    
    var ok = $('<a id="cookieOK" href="#">Godkend</a>');
    
    
    cnDIV.append(cnSpan);
    cnDIV.append(ok);
    cnDIV.append(cnLink);
    
    cn.append(cnDIV);
    
    cn.appendTo('body').animate({opacity:.9},1000);
    
    ok.click(function(e){
        e.preventDefault();
        smamoSetCookie('cookieOK','true',365);
        cn.remove();
    });

}


jQuery(function($){
    var cookieOK = smamoGetCookie("cookieOK");
    if (cookieOK != "") {} else {makeCookieNotificationElement();}
});