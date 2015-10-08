<?php 

// Status
$labels = array(
    'name'               => _x( 'Statusopdateringer', 'post type general name', 'smamo' ),
    'singular_name'      => _x( 'Status', 'post type singular name', 'smamo' ),
    'menu_name'          => _x( 'Status', 'admin menu', 'smamo' ),
    'name_admin_bar'     => _x( 'Status', 'add new on admin bar', 'smamo' ),
    'add_new'            => _x( 'Tilføj ny status', '', 'smamo' ),
    'add_new_item'       => __( 'Tilføj ny status', 'smamo' ),
    'new_item'           => __( 'Ny status', 'smamo' ),
    'edit_item'          => __( 'Rediger', 'smamo' ),
    'view_item'          => __( 'Se status', 'smamo' ),
    'all_items'          => __( 'Stausopdateringer', 'smamo' ),
    'search_items'       => __( 'Find status', 'smamo' ),
    'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
    'not_found'          => __( 'Start med at oprette en status (evt. fra frontend).', 'smamo' ),
    'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
);

$args = array(
    'menu_icon' 		 => 'dashicons-format-chat',
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => false,
    'show_ui'            => true,
    'show_in_menu'       => 'moduler',
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'status' ),
    'capability_type'    => 'page',
    'has_archive'        => false,
    'hierarchical'       => false,
    'menu_position'      => 25,
    'supports'           => array( 'title',)
);

register_post_type( 'status', $args );

?>