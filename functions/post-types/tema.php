<?php 
// Temaer
$labels = array(
    'name'               => _x( 'Temaer og Projekter', 'post type general name', 'smamo' ),
    'singular_name'      => _x( 'Tema', 'post type singular name', 'smamo' ),
    'menu_name'          => _x( 'Temaer', 'admin menu', 'smamo' ),
    'name_admin_bar'     => _x( 'Temaer', 'add new on admin bar', 'smamo' ),
    'add_new'            => _x( 'Tilføj nyt', 'tema/projekt', 'smamo' ),
    'add_new_item'       => __( 'Tilføj nyt tema/projekt', 'smamo' ),
    'new_item'           => __( 'Nyt tema/projekt', 'smamo' ),
    'edit_item'          => __( 'Rediger', 'smamo' ),
    'view_item'          => __( 'Se tema/projekt', 'smamo' ),
    'all_items'          => __( 'Se alle', 'smamo' ),
    'search_items'       => __( 'Find tema/projekt', 'smamo' ),
    'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
    'not_found'          => __( 'Start med at oprette et nyt tema/projekt.', 'smamo' ),
    'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
);

$args = array(
    'menu_icon' 		 => 'dashicons-welcome-learn-more',
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'tema' ),
    'capability_type'    => 'page',
    'has_archive'        => true,
    'hierarchical'       => true,
    'menu_position'      => 25,
    'supports'           => array( 'title')
);

register_post_type( 'tema', $args );


// Tema-indlæg
$labels = array(
    'name'               => _x( 'Indlæg', 'post type general name', 'smamo' ),
    'singular_name'      => _x( 'Indlæg', 'post type singular name', 'smamo' ),
    'menu_name'          => _x( 'Indlæg', 'admin menu', 'smamo' ),
    'name_admin_bar'     => _x( 'Indlæg', 'add new on admin bar', 'smamo' ),
    'add_new'            => _x( 'Tilføj nyt', 'indlæg', 'smamo' ),
    'add_new_item'       => __( 'Tilføj nyt indlæg', 'smamo' ),
    'new_item'           => __( 'Nyt indlæg', 'smamo' ),
    'edit_item'          => __( 'Rediger', 'smamo' ),
    'view_item'          => __( 'Se indlæg', 'smamo' ),
    'all_items'          => __( 'Tema-indlæg', 'smamo' ),
    'search_items'       => __( 'Find indlæg', 'smamo' ),
    'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
    'not_found'          => __( 'Start med at oprette et nyt indlæg.', 'smamo' ),
    'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
);

$args = array(
    'menu_icon' 		 => 'dashicons-welcome-learn-more',
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => 'edit.php?post_type=tema',
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'tema-post' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => true,
    'menu_position'      => 25,
    'supports'           => array( 'title', 'editor', 'thumbnail')
);

register_post_type( 'tema-post', $args );
?>