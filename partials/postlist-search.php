<div class="search-result">
    <a href="<?php the_permalink(); ?>">
        <h4><?php the_title(); ?></h4>
        <div class="search-date"><?php the_date('D d. M Y'); ?></div>
        <div class="search-excerpt"><?php echo wp_trim_words(get_the_excerpt(),$num_words = 20, $more = '...'); ?></div>
    </a>
</div>
<hr class="red"/>