<?php

function summary_blocks($content){

    $block_start = '<div class="block">';
    $block_start_first = '<div class="first">';
    $block_end = '</div>';
    
    $content = $block_start_first.$content.$block_end;
    $content = str_replace('<h2>',$block_end.$block_start.'<h2>',$content);
    $content = str_replace('<h3>',$block_end.$block_start.'<h3>',$content);
    //$content = str_replace('<h4>',$block_end.$block_start.'<h4>',$content);
    
    return $content;

}

$term_id = 50;
$terms = get_the_terms( $post->ID, 'rute' );
foreach($terms as $term){
$term_id = $term->term_id;
$route_obj = $term;
}

$related = get_posts(array(
    'post_type' => 'skrivemetro',
    'posts_per_page' => -1,
    'orderby'   => 'menu_order',
    'tax_query' => array(
        array(
            'taxonomy' => 'rute',
            'field' => 'id',
            'terms' => $term_id,
            'post_parent'   => 0,
        )
    )
));
?>
<?php get_header('skrivemetro'); ?>
<?php include get_template_directory().'/skrivemetro/section-route-nav.php'; ?>
<section class="content">
    <nav class="toggle-full">
        <a href="#" class="full-off active">Opsummering</a>
        <a href="#" class="full-on">Fuldt indblik</a>
        <hr class="red"/>
    </nav>
    <main class="route-<?php echo $term_id; ?>" id="page-center">
        <?php while(have_posts()): the_post(); ?>
        <article class="before-paint summary" id="post-<?php echo $post->ID; ?>">
        <?php echo summary_blocks(apply_filters('the_content',$post->post_content)); ?>
        </article>
        <?php endwhile; ?>
        <hr class="red"/>
    </main>
    <aside class="sidebar-route route-<?php echo $term_id; ?>">
        <div class="inner">
            <?php foreach($related as $rel) : $current = ''; if($post->ID == $rel->ID) {$current = ' current';} ?>
            <a class="paint<?php echo $current; ?>" href="<?php echo get_the_permalink($rel->ID); ?>"><?php echo $rel->post_title ?></a>
            <?php endforeach;?>
        </div>
        <hr class="red"/>
        <?php get_template_part('partials/skrivemetro','links'); ?>
    </aside>
</section>
<?php get_footer('skrivemetro'); ?>