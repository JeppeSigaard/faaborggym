<?php
    
    $mb[] = array(
		'id' => 'content',
		'title' => __( 'Tekst og link', 'rwmb' ),
		'pages' => array('slide','tema'),
		'context' => 'normal',
		'priority' => 'high',
		'autosave' => true,

		'fields' => array(
            
            array(
                'name'  => __( 'Overskrift', 'rwmb' ),
                'id'    => "slide_heading",
                'desc'  => __( '', 'rwmb' ),
                'type' => 'text',
            ),
            
            array(
                'name'  => __( 'Underoverskrift', 'rwmb' ),
                'id'    => "slide_subheading",
                'desc'  => __( '', 'rwmb' ),
                'type' => 'textarea',
            ),
            
            array(
                'name'  => __( 'Link', 'rwmb' ),
                'id'    => "slide_url",
                'desc'  => __( '', 'rwmb' ),
                'type' => 'url',
            ),
            
            array(
                'name'  => __( 'Åben i nyt vindue', 'rwmb' ),
                'id'    => "slide_url_blank",
                'desc'  => __( '', 'rwmb' ),
                'type' => 'checkbox',
            ),
            
        )
        
        
        );  
    