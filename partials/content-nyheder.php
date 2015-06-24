<section id="news" class="news-container">
    <?php $get_news = get_posts(array(
            'posts_per_page'   =>   5,
            'post_type'        => 'nyt',
            'suppress_filters' => true 
    ));
    
    $i = 0;

    foreach($get_news as $news) :

        $size = 'news-preview-small'; 

        $bm_class = '';
        
        $i++; 
        
        if ($i == 1){$size = 'news-preview-large';} 
        
        if ($i > 3){ $bm_class=" behind-more";}
    
    ?>
        
        <a href="<?php echo get_the_permalink($news->ID) ?>" class="news-entry<?php echo $bm_class ?> <?php echo $size ?>" id="news_<?php echo $news->ID ?>">
            <div>
                
                
                <?php if (smamo_image_filter($news->ID)): ?>
    
                    <?php if (smamo_has_filtered_thumbnail($news->ID,$size)):?>

                    <div class="news-img">
                        <?php smamo_filtered_thumbnail($news->ID,$size); ?>
                    </div>

                    <?php else: ?>

                    <div class="news-img filter">
                        <?php echo get_the_post_thumbnail($news->ID,$size); ?>
                    </div>

                <?php endif; else: ?>

                <div class="news-img">
                    <?php echo get_the_post_thumbnail($news->ID,$size); ?>
                </div>

                <?php endif; ?>
                
                
                
                
                
                <div class="news-preread">
                    <div class="news-date"><?php echo get_the_date( 'd\.m\.Y', $news->ID ); ?></div>
                    <div class="news-title"><?php echo $news->post_title?></div>
                </div>
            </div>
        </a>
    
    <?php endforeach;?>
    <a href="<?php echo get_bloginfo('url') ?>/nyt/" class="news-more-btn">Flere nyheder</a>

</section>
<hr class="red"/>