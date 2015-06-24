<?php
$mb[] = array(
		'id' => 'status',
		'title' => __( 'Opret spørgsmål/svar - boks på temasiden', 'rwmb' ),
		'pages' => array('tema'),
		'context' => 'normal',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(
            
            
            array(
                'name'  => __('Slå spørgsmål/svar - boks til'),
                'id'    => "status_include",
                'type'  => 'checkbox',
                'std'   => '0',
            ),
            
            array(
                'name'  => __('Spørgsmål'),
                'id'    => "status_q",
                'type'  => 'text',
            )
            
        )
        
        
        );  



$mb[] = array(
		'id' => 'theme',
		'title' => __( 'Farveskema', 'rwmb' ),
		'pages' => array('tema'),
		'context' => 'side',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(
            
            array(
				'name'     => __( 'Vælg et farveskema', 'rwmb' ),
				'id'       => "theme",
				'type'     => 'select',
				// Array of 'value' => 'Label' pairs for select box
				'options'  => array(
					'1' => __( 'Standard', 'rwmb' ),
					'2' => __( 'Lakrids', 'rwmb' ),
                    '3' => __( 'Lavendel', 'rwmb' ),
                    '4' => __( 'Skovbund', 'rwmb' ),
                    '5' => __( 'Minimalistisk', 'rwmb' ),
				),
				// Select multiple values, optional. Default is false.
				'multiple'    => false,
				'std'         => '1',
			),
            
        )
        
        
        );  

$mb[] = array(
		'id' => 'theme',
		'title' => __( 'Tema', 'rwmb' ),
		'pages' => array('tema-post'),
		'context' => 'side',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(
            
            
            array(
                'name'  => __('Vis tema-indlæg i temaet:'),
                'id'    => "theme",
                'type'    => 'post',

				// Post type
				'post_type' => 'tema',
				// Field type, either 'select' or 'select_advanced' (default)
				'field_type' => 'select',
				// Query arguments (optional). No settings means get all published posts
				'query_args' => array('posts_per_page' => -1),
                'placeholder' => __( 'ingen','rwmb'),
            ),
            
        )
        
        
        );

$mb[] = array(
		'id' => 'subheading',
		'title' => __( 'Underoverskrift', 'rwmb' ),
		'pages' => array('tema-post'),
		'context' => 'normal',
		'priority' => 'high',
		'autosave' => true,

		'fields' => array(
            
            
            array(
                'name'  => __('Underoverskrift'),
                'id'    => "subheading",
                'type'    => 'textarea',
            
            ),
            
        )
        
        
        );