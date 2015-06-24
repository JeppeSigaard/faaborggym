<?php 


/* Shortcode der kan bruges til at vise en enkelt post i content */
function smamo_post_shortcode( $atts ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'id' => '',
		), $atts )
	);
    
    if (empty($id)){
    exit;
    }

    $embed_post = get_post($id);
    ob_start();
    setup_postdata( $GLOBALS['post'] =& $embed_post );
    
    include get_template_directory().'/partials/shortcode-post.php';
    
    wp_reset_postdata();
    
    return ob_get_clean();
    
}
add_shortcode( 'post', 'smamo_post_shortcode' );




/* Shortcode der kan bruges til at vise en enkelt post i content */
function smamo_archive_shortcode( $atts ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'id' => '',
		), $atts )
	);
    
    if (empty($id)){
    exit;
    }

    $embed_post = get_post($id);
    ob_start();
    setup_postdata( $GLOBALS['post'] =& $embed_post );
    
    include get_template_directory().'/partials/shortcode-archive.php';
    
    wp_reset_postdata();
    
    return ob_get_clean();
    
}
add_shortcode( 'archive_post', 'smamo_archive_shortcode' );