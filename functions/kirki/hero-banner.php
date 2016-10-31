<?php

Kirki::add_section( 'hero_banner', array(
    'title'          => __( 'Hero Banner' ),
    'description'    => __( 'Indstillinger for forsidens Hero Banner' ),
    'panel'          => '', // Not typically needed.
    'priority'       => 160,
    'capability'     => 'edit_theme_options',
    'theme_supports' => '', // Rarely needed.
) );

Kirki::add_field( 'faaborg_gym', array(
	'type'        => 'select',
	'settings'    => 'hero_banner_show',
	'label'       => __( 'I hero banner, vis', 'fagy' ),
	'section'     => 'hero_banner',
	'default'     => 'video',
	'priority'    => 20,
	'multiple'    => 1,
	'choices'     => array(
		'video' => esc_attr__( 'Video banner', 'fagy' ),
		'slideshow' => esc_attr__( 'Slideshow', 'fagy' ),
	),
) );


// Indstillinger for video banner
$video_active = array(
    'setting'  => 'hero_banner_show',
    'operator' => '===',
    'value'    => 'video',
);

Kirki::add_field( 'faaborg_gym', array(
	'type'        => 'image',
	'settings'    => 'hb_video_img',
	'label'       => __( 'Baggrundsbillede', 'fagy' ),
	'description' => __( 'Vælg billede, der vises på touch apparater, og mens videoen indlæses', 'fagy' ),
	'section'     => 'hero_banner',
	'default'     => '',
	'priority'    => 21,
    'active_callback' => array($video_active),
) );

Kirki::add_field( 'faaborg_gym', array(
	'type'     => 'text',
	'settings' => 'hb_video_link',
	'label'    => __( 'Youtube link', 'fagy' ),
	'section'  => 'hero_banner',
	'priority' => 22,
    'active_callback' => array($video_active),
) );

Kirki::add_field( 'faaborg_gym', array(
	'type'     => 'text',
	'settings' => 'hb_video_heading',
	'label'    => __( 'Header', 'fagy' ),
	'section'  => 'hero_banner',
	'priority' => 23,
    'active_callback' => array($video_active),
) );

Kirki::add_field('faaborg_gym',array(
    'type' => 'checkbox',
    'priority' => 24,
    'label' => 'Opret et preview loop',
    'settings' => 'hb_video_loop_active',
    'default' => 0,
    'section' => 'hero_banner',
    'active_callback' => array($video_active),
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'slider',
    'priority' => 26,
    'label' => __('Loop start (sekunder)','fagy'),
    'settings' => 'hb_video_loop_start',
    'section' => 'hero_banner',
    'default' => '5',
    'active_callback' => array($video_active, array(
        'setting'  => 'hb_video_loop_active',
        'operator' => '===',
        'value'    => '1',
    )),
    'choices'     => array(
		'min'  => '0',
		'max'  => '120',
		'step' => '1',
	),
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'slider',
    'priority' => 27,
    'label' => __('Loop varighed (sekunder)','fagy'),
    'settings' => 'hb_video_loop_end',
    'section' => 'hero_banner',
    'default' => '10',
    'active_callback' => array($video_active, array(
        'setting'  => 'hb_video_loop_active',
        'operator' => '===',
        'value'    => '1',
    )),
    'choices'     => array(
		'min'  => '1',
		'max'  => '60',
		'step' => '1',
	),
));


// Indstillinger for slideshow
$slideshow_active = array(
    'setting'  => 'hero_banner_show',
    'operator' => '===',
    'value'    => 'slideshow',
);


Kirki::add_field('faaborg_gym',array(
    'type' => 'slider',
    'priority' => 26,
    'label' => __('Vis slide i (millisekunder)','fagy'),
    'settings' => 'hero_banner_slide_timeout',
    'section' => 'hero_banner',
    'default' => '7000',
    'active_callback' => array($slideshow_active),
    'choices'     => array(
		'min'  => '1000',
		'max'  => '20000',
		'step' => '100',
	),
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'slider',
    'priority' => 27,
    'label' => __('Transition (millisekunder)','fagy'),
    'settings' => 'hero_banner_slide_transition',
    'section' => 'hero_banner',
    'default' => '400',
    'active_callback' => array($slideshow_active),
    'choices'     => array(
		'min'  => '50',
		'max'  => '1000',
		'step' => '10',
	),
));

Kirki::add_field( 'faaborg_gym', array(
    'type' => 'repeater',
    'priority'    => 30,
    'label'       => __( 'Slides', 'fagy' ),
    'settings' => 'hero_banner_slides',
    'section' => 'hero_banner',
    'row_label' => array( 'type' => 'text', 'value' => 'Slide', ),
    'add_new' => 'Tilføj slide',
    'active_callback' => array($slideshow_active),
    'default' => array(),
	'fields' => array(

        0 => array(
            'label'  => __( 'Billede', 'rwmb' ),
            'type' => 'image',
        ),

        1 => array(
            'label'  => __( 'Overskrift', 'rwmb' ),
            'type' => 'text',
        ),

        2 => array(
            'label'  => __( 'Underoverskrift', 'rwmb' ),
            'type' => 'textarea',
        ),

        3 => array(
            'label'  => __( 'Link', 'rwmb' ),
            'type' => 'url',
        ),

        4 => array(
            'label'  => __( 'Åben i nyt vindue', 'rwmb' ),
            'type' => 'checkbox',
        ),

    )
));
