<?php $reading = ''; if(get_the_ID() == $current_id){$reading = ' reading';} ?>

<?php if (get_post_meta(get_the_ID(),'video_include',true) == 1) : ?>

<div class="archive-entry<?php echo $reading; ?>" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" data-post-order="<?php echo $post_order ?>" data-href="<?php the_permalink(); ?>">
                 <div class="archive-img archive-video">
        
                    <?php $embed_code = wp_oembed_get( get_post_meta(get_the_ID(),'video_url',true));   ?>
                    <?php if($embed_code){ echo $embed_code;} ?>

                </div>
    
                <div class="archive-preread">
                    <div class="preread-inner">
                        <h4><?php the_title();?></h4>
                        <?php $subheading = get_post_meta(get_the_ID(),'subheading',true); if ($subheading !== ''): ?>
                        <h6><?php echo $subheading; ?></h6>
                        <?php endif; ?>
                        
                        <?php edit_delete(get_the_ID()); ?>
                        
                    </div>
                </div>
    
                <div class="archive-content">
                    <?php the_content(); ?>
                </div>
            </div> 
            <hr class="red"/>



<?php elseif(has_post_thumbnail()) : ?>

<div class="archive-entry<?php echo $reading; ?>" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" data-post-order="<?php echo $post_order ?>" data-href="<?php the_permalink(); ?>">
                
    
                <?php if (smamo_image_filter(get_the_ID())): ?>

                    <?php if (smamo_has_filtered_thumbnail(get_the_ID(),'news-preview-small')):?>

                    <div class="archive-img" data-attachment="<?php echo get_post_thumbnail_id( get_the_ID() );?>">
                        <?php smamo_filtered_thumbnail(get_the_ID(),'news-preview-small'); ?>
                    </div>

                    <?php else: ?>

                    <div class="archive-img filter" data-attachment="<?php echo get_post_thumbnail_id( get_the_ID() );?>">
                        <?php the_post_thumbnail('news-preview-small'); ?>
                    </div>

                <?php endif; else: ?>

                <div class="archive-img" data-attachment="<?php echo get_post_thumbnail_id( get_the_ID() );?>">
                    <?php the_post_thumbnail('news-preview-small'); ?>
                </div>

                <?php endif; ?>           
    
    
    
                <div class="archive-preread">
                    <div class="preread-inner">
                        <h4><?php the_title();?></h4>
                        <?php $subheading = get_post_meta(get_the_ID(),'subheading',true); if ($subheading !== ''): ?>
                        <h6><?php echo $subheading; ?></h6>
                        <?php endif; ?>
                    </div>
                    
                    <?php edit_delete(get_the_ID()); ?>
                
                </div>
                <div class="archive-content">
                    <?php the_content(); ?>
                </div>
            </div> 
            <hr class="red"/>

<?php else : ?>

<div class="archive-entry archive-entry-no-img<?php echo $reading; ?>" title="<?php the_title(); ?>" id="post_<?php the_ID();?>" data-post-order="<?php echo $post_order ?>" data-href="<?php the_permalink(); ?>">
                <div class="archive-preread">
                    <div class="preread-inner">
                        <h4><?php the_title();?></h4>
                        <?php $subheading = get_post_meta(get_the_ID(),'subheading',true); if ($subheading !== ''): ?>
                        <h6><?php echo $subheading; ?></h6>
                        <?php endif; ?>
                    </div>
                    
                     <?php edit_delete(get_the_ID()); ?>    
                    
                </div>
                <div class="archive-content">
                    <?php the_content(); ?>
                </div>        
            </div>
            <hr class="red"/>

<?php endif; ?>