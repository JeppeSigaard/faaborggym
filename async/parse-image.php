<?php
define('WP_USE_THEMES', false); require('../../../../wp-load.php');

// Vores retur encodes til json, så det er nemt at bruge i javascript.
header('Content-Type: application/json');

function upload_user_file( $file = array() ) {
	
    require_once( ABSPATH . 'wp-admin/includes/admin.php' );
    
    $file_return = wp_handle_upload( $file, array('test_form' => false ) );
	
    
    if( isset( $file_return['error'] ) || isset( $file_return['upload_error_handler'] ) ) {
       echo json_encode(array('error'=>'Error while uploading.'));
    } else {
        
        $filename = $file_return['file'];
        
        $attachment = array(
            'post_mime_type' => $file_return['type'],
            'post_title' => preg_replace( '/\.[^.]+$/', '', basename( $filename ) ),
            'post_content' => '',
            'post_status' => 'inherit',
            'guid' => $file_return['url']
        );
        
        $attachment_id = wp_insert_attachment( $attachment, $file_return['file']);
        
        require_once (ABSPATH . 'wp-admin/includes/image.php' );
        $attachment_data = wp_generate_attachment_metadata( $attachment_id, $filename );
        wp_update_attachment_metadata( $attachment_id, $attachment_data );
        
        if( 0 < intval( $attachment_id ) ) {
			
			$image_url = wp_get_attachment_image_src( $attachment_id, 'news-preview-small');
			
			
			echo json_encode(array(
                'id'            => $attachment_id,
                'url'           => $image_url[0],
                
            ));
        }
    }
    
    return false;
}

if( ! empty( $_FILES ) ) {
    foreach( $_FILES as $file ) {
        if( is_array( $file ) ) {
            $attachment_id = upload_user_file( $file );
        }
    }
}