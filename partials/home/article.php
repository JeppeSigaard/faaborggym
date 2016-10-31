<?php while(have_posts()) : the_post(); ?>
<article <?php post_class('home-article'); ?>>
    <header>
        <?php
        $bg = '';
        $image_url = wp_get_attachment_image_src( get_post_thumbnail_id(get_the_ID()), 'large' );
        ?>

        <div class="article-image">
            <img src="<?php echo esc_url($image_url[0]) ?>" alt="">
        </div>
        <h1><?php the_title(); ?></h1>
    </header>
    <div class="article-content">
        <?php the_content(); ?>
    </div>
</article>
<?php endwhile; ?>
