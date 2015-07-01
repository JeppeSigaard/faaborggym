<?php
/* Tilføj skrivemetro */

register_post_type( 'skrivemetro', array(

    'menu_icon' 		 => 'dashicons-share-alt',
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'skrivemetro' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => true,
    'menu_position'      => 57,
    'supports'           => array( 'title','editor','page-attributes'),
    'labels'             => array(

        'name'               => _x( 'Skrivemetro', 'post type general name', 'smamo' ),
        'singular_name'      => _x( 'Artikel', 'post type singular name', 'smamo' ),
        'menu_name'          => _x( 'Skrivemetro', 'admin menu', 'smamo' ),
        'name_admin_bar'     => _x( 'Skrivemetro', 'add new on admin bar', 'smamo' ),
        'add_new'            => _x( 'Tilføj ny ', 'artikel', 'smamo' ),
        'add_new_item'       => __( 'Tilføj ny', 'smamo' ),
        'new_item'           => __( 'Ny artikel', 'smamo' ),
        'edit_item'          => __( 'Rediger', 'smamo' ),
        'view_item'          => __( 'Se artikel', 'smamo' ),
        'all_items'          => __( 'Se alle', 'smamo' ),
        'search_items'       => __( 'Find artikel', 'smamo' ),
        'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
        'not_found'          => __( 'Start med at oprette en ny artikel.', 'smamo' ),
        'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
        ),
   )
);
?>