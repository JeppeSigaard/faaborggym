<?php 

$map_posts = get_posts(array('post_type'=>'skrivemetro','posts_per_page'=>-1,'orderby'=>'menu_order','post_parent'=>0)); 
$routes = get_terms('rute',array('orderby'=>'id'));

?>
   

<section class="metro-map">
   <h1>Hvor skal du hen?</h1>
    <div class="inner">
        <aside class="top">
            <?php include get_template_directory().'/skrivemetro/statics/ikon-tekst.svg'?>
        </aside>
        <main class="map"> 
            <?php foreach(array(1,2,3) as $year) :?>
            <div class="year year-<?php echo $year ?>">
                <h3><?php echo $year ?>.G</h3>
                <?php foreach($routes as $route) : if($route->slug !== 'skrivning-i-fagene') :?>
                <div class="route route-<?php echo $route->term_id ?>" data-title="<?php echo $route->name ?>">
                    <?php foreach($map_posts as $map): if(get_post_meta($map->ID,'year',true) == $year && has_term($route->name,'rute',$map)) : ?>
                        <?php 

                        // Positionstweak // 
                        $tweak_style = ''; 
                        $tweak = (get_post_meta($map->ID,'tweak',true)); 
                        if($tweak !== '' && $tweak !== '50'){
                            $tweak_style = 'style="left:' . $tweak . '%;"';
                        }

                        ?>
                        <a class="station" href="<?php echo get_the_permalink($map->ID); ?>" title="<?php echo $map->post_title; ?>">
                            <span <?php echo $tweak_style ?> class="paint" title="<?php echo $map->post_title; ?>"></span>
                        </a>
                    <?php endif; endforeach; ?>
                </div>
                <?php endif; endforeach; ?>
            </div>
            <?php endforeach;?>
            <?php foreach($routes as $route) : if($route->slug == 'skrivning-i-fagene') :?>
            <span class="route-bottom route-<?php echo $route->term_id ?>">
                <?php $i = 0; foreach($map_posts as $map): if(has_term($route->name,'rute',$map)) : ?>
                <?php $i ++ ; if ($i == 1) : ?>
                <a class="station paint" href="<?php echo get_the_permalink($map->ID); ?>" title="<?php echo $map->post_title; ?>">
                    <span class="paint" title="<?php echo $map->post_title; ?>"></span>
                </a>
                <?php endif; endif; endforeach; ?>
            </span> 
            <?php endif; endforeach; ?>
        </main>
        <aside class="left">
            <?php include get_template_directory().'/skrivemetro/statics/ikon.svg'?>
            <span class="routes-top"></span>
            <span class="routes-bottom"></span>
        </aside>
        <aside class="right">
            <?php foreach($routes as $route): ?>
                <div class="route route-<?php echo $route->term_id ?>">
                    <span><?php echo $route->name;  ?></span>
                </div>
            <?php endforeach; ?>
        </aside>
    </div>
</section>
<hr class="red"/>