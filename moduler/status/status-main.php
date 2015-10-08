<?php 


$main_permalink = get_the_permalink();
$userlog = is_user_logged_in();

// Status query
$status = new WP_query(array(
    'post_type' => 'status',
    'posts_per_page' => 3,
));


$i = 0;
while( $status->have_posts() ) : $status->the_post(); 
$comments = get_comments( array('post_id' => get_the_ID(),'orderby' => 'post_date', 'order'=> 'ASC') ); 
$comment_count = 0; foreach ($comments as $c) {$comment_count++;}
$special_class = '';

$i ++; if ($i === 1) {

    $special_class = ' first';
    
}



?>
<div class="status-container<?php echo $special_class ?>">
    <h4><?php the_title(); ?></h4>
    <div class="status-posts">
    <div class="status-post-count">
        <a href="#" class="status-post-count-show-all"><?php echo $comment_count ?> tidligere svar</a>
    </div>
    <hr class="red">
    <?php foreach ($comments as $comment) : ?>
        <div class="status-post">
             <span class="status-post-content"><?php echo wp_strip_all_tags($comment->comment_content); ?></span>
             <span class="status-post-author"><?php echo esc_attr($comment->comment_author); ?></span>
             
        </div>
        <hr class="red">
    <?php endforeach; ?>
    </div>
    <form method="post" action="<?php echo admin_url('admin-ajax.php') ?>" class="status-comment" id="status-comment-<?php the_ID(); ?>">
        <input type="hidden" name="action" value="status-post">
        <input type="hidden" name="post_id" value="<?php the_ID(); ?>">
        <div><textarea placeholder="Skriv et svar" rows="1" name="msg" <?php echo ($userlog) ? '': 'disabled'; ?>></textarea></div>
        <div class="user-info" <?php echo ($userlog) ? '': 'style="display:none;"'; ?>>
            <span></span>
            <a href="<?php echo get_edit_user_link(); ?>">Rediger profil</a>
        </div>
        <div class="form-submit">
            <input type="submit" value="Send" <?php echo ($userlog) ? '': 'style="display:none;"'; ?>>
            <a href="<?php echo wp_login_url( home_url() ); ?>" class="button login" <?php echo ($userlog) ? 'style="display:none;"' : ''; ?>>Log ind</a>
            <a href="<?php echo wp_registration_url(); ?>" class="button black register" <?php echo ($userlog) ? 'style="display:none;"' : ''; ?>>Registrer</a>
        </div>
    </form>
</div>
<hr class="red">
<?php endwhile; wp_reset_postdata(); ?>