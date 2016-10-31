<?php

// Hent data fra transient eller Facebook
function smamo_fetch_fb_events(){
    $return = get_transient('smamo_fb_events');

    $switch = false; // sæt til true for at hente ny data hver gang (test mode).

    if(!$return || $switch){
        require get_template_directory() . '/facebook/facebook.php';
        $fb = new Facebook(array(
            'appId'  => get_theme_mod('smamo_fb_app_id'),
            'secret' => get_theme_mod('smamo_fb_app_secret'),
        ));

        $events = $fb->api(get_theme_mod('smamo_fb_api_base') . '/events/?fields=description,start_time,end_time,cover,name,place&limit=6');
        set_transient('smamo_fb_events', $events['data'], 60 * 30);

        $return = $events['data'];
    }

    return $return;
}

// Sammenlæg data fra Facebook og WP
function smamo_merge_events($fb_events, $wp_events){

    $return = array();

    // Facebook events (eller false)
    if($fb_events){foreach($fb_events as $e){
        $key = strtotime($e['start_time']);

        $address = '';
        if(isset($e['place'])){
            if(isset($e['place']['location'])){
                $address = $e['place']['location']['street'] . ', ';
                $address .= $e['place']['location']['zip'] . ' ';
                $address .= $e['place']['location']['city'] . ' ';
            }
            elseif(isset($e['place']['name'])){
                $address = $e['place']['name'];
            }

        }

        if($key > time() ){

            $return[$key] = array(
                'id' => $e['id'],
                'name' => $e['name'],
                'description' => $e['description'],
                'start_time' => strtotime($e['start_time']),
                'end_time' => (isset($e['end_time'])) ? strtotime($e['end_time']) : '',
                'cover' => (isset($e['cover'])) ? $e['cover']['source'] : '',
                'data_src' => 'facebook',
                'address' => $address,
                'link' => 'http://facebook.com/events/' . $e['id'],
                'ticket_uri' => (isset($e['ticket_uri'])) ? $e['ticket_uri'] : '',
            );
        }
    }}

    // WP events (eller false)
    if ($wp_events){foreach($wp_events as $e){
        $key = strtotime(get_post_meta($e->ID,'cal_start',true));
        $image_url = wp_get_attachment_image_src( get_post_thumbnail_id($e->ID), 'news-preview-small' );
        if($key > time() ){
            $return[$key] = array(
                'id' => $e->ID,
                'name' => $e->post_title,
                'description' => $e->post_content,
                'start_time' => strtotime(get_post_meta($e->ID,'cal_start',true)),
                'end_time' => strtotime(get_post_meta($e->ID,'cal_end',true)),
                'cover' => (isset($image_url[0])) ? $image_url[0] : '',
                'data_src' => 'wordpress',
                'address' => get_post_meta($e->ID,'cal_place',true),
                'ticket_uri' => get_post_meta($e->ID,'cal_ticket',true),
            );
        }
    }}

    ksort($return);

    return $return;
}
