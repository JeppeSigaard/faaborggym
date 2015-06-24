<?php 

// vi skal ikke bruger header, men WP's funktionsbibliotek
define('WP_USE_THEMES', false); 

header('Content-Type: text/html; charset=utf-8');

// Hent wp-load, så vi får mulighed for at bruge wordpress' funktionsarkiv
require '../../../wp-load.php';

$taxonomies = array( 
    'fag',
);


$args = array(
    'orderby'           => 'name', 
    'order'             => 'ASC',
    'hide_empty'        => true, 
    'exclude'           => array(), 
    'exclude_tree'      => array(), 
    'include'           => array(),
    'number'            => '', 
    'fields'            => 'all', 
    'slug'              => '', 
    'parent'            => '',
    'hierarchical'      => true, 
    'child_of'          => 0, 
    'get'               => '', 
    'name__like'        => '',
    'description__like' => '',
    'pad_counts'        => false, 
    'offset'            => '', 
    'search'            => '', 
    'cache_domain'      => 'core'
); 

$terms = get_terms($taxonomies, $args);


foreach($terms as $term){

    echo $term->name.'<br>';
    
    $insert = wp_insert_post(array(
        'post_type' => 'fag-post',
        'post_title'=> $term->name,
        'post_status'=> 'publish',
    
    ),true);
    
    if(is_wp_error($insert)){
        echo $insert->get_error_message().'<br><hr>';
    }
    else {
        echo 'Succes, id: '.$insert.'<br><hr>';
    }
}

