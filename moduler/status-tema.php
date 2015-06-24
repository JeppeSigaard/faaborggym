<?php 

// Check om bruger er logget ind og bruger er elev.
$status_disabled = 'disabled ';
$form_class = 'noAuth';

if(is_user_logged_in()){
    
    $current_user = wp_get_current_user();
    
    if ( !($current_user instanceof WP_User) )
    return;
    
    $status_disabled = '';
    $form_class = 'isAuth';
    
    }
?>
<section id="status-conatiner" class="status-container">

<form id="module-status" class="<?php echo $form_class ?>">

    <div id="status-compose">
        <input <?php echo $status_disabled ?>type="text" id="status-text" name="status-text" placeholder="<?php echo get_post_meta($theme_id,'status_q',true)  ?>" maxlength="140"/>
        <span id="status-text-count"></span>
    </div>
    
    <div id="status-login">
        <input type="text" id="status-user" placeholder="Brugernavn" name="status-user"/>
        <input type="password" id="status-pass" placeholder="Adgangskode" name="status-pass"/>
    </div>
    
    <div id="status-register">
        <input type="text" id="new-user" name="new-user" placeholder="Brugernavn"/>
        <input type="text" id="new-fname" name="new-fname" placeholder="Fornavn"/>
        <input type="text" id="new-lname" name="new-lname" placeholder="Efternavn"/>
        <input type="email" id="new-email" name="new-pass" placeholder="Email"/>
        <select id="new-year">
            <option value="0" disabled selected >Hvilket Klassetrin går du på?</option>
            <option value="1. G">1. G</option>
            <option value="2. G">2. G</option>
            <option value="3. G">3. G</option>
        </select>
        <input id="new-pass" type="password" placeholder="Kode"/>
        <input id="new-pass-check" type="password" placeholder="Skriv din kode igen"/>
    </div>
    
    <div id="status-buttons">
        <a id="btn-login" class="right">Log ind</a>
        <div id="login-text" class="hidden-right">
            <span></span>
        </div>
        <a id="btn-register" class="hidden-left" >Registrer</a>
        <a id="btn-send" class="hidden-right">Send</a>
    </div>
    
    <?php if(isset($current_user)) :?> 
    <input type="hidden" id="user-id" value="<?php echo $current_user->ID ?>"/>
    
    <?php endif; ?>

</form>
<hr class="red"/>
<div id="module-status-posts">
       
    <?php 

    $status_args = array(
            'posts_per_page'   => $smamo_settings['status_q_max'],
            'meta_key'         => 'status_q',
            'meta_value'       => get_post_meta($theme_id,'status_q',true),
            'post_type'        => 'status',
            'suppress_filters' => true 
    );
    $status_posts = get_posts($status_args);
    foreach($status_posts as $status): ?>

        <div class="status_post" id="post_<?php echo $status->ID; ?>">
            <div><span><?php echo get_post_meta($status->ID,'status_a',true); ?></span></div>
            <div><span><?php echo get_post_meta($status->ID,'status_name',true); ?></span></div>
        </div>
        <hr class="red"/>
    
    <?php endforeach; ?>
</div>
    
</section>
