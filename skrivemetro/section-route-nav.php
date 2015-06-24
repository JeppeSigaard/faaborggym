<section class="route-nav">
    <nav>
        <a class="prev" href="#"><span class="dashicons dashicons-arrow-left-alt2"></span></a>
        <a class="next" href="#"><span class="dashicons dashicons-arrow-right-alt2"></span></a>
    </nav>
    <div class="route-name"><?php echo $route_obj->name; ?></div>
    <div class="top-route route-<?php echo $route_obj->term_id; ?>">
        <?php foreach($related as $rel) :?>
           <?php $current = ''; if ($rel->ID == $post->ID): $current = ' current'; endif;?>
            <a title="<?php echo $rel->post_title ?>" id="nav-station-<?php echo $rel->ID; ?>" class="station before-paint<?php echo $current ?>" href="<?php echo get_the_permalink($rel->ID)?>"><?php echo $rel->post_title ?></a>
        <?php endforeach; ?>
    </div>
</section>
<hr class="red"/>