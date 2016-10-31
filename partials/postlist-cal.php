<?php

$post_order ++;

$url_id = get_query_var('event_id');

$post_class = 'archive-entry type-cal';
$post_class .= ($url_id && $url_id == $event['id']) ? ' reading' : '';
$post_class .= ($event['data_src'] === 'facebook') ? ' fb-event' : '';
$post_class .= ($event['cover'] === '') ? ' archive-entry-no-img' : '';


$event_time = 'Klokken ' . date_i18n('H.i',$event['start_time']);
if('' !== $event['end_time']){
    $event_time .= ' - ' . date_i18n('H.i',$event['end_time']);
}

$link = esc_url(get_bloginfo('url') . '/kalender/' . $event['id'] . '/');

?>
<div title="<?php echo $event['name'] ?>" class="<?php echo $post_class ?>" id="post_<?php echo $event['id'] ?>" data-post-order="<?php echo $post_order ?>" data-href="<?php echo $link ?>">
    <div class="archive-cal-date">
        <span><?php echo date_i18n('d',$event['start_time']); ?></span>
        <span><?php echo date_i18n('F',$event['start_time']); ?></span>
    </div>
    <div class="archive-img">
        <?php if ('' !== $event['cover']) : ?>
        <img src="<?php echo $event['cover'] ?>">
        <?php endif; ?>
    </div>
    <?php if ('facebook' === $event['data_src']) : ?>
        <a target="_blank" href="<?php echo $event['link'] ?>">
            <svg viewBox="0 0 16 16" class="archive-img-fb"><use xlink:href="#icon-facebook"></use></svg>
        </a>
    <?php endif; ?>
    <div class="archive-preread">
        <h4><?php echo $event['name']; ?></h4>
    </div>
    <div class="archive-content">
        <header class="archive-content-header">
            <div class="archive-cal-date">
                <span><?php echo date_i18n('d',$event['start_time']); ?></span>
                <span><?php echo date_i18n('F',$event['start_time']); ?></span>
            </div>
            <div class="archive-cal-time"><?php echo $event_time ?></div>
            <div class="archive-cal-address"><?php echo $event['address']; ?></div>
            <?php if ('facebook' === $event['data_src']) : ?>
            <a target="_blank" href="<?php echo $event['link'] ?>">
                <svg viewBox="0 0 16 16" class="archive-cal-fb"><use xlink:href="#icon-facebook"></use></svg>
            </a>
            <?php endif; ?>
        </header>
        <h2><?php echo $event['name'] ?></h2>
        <?php echo apply_filters('the_content',$event['description']); ?>
        <?php if(isset($event['ticket_uri']) && '' !== $event['ticket_uri']) : ?>
        <a target="_blank" class="archive-content-ticket" href="<?php echo $event['ticket_uri'] ?>">Tilmed</a>
        <?php endif; ?>
    </div>
</div>
<hr class="red"/>
