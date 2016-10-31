<?php



add_action( 'cmb2_init', 'cmb2_external_link' );

function cmb2_external_link() {


    $cmb = new_cmb2_box( array(
        'id'            => 'external_links',
        'title'         => __( 'Eksterne henvisninger', 'cmb2' ),
        'object_types'  => array( 'skrivemetro'),
        'context'       => 'normal',
        'priority'      => 'default',
        'show_names'    => true,
        'cmb_styles'    => true,

    ) );


    $group_field_id = $cmb->add_field( array(
        'id'          => 'external_link',
        'type'        => 'group',
        'options'     => array(
            'group_title'   => __( '{#}', 'cmb' ), // since version 1.1.4, {#} gets replaced by row number
            'add_button'    => __( 'Tilføj flere', 'cmb' ),
            'remove_button' => __( 'Fjern link', 'cmb' ),
            'sortable'      => false, // beta
        ),
    ) );

    // Id's for group's fields only need to be unique for the group. Prefix is not needed.
    $cmb->add_group_field( $group_field_id, array(
        'name' => 'Titel',
        'id'   => 'title',
        'type' => 'text',
    ) );


    $cmb->add_group_field( $group_field_id, array(
        'name' => 'Url',
        'id'   => 'url',
        'type' => 'text_url',
    ) );


    return $cmb;
}





?>
