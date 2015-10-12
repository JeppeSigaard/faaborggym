<?php



register_post_type( 'kalender', array(

    'menu_icon' 		 => 'dashicons-calendar',
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'kalender' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => 22,
    'supports'           => array( 'title', 'thumbnail','editor'),
    'labels'             => array(

        'name'               => _x( 'Begivenheder', 'post type general name', 'smamo' ),
        'singular_name'      => _x( 'Begivenhed', 'post type singular name', 'smamo' ),
        'menu_name'          => _x( 'Begivenheder', 'admin menu', 'smamo' ),
        'name_admin_bar'     => _x( 'Begivenheder', 'add new on admin bar', 'smamo' ),
        'add_new'            => _x( 'Tilføj ny ', 'begivenhed', 'smamo' ),
        'add_new_item'       => __( 'Tilføj ny', 'smamo' ),
        'new_item'           => __( 'Ny begivenhed', 'smamo' ),
        'edit_item'          => __( 'Rediger', 'smamo' ),
        'view_item'          => __( 'Se begivenhed', 'smamo' ),
        'all_items'          => __( 'Se alle', 'smamo' ),
        'search_items'       => __( 'Find begivenhed', 'smamo' ),
        'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
        'not_found'          => __( 'Start med at oprette en ny begivenhed.', 'smamo' ),
        'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
        ),
   )
);