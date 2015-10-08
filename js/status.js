var isAuth = false, 
    regStep = 0, 
    logStep = 0;

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};


function shake_login(obj){
    
    $(obj).animate({'margin-left':'-10px'},20);
    setTimeout(function(){$(obj).animate({'margin-left':'10px'},20)},20);
    setTimeout(function(){$(obj).animate({'margin-left':'-5px'},10)},40);
    setTimeout(function(){$(obj).animate({'margin-left':'5px'},10)},50);
    setTimeout(function(){$(obj).animate({'margin-left':'0px'},10)},60);
    
   $('#status-buttons a').removeClass('loading');
}


autosize($('textarea'));
    
var error_display = false;
function error_msg(parent,message,timeout){
    
    if(error_display === false){
        
        error_display = true;
        
        $(parent).append('<span class="error_msg">'+message+'</span>');
        
        setTimeout(function(){
        
            $(parent+' .error_msg').slideUp(200);
            
            setTimeout(function(){
            
                $(parent+' .error_msg').remove();
                
                error_display = false;
        
            },210);
     
        },timeout);
    }
}


function status_login(){
    
    var logindata = {
        'dir':'login',
        'username':$('#status-user').val(),
        'password':$('#status-pass').val(),
        'nonce':$('#smamo_nonce').val()
    };
    
    if(logindata.username.length < 1 || logindata.password.length < 1){
            
        shake_login('#status-login');
        error_msg('#status-login','Udfyld felterne for at logge ind.',5000);
    
    }
    else {
    
        $.ajax({
            type: "POST",
            url: wpURL + '/async/ajax-login.php',
            dataType: 'json',
            data: logindata,
            success: function(response){

                if (!response.error){
                    isAuth = true;
                    logStep = 0;

                    $('.btn-login').removeClass('loading').removeClass('right').addClass('hidden-left');
                    $('.btn-register').removeClass('left').addClass('hidden-left');
                    $('.btn-send').removeClass('hidden-right').addClass('right');
                    $('#status-login').slideUp(200);
                    $('#status-text').removeAttr('disabled').focus();

                    $('#login-text')
                    .removeClass('hidden-right').addClass('left')
                    .prepend('<span>'+response.name+', '+response.klasse+'</span>');
                }

                else{

                    error_msg('#status-login',response.error,15000);
                    shake_login('#status-login');

                }
            }
        });

    }
}

function status_get_info(){
    $.ajax({
        type: "POST",
        url: wpURL + '/async/ajax-login.php',
        dataType: 'json',
        data: {'dir':'get_info','id':$('#user-id').val(),'nonce':$('#smamo_nonce').val()},
        success: function(response){
        
            if (response !== null){
                isAuth = true;
                logStep = 0;
                $('#user-id').remove();
                $('#login-text').prepend('<span>'+response.name+', '+ response.klasse +'</span>');
            }
            
        
        }});

}

function status_logout(){
    console.log('function fired');
    
    $('.btn-send').removeClass('right').addClass('hidden-right');
    $('#status-text').attr('disabled','disabled');
    $('#login-text').removeClass('left').addClass('hidden-right').children('span').remove();
    
    var logoutVars = {
            'dir':'logout',
            'nonce':$('#smamo_nonce').val()
        };
    
    $.ajax({
        type: "POST",
        url: wpURL + '/async/ajax-login.php',
        dataType: 'json',
        data: logoutVars,
        success: function(){
                
            console.log('returned');
                    
            isAuth = false;
            logStep = 0;

            $('.btn-login').removeClass('hidden-left').addClass('right');

        }
            
           
        
    });


}


function status_register(){
    var register = {
        dir:'register',
        name:$('#new-user').val(),
        fname:$('#new-fname').val(),
        lname:$('#new-lname').val(),
        email:$('#new-email').val(),
        klasse:$('#new-year').val(),
        password:$('#new-pass').val(),
        passcheck:$('#new-pass-check').val(),
        nonce:$('#smamo_nonce').val(),
        }
    
    if(register.name.length < 3){
    
        shake_login('#status-register');
        regStep = 1;
        error_msg('#status-register','Dit brugernavn skal min. være 3 karakterer langt.',5000);
    }
    
    
    else if(register.password !== register.passcheck){
    
        shake_login('#status-register');
        regStep = 1;
        error_msg('#status-register','Begge password skal være ens',5000);
    }
    
    
     else if(register.fname.length < 1){
        
        shake_login('#status-register');
        regStep = 1;
        error_msg('#status-register','Fornavn <i>skal</i> udfyldes.',5000);
    
    }
    
    
    else if(!isValidEmailAddress(register.email)){
        
        shake_login('#status-register');
        regStep = 1;
        error_msg('#status-register','Den indtastede email kan ikke bruges.',5000);
    }
    else{

        $.ajax({
            type: "POST",
            url: wpURL + '/async/ajax-login.php',
            dataType: 'json',
            data: register,
            success: function(response){
                
                if(response.error){
                    regStep = 1;
                    error_msg('#status-register',response.error,5000);
                    $('.btn-register').removeClass('loading')
                
                }
                else{
                    
                    isAuth = true;
                    regStep = 3;

                    $('#status-register').slideUp(200);
                    $('.btn-login').removeClass('loading').removeClass('right').addClass('hidden-left');
                    $('.btn-register').removeClass('left').removeClass('loading').addClass('hidden-left');
                    $('.btn-send').removeClass('hidden-right').addClass('right');
                    $('#status-login').slideUp(200);
                    $('#status-text').removeAttr('disabled').focus();

                    $('#login-text')
                    .removeClass('hidden-right').addClass('left')
                    .prepend('<span>'+response.name+', '+response.klasse+'</span>');
                }

            }

    });

    }
}


// DOCUMENT READY
$(function(){if($('.module-status').length){
    
    if($('.module-status').hasClass('isAuth')){
        isAuth = true;
        status_get_info();
        
        $('.btn-login').removeClass('loading').removeClass('right').addClass('hidden-left');
        $('.btn-register').removeClass('left').addClass('hidden-left');
        $('.btn-send').removeClass('hidden-right').addClass('right');
        $('#login-text').removeClass('hidden-right').addClass('left');
                                              
    }
    
    $('#module-status').removeAttr('class');
    
    
    
    
    
$('.btn-login').click(function(e){
    e.preventDefault();
    
    if(isAuth){status_logout();}
    else{ 
        if(logStep === 0){
            $('#status-login').slideDown(200);
            $('.btn-register').removeClass('hidden-left').addClass('left')
        
        logStep ++;
        }
        else if (logStep === 1){
            $('.btn-login').addClass('loading');
            status_login();
        }
    }
    
    });
    

$('#status-logout').click(function(e){
    console.log('click');
    e.preventDefault();
    status_logout();
});
    

    
    
$('.btn-send').click(function(s){
    s.preventDefault;
    
    if(!$(this).hasClass('loading')){
        var msg = $('#status-text').val(),
            msg_q = $('#status-text').attr('placeholder');
        
        if(msg.length > 5){
        
        $(this).addClass('loading');

        $.ajax({
            type: "POST",
            url: wpURL + '/async/ajax-post.php',
            dataType: 'json',
            data: {
                'type':'status',
                'msg': msg,
                'msg_q': msg_q,
                'nonce': $('#smamo_nonce').val(),
            },
            success: function(response){

                if(!response.error){
                
                    $('#status-text').val('');

                    $('.btn-send').removeClass('loading');

                    $('#module-status-posts').append('<div class="status_post status_post_new" id="post_'+response.status_id+'"></div>').append('<hr class="red"/>');
                    $('#post_'+response.status_id).append('<div><span>'+response.msg+'</span></div><div><span>'+response.user_name+'</span></div>');

                    setTimeout(function(){

                        $('#post_'+response.status_id).removeClass('status_post_new');

                    },50);   
                }
                
                else{
                
                    shake_login('#status-compose');
                    error_msg('$status-compose',response.error,5000);
                
                }
            }
            
           
        });
    
        }
        
        else{
            shake_login('#status-compose');
            error_msg('#status-compose','En ny besked skal være minimum 5 tegn.',5000);
            
        }
    
    
    }});
    
$('.btn-register').click(function(e){
    e.preventDefault();
    
    if(regStep === 0){
        $('#status-login').slideUp(200);
        $('#status-register').slideDown(200);
    
        $('.btn-register').removeClass('left').addClass('right')
        $('.btn-login').removeClass('right').addClass('hidden-right')
    
    regStep ++;
    }
    else if(regStep === 1){
        regStep ++;
        $('.btn-register').addClass('loading');
        status_register();
    }
    });    

    
$('#status-text').on('keyup',function(){
    
    var fieldLength = $(this).val().length;
    
    if (fieldLength > 240){
        
        $('#status-text-count').addClass('red');
    
        if(fieldLength > 256){
    
            fieldlength = 256;

            $(this).val($(this).val().substr(0,256));
        }
    
    }
    
    else{$('#status-text-count').removeClass('red');}
    
    $('#status-text-count').html(256 - fieldLength);

});

$('#status-profile-edit').click(function(l){
    l.preventDefault();
    
    $.ajax({
            type: "POST",
            url: wpURL + '/async/ajax-login.php',
            dataType: 'json',
            data: {
                'dir':'profile_edit',
                'nonce':$('#smamo_nonce').val(),
            },
            success: function(response){
                if(response.error){
                    
                    error_msg('#status-compose',response.error,5000);
                
                }

                
            }
            
           
        });



});







}}); // END DOCUMENT READY