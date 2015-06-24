<?php
$response = array();

// Hent projekter og temaer som preview
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');



// FILEN ER TEMALØS
define('WP_USE_THEMES', false); 

// Hent wp-load, så vi får mulighed for at bruge wordpress' funktionsarkiv
require '../../../../wp-load.php';



$query_args = array(
    'posts_per_page'   => -1,
	'offset'           => 0,
	'orderby'          => 'menu_order',
	'order'            => 'ASC',
	'post_type'        => 'tema',
	'post_status'      => 'publish',
	'suppress_filters' => true
);


$tema_count = 0;



$temaer = get_posts($query_args);

foreach ($temaer as $post) :
$tema_count ++;

$img = wp_get_attachment_image_src(get_post_meta($post->ID,'slide_img',true),'news-preview-small');
$img_url = $img[0];
$img_should_filter = false;

if (smamo_image_filter($post->ID)){

    if (smamo_has_filtered_slide_img($post->ID,'news-preview-small')){

        $file = explode('?', basename($img_url));
        $file = $file[0];

        $upload_dir = wp_upload_dir();
        $img_url = $upload_dir['baseurl'].'/filtered/'.$file;

    }
    else {

    $img_should_filter = true;

    }
}


$respond_posts = array();

$theme = get_post_meta($post->ID,'theme',true);
if (empty($theme)) {$theme = 1;}

$response[$tema_count] = array(
    
    'id'                => $post->ID,
    'img'               => $img_url,
    'img_should_filter' => $img_should_filter,
    'title'             => $post->post_title,
    'theme'             => $theme,
    'url'               => get_the_permalink($post->ID),
      
);


endforeach;


if ($tema_count == 0){
    $response['error'] = 'Query returned no posts';
}


echo json_encode($response);

?>