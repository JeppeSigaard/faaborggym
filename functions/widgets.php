<?php 

add_action( 'widgets_init', 'smartmonkey_widgets_init' );
function smartmonkey_widgets_init(){

    // Forsidens Widgets
    register_sidebar( array (
    'name' => __( 'Forsidens venstre sidebar', 'smartmonkey' ),
    'id' => 'front-widgets-left',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-left">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    
    register_sidebar( array (
    'name' => __( 'Forsidens højre sidebar', 'smartmonkey' ),
    'id' => 'front-widgets-right',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-right">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    
    
    // Nyheders widgets
    register_sidebar( array (
    'name' => __( 'Nyheders venstre sidebar', 'smartmonkey' ),
    'id' => 'news-widgets-left',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-left">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    
    register_sidebar( array (
    'name' => __( 'Nyheders højre sidebar', 'smartmonkey' ),
    'id' => 'news-widgets-right',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-right">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    
    
    // Tema widgets
    register_sidebar( array (
    'name' => __( 'Temaers venstre sidebar', 'smartmonkey' ),
    'id' => 'tema-widgets-left',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-left">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    
    register_sidebar( array (
    'name' => __( 'Temaers højre sidebar', 'smartmonkey' ),
    'id' => 'tema-widgets-right',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-right">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    
    
    // Medarbejder widgets
    register_sidebar( array (
    'name' => __( 'Medarbejderes venstre sidebar', 'smartmonkey' ),
    'id' => 'mb-widgets-left',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-left">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    
    register_sidebar( array (
    'name' => __( 'Medarbejderes højre sidebar', 'smartmonkey' ),
    'id' => 'mb-widgets-right',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-right">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    
    
    // Studieretning widgets 
    register_sidebar( array (
    'name' => __( 'Studieretnings venstre sidebar', 'smartmonkey' ),
    'id' => 'sr-widgets-left',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-left">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    
    register_sidebar( array (
    'name' => __( 'Studieretnings højre sidebar', 'smartmonkey' ),
    'id' => 'sr-widgets-right',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-right">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    
    
    
    // Sider widgets
    register_sidebar( array (
    'name' => __( 'Undersiders venstre sidebar', 'smartmonkey' ),
    'id' => 'page-widgets-left',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-left">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    
    register_sidebar( array (
    'name' => __( 'Undersiders højre sidebar', 'smartmonkey' ),
    'id' => 'page-widgets-right',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-right">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    
    
    // Kalendersiders widgets
    register_sidebar( array (
    'name' => __( 'Kalendersiders venstre sidebar', 'smartmonkey' ),
    'id' => 'cal-widgets-left',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-left">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    
    register_sidebar( array (
    'name' => __( 'Kalendersiders højre sidebar', 'smartmonkey' ),
    'id' => 'cal-widgets-right',
    'before_widget' => '<div id="%1$s" class="widget-container %2$s front-widget-right">',
    'after_widget' => "</div><hr class='red'/>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
    ) );
    


}



// Fjern standardwidgets
function unregister_default_widgets() {
     unregister_widget('WP_Widget_Pages');
     unregister_widget('WP_Widget_Calendar');
     unregister_widget('WP_Widget_Archives');
     unregister_widget('WP_Widget_Links');
     unregister_widget('WP_Widget_Meta');
     // unregister_widget('WP_Widget_Search');
     // unregister_widget('WP_Widget_Text');
     unregister_widget('WP_Widget_Categories');
     unregister_widget('WP_Widget_Recent_Posts');
     unregister_widget('WP_Widget_Recent_Comments');
     unregister_widget('WP_Widget_RSS');
     unregister_widget('WP_Widget_Tag_Cloud');
     //unregister_widget('WP_Nav_Menu_Widget');
     unregister_widget('Twenty_Eleven_Ephemera_Widget');
 }
 add_action('widgets_init', 'unregister_default_widgets', 11);


// Hjælpefunktioner
require 'widgets/helpers.php';


/* Ekstra widgets */
require 'widgets/smamo-gul-kasse.php';
require 'widgets/smamo-instagram-widget.php';
require 'widgets/smamo-img-widget.php';

