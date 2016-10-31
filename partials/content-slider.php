<?php 

$slidetimeout = get_theme_mod('hero_banner_slide_timeout');
if(!$slidetimeout){$slidetimeout = 7000;}

$slidetrans = get_theme_mod('hero_banner_slide_transition');
if(!$slidetrans){$slidetrans = 400;}

?>


<section id="slideshow" class="loading" data-duration="<?php echo $slidetimeout ?>" data-transition="<?php echo $slidetrans ?>">
    <div id="slides" class="owl-carousel">
        <?php foreach( get_theme_mod('hero_banner_slides') as $slide) :

            $blank = '';
            if(!isset($slide['4']) || true == $slide['4'] ){
                $blank = 'target="_blank"';
            }
        
            $img = wp_get_attachment_image_src($slide['0'],'slide-size');
                
            $smamo_slide_filter = '';

            $fileurl = $img[0];

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
                    
            ?>    
            
            <a <?php echo $blank ?>href="<?php echo $slide['3']; ?>" class="slide filter" id="slide_<?php echo $slide->ID ?>">
                <div class="text">
                    <h2><?php echo $slide['1']; ?></h2><br>
                    <span><?php echo implode( '</span><br><span>', explode( "\r\n", $slide['2'] ) ); ?></span>
                </div>
                <img src="<?php echo $fileurl ?>"/>
            </a>

        <?php endforeach;?>
    </div>
</section>
