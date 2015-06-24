<?php

	 
    $mb[] = array(
		'id' => 'user',
		'title' => __( 'Tilknyt brugerid', 'rwmb' ),
		'pages' => array('medarbejder'),
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
		'id' => 'information',
		'title' => __( 'Information', 'rwmb' ),
		'pages' => array('medarbejder'),
		'context' => 'normal',
		'priority' => 'high',
		'autosave' => true,

		'fields' => array(
			
            array(
				'name'  => __( 'Navn', 'rwmb' ),
				'id'    => "navn",
				//'desc'  => __( '', 'rwmb' ),
				'type'  => 'text',
			),
			
            
            array(
				'name'  => __( 'Adresse', 'rwmb' ),
				'id'    => "addr",
				//'desc'  => __( '', 'rwmb' ),
				'type'  => 'text',
			),
            
            
            
            
            array(
				'name'  => __( 'Postnummer', 'rwmb' ),
				'id'    => "post",
				//'desc'  => __( '', 'rwmb' ),
				'type'  => 'text',
			),
            
            
            array(
				'name'  => __( 'By', 'rwmb' ),
				'id'    => "by",
				//'desc'  => __( '', 'rwmb' ),
				'type'  => 'text',
			),
            
            
             array(
				'name'  => __( 'Initialer', 'rwmb' ),
				'id'    => "initials",
				'type'  => 'text',
			),
            
            array(
				'name'  => __( 'Primært hverv (andet end fag)', 'rwmb' ),
				'id'    => "hverv_prime",
				//'desc'  => __( '', 'rwmb' ),
				'type'  => 'text',
			),
            
            
             array(
				'name'  => __( 'Øvrige hverv', 'rwmb' ),
				'id'    => "hverv",
				//'desc'  => __( '', 'rwmb' ),
				'type'  => 'text',
			),
            
             array(
				'name'  => __( 'Telefonnummer', 'rwmb' ),
				'id'    => "tlf",
				//'desc'  => __( '', 'rwmb' ),
				'type'  => 'text',
			),
            
             array(
				'name'  => __( 'Email', 'rwmb' ),
				'id'    => "email",
				//'desc'  => __( '', 'rwmb' ),
				'type'  => 'email',
			),
			
			)
		);
	
    
    $mb[] = array(
		'id' => 'personlig',
		'title' => __( 'Personlig information', 'rwmb' ),
		'pages' => array('medarbejder'),
		'context' => 'normal',
		'priority' => 'high',
		'autosave' => true,

		'fields' => array(
            
            array(
                        'name'  => __( 'Personlig info', 'rwmb' ),
                        'id'    => "desc",
                        'desc'  => __( 'Her kan angives relevant, spøj eller malende info om denne medarbejder.', 'rwmb' ),
                        'type' => 'textarea',
                    ),
            
            )
        );

    $mb[] = array(
		'id' => 'ledelse',
		'title' => __( 'Ledelse', 'rwmb' ),
		'pages' => array('medarbejder'),
		'context' => 'normal',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(
            
            array(
                    'name'  => __( 'Ansvarsområder', 'rwmb' ),
                    'id'    => "ansvar",
                     'desc'  => __( '', 'rwmb' ),
                     'type' => 'textarea',
                ),
            
            array(
                    'name'  => __( 'Team-kontakt', 'rwmb' ),
                    'id'    => "teamkontakt",
                    //'desc'  => __( '', 'rwmb' ),
                    'type' => 'textarea',
			     ),
            
            array(
                    'name'  => __( 'Udvalgskontakt ', 'rwmb' ),
                    'id'    => "udvalgskontakt",
                    //'desc'  => __( '', 'rwmb' ),
                    'type' => 'textarea',
			     ),
            
            array(
                    'name'  => __( 'Tværgående forløb ', 'rwmb' ),
                    'id'    => "tvaergaaendeforloeb",
                    //'desc'  => __( '', 'rwmb' ),
                    'type' => 'textarea',
			     ),
            
            )
        );
    