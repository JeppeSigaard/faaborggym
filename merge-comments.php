<?php 

define('WP_USE_THEMES', false); 
require '../../../wp-load.php';

$spg = get_posts(array(
    'numberposts' => -1,
    'post_type' => 'status',
));

$qs = array();
foreach($spg as $status){
    $status_id = false;
    $string = get_post_meta($status->ID,'status_q',true);
    
    if(!in_array($string,$qs)){
        $qs[] = $string;
        
        $new = wp_insert_post(array(
            'post_type' => 'status',
            'post_status' => 'publish',
            'post_title' => $string,
        ),true);
        
        if(is_wp_error($new)){
            die($new->get_error_message());
        }
        
        $status_id = $new;
    }
    
    else{    
        $existing = get_page_by_title($string,'OBJECT','status');    
        $status_id = $existing->ID;
    }
    
    if($status_id){
    
        $comment = wp_insert_comment(array(
            'comment_post_ID' => $status_id,
            'comment_author' => get_post_meta($status->ID,'status_name',true),
            'comment_content' => get_post_meta($status->ID,'status_a',true),
            'user_id' => get_post_meta($status->ID,'userID',true),
            'comment_date' => $status->post_date_gmt,
            'comment_approved' => 1,
        ));
        
        if($comment === 0){
            die('Unable to add comment '.$comment);
        }
    }
};
