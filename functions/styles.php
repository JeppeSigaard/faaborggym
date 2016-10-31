<?php

add_action( 'wp_enqueue_scripts', 'smamo_load_styles', 60 );
function smamo_load_styles()
{
    wp_enqueue_style( 'dashicons' );
    //wp_enqueue_style('owl-carousel', get_bloginfo('template_directory').'/owl-carousel/owl.carousel.css');
    wp_enqueue_style('main', get_bloginfo('template_directory').'/css/main.css');
}
