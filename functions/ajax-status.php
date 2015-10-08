<?php 

add_action( 'wp_ajax_status-post', 'smamo_status_post' );
add_action( 'wp_ajax_nopriv_status-post', 'smamo_status_post' );

function smamo_status_post(){
    $response = array();
    
    // Check om bruger er logget ind
    if(!is_user_logged_in()){
        $response['code'] = '403';
        $response['error'] = 'Du skal være logget ind for at kunne kommentere.';
        wp_die(json_encode($response));
    }
    
    // Fang nuværende bruger
    $user = wp_get_current_user();
    $response['user'] = array(
        'ID' => $user->ID,
        'name' => $user->user_login,
    );
    
    // Fang tekst
    $msg = esc_textarea($_POST['msg']);
    $response['msg'] = $msg;
    
    // fang ID på spørgsmål
    $post_id = wp_strip_all_tags($_POST['post_id']);
    
    // Opret ny kommmentar
    $time = current_time('mysql');

    $data = array(
        'comment_post_ID' => $post_id,
        'comment_author' => $user->user_login,
        'comment_content' => $msg,
        'user_id' => $user->ID,
        'comment_date' => $time,
        'comment_approved' => 1,
    );

    $new = wp_insert_comment($data);
    if(is_wp_error($new)){
        $response['code'] = '503';
        $response['error'] = $new->get_error_message();
        wp_die(json_encode($response));    
    
    }
    
    
    
    // Send succes tilbage
    $response['code'] = 200;
    $response['success'] = 'Successfully posted';
    wp_die(json_encode($response));
}