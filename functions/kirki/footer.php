<?php

Kirki::add_section( 'footer', array(
    'title'          => __( 'Footer' ),
    'description'    => __( 'Oplysninger, som vises i hjemmesidens Footer' ),
    'panel'          => '', // Not typically needed.
    'priority'       => 160,
    'capability'     => 'edit_theme_options',
    'theme_supports' => '', // Rarely needed.
) );

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('Skolenavn','fagy'),
    'setting' => 'ft_school',
    'section' => 'footer',
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('Adresselinje','fagy'),
    'setting' => 'ft_address',
    'section' => 'footer',
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('Postnummer og by','fagy'),
    'setting' => 'ft_post_city',
    'section' => 'footer',
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('Telefonnummer','fagy'),
    'setting' => 'ft_phone',
    'section' => 'footer',
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('Emailadresse','fagy'),
    'setting' => 'ft_email',
    'section' => 'footer',
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('CVR - nummer','fagy'),
    'setting' => 'ft_cvr',
    'section' => 'footer',
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('EAN - nummer','fagy'),
    'setting' => 'ft_ean',
    'section' => 'footer',
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('Skolenummer','fagy'),
    'setting' => 'ft_school_no',
    'section' => 'footer',
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('Eksamensnummer','fagy'),
    'setting' => 'ft_exam_no',
    'section' => 'footer',
));

Kirki::add_field('faaborg_gym',array(
    'type' => 'text',
    'label' => __('Åbningstid','fagy'),
    'setting' => 'ft_open',
    'section' => 'footer',
));

