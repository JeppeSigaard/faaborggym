/* REVAMPED: opret og rediger indlæg inline på faaborg-gym.dk */


function sendData(){
    
    var editContent;
    if(tinyMCE.activeEditor){
        editContent = tinyMCE.activeEditor.getContent();
            
    }
            
    else{
        editContent = $('#smamo_front_editor').val();
    }
    
    var data = {
    
            image : getThumbID(),
            postID : getID(),
            title : $('.fg-editor form input[name="title"]').val(),
            subheading : $('.fg-editor form input[name="subheading"]').val(),
            type : 'tema-post',
            theme_id : $('.fg-editor form input[name="theme_id"]').val(),
            content : editContent,

        },
        urlData = $.param(data),
        postUrl = $('.fg-editor form').attr('action');

    if(data.title === ''){
    
        alert('Føj en titel til dit indlæg inden du gemmer');
        $('.fg-editor .submit.loading').toggleClass('loading');
 
    }
    
    else if(data.content === ''){
    
        alert('Føj et indhold til dit indlæg inden du gemmer');
        $('.fg-editor .submit.loading').toggleClass('loading');  
    }
    
    else{
        
        $.ajax({
            url : postUrl,
            type : 'POST',
            data : urlData,
            dataType : 'json',
            success : function(response){

               window.location.href = response.href;

            },
        });
    }
}

function deletePost(id){

    var data = {

        id : getID(),
        type : 'tema-post',
        theme_id : $('.fg-editor form input[name="theme_id"]').val(),
    },
    urlData = $.param(data);
    
    $.ajax({
        url : wpURL + '/async/delete-post.php',
        type : 'POST',
        data : urlData,
        dataType : 'json',
        success : function(response){
            
            window.location.href = response.href;

        },
    });

}

/* Vi bruger felter fra TinyMCE, så vi laver fire hjælpefunktioner til at tappe ind i systemet */
var setID = function(id){wp.media.view.settings.post.id = id;}
var setThumbID = function(id){wp.media.view.settings.post.featuredImageId = id;}
var getID = function(){ return wp.media.view.settings.post.id;}
var getThumbID = function(){return wp.media.view.settings.post.featuredImageId;}



/* Click handlers */
jQuery(function($){
    
    $('#page-center').on('click',function(e){
    
        // find target og gem i target
        var target = $(e.target);
        
        // Toggle new
        if(target.is('.single-tema-post .toggle-new') || target.is('.single-tema .toggle-new')){
            
            e.preventDefault();
    
            target.toggleClass('editor-active');
        
            $('.fg-editor').removeClass('inactive').children('.submit').html('Opret nyt indlæg');
        
            $('html,body').animate({scrollTop: $('.fg-editor').offset().top - 20});
            
            // Fjern værdier fra tinyMCE - klar til at oprette ny //
            setID(-1);
            setThumbID(-1);
            
            $('.fg-editor form input[name="title"]').val('');
            $('.fg-editor form input[name="subheading"]').val('');
            
        
        }
        
        
        // Submit
        else if(target.is('.single-tema-post .fg-editor .submit') || target.is('.single-tema .fg-editor .submit')){
            e.preventDefault();
            
            if(target.hasClass('loading')){}
            else{

                target.toggleClass('loading');
                sendData();
            }
        }
        
        
        // Slet
        else if(target.is('#page-center .dashicons-trash')){
            e.preventDefault();
        
            setID(target.closest('.edit-delete').attr('id').replace('edit-',''));
            
            if(confirm("Er du sikker på du vil flytte indlægget til papirkurven?")){
            
                deletePost(getID());
                
            }
            
        }
        
        // Rediger
        else if(target.is('#page-center .dashicons-edit')){
            e.preventDefault();
            
            setID(target.closest('.edit-delete').attr('id').replace('edit-',''));
            setThumbID(-1);
            
            var editPost = $('#post_'+getID()),
                editTitle = editPost.find('.preread-inner h4').html(),
                editSubheading = editPost.find('.preread-inner h6').html(),
                editContent = editPost.find('.archive-content').html(),
                editThumbID = editPost.find('.archive-img').attr('data-attachment');
            
            
            if(tinyMCE.activeEditor){
                
                tinyMCE.activeEditor.setContent(editContent);
            
            }
            
            else{
                $('#smamo_front_editor').val(editContent);
            }
            
            editPost.hide().nextAll('.archive-entry, .red').insertAfter('.fg-editor').animate({'opacity':.4},300).addClass('disabled');
            editPost.prevAll('.archive-entry, .red').animate({'opacity':.4},300).addClass('disabled');
            
            $('.archive-entry').unbind('click');
            
            $('.toggle-new').toggleClass('editor-active');
            $('.fg-editor').removeClass('inactive').children('.submit').html('Opdater indlæg');
            
            $('.fg-editor input[name="title"]').val(editTitle);
            $('.fg-editor input[name="subheading"]').val(editSubheading);
            
            $('html,body').animate({scrollTop: $('.fg-editor').offset().top - 40},100);
        }
        
        // Annuller
        else if(target.is('#page-center .cancel')){
            e.preventDefault();
            
            location.reload();
        }
    
    });
    
});