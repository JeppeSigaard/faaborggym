<?php $reading = ''; ?>

<div class="archive-entry archive-entry-no-img" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" data-href="<?php the_permalink(); ?>">
    <div class="archive-preread">
        <div class="preread-inner">
            <h4><?php the_title();?></h4>
            <div class="post-content">
                <article>
                    <?php the_content(); ?>
                </article>
            </div>
        </div>
    </div>
</div>

<hr class="red"/>