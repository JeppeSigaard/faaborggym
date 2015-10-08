<?php

////////////////////////////////////////////////////////
/* --                                              -- */
/* --                 FAABORG GYM                  -- */
/* --          TEMA TIL FAABORG GYMNASIUM          -- */
/* --               2014 SMARTMONKEY               -- */
/* -- Alle rettigheder tilfalder Faaborg Gymnasium -- */
/* --                                              -- */
////////////////////////////////////////////////////////

////////////////////////////////////////////////
/* -- GRUNDLÆGGENDE INDSTILLINGER FOR TEMA -- */
////////////////////////////////////////////////

add_action( 'after_setup_theme', 'smartmonkey_setup' );
function smartmonkey_setup(){
    
    // smamo
    load_theme_textdomain( 'smamo', get_template_directory() . '/languages' );

    // Hent theme_support
    require('functions/theme-support.php');

    // Tilføj menuer
    require('functions/menus.php');

} // END smartmonkey_setup




///////////////////////////////////
/* -- HENT PHP FRA functions/ -- */
///////////////////////////////////

// Tilføj stylesheet
require('functions/styles.php');

// Tilføj scripts
require('functions/scripts.php');

// Tilføj widgets
require('functions/widgets.php');

// Tilføj admin.php
require('functions/admin.php');

// Modificer header
require('functions/header.php');

// Tilføj ekstra post types
require('functions/post-types.php');

// Tilføj taxonomier
require('functions/taxonomy.php');

// Moduler: options page og post types
require('functions/moduler.php');

// Ekstra felter
require('functions/meta-boxes.php');

// Hjælpefunktioner
require('functions/helper-functions.php');

// Shortcodes
require('functions/shortcodes.php');

// Footer
require('functions/footer-options.php');


// Status post
require('functions/ajax-is-logged-in.php');
require('functions/ajax-status.php');



/////////////////////////
/* -- INDSTIL TITEL -- */
/////////////////////////

add_filter( 'the_title', 'smartmonkey_title' );
function smartmonkey_title( $title ) {if ( $title == '' ) {return '·';} else {return $title;}}
add_filter( 'wp_title', 'smartmonkey_filter_wp_title' );
function smartmonkey_filter_wp_title( $title ){return $title . esc_attr( get_bloginfo( 'name' ) );}




/*  Thumbnail upscale
/* ------------------------------------ */ 
function alx_thumbnail_upscale( $default, $orig_w, $orig_h, $new_w, $new_h, $crop ){
    if ( !$crop ) return null; // let the wordpress default function handle this
 
    $aspect_ratio = $orig_w / $orig_h;
    $size_ratio = max($new_w / $orig_w, $new_h / $orig_h);
 
    $crop_w = round($new_w / $size_ratio);
    $crop_h = round($new_h / $size_ratio);
 
    $s_x = floor( ($orig_w - $crop_w) / 2 );
    $s_y = floor( ($orig_h - $crop_h) / 2 );
 
    return array( 0, 0, (int) $s_x, (int) $s_y, (int) $new_w, (int) $new_h, (int) $crop_w, (int) $crop_h );
}
add_filter( 'image_resize_dimensions', 'alx_thumbnail_upscale', 10, 6 );




///////////////////////////////////
/* -- SESSIONS INDSTILLES HER -- */
///////////////////////////////////

add_action('init', 'myStartSession', 1);

function myStartSession() {
    if(!session_id()) {
        session_start();
    }
}

function myEndSession() {
    session_destroy ();
}


?>