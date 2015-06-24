<div data-post-order="<?php echo $post_order ?>" class="mb-entry<?php echo $post_reading ?>" id="post_<?php the_ID(); ?>" title="<?php the_title(); ?>" data-href="<?php the_permalink(); ?>">
    <div>
        <?php if (smamo_image_filter(get_the_ID())): ?>
            
            <?php if (smamo_has_filtered_img(get_the_ID(),'medarbejder')): ?>
            
                <div class="mb-image">
                    <?php smamo_filtered_img(get_the_ID(),'medarbejder'); ?>
                </div>
        
            <?php else :?>
            
                <div class="mb-image filter">
                    <?php $image = get_post_meta(get_the_ID(), 'img',true) ?>
                    <?php $load_image = wp_get_attachment_image_src($image,'medarbejder');?>
                    <img src="<?php echo $load_image[0] ?>"/>
                </div>
        
        
        <?php endif; else : ?>
        
        <div class="mb-image">
            <?php $image = get_post_meta(get_the_ID(), 'img',true) ?>
            <?php $load_image = wp_get_attachment_image_src($image,'medarbejder');?>
            <img src="<?php echo $load_image[0] ?>"/>
        </div>
        
        <?php endif;?>
        
        
        
        <div class="mb-preread">
            <div class="preread-inner">
                <div class="mb-name"><?php the_title(); ?></div>
                <h4 class="mb-fag">
                    <?php $fags = wp_get_post_terms( get_the_ID(), 'fag'); 
                    foreach (  $fags as $fag){    
                    echo $fag->name . '<br/>';
                    }
                    ?>

                    <?php $hverv_prime = get_post_meta(get_the_ID(),'hverv_prime',true); if (!empty($hverv_prime))
                    {
                        echo $hverv_prime;
                    }?>
                </h4>

                <?php $hverv = get_post_meta(get_the_ID(), 'hverv',true); if ($hverv !== '') : ?>
                <div class="mb-ovrige">
                    <h6>Øvrige hverv:</h6>
                    <span><?php echo $hverv ?></span>
                </div>
                <?php endif; ?>

                <div class="arrow"></div>
            </div>
        </div>           
           <?php 
            $mb_about = array(
                'desc'  => get_post_meta(get_the_ID(),'desc',true),
                'ansvar' => get_post_meta(get_the_ID(),'ansvar',true),
                'teamkontakt' => get_post_meta(get_the_ID(),'teamkontakt',true),
                'udvalgskontakt' => get_post_meta(get_the_ID(),'udvalgskontakt',true),
                'tvaergaaendeforloeb' => get_post_meta(get_the_ID(),'tvaergaaendeforloeb',true)
            );
?>
             <div class="mb-about">
               
                <?php if ($mb_about['desc'] !== '') {echo apply_filters('the_content',$mb_about['desc']);} ?>
                
                <?php $tlf = get_post_meta(get_the_ID(), 'tlf',true); if ($tlf !== '') : ?>
                <div class="mb-tlf">
                    <h6>Telefon:</h6>
                    <span><?php echo $tlf ?></span>
                </div>
                <?php endif; ?>

                <?php $email = get_post_meta(get_the_ID(), 'email',true); if ($email !== '') : ?>
                <div class="mb-email">
                    <h6>Email:</h6>
                    <span><?php echo $email ?></span>
                </div>
                <?php endif; ?>

                <?php $addr = get_post_meta(get_the_ID(), 'addr',true); if ($addr !== '') : ?>
                <div class="mb-addr">
                    <h6>Adresse:</h6>
                    <span><?php echo $addr ?></span>
                    <span><?php echo get_post_meta(get_the_ID(), 'post',true) .' '.  get_post_meta(get_the_ID(), 'by',true); ?></span>
                </div>
                <?php endif; ?>
                
                
                <?php if ($mb_about['ansvar'] !== '') : ?>
                    <div class="dropdown">
                    <h6><strong>Ansvarsområder</strong></h6>
                    <p><?php echo nl2br($mb_about['ansvar']); ?></p>
                    </div>
                <?php endif; ?>
                <?php if ($mb_about['teamkontakt'] !== '') : ?>
                    <div class="dropdown">
                    <h6><strong>Teamkontakt</strong></h6>
                    <p><?php echo nl2br($mb_about['teamkontakt']); ?></p>
                    </div>
                <?php endif; ?>
                <?php if ($mb_about['udvalgskontakt'] !== '') : ?>
                    <div class="dropdown">
                    <h6><strong>Udvalgskontakt</strong></h6>
                    <p><?php echo nl2br($mb_about['udvalgskontakt']); ?></p>
                    </div>
                <?php endif; ?>
                <?php if ($mb_about['tvaergaaendeforloeb'] !== '') : ?>
                    <div class="dropdown">
                    <h6><strong>Tværgående forløb</strong></h6>
                    <p><?php echo nl2br($mb_about['tvaergaaendeforloeb']); ?></p>
                    </div>
                <?php endif; ?>
                
            </div>  
    </div>
</div>