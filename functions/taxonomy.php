<?php
/* Tilføj ekstra taksonomier */
add_action( 'init', 'smamo_make_tax' );

function smamo_make_tax() {
    
    // Opret udvalg
	$labels = array(
		'name'              => _x( 'Udvalg', 'taxonomy general name' ),
		'singular_name'     => _x( 'Udvalg', 'taxonomy singular name' ),
		'search_items'      => __( 'Søg udvalg' ),
		'all_items'         => __( 'Alle udvalg' ),
		'parent_item'       => __( 'forælder' ),
		'parent_item_colon' => __( 'foreælder:' ),
		'edit_item'         => __( 'Rediger' ),
		'update_item'       => __( 'Opdater' ),
		'add_new_item'      => __( 'Tilføj nyt udvalg' ),
		'new_item_name'     => __( 'Nyt udvalg' ),
		'menu_name'         => __( 'Udvalg' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'udvalg' ),
	);

	register_taxonomy( 'udvalg', array( 'elev','medarbejder' ), $args );
    
    
    
    // Opret kategorier
    $labels = array(
		'name'              => _x( 'Kategorier', 'taxonomy general name' ),
		'singular_name'     => _x( 'Kategori', 'taxonomy singular name' ),
		'search_items'      => __( 'Søg kategori' ),
		'all_items'         => __( 'Alle kategorier' ),
		'parent_item'       => __( 'forælder' ),
		'parent_item_colon' => __( 'forælder:' ),
		'edit_item'         => __( 'Rediger' ),
		'update_item'       => __( 'Opdater' ),
		'add_new_item'      => __( 'Tilføj ny kategori' ),
		'new_item_name'     => __( 'Ny kategori' ),
		'menu_name'         => __( 'Kategorier' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'medarbejdere' ),
	);

	register_taxonomy( 'medarbejdere', array( 'medarbejder' ), $args );
    
    
    
    // Opret studieretning
	$labels = array(
		'name'              => _x( 'Studiekategorier', 'taxonomy general name' ),
		'singular_name'     => _x( 'Studiekategorier', 'taxonomy singular name' ),
		'search_items'      => __( 'Søg i studiekategori' ),
		'all_items'         => __( 'Alle studiekategorier' ),
		'parent_item'       => __( 'forælder' ),
		'parent_item_colon' => __( 'foreælder:' ),
		'edit_item'         => __( 'Rediger' ),
		'update_item'       => __( 'Opdater' ),
		'add_new_item'      => __( 'Tilføj ny kategori' ),
		'new_item_name'     => __( 'Ny kategori' ),
		'menu_name'         => __( 'Kategorier' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'studie-cat' ),
	);

	register_taxonomy( 'studie-cat', array('studieretning' ), $args );
    
    
    // Opret fag
	$labels = array(
		'name'              => _x( 'Fag', 'taxonomy general name' ),
		'singular_name'     => _x( 'Fag', 'taxonomy singular name' ),
		'search_items'      => __( 'Søg fag' ),
		'all_items'         => __( 'Alle udvalg' ),
		'parent_item'       => __( 'forælder' ),
		'parent_item_colon' => __( 'foreælder:' ),
		'edit_item'         => __( 'Rediger' ),
		'update_item'       => __( 'Opdater' ),
		'add_new_item'      => __( 'Tilføj nyt fag' ),
		'new_item_name'     => __( 'Nyt fag' ),
		'menu_name'         => __( 'Fag' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'fag' ),
	);

	register_taxonomy( 'fag', array( 'medarbejder'), $args );
}

add_action( 'init', 'register_metro_routes', 0 );

function register_metro_routes() {
	$labels = array(
		'name'              => _x( 'Ruter', 'taxonomy general name' ),
		'singular_name'     => _x( 'rute', 'taxonomy singular name' ),
		'search_items'      => __( 'Søg i Ruter' ),
		'all_items'         => __( 'Alle Ruter' ),
		'parent_item'       => __( 'Forælder' ),
		'parent_item_colon' => __( 'Forælder:' ),
		'edit_item'         => __( 'Rediger rute' ),
		'update_item'       => __( 'Opdater rute' ),
		'add_new_item'      => __( 'Tilføj ny rute' ),
		'new_item_name'     => __( 'Nyrute' ),
		'menu_name'         => __( 'Ruter' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'skrivemetro/rute' ),
	);

	register_taxonomy( 'rute', array( 'skrivemetro' ), $args );

}
?>