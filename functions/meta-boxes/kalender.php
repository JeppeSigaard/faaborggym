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
    ),
);