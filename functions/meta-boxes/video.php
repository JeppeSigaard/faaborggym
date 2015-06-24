<?php

$mb[] = array(
		'id' => 'Video',
		'title' => __( 'Indlæg med indlejret video fra youtube (overskriver thumbnail og afspilles automatisk når indlægget vises)', 'rwmb' ),
		'pages' => array('tema-post','nyt'),
		'context' => 'normal',
		'priority' => 'default',
		'autosave' => true,

		'fields' => array(
            
            
            array(
                'name'  => __('Slå indlejret video til'),
                'id'    => "video_include",
                'type'  => 'checkbox',
                'std'   => '0',
            ),
            
            array(
                'name'  => __('Link til youtube'),
                'id'    => "video_url",
                'type'  => 'url',
            )
            
        )
        
        
        );
