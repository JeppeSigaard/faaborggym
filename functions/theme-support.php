<?php

// Tilføj thumbnails
add_theme_support('post-thumbnails');

add_filter( 'post_thumbnail_html', 'remove_width_attribute', 10 );
add_filter( 'image_send_to_editor', 'remove_width_attribute', 10 );

function remove_width_attribute( $html ) {
   $html = preg_replace( '/(width|height)="\d*"\s/', "", $html );
   return $html;
}


// Billedstørrelser
add_image_size('slide-size', 1206, 438, true);
add_image_size('gallery-size-large', 500, 560, true);
add_image_size('gallery-size-small', 250, 180, true);
add_image_size('news-preview-large',440,440,true);
add_image_size('news-preview-small',440,220,true);
add_image_size('medarbejder',190,190,true);

global $content_width;
if (!isset($content_width)) {
    $content_width=640;
}

// tilføj widgets
add_theme_support('widgets');

// Tilføj baggrundsdbillede / - farve
// add_theme_support( 'custom-background' );

// HTML5
add_theme_support('html5');

// Tilføj logo
add_theme_support( 'custom-header', array(
	
	'default-image'          => '',
	'random-default'         => false,
	'width'                  => 215,
	'height'                 => 33,
	'flex-height'            => false,
	'flex-width'             => false,
	'default-text-color'     => '',
	'header-text'            => false,
	'uploads'                => true,
	
	));

add_filter('embed_oembed_html', 'my_embed_oembed_html', 99, 4);
function my_embed_oembed_html($html, $url, $attr, $post_id) {
  return '<div class="video-container">' . $html . '</div>';
}

/*
add_filter( 'image_send_to_editor', 'wp_image_wrap_init', 10, 8 );    
    function wp_image_wrap_init( $html, $id, $caption, $title, $align, $url, $size, $alt ) {
    return '<div class="filter"><img src="'. $url .'"/></div>';
}
*/

