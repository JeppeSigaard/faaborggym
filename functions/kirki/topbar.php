<?php

Kirki::add_section( 'topbar', array(
    'title'          => __( 'Forsidens top bar' ),
    'description'    => __( 'Indstillinger for forsidens gule top bar' ),
    'panel'          => '', // Not typically needed.
    'priority'       => 160,
    'capability'     => 'edit_theme_options',
    'theme_supports' => '', // Rarely needed.
) );



Kirki::add_field( 'faaborg_gym', array(
	'type'        => 'select',
	'settings'    => 'topbar_show',
	'label'       => __( 'I hjemmesidens top på forsiden, vis', 'fagy' ),
	'section'     => 'topbar',
	'default'     => 'icons',
	'priority'    => 20,
	'multiple'    => 1,
	'choices'     => array(
		'icons' => esc_attr__( 'Ikoner og søgebar', 'fagy' ),
		'pt-preview' => esc_attr__( 'Forvsining af projekter og temaer', 'fagy' ),
	),
) );


// Indstillinger for ikoner
$icons_active = array(
    'setting'  => 'topbar_show',
    'operator' => '===',
    'value'    => 'icons',
);

Kirki::add_field( 'faaborg_gym', array(
    'type' => 'repeater',
    'priority'    => 30,
    'label'       => __( 'Ikoner', 'fagy' ),
    'settings' => 'topbar_icons',
    'section' => 'topbar',
    'row_label' => array( 'type' => 'text', 'value' => 'Ikon', ),
    'add_new' => 'Tilføj ikon',
    'active_callback' => array($icons_active),
    'default' => array(),
	'fields' => array(
		'icon_type' => array(
			'type'        => 'select',
			'label'       => esc_attr__( 'Ikon', 'fagy' ),
			'description' => esc_attr__( 'Vælg ikonets type', 'fagy' ),
			'default'     => '',
            'choices' => array(
                'email' => __('Email','fagy'),
                'phone' => __('Telefon','fagy'),
                'facebook' => __('Facebook','fagy'),
                'instagram' => __('Instagram','fagy'),
                'lectio' => __('Lectio','fagy'),
                'googleplus' => __('Google +','fagy'),
                'youtube' => __('Youtube','fagy'),
            ),
		),
		'icon_url' => array(
			'type'        => 'text',
			'label'       => esc_attr__( 'Henvsining', 'fagy' ),
			'description' => esc_attr__( 'Indtast URL', 'fagy' ),
			'default'     => '',
		),
	)
));

Kirki::add_field( 'faaborg_gym', array(
	'type'        => 'toggle',
	'settings'    => 'topbar_search',
	'label'       => __( 'Tilføj en søgefunktion', 'fagy' ),
	'section'     => 'topbar',
    'active_callback' => array($icons_active),
	'default'     => '1',
	'priority'    => 40,
) );
