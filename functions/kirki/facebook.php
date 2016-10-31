<?php

Kirki::add_section( 'facebook', array(
    'title'          => __( 'Facebook App' ),
    'description'    => __( 'Oplysninger, som bruges til at hente Nyheder og kalenderbegivenheder fra Facebook\'s API' ),
    'panel'          => '', // Not typically needed.
    'priority'       => 160,
    'capability'     => 'edit_theme_options',
    'theme_supports' => '', // Rarely needed.
) );

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('Facebook side','fagy'),
    'setting' => 'facebook_page',
    'section' => 'facebook',
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('Endpoint base','fagy'),
    'description'  => __( 'bruges som base for endpoints i kald til Facebooks api' ),
    'setting' => 'smamo_fb_api_base',
    'section' => 'facebook',
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('APP ID','fagy'),
    'description'  => __( 'Findes i indstillingerne for den App, du har oprettet.' ),
    'setting' => 'smamo_fb_app_id',
    'section' => 'facebook',
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('APP SECRET','fagy'),
    'description'    => __( 'Findes i indstillingerne for den App, du har oprettet.' ),
    'setting' => 'smamo_fb_app_secret',
    'section' => 'facebook',
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('Redirect URI','fagy'),
    'description'    => __( 'Bruges til henvisning ved synkrone requests.' ),
    'setting' => 'smamo_fb_redirect_uri',
    'section' => 'facebook',
));
