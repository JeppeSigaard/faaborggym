<?php
$hb_video = get_theme_mod('hb_video_link');
$hb_img = get_theme_mod('hb_video_img');

if(!$hb_video){
    $hb_video = 'https://www.youtu.be/ylislwk6kYs';
}

$yt_data = ' data-src="' . esc_url($hb_video) . '"';

$loop = get_theme_mod('hb_video_loop_active');
$loop_s = get_theme_mod('hb_video_loop_start');
$loop_e = get_theme_mod('hb_video_loop_end');

if(true == $loop){

    $yt_data .= ' data-loop-s="'. $loop_s .'" data-loop-e="' . $loop_e . '"';
}

?>
<section id="slideshow" class="video-banner">
    <div class="video-container hero-banner-video" style="background-image:url(<?php echo esc_url($hb_img) ?>);">
        <div id="ytplayer"<?php echo $yt_data ?>></div>
        <a class="video-play-btn" href="#" id="ytplaybtn">
            <svg class="video-play-btn-ready" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <use xlink:href="#icon-play"></use>
            </svg>
            <svg class="video-play-btn-loading" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <use xlink:href="#icon-loading"></use>
            </svg>
        </a>
    </div>
    <?php if ('' !== get_theme_mod('hb_video_heading')) : ?>
    <div class="text">
        <h2><?php echo esc_attr(get_theme_mod('hb_video_heading')); ?></h2>
    </div>
    <?php endif; ?>
</section>
