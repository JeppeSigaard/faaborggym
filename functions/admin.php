<?php 

/* FUNKTIONER TIL AT RYDDE OP I ADMINISTRATOR PANEL */


// Ryd op i admin menuen
function remove_menus(){
    remove_menu_page( 'edit.php' );                             //Fjern Posts
    remove_menu_page( 'edit-comments.php' );                    //Fjern Comments
    remove_menu_page( 'plugins.php' );                          //Fjern Plugins
    remove_menu_page( 'tools.php' );                            //Fjern Tools
    remove_menu_page( 'users.php' );                            //Fjern Brugere
    remove_menu_page( 'bwp_minify_general' );                   //Fjern BWP
    remove_menu_page( 'bwp_gxs_generator' );                   //Fjern BWP
}

// tilføj menuer
function add_menus(){
    
add_menu_page('Medier', 'Medier', 'manage_options', 'upload.php', '', 'dashicons-admin-media', 10 );

}


// Ryd op i undermenupunkter
function adjust_the_wp_menu() {
	
	
	// Udseende
	remove_submenu_page( 'themes.php', 'theme-editor.php' ); // Editor
	
	// Plugins
	remove_submenu_page( 'plugins.php', 'plugin-editor.php' ); // Editor
	
	
	// Indstillinger
	remove_submenu_page( 'options-general.php', 'options-discussion.php' ); // Diskussion
	remove_submenu_page( 'options-general.php', 'options-permalink.php' ); // Permalinks
    add_submenu_page( 'options-general.php', 'Plugins', 'Plugins', 'manage_options', 'plugins.php'); 
    add_submenu_page( 'options-general.php', 'Brugere', 'Brugere', 'manage_options', 'users.php'); 

}


// pretify
function add_margin_to_titles() {
   echo '<style type="text/css">
           #post-body-content .postarea{margin: -30px 0px 50px;padding-bottom:20px;}
			#post-body-content .postarea:first-child{margin: 0px;padding:0px;}
			.toplevel_page_themes?lang=da {display:none;}
			.toplevel_page_themes?lang=en {display:none;}
         </style>';
}


// Fjern standard meta boxes fra dashboard
function remove_dashboard_meta() {
        remove_meta_box( 'dashboard_incoming_links', 'dashboard', 'normal' );
        remove_meta_box( 'dashboard_plugins', 'dashboard', 'normal' );
        remove_meta_box( 'dashboard_primary', 'dashboard', 'normal' );
        remove_meta_box( 'dashboard_secondary', 'dashboard', 'normal' );
        remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' );
        remove_meta_box( 'dashboard_recent_drafts', 'dashboard', 'side' );
        remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
        remove_meta_box( 'dashboard_right_now', 'dashboard', 'normal' );
        remove_meta_box( 'dashboard_activity', 'dashboard', 'normal');//since 3.8
}



// Overskriv favicon til temas favicon
function show_favicon() {
echo '<link href="'.get_bloginfo("template_directory").'/favicon.ico" rel="icon" type="image/x-icon">';
}


// Ryd op i administratorbaren
function remove_admin_bar_links() {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('wp-logo');          // Remove the WordPress logo
    $wp_admin_bar->remove_menu('about');            // Remove the about WordPress link
    $wp_admin_bar->remove_menu('wporg');            // Remove the WordPress.org link
    $wp_admin_bar->remove_menu('documentation');    // Remove the WordPress documentation link
    $wp_admin_bar->remove_menu('support-forums');   // Remove the support forums link
    $wp_admin_bar->remove_menu('feedback');         // Remove the feedback link
    // $wp_admin_bar->remove_menu('site-name');        // Remove the site name menu
    // $wp_admin_bar->remove_menu('view-site');        // Remove the view site link
    // $wp_admin_bar->remove_menu('updates');          // Remove the updates link
    $wp_admin_bar->remove_menu('comments');         // Remove the comments link
    $wp_admin_bar->remove_menu('new-content');      // Remove the content link
    // $wp_admin_bar->remove_menu('w3tc');             // If you use w3 total cache remove the performance link
    // $wp_admin_bar->remove_menu('my-account');       // Remove the user details tab
    $wp_admin_bar->remove_menu( 'ubermenu' );    //Fjern ubermenu
}


// Kør funktioner
add_action( 'admin_menu', 'remove_menus',999 );
add_action( 'admin_menu', 'add_menus' );
add_action( 'admin_menu', 'adjust_the_wp_menu', 999 );
add_action('admin_head', 'add_margin_to_titles');
add_action( 'admin_init', 'remove_dashboard_meta' );
add_action('admin_head', 'show_favicon');
add_action( 'wp_before_admin_bar_render', 'remove_admin_bar_links',999);




// Fjern administratorbar for alle undtagen administratorer
if (!function_exists('df_disable_admin_bar')) {

	function df_disable_admin_bar() {
		
		if (!current_user_can('manage_options')) {
            
			remove_action('admin_footer', 'wp_admin_bar_render', 1000);
			
			remove_action('wp_footer', 'wp_admin_bar_render', 1000);
			
			
			function remove_admin_bar_style_backend() { 
				echo '<style>body.admin-bar #wpcontent, body.admin-bar #adminmenu { padding-top: 0px !important; }</style>';
			}	  
			add_filter('admin_head','remove_admin_bar_style_backend');
			
			
			function remove_admin_bar_style_frontend() {
				echo '<style type="text/css" media="screen">
				html { margin-top: 0px !important; }
				* html body { margin-top: 0px !important; }
				</style>';
			}
			add_filter('wp_head','remove_admin_bar_style_frontend', 99);
			
		}
  	}
}
add_action('init','df_disable_admin_bar');




function custom_login_url() {return home_url( '/' );}
add_filter( 'login_headerurl', 'custom_login_url' );

function custom_login_title() {return get_option( 'blogname' );}
add_filter( 'login_headertitle', 'custom_login_title' );

function my_login_logo() { ?>
    <style type="text/css">
        body.login div#login h1 a {
            background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/statics/fg-logo.png');
            padding-bottom: 0px;
            background-size: auto;
            width:100%;
            height:50px;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );

?>