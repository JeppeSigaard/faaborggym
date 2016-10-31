<section id="news" class="news-container fb-news">
    <?php

    $i = 0;
    while ($i < 5) :

        $size = 'news-preview-small';

        $bm_class = 'news-entry';

        $i++;

        if ($i == 1){$bm_class .= ' news-preview-large';}

        if ($i > 3){ $bm_class .= ' behind-more';}

    ?>

        <a target="_blank" href="#" class="<?php echo $bm_class ?>">
            <div>
                <div class="news-img loading">
                </div>
                <div class="news-preread">
                    <div class="news-date">&nbsp;</div>
                    <div class="news-title">Indlæser...</div>
                </div>
                <div class="news-footer">Vis opslaget</div>
            </div>
        </a>

    <?php endwhile;?>
    <a target="_blank" href="<?php echo esc_url(get_theme_mod('facebook_page')); ?>" class="news-more-btn">Flere nyheder fra Facebook</a>
</section>
<hr class="red"/>
