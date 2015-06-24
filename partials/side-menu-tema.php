<div class="theme-sidemenu-container">
    <ul id="menu-tema-sidemenu-1" class="menu">
        <li class="theme-color-heading">
             <a href="<?php echo bloginfo('url') ?>/tema/">Projekter og temaer</a>
        </li>


<?php 
$theme_list = get_posts(array(
    
    'post_type'         =>'tema',
    'number_posts'      => -1,
    'offset'            => 0,
    'post_status'       => 'publish',
    'suppress_filters'  => 'true',
));

foreach ($theme_list as $theme) :

    $theme_color_class = 'theme-color-1';
    $theme_color = get_post_meta($theme->ID,'theme',true);
    if(!empty($theme_color)){$theme_color_class = 'theme-color-'.$theme_color;}
    
?>

<li class="<?php echo $theme_color_class; if ($theme->ID == $theme_id){echo ' current-theme';}?>">
    <a href="<?php echo get_the_permalink($theme->ID); ?>"><?php echo get_the_title($theme->ID); ?></a>
</li>

<?php endforeach;?>
    
    </ul>
</div>
<hr class="red"/>