<?php

add_filter( 'rwmb_meta_boxes', 'smamo_add_boxes' );

function smamo_add_boxes(){
    
    $smamo_user_list = array(
        //0 => 'ingen',
    );
    
    $smamo_all_users = get_users();
    
    foreach ($smamo_all_users as $user){
    
        $smamo_user_list[$user->ID] = __($user->display_name); 
        
    }
    

    require('meta-boxes/billede.php');
    
    require('meta-boxes/video.php');

    require('meta-boxes/medarbejder.php');

    require('meta-boxes/elev.php');

    require('meta-boxes/status.php');

    require('meta-boxes/tema.php');

    require('meta-boxes/slideshow.php');

    require('meta-boxes/studieretninger.php');
    
    require('meta-boxes/skrivemetro.php');
    
    
    $mb[] = array(

		'id' => 'editors',
		'title' => __( 'Tilføj redaktører', 'rwmb' ),
		'pages' => array( 'tema'),
		'context' => 'side',
		'priority' => 'default',
		'autosave' => true,
		'fields' => array(
        
            array(
				'name'     => __( '', 'rwmb' ),
				'id'       => "editors",
				'type'     => 'select',
                
				'options'  => $smamo_user_list,
				'placeholder' => __( 'Tilføj en readktør', 'rwmb' ),
                'clone' => 'true',
			),
            
        )
        
    
    );
    
return $mb;

}

?>