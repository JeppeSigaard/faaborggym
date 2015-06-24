<?php 


function is_allowed_to_edit($user_id,$theme_id){

    if ($user_id == 0 ){
        return false;
    }
    
    $theme_editors = get_post_meta($theme_id, 'editors',true);
    
    if(is_array($theme_editors)){
        if(in_array($user_id,$theme_editors)){
            return true;
        }
    }
    elseif($theme_editors == $user_id){
        return true;
    }
}

$editor_user_id = get_current_user_id();
if (current_user_can('manage_options') || is_allowed_to_edit($editor_user_id,$theme_id) ): ?>
<div class="fg-editor inactive">
    <form action="<?php echo get_template_directory_uri(); ?>/async/ajax-post.php">
        <input type="hidden" name="type" value="tema-post"/>
        <input type="hidden" name="theme_id" value="<?php echo $theme_id; ?>"/>
        <input type="hidden" name="existing" value="false"/>
        <div>
            <label for="title">Titel</label>
            <input required type="text" name="title" placeholder="Skriv titel her"/>
        </div>
        <div>
            <label for="subheading" >Underoverskrift</label>
            <input type="text" name="subheading" placeholder="Skriv en underoverskrift"/>
        </div>
    </form>  
    <?php wp_editor('', 'smamo_front_editor', $settings = array()); ?>    
    <a href="#" class="submit news-more-btn">Opret nyt indlæg</a>
    <a href="#" class="cancel">Annuller</a>
</div>
<a class="toggle-new news-more-btn" href="#">Tilføj nyt indlæg</a>
<?php endif;?>