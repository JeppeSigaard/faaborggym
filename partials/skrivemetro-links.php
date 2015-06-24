<?php

$internal = get_post_meta(get_the_ID(),'internal_link',true);
$external = get_post_meta(get_the_ID(),'ex_link',true);

?>

<?php if(!empty($internal[0])) : ?>
<div class="inner sm-link-box">
    <h4>Læs også</h4>
    <?php foreach($internal as $link) : $link = get_post($link)?>
    <a class="paint" href="<?php echo get_permalink($link->ID) ?>"><?php echo $link->post_title; ?></a> 
    <?php endforeach;?> 
</div>
<hr class="red"/>
<?php endif; ?>

<?php if(!empty($external[0]['ex_url'])) : ?>
<div class="inner sm-link-box">
    <h4>Eksterne henvisninger</h4>
    <?php foreach($external as $link) : ?>
        <a class="paint" href="<?php echo $link['ex_url'] ?>"><?php echo $link['ex_text']; ?></a>
    <?php endforeach;?> 
</div>
<hr class="red"/>
<?php endif;?>