<?php
	 
    $mb[] = array(
		'id' => 'interesse',
		'title' => __( 'Hvis du interesserer dig for:', 'rwmb' ),
		'pages' => array('studieretning'),
		'context' => 'normal',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(
            
            array(
                        'name'  => __( 'Interesse', 'rwmb' ),
                        'id'    => "interesse",
                        'desc'  => __( '', 'rwmb' ),
                        'type' => 'text',
                        'clone' => true,
                    ),
            
            )
        
        
        );



    $mb[] = array(
		'id' => 'adgang',
		'title' => __( 'Adgang', 'rwmb' ),
		'pages' => array('studieretning'),
		'context' => 'normal',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(
            
            array(
                        'name'  => __( 'Beskrivelse af hvad studieretningen er adgangsgivende til', 'rwmb' ),
                        'id'    => "adgang",
                        'desc'  => __( '', 'rwmb' ),
                        'type' => 'textarea',
                    ),
            
            )
        
        
        );


    $mb[] = array(
		'id' => 'afag',
		'title' => __( 'Fag på A-niveau', 'rwmb' ),
		'pages' => array('studieretning'),
		'context' => 'normal',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(
            
            array(
                        'name'  => __( 'Obligatorisk', 'rwmb' ),
                        'id'    => "a_obligatorisk",
                        'desc'  => __( '', 'rwmb' ),
                        'type'  => 'post',
                        'clone' => true,
                        'type'  => 'post',
                        'placeholder' => __( 'ingen','rwmb'),

                        // Post type
                        'post_type' => 'fag-post',
                        // Field type, either 'select' or 'select_advanced' (default)
                        'field_type' => 'select_advanced',
                        // Query arguments (optional). No settings means get all published posts
                        'query_args' => array(
                            'post_status'    => 'publish',
                            'posts_per_page' => - 1,
                            'order_by'  => 'post_title',
                            'order'     => 'ASC',
                        )
            ),
            
            array(
                        'name'  => __( 'Studieretningsfag', 'rwmb' ),
                        'id'    => "a_retning",
                        'desc'  => __( '', 'rwmb' ),
                        'type'  => 'post',
                        'clone' => true,
                        'type'  => 'post',
                        'placeholder' => __( 'ingen','rwmb'),

                        // Post type
                        'post_type' => 'fag-post',
                        // Field type, either 'select' or 'select_advanced' (default)
                        'field_type' => 'select_advanced',
                        // Query arguments (optional). No settings means get all published posts
                        'query_args' => array(
                            'post_status'    => 'publish',
                            'posts_per_page' => - 1,
                            'order_by'  => 'post_title',
                            'order'     => 'ASC',
                        )
            ),
            
             array(
                        'name'  => __( 'Valgfag', 'rwmb' ),
                        'id'    => "a_valg",
                        'desc'  => __( '', 'rwmb' ),
                        'type'  => 'post',
                        'clone' => true,
                        'type'  => 'post',
                        'placeholder' => __( 'ingen','rwmb'),

                        // Post type
                        'post_type' => 'fag-post',
                        // Field type, either 'select' or 'select_advanced' (default)
                        'field_type' => 'select_advanced',
                        // Query arguments (optional). No settings means get all published posts
                        'query_args' => array(
                            'post_status'    => 'publish',
                            'posts_per_page' => - 1,
                            'order_by'  => 'post_title',
                            'order'     => 'ASC',
                        )
            ),
            
        ),
        
    );



     $mb[] = array(
		'id' => 'bfag',
		'title' => __( 'Fag på B-niveau', 'rwmb' ),
		'pages' => array('studieretning'),
		'context' => 'normal',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(
            
            array(
                        'name'  => __( 'Obligatorisk', 'rwmb' ),
                        'id'    => "b_obligatorisk",
                        'desc'  => __( '', 'rwmb' ),
                        'type'  => 'post',
                        'clone' => true,
                        'type'  => 'post',
                        'placeholder' => __( 'ingen','rwmb'),

                        // Post type
                        'post_type' => 'fag-post',
                        // Field type, either 'select' or 'select_advanced' (default)
                        'field_type' => 'select_advanced',
                        // Query arguments (optional). No settings means get all published posts
                        'query_args' => array(
                            'post_status'    => 'publish',
                            'posts_per_page' => - 1,
                            'order_by'  => 'post_title',
                            'order'     => 'ASC',
                        )
            ),
            
            array(
                        'name'  => __( 'Studieretningsfag', 'rwmb' ),
                        'id'    => "b_retning",
                        'desc'  => __( '', 'rwmb' ),
                        'type'  => 'post',
                        'clone' => true,
                        'type'  => 'post',
                        'placeholder' => __( 'ingen','rwmb'),

                        // Post type
                        'post_type' => 'fag-post',
                        // Field type, either 'select' or 'select_advanced' (default)
                        'field_type' => 'select_advanced',
                        // Query arguments (optional). No settings means get all published posts
                        'query_args' => array(
                            'post_status'    => 'publish',
                            'posts_per_page' => - 1,
                            'order_by'  => 'post_title',
                            'order'     => 'ASC',
                        )
            ),
            
             array(
                        'name'  => __( 'Valgfag', 'rwmb' ),
                        'id'    => "b_valg",
                        'desc'  => __( '', 'rwmb' ),
                        'type'  => 'post',
                        'clone' => true,
                        'type'  => 'post',
                        'placeholder' => __( 'ingen','rwmb'),

                        // Post type
                        'post_type' => 'fag-post',
                        // Field type, either 'select' or 'select_advanced' (default)
                        'field_type' => 'select_advanced',
                        // Query arguments (optional). No settings means get all published posts
                        'query_args' => array(
                            'post_status'    => 'publish',
                            'posts_per_page' => - 1,
                            'order_by'  => 'post_title',
                            'order'     => 'ASC',
                        )
            ),
            
        ),
        
    );



    $mb[] = array(
		'id' => 'cfag',
		'title' => __( 'Fag på C-niveau', 'rwmb' ),
		'pages' => array('studieretning'),
		'context' => 'normal',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(
            
            array(
                        'name'  => __( 'Obligatorisk', 'rwmb' ),
                        'id'    => "c_obligatorisk",
                        'desc'  => __( '', 'rwmb' ),
                        'type'  => 'post',
                        'clone' => true,
                        'type'  => 'post',
                        'placeholder' => __( 'ingen','rwmb'),

                        // Post type
                        'post_type' => 'fag-post',
                        // Field type, either 'select' or 'select_advanced' (default)
                        'field_type' => 'select_advanced',
                        // Query arguments (optional). No settings means get all published posts
                        'query_args' => array(
                            'post_status'    => 'publish',
                            'posts_per_page' => - 1,
                            'order_by'  => 'post_title',
                            'order'     => 'ASC',
                        )
            ),
            
            array(
                        'name'  => __( 'Studieretningsfag', 'rwmb' ),
                        'id'    => "c_retning",
                        'desc'  => __( '', 'rwmb' ),
                        'type'  => 'post',
                        'clone' => true,
                        'type'  => 'post',
                        'placeholder' => __( 'ingen','rwmb'),

                        // Post type
                        'post_type' => 'fag-post',
                        // Field type, either 'select' or 'select_advanced' (default)
                        'field_type' => 'select_advanced',
                        // Query arguments (optional). No settings means get all published posts
                        'query_args' => array(
                            'post_status'    => 'publish',
                            'posts_per_page' => - 1,
                            'order_by'  => 'post_title',
                            'order'     => 'ASC',
                        )
            ),
            
             array(
                        'name'  => __( 'Valgfag', 'rwmb' ),
                        'id'    => "c_valg",
                        'desc'  => __( '', 'rwmb' ),
                        'type'  => 'post',
                        'clone' => true,
                        'type'  => 'post',
                        'placeholder' => __( 'ingen','rwmb'),

                        // Post type
                        'post_type' => 'fag-post',
                        // Field type, either 'select' or 'select_advanced' (default)
                        'field_type' => 'select_advanced',
                        // Query arguments (optional). No settings means get all published posts
                        'query_args' => array(
                            'post_status'    => 'publish',
                            'posts_per_page' => - 1,
                            'order_by'  => 'post_title',
                            'order'     => 'ASC',
                        )
            ),
            
        ),
        
    );


 $mb[] = array(
		'id' => 'regler',
		'title' => __( 'Regler', 'rwmb' ),
		'pages' => array('studieretning'),
		'context' => 'normal',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(
            
            array(
                        'name'  => __( 'Beskrivelse af regler om sammensætning af fag på studieretningen', 'rwmb' ),
                        'id'    => "regler",
                        'desc'  => __( '', 'rwmb' ),
                        'type' => 'textarea',
                    ),
            
            )
        
        
        );


$mb[] = array(
		'id' => 'adgangskort',
		'title' => __( 'Link til adgangskortet', 'rwmb' ),
		'pages' => array('studieretning'),
		'context' => 'normal',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(
            
            array(
                        'name'  => __( 'Link til adgangskortet', 'rwmb' ),
                        'id'    => "adgangskort",
                        'desc'  => __( '', 'rwmb' ),
                        'type' => 'url',
                        'clone' => true,
                    ),
            
            )
        
        
        );
