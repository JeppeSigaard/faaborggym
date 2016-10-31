$(function(){
    var topbar = $('#topbar');
    if(topbar.length){
        setTimeout(function(){
            topbar.removeClass('loading top');
        },400);
    }

    $('body').on('click','.topbar-search-icon',function(e){
        e.preventDefault();
        var form = $(e.target).parents('form'),
            topbar = form.parents('section'),
            input = form.find('input[name="s"]');
        if(input.val() !== '' && form.hasClass('active')){
            form.submit();
        }

        else if(!form.hasClass('active')){

            topbar.addClass('search-active');
            form.addClass('active');
            input.focus();

        }
    });
});
