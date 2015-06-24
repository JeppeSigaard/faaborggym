<?php 


add_action( 'init', 'add_post_types' );
function add_post_types() {
	
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
    
    
    // Medarbejdere
	$labels = array(
		'name'               => _x( 'Medarbejdere', 'post type general name', 'smamo' ),
		'singular_name'      => _x( 'medarbejder', 'post type singular name', 'smamo' ),
		'menu_name'          => _x( 'Medarbejdere', 'admin menu', 'smamo' ),
		'name_admin_bar'     => _x( 'Medarbejdere', 'add new on admin bar', 'smamo' ),
		'add_new'            => _x( 'Tilføj ny ', 'medarbejder', 'smamo' ),
		'add_new_item'       => __( 'Tilføj ny medarbejder', 'smamo' ),
		'new_item'           => __( 'Ny medarbejder', 'smamo' ),
		'edit_item'          => __( 'Rediger', 'smamo' ),
		'view_item'          => __( 'Se medarbejder', 'smamo' ),
		'all_items'          => __( 'Se alle', 'smamo' ),
		'search_items'       => __( 'Find medarbejder', 'smamo' ),
		'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
		'not_found'          => __( 'Start med at oprette en ny medarbejder.', 'smamo' ),
		'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
	);

	$args = array(
		'menu_icon' 		 => 'dashicons-businessman',
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'medarbejder' ),
		'capability_type'    => 'page',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 56,
		'supports'           => array( 'title','page-attributes')
	);

	register_post_type( 'medarbejder', $args );
    
    
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
	
}


/* Tilføj skrivemetro */

add_action( 'init', 'smamo_add_skrivemetro' );

function smamo_add_skrivemetro() {
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
}




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

// Gem billede som thumbnnail, når post typen medarbejder opdateres
function smamo_sync_thumb($post_id){


    $img_id = get_post_meta($post_id, 'img',true);
    if(isset($img_id)){
        set_post_thumbnail($post_id, $img_id);
    }

}

add_action('save_post','smamo_sync_thumb');


?>