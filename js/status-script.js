/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
/* smamoStatus Objekt til styring af spørgsmål / svar , faaborg gym
/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
var smamoStatus = {
    
    // Hent bruger
    getUser : function(){
    
        $.ajax({
            url : $('form').attr('action'),
            type : 'POST',
            data : 'action=get-user',
            dataType : 'json',
            success : function(response){
                smamoStatus.adjustGUI(response);        
            },
        });
        
        
    },
    
    // Juster interface
    adjustGUI : function(response){
        
        if(!response.login){
            $('.status-comment textarea').attr('disabled','disabled');
            $('.user-info').hide();
            $('.status-comment input[type="submit"]').hide();
            
        }
        else{
            $('.status-comment a.login, .status-comment a.register').hide();
            $('.user-info span').html(response.login.name);
        }
        
    },
    
    // Send ny kommentar
    sendStatus : function(button){
        var form = button.parents('form'),
            url = form.attr('action');
            data = form.serialize();
        
        if(!form.hasClass('loading')){
        
            form.addClass('loading');
            
            $.ajax({
                url : url,
                type : 'POST',
                data : data,
                dataType : 'json',
                success : function(response){
                    smamoStatus.sendResponse(response,form);
                },
            });
        }
    },
    
    // Efter svar er oprettet
    sendResponse : function(response,form){

        form.removeClass('loading').find('textarea').val('');    
        var textarea = form.find('textarea');

        var newPost = $('<div class="status-post" style="display:block;"></div>'),
            newContent = $('<span class="status-post-content"></span>'),
            newAuthor = $('<span class="status-post-author"></span>');
        
        newContent.html(response.msg);
        newAuthor.html(response.user.name);
        
        newPost.append(newContent,newAuthor);
        
        form.prev('.status-posts').append(newPost).append('<hr class="red" style="display:block;">');
        
    },
    
    // Registrering (prep)
    register : function(button){
        window.location.href = button.attr('href');
    },
    // Login (prep)
    login : function(button){
        window.location.href = button.attr('href');
    },
};


jQuery(function($){
    
    // hent bruger og juster gui (ved cachet resultat)
    smamoStatus.getUser();
    
    // Insdstil textareas til automiatisk størrelse
    autosize($('.status-comment textarea'));
    
    // Click listen
    $('.status-comment').on({
        
        click : function(e){
            var t = $(e.target);
            
            // Submit
            if(t.is('input[type="submit"]')){
                e.preventDefault();
                smamoStatus.sendStatus(t);    
            }
            
            // login (prep)
            else if(t.is('a.login')){
                e.preventDefault();
                smamoStatus.login(t);
            }
            
            // registrering (prep)
            else if(t.is('a.register')){
                e.preventDefault();
                smamoStatus.register(t);
            }
            
        }
    });
    
    $('.status-post-count').on({
        click : function(e){
            e.preventDefault();
            var parent = $(this).parents('.status-posts');
            parent.find('.status-post').show();
            parent.find('hr').show();
            $(this).hide();
        }
    });
    
});