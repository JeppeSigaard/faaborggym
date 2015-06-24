<?php if (!current_user_can('manage_options')) { header('location:'.wp_login_url( get_the_permalink($post->ID))); }?>
<?php 
$posts = get_posts(array(
    'post_type' => 'skrivemetro',
    'posts_per_page' => 1,
    'orderby'   => 'menu_order',
    'tax_query' => array(
        array(
            'taxonomy' => 'rute',
            'field' => 'id',
            'terms' => get_queried_object()->term_id,
        )
    )
));

foreach($posts as $post){
    header('location:'.get_the_permalink($post->ID));
}

?>
<?php get_header('skrivemetro'); ?>
<?php get_footer(); ?>