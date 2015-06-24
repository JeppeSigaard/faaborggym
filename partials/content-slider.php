<?php 
// Fil der henter slides til slideshow på forsiden
//  $smamo_settings indeholder alle vores variabler om hastighed, tid, antal slides osv.
$smamo_settings = get_option('smamo_settings') 
?>

<section id="slideshow" class="loading" data-duration="<?php echo $smamo_settings['slide_duration'] ?>" data-transition="<?php echo $smamo_settings['slide_transition'] ?>">
    <div id="slides" class="owl-carousel">
        <?php $slide_args = array(
            'posts_per_page'    => -1,
            'post_type'         => 'slide',
            'suppres_filters'   => true,
        );?>

        <?php $slides = get_posts($slide_args); ?>
        
        <?php foreach($slides as $slide) : ?>
                
            <?php $blank = ''; if(get_post_meta($slide->ID,'slide_url_blank',true) == 1){$blank = 'target="_blank"'; } ?>
        
            <?php $img = wp_get_attachment_image_src(get_post_meta($slide->ID,'slide_img',true),'slide-size')?>
            
            <?php 
                
                $smamo_slide_filter = '';
                
                $fileurl = $img[0];

                if(get_post_meta($slide->ID,'img_filter',true) !== '0'){
                    $smamo_slide_filter = ' filter';
                    
                    $upload_dir = wp_upload_dir();
                    $imgPath = $img[0];
                    $file = explode('?', basename($imgPath));
                    $file = $file[0];
                    $imgPath = str_replace($upload_dir['baseurl'], $upload_dir['basedir'],$imgPath);
                    if(file_exists($upload_dir['basedir'].'/filtered/'.$file)){

                        $fileurl = $upload_dir['baseurl'].'/filtered/'.$file;
                        $smamo_slide_filter = '';

                        
                    }
                
                }
                    
            ?>    
            
            <a <?php echo $blank ?>href="<?php echo get_post_meta($slide->ID, 'slide_url', true); ?>" class="slide<?php echo $smamo_slide_filter; ?>" id="slide_<?php echo $slide->ID ?>">
                <div class="text">
                    <h2><?php echo get_post_meta($slide->ID,'slide_heading',true) ?></h2><br>
                    <span><?php echo implode( '</span><br><span>', explode( "\r\n", get_post_meta($slide->ID,'slide_subheading',true) ) ); ?></span>
                </div>
                <img src="<?php echo $fileurl ?>"/>
            </a>

        <?php endforeach;?>
    </div>
</section>