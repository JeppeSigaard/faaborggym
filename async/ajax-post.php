<?php 
// indsend posts. Fil der håndterer alle mulige kald asynkront til oprettelse af nye posts. 

// FILEN ER TEMALØS
define('WP_USE_THEMES', false); 

// Vores retur encodes til json, så det er nemt at bruge i javascript.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-Type: application/json');


// Hent wp-load, så vi får mulighed for at bruge wordpress' funktionsarkiv
require '../../../../wp-load.php';

// Sikkerhed: Sammenligning af tilfældig 20-tegns kode, 
// oprettet ved pageload og sendt via post og session
// på den måde er vi sikre på at post request kommer fra vores side
// BEMÆRK: For at bruge dette script, sørg da for at indstille en nonce i både session og inkluder i POST kald.
// Det kan være hvad som  helst, så længe $_POST['nonce'] og $_SESSION['smamo_nonce'] er ens.
// For eksempel en tilfældig 20 tegns værdi : 
/* <?php $nonce = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 20); ?> */

/*
$smamo_nonce = $_SESSION['smamo_nonce'];            // session
$sent_nonce = wp_strip_all_tags($_POST['nonce']);   // post (uden tags, kun tegn)

// Hvis nonce ikke er ens, opretter vi en fejlmeddelelse.
if(!isset($smamo_nonce) || !isset($sent_nonce) || $sent_nonce !== $smamo_nonce){
    
    $response['error'] = 'fejl i nonce';
    echo json_encode($response);
    exit;
}
*/



    // Find $type
    // Type kan være
    // - status     : Statusopdateringer
    $type = wp_strip_all_tags($_POST['type'],true);

   
    //////////////////////////////////////////////////////////////////
    //                                                              //
    //                          STATUS                              //
    //                                                              //
    //////////////////////////////////////////////////////////////////
    // Hvis $type er 'status' : indsendelse af ny statusopdatering
    // Variabler : $msg, $msg_q
    // Retur : user_id, user_name, status_id, msg, msg_q
    
    if($type == 'status'){

        $msg        = apply_filters('the_content',wp_strip_all_tags($_POST['msg'],false));                // Ny besked fra post uden tags
        $msg_q      = wp_strip_all_tags($_POST['msg_q'],true);              // Spørgsmål fra post uden tags
        $user_id    = get_current_user_id();                                // Bruger hentes fra session, for en sikkerhedsskyld
        $user_data  = get_userdata($user_id);                               // Hent brugerdata med WP funktion
        $user_name  = $user_data->user_login .', '.$user_data->roles[0];    // Indstil brugernavn fra brugerdata

        
        // Ret brugeroplysninger fra elev-posts
        $elev_args = array(
            'posts_per_page'   => 1,
            'meta_key'         => 'userID',
            'meta_value'       => $user_id,
            'post_type'        => 'elev',
            'suppress_filters' => true 
        );

        $elev_posts = get_posts($elev_args);
        
        if(!empty($elev_posts)){
            
            foreach($elev_posts as $elev){
                
                $user_name  = get_post_meta($elev->ID,'elev_fname',true).' ';
                $user_name .= get_post_meta($elev->ID,'elev_lname',true) .', ';
                $user_name .= get_post_meta($elev->ID,'elev_klasse',true);
            }
        }

        // Opret ny status-post: titel er beskeden, 
        $new_status = array(
            'post_title'     => $msg,
            'post_status'    => 'publish',
            'post_type'      => 'status'
        );

        // indsæt med WP funktion
        $status_id = wp_insert_post( $new_status, true );
        
        // Hvis der opstår en fejl, opret en fejlmeddelelse
        if(is_wp_error($status_id)){
        
            $response['error'] = $status_id->get_error_message();
            
        }
        
        // Ellers opdaterer vi den nye status med mere information
        else{

            // Tilføj mere info til status-post
            update_post_meta($status_id,'userID',$user_id);         // Tilknyt brugerens id
            update_post_meta($status_id,'status_q',$msg_q);         // Tilføj stillet spørgsmål
            update_post_meta($status_id,'status_a',$msg);           // Tilføj besvarelse
            update_post_meta($status_id,'status_name',$user_name);  // Tilføj brugerens navn

            
            // Opret variabler til javasvript, der indsætter den nye status-post:
            $response['user_id'] = get_current_user_id();           // Brugerens ID for kicks...
            $response['user_name'] = $user_name;                    // Navn
            $response['status_id'] = $status_id;                    // Statusens id til elementreference
            $response['msg'] = $msg;                                // Svar
            $response['msg_q'] = $msg_q;                            // Spørgsmål for kicks...

        }

    }
    //////////////////////////////////////////////////////////////////
    //                                                              //
    //                         TEMA-POST                            //
    //                                                              //
    //////////////////////////////////////////////////////////////////
    // Hvis $type er 'tema-post' : opret eller opdater tema-post
    // Variabler : 
    // Retur : 
    
    elseif($type == 'tema-post'){
        
        $ajax_post = array(
    
            'title'         => wp_strip_all_tags($_POST['title']),
            'subheading'    => wp_strip_all_tags($_POST['subheading']),
            'content'       => apply_filters('the_content',$_POST['content']),
            'theme_id'      => wp_strip_all_tags($_POST['theme_id']),
            'image'         => wp_strip_all_tags($_POST['image']),
            'post_type'     => wp_strip_all_tags($_POST['type']),
            'post_id'       => wp_strip_all_tags($_POST['postID']),

        );



        /////////////////////////////////////////////////////////
        /* OPRET NY POST ELLER OPDATER EKSISTERENDE */
        
        if(!isset($ajax_post['post_id']) || $ajax_post['post_id'] == -1){

            $new = wp_insert_post(array(

                'post_title'    => $ajax_post['title'],
                'post_content'  => $ajax_post['content'],
                'post_type'     => $ajax_post['post_type'],
                'post_status'   => 'publish',

            ),true);

        }
        
        else{
        
            $new = wp_update_post(array(
            
                'ID'            => $ajax_post['post_id'],
                'post_title'    => $ajax_post['title'],
                'post_content'  => $ajax_post['content'],
                'post_type'     => $ajax_post['post_type'],
                'post_status'   => 'publish',
            
            ),true);
            
        }
        
        // Hvis det ikke lykkes, skriver vi ikke mere kode, og sender en fejl retur
        if(is_wp_error($new)){
            $response['error'] = $new->get_error_message();
            echo json_encode($response);
            exit;
        }

        // Indstil subheading og tilknyttet tema
        update_post_meta($new,'subheading',$ajax_post['subheading']);
        update_post_meta($new,'theme',$ajax_post['theme_id']);


        // Billede
        if($ajax_post['image']){
            set_post_thumbnail( $new, $ajax_post['image'] );

            $file = wp_get_attachment_image_src($ajax_post['image'],'news-preview-small');
            $file = $file[0];

            $upload_dir = wp_upload_dir();

            $file = explode('?', basename($file));
            $file = $file[0];

            $response['img_url'] = $upload_dir['baseurl'].'/filtered/'.$file;

        }



        $response['id'] = $new;
        $response['title'] = $ajax_post['title'];
        $response['subheading'] = $ajax_post['subheading'];
        $response['content'] = $ajax_post['content'];
        $response['href'] = get_the_permalink($new); 
        $response['shown in'] = get_post_meta($new,'theme',true);


        /////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////
    
    
    }

    //////////////////////////////////////////////////////////////////
    //                                                              //
    //                         Rediger profil                       //
    //                                                              //
    //////////////////////////////////////////////////////////////////

    elseif($type == 'profile-settings'){

    }


// TIL SIDST: send $response i JSON til javascript
echo json_encode($response);