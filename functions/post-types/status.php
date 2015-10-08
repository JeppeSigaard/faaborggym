<?php 

// Status
$labels = array(
    'name'               => _x( 'Spørgsmål/svar', 'post type general name', 'smamo' ),
    'singular_name'      => _x( 'Spørgsmål', 'post type singular name', 'smamo' ),
    'menu_name'          => _x( 'Spørgsmål/svar', 'admin menu', 'smamo' ),
    'name_admin_bar'     => _x( 'Spørgsmål', 'add new on admin bar', 'smamo' ),
    'add_new'            => _x( 'Tilføj nyt spørgsmål', '', 'smamo' ),
    'add_new_item'       => __( 'Tilføj nyt spørgsmål', 'smamo' ),
    'new_item'           => __( 'Nyt spørgsmål', 'smamo' ),
    'edit_item'          => __( 'Rediger', 'smamo' ),
    'view_item'          => __( 'Se spørgsmål', 'smamo' ),
    'all_items'          => __( 'Se alle', 'smamo' ),
    'search_items'       => __( 'Find spørgsmål', 'smamo' ),
    'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
    'not_found'          => __( 'Start med at oprette et spørgsmål', 'smamo' ),
    'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
);

$args = array(
    'menu_icon' 		 => 'dashicons-format-chat',
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => false,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'status' ),
    'capability_type'    => 'page',
    'has_archive'        => false,
    'hierarchical'       => false,
    'menu_position'      => 25,
    'supports'           => array( 'title','comments')
);

register_post_type( 'status', $args );

?>