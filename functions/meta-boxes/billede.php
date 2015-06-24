<?php 

$mb[] = array(
		'id' => 'image',
		'title' => __( 'Billede', 'rwmb' ),
		'pages' => array('medarbejder'),
		'context' => 'normal',
		'priority' => 'high',
		'autosave' => true,

		'fields' => array(
            
            array(
                        'name'  => __( 'Upload eller rediger billede', 'rwmb' ),
                        'id'    => "img",
                        'type' => 'file_advanced',
                        'max_file_uploads' => 1,
                        'mime_type' => 'image', 
                    ),
            
            array(
                'name'  => __('Filtrer billede automatisk'),
                'id'    => "img_filter",
                'type'  => 'checkbox',
                'std'   => '1',
            )
            
            )
        );

$mb[] = array(
		'id' => 'image_filter',
		'title' => __( 'Filtrer thumbnail automatisk', 'rwmb' ),
		'pages' => array('tema-post','nyt'),
		'context' => 'side',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(

            
            array(
                'name'  => __('Filtrer billede'),
                'id'    => "img_filter",
                'type'  => 'checkbox',
                'std'   => '1',
            )
            
            )
        );

$mb[] = array(
		'id' => 'image',
		'title' => __( 'Billede', 'rwmb' ),
		'pages' => array('slide','tema'),
		'context' => 'normal',
		'priority' => 'high',
		'autosave' => true,

		'fields' => array(
            
            array(
                'name'  => __( 'Baggrundsbillede', 'rwmb' ),
                'id'    => "slide_img",
                'desc'  => __( 'Sørg for at uploade en stor fil. Systemet sørger selv for at beskære til det rigtige format.', 'rwmb' ),
                'type' => 'image_advanced',
                'max_file_uploads' => 1,
            ),
            
            array(
                'name'  => __('Filtrer billede automatisk'),
                'id'    => "img_filter",
                'type'  => 'checkbox',
                'std'   => '1',
            )
            
        )
        
        
        );  