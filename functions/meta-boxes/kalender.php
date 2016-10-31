<?php

$mb[] = array(
    'id' => 'begivenhedsdetaljer',
    'title' => __( 'Begivenhedsdetaljer', 'rwmb' ),
    'pages' => array('kalender'),
    'context' => 'normal',
    'priority' => 'default',
    'autosave' => true,
    'fields' => array(
        
        array(
            'name'  => __( 'Startdato', 'rwmb' ),
            'id'    => "cal_start",
            'type' => 'datetime',
            ),
        
        array(
            'name'  => __( 'Slutdato', 'rwmb' ),
            'id'    => "cal_end",
            'type' => 'datetime',
            ),

        array(
            'name' => __('Sted','rwmb'),
            'id' => 'cal_place',
            'type' => 'text',
        ),

        array(
            'name' => __('Billetlink','rwmb'),
            'id' => 'cal_ticket',
            'type' => 'text',
        ),
    ),
);
