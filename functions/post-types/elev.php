<?php 
// Elever
$labels = array(
    'name'               => _x( 'Elever', 'post type general name', 'smamo' ),
    'singular_name'      => _x( 'elev', 'post type singular name', 'smamo' ),
    'menu_name'          => _x( 'Elever', 'admin menu', 'smamo' ),
    'name_admin_bar'     => _x( 'Elever', 'add new on admin bar', 'smamo' ),
    'add_new'            => _x( 'Tilføj ny ', 'elev', 'smamo' ),
    'add_new_item'       => __( 'Tilføj ny elev', 'smamo' ),
    'new_item'           => __( 'Ny elev', 'smamo' ),
    'edit_item'          => __( 'Rediger', 'smamo' ),
    'view_item'          => __( 'Se elev', 'smamo' ),
    'all_items'          => __( 'Se alle', 'smamo' ),
    'search_items'       => __( 'Find elev', 'smamo' ),
    'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
    'not_found'          => __( 'Start med at oprette en ny elev.', 'smamo' ),
    'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
);

$args = array(
    'menu_icon' 		 => 'dashicons-admin-users',
    'labels'             => $labels,
    'public'             => false, 
    'publicly_queryable' => true, 
    'show_ui'            => true, 
    'show_in_menu'       => true, 
    'query_var'          => true, 
    'rewrite'            => array( 'slug' => 'elev' ),
    'capability_type'    => 'page',
    'has_archive'        => false, // har ikke et arkiv
    'hierarchical'       => false, // ikke hierakisk
    'menu_position'      => 57,
    'supports'           => array( 'title')
);

register_post_type( 'elev', $args );

?>