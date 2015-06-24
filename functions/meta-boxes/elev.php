<?php


	 
    $mb[] = array(
		'id' => 'elev_id',
		'title' => __( 'Tilknyt brugerid', 'rwmb' ),
		'pages' => array('elev'),
		'context' => 'side',
		'priority' => 'high',
		'autosave' => true,

		'fields' => array(
            
            array(
                        'name'  => __( 'Tilknyttet bruger id (tal)', 'rwmb' ),
                        'id'    => "userID",
                        'type' => 'text',
                    ),
            
            )
        
        
    );  
    
    
    $mb[] = array(
		'id' => 'info',
		'title' => __( 'Oplysninger', 'rwmb' ),
		'pages' => array('elev'),
		'context' => 'normal',
		'priority' => 'high',
		'autosave' => true,

		'fields' => array(
            
            array(
                'name'  => __( 'Fornavn', 'rwmb' ),
                'id'    => "elev_fname",
                'type' => 'text',
            ),
            
            array(
                'name'  => __( 'Efternavn', 'rwmb' ),
                'id'    => "elev_lname",
                'type' => 'text',
            ),
            
            array(
                'name'  => __( 'Email', 'rwmb' ),
                'id'    => "elev_email",
                'type' => 'email',
            ),
            
            array(
                'name'  => __( 'Klassetrin', 'rwmb' ),
                'id'    => "elev_klasse",
                'type' => 'text',
            ),
            
        )
        
        
    );  