<?php $post_order++; if($post_order !== 1) :?>
<hr class="red">
<?php endif; ?>
<div class="cal-widget-item<?php if($event['data_src'] === 'facebook'){ echo ' fb-event'; } ?>">
    <a href="<?php echo get_bloginfo('url') ?>/kalender/<?php echo $event['id'] ?>">
        <span class="cal-widget-item-date">
            <span class="date-day"><?php echo date_i18n('d', $event['start_time']); ?></span>
            <span class="date-month"><?php echo date_i18n('F', $event['start_time']); ?></span>
        </span>
        <span class="cal-widget-item-title">
            <?php echo $event['name'] ?>
        </span>
    </a>
    <?php if ($event['data_src'] === 'facebook') :?>
    <a class="cal-widget-fb-link" href="http://facebook.com/events/<?php echo $event['id'] ?>">
        <svg viewBox="0 0 16 16"><use xlink:href="#icon-facebook"></use></svg>
    </a>
    <?php endif; ?>
</div>
