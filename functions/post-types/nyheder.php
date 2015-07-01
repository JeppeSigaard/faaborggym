<?php 
	
	// Nyheder
	$labels = array(
		'name'               => _x( 'Nyheder', 'post type general name', 'smamo' ),
		'singular_name'      => _x( 'Nyhed', 'post type singular name', 'smamo' ),
		'menu_name'          => _x( 'Nyheder', 'admin menu', 'smamo' ),
		'name_admin_bar'     => _x( 'Nyheder', 'add new on admin bar', 'smamo' ),
		'add_new'            => _x( 'Tilføj ny ', 'nyhed', 'smamo' ),
		'add_new_item'       => __( 'Tilføj ny', 'smamo' ),
		'new_item'           => __( 'Ny nyhed', 'smamo' ),
		'edit_item'          => __( 'Rediger', 'smamo' ),
		'view_item'          => __( 'Se nyhed', 'smamo' ),
		'all_items'          => __( 'Se alle', 'smamo' ),
		'search_items'       => __( 'Find nyhed', 'smamo' ),
		'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
		'not_found'          => __( 'Start med at oprette en ny nyhed.', 'smamo' ),
		'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
	);

	$args = array(
		'menu_icon' 		 => 'dashicons-testimonial',
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'nyt' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 16,
		'supports'           => array( 'title', 'editor', 'thumbnail')
	);

	register_post_type( 'nyt', $args );
    
?>