<?php
// Fagpakker
$labels = array(
    'name'               => _x( 'Studieretninger', 'post type general name', 'smamo' ),
    'singular_name'      => _x( 'studieretning', 'post type singular name', 'smamo' ),
    'menu_name'          => _x( 'Studieretninger', 'admin menu', 'smamo' ),
    'name_admin_bar'     => _x( 'Studieretninger', 'add new on admin bar', 'smamo' ),
    'add_new'            => _x( 'Tilføj ny studieretning', '', 'smamo' ),
    'add_new_item'       => __( 'Tilføj ny studieretning', 'smamo' ),
    'new_item'           => __( 'Ny studieretning', 'smamo' ),
    'edit_item'          => __( 'Rediger', 'smamo' ),
    'view_item'          => __( 'Se studieretning', 'smamo' ),
    'all_items'          => __( 'Studieretninger', 'smamo' ),
    'search_items'       => __( 'Find studieretning', 'smamo' ),
    'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
    'not_found'          => __( 'Start med at oprette en studieretning', 'smamo' ),
    'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
);

$args = array(
    'menu_icon' 		 => 'dashicons-welcome-widgets-menus',
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'studieretning' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => 25,
    'supports'           => array( 'title','thumbnail')
);

register_post_type( 'studieretning', $args );


// Fag post
$labels = array(
    'name'               => _x( 'Fag', 'post type general name', 'smamo' ),
    'singular_name'      => _x( 'fag', 'post type singular name', 'smamo' ),
    'menu_name'          => _x( 'Fag', 'admin menu', 'smamo' ),
    'name_admin_bar'     => _x( 'Fag', 'add new on admin bar', 'smamo' ),
    'add_new'            => _x( 'Tilføj nyt fag', '', 'smamo' ),
    'add_new_item'       => __( 'Tilføj nyt fag', 'smamo' ),
    'new_item'           => __( 'Nyt fag', 'smamo' ),
    'edit_item'          => __( 'Rediger', 'smamo' ),
    'view_item'          => __( 'Se fag', 'smamo' ),
    'all_items'          => __( 'Fag', 'smamo' ),
    'search_items'       => __( 'Find fag', 'smamo' ),
    'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
    'not_found'          => __( 'Start med at oprette et fag', 'smamo' ),
    'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
);

$args = array(
    'menu_icon' 		 => 'dashicons-welcome-widgets-menus',
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => false,
    'show_ui'            => true,
    'show_in_menu'       => 'edit.php?post_type=studieretning',
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'fag-post' ),
    'capability_type'    => 'post',
    'has_archive'        => false,
    'hierarchical'       => false,
    'menu_position'      => 50,
    'supports'           => array( 'title','editor','thumbnail')
);

register_post_type( 'fag-post', $args );
?>