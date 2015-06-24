<?php

$mb[] = array(
    'id' => 'position',
    'title' => __( 'Årgang', 'rwmb' ),
    'pages' => array('skrivemetro'),
    'context' => 'side',
    'priority' => 'default',
    'autosave' => true,
    'fields' => array(
        
        array(
            'name'  => __( 'Årgang', 'rwmb' ),
            'id'    => "year",
            'type' => 'select',
            'placeholder' => __('Vælg årgang', 'rwmb'),
            'options' => array(
                
                '1' => '1.G',
                '2' => '2.G',
                '3' => '3.G',
                
            ),
        ),
        
        array(
            'name'  => __( 'Positionstweak', 'rwmb' ),
            'id'    => "tweak",
            'type' => 'range',
            'min'   => '0',
            'max'   => '100',
            'std'   => '50'
        ),
    ),
);


$mb[] = array(
    'id' => 'internal_links',
    'title' => __( 'Interne henvisninger', 'rwmb' ),
    'pages' => array('skrivemetro'),
    'context' => 'side',
    'priority' => 'default',
    'autosave' => true,
    'fields' => array(
        
        array(
            'name'  => __( 'Indsæt link til:', 'rwmb' ),
            'id'    => "internal_link",
            'clone' => true,
            'type'  => 'post',
            'post_type' => 'skrivemetro',
            'field_type'  => 'select_advanced',
            'placeholder' => __( 'Vælg fra eller søg efter indlæg', 'meta-box' ),
            // Query arguments (optional). No settings means get all published posts
            'query_args'  => array(
                'post_status'    => 'publish',
                'posts_per_page' => - 1,
            )
        ),
    ),
);



$mb[] = array(
    'id' => 'external_links',
    'title' => __( 'Eksterne henvisninger', 'rwmb' ),
    'pages' => array('skrivemetro'),
    'context' => 'side',
    'priority' => 'default',
    'autosave' => true,
    'fields' => array(
        
        array(
            'type'  => 'group',
            'id' => 'ex_link',
            'clone' => 'true',
            'fields' => array(
                array(
                    'name' => 'Titel',
                    'id' => 'ex_text',
                    'type' => 'text',
                ),
                
                array(
                    'name' => 'Link',
                    'id' => 'ex_url',
                    'type' => 'url',
                ),
            ),
        ),
    ),
);


?>