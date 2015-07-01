<?php 
// Slides
$labels = array(
    'name'               => _x( 'Slideshow', 'post type general name', 'smamo' ),
    'singular_name'      => _x( 'Slide', 'post type singular name', 'smamo' ),
    'menu_name'          => _x( 'Slides', 'admin menu', 'smamo' ),
    'name_admin_bar'     => _x( 'Slides', 'add new on admin bar', 'smamo' ),
    'add_new'            => _x( 'Tilføj nyt slide', '', 'smamo' ),
    'add_new_item'       => __( 'Tilføj nyt slide', 'smamo' ),
    'new_item'           => __( 'Nyt slide', 'smamo' ),
    'edit_item'          => __( 'Rediger', 'smamo' ),
    'view_item'          => __( 'Se slide', 'smamo' ),
    'all_items'          => __( 'Slideshow', 'smamo' ),
    'search_items'       => __( 'Find slide', 'smamo' ),
    'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
    'not_found'          => __( 'Start med at oprette et nyt slide.', 'smamo' ),
    'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
);

$args = array(
    'menu_icon' 		 => 'dashicons-images-alt2',
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => false,
    'show_ui'            => true,
    'show_in_menu'       => 'moduler',
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'slide' ),
    'capability_type'    => 'page',
    'has_archive'        => false,
    'hierarchical'       => false,
    'menu_position'      => 25,
    'supports'           => array( 'title',)
);

register_post_type( 'slide', $args );
?>