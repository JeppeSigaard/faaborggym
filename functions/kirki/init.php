<?php

function my_theme_kirki_textdomain( ) {

    $config['i18n']['add-new']  = esc_attr__( 'Tilføj', 'fagy' );

    return $config;
}

if (class_exists('Kirki')){

    add_filter( 'kirki/config', 'my_theme_kirki_textdomain' );

    // Config for kirki
    Kirki::add_config( 'faaborg_gym', array(
        'capability'    => 'edit_theme_options',
        'option_type'   => 'theme_mod',
    ) );

    // Topbar
    require 'topbar.php';

    // Hero banner
    require 'hero-banner.php';

    // Footer
    require 'footer.php';

    // Facebook
    require 'facebook.php';

}
