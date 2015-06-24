<?php
	 
    $mb[] = array(
		'id' => 'user',
		'title' => __( 'Tilknyt brugerid', 'rwmb' ),
		'pages' => array('status'),
		'context' => 'side',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(
            
            array(
                        'name'  => __( 'Tilknyttet bruger id (tal)', 'rwmb' ),
                        'id'    => "userID",
                        'desc'  => __( '', 'rwmb' ),
                        'type' => 'text',
                    ),
            
            )
        
        
        );  
    
    
    $mb[] = array(
		'id' => 'content',
		'title' => __( 'Indhold', 'rwmb' ),
		'pages' => array('status'),
		'context' => 'normal',
		'priority' => 'high',
		'autosave' => true,

		'fields' => array(
            
            array(
                'name'  => __( 'Spørgsmål', 'rwmb' ),
                'id'    => "status_q",
                'desc'  => __( '', 'rwmb' ),
                'type' => 'text',
            ),
            
            array(
                'name'  => __( 'Svar', 'rwmb' ),
                'id'    => "status_a",
                'desc'  => __( '', 'rwmb' ),
                'type' => 'text',
            ),
            
            array(
                'name'  => __( 'bruger', 'rwmb' ),
                'id'    => "status_name",
                'desc'  => __( '', 'rwmb' ),
                'type' => 'text',
            ),
            
        )
        
        
        );  
