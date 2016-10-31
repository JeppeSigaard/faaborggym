<?php 


if (!is_admin()) add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);
    function my_jquery_enqueue() {
        wp_deregister_script('jquery');
        wp_register_script('jquery', "//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.js", false, null,true);
        wp_enqueue_script('jquery');
    }


add_action( 'wp_enqueue_scripts', 'smartmonkey_load_scripts' );
function smartmonkey_load_scripts()
{
    
    wp_enqueue_script( 'script-all', get_template_directory_uri() . '/js/main-min.js', array('jquery'), false, true );
    wp_localize_script('script-all','wpURL', get_bloginfo('template_directory'));
    wp_localize_script('script-all','baseURL', get_bloginfo('url'));
    wp_localize_script('script-all','ajaxURL', admin_url('admin-ajax.php'));
}


// remove wp version param from any enqueued scripts
function vc_remove_wp_ver_css_js( $src ) {
    if ( strpos( $src, 'ver=' ) )
        $src = remove_query_arg( 'ver', $src );
    return $src;
}



function my_enqueue($hook) {
    if ( 'post.php' != $hook ) {
        return;
    }
    wp_enqueue_script( 'jq',get_template_directory_uri() . '/js/jq.js');
    wp_enqueue_script( 'admin-toggle', get_template_directory_uri() . '/js/admin-toggle.js' );
}
add_action( 'admin_enqueue_scripts', 'my_enqueue' );


//add_filter( 'style_loader_src', 'vc_remove_wp_ver_css_js', 9999 );
add_filter( 'script_loader_src', 'vc_remove_wp_ver_css_js', 9999 );

?>
