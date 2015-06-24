<?php
// user login. Fil der håndterer alle mulige kald asynkront til brugerlogins i vores statusopdateringsmodul.
// Håndterer:
// - logout             : Log bruger ud
// - get_info           : Hvis brugeren allerede er logget ind, hent information
// - login              : Log bruger ind
// - register           : Opret en ny bruger, elev og log bruger ind 
// - profile_edit       : Hent oplysninger om bruger med henblik på redigering
// - profile_modify     : Ret brugeroplysninger

// vi skal ikke bruger header, men WP's funktionsbibliotek
define('WP_USE_THEMES', false); 

// Vores retur encodes til json, så det er nemt at bruge i javascript.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-Type: application/json');

// Hent wp-load, så vi får mulighed for at bruge wordpress' funktionsarkiv
require '../../../../wp-load.php';


// Klargør response array til senere json_encode();
$response = array();


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
if(!isset($sent_nonce) || $sent_nonce !== $smamo_nonce){
    
   $response['error'] = 'fejl i nonce';
   exit;

}*/


    // $dir bruges til at fortælle hvad vi gerne vil have tilbage fra post.
    // DVS. for eksempel navn og id, eller andet
    $dir = wp_strip_all_tags($_POST['dir'],true);


    
    //////////////////////////////////////////////////////////
    //                                                      //
    //                    LOGOUT                            //
    //                                                      //
    //////////////////////////////////////////////////////////
    
    // Hvis $dir er 'logout' logger vi brugeren ud på serveren
    // retur kommer enten error eller succes. 
    if($dir == 'logout'){
        
        // Log brugeren ud med WP funktion. Easy Peacy.
        $wp_user = wp_logout();
        
        // Check for wp_error
        if(is_wp_error($wp_user)){
            
            // WP fejl sendes retur, hvis logout fejlede.
            $response['error'] = $wp_user->get_error_message();
        }
       
        else{
            
            // Vi gratulerer med en succes-besked. response bruges ikke til noget... :-)
            $response['success'] = 'success';
            
        }
    

    }

    //////////////////////////////////////////////////////////
    //                                                      //
    //                    GET_INFO                          //
    //                                                      //
    //////////////////////////////////////////////////////////
    
    // Hvis $dir er 'get_info' henter vi info om bruger
    // Vi skal bruge en id på brugeren, det er alt
    elseif($dir == 'get_info'){

        // Brug sendt brugerid fra $_POST
        $user_id = wp_strip_all_tags($_POST['id'],true);
        
        // Hent oplysninger om bruger med WP funktion 
        $user = get_userdata( $user_id );


        // Opret basisinfo baseret på brugerlogin
        $response['id'] = $user_id;                 // Brugers id
        $response['name'] = $user->user_login;      // Login-navn
        $response['klasse'] = $user->roles;      // Klasse får brugerrolle, indtil vi retter det til.


        // Ret navn og klasse iht. elevdata, hvis det findes
        // Start med at oprette en search_query
        $elev_args = array(
            'posts_per_page'   => 1,
            'meta_key'         => 'userID',
            'meta_value'       => $user_id,
            'post_type'        => 'elev',
            'suppress_filters' => true 
        );
        
        // Hent matchende posts, max. 1 (der skulle helst ikke være flere end det)
        $elev_posts = get_posts($elev_args);
        
        // Er resultatet tomt?
        if(!empty($elev_posts)){
            
            // hvis ikke, render vi et foreach-loop over denne post, og retter navn og klasse iht. indtastet data.
            foreach($elev_posts as $elev){

                // Nyt navn : Fornavn mellemrum Efternavn
                $response['name'] = get_post_meta($elev->ID,'elev_fname',true).' '.get_post_meta($elev->ID,'elev_lname',true);
                
                // Ny klasse : Klasse
                $response['klasse'] = get_post_meta($elev->ID,'elev_klasse',true);

            }

        }

    }
    
    //////////////////////////////////////////////////////////
    //                                                      //
    //                    LOGIN                             //
    //                                                      //
    //////////////////////////////////////////////////////////

    // Hvis $dir er 'login' logger vi brugeren ind på serveren.
    // vi skal bruge to variabler, brugernavn og adgangskode
    // retur kommer navn, id, klasse
    elseif($dir == 'login'){

        $username = wp_strip_all_tags($_POST['username'],true);     // Brugernavn
        $password = wp_strip_all_tags($_POST['password'],'true');   // Adgangskode
        
        // Hvis brugernavn eller password er tomt, opret en fejlmeddelelse
        if(!isset($username) || !isset($password)){
        
            $response['error'] = 'FEJL: udfyld felterne for at logge ind.';
            
        }
        
        else{

            // Ellers prøver vi at logge brugeren ind med de sendte variabler
            $login_data = array();
            $login_data['user_login'] = $username;      // Brugernavn
            $login_data['user_password'] = $password;   // Adgangskode
            $login_data['remember'] = 'true';           // remember er altid 'true'. Ændr, hvis det er for voldsomt :-)
            
            // Log ind med WP funktion
            $user_login = wp_signon( $login_data, true ); 

            // Hvis login fejlede, får vi en handy fejlmeddelelse med link til glemt password.
            if ( is_wp_error($user_login) ) {
              
                $response['error'] = $user_login->get_error_message();
            
            }

            // Ellers sætter vi resultatet op. Det skal bruges til at udfylde felter i formularen
            else{
                
                // Som med get_info starter vi med at konstruere fra basisoplysninger
                $response['name'] = $user_login->data->display_name;    // Brugernavn
                $response['id'] = $user_login->data->ID;                // Brugers ID
                $response['klasse'] = $user_login->roles[0];            // Klasse sættes til brugerrolle

                // Ret navn og klasse iht. elevdata, hvis det findes
                // Start med at oprette en search_query
                $elev_args = array(
                    'posts_per_page'   => 1,
                    'meta_key'         => 'userID',
                    'meta_value'       => $response['id'],
                    'post_type'        => 'elev',
                    'suppress_filters' => true 
                );

                // Hent matchende posts, max. 1 (der skulle helst ikke være flere end det)
                $elev_posts = get_posts($elev_args);
                
                // tomt resultat?
                if(!empty($elev_posts)){
                    
                    // Ellers kører vi et foreach loop over denne post og opdaterer navn og klasse
                    foreach($elev_posts as $elev){

                        // Nyt navn : Fornavn mellemrum Efternavn
                        $response['name'] = get_post_meta($elev->ID,'elev_fname',true).' '.get_post_meta($elev->ID,'elev_lname',true);
                        
                        // Ny klasse : Klasse
                        $response['klasse'] = get_post_meta($elev->ID,'elev_klasse',true);

                    }

                }

            }
            
        }


    }









    //////////////////////////////////////////////////////////
    //                                                      //
    //                    REGISTER                          //
    //                                                      //
    //////////////////////////////////////////////////////////
    
    // Hvis $dir er 'register' skal vi gøre 5 ting
    // 1) Logge brugeren ud (bare for en sikkerheds skyld, så vi undgår at pille ved en eksisterende bruger)
    // 2) Registrere en ny bruger
    // 3) tilknytte en elev-post til den nye bruger
    // 4) Logge brugeren ind
    // 5) Hente data fra ny elev-post
    // (pyha!)
    elseif($dir == 'register'){

        // Log eventuelle gamle brugere ud og fortsæt til step 2
        $old_wp_user = wp_logout();

        // Registrer ny data fra $_POST (fjern alle tags, kun tegn)
        $username   = wp_strip_all_tags($_POST['name']);        // Brugernavn
        $fname      = wp_strip_all_tags($_POST['fname']);       // Fornavn
        $lname      = wp_strip_all_tags($_POST['lname']);       // Efternavn
        $password   = wp_strip_all_tags($_POST['password']);    // Adgangskode (uden hash)
        $email      = wp_strip_all_tags($_POST['email']);       // Email
        $klasse     = wp_strip_all_tags($_POST['klasse']);      // Klasse
        
        // More to come ...

        // Opret en ny bruger med WP funktion
        $new_user_id = wp_create_user( $username, $password, $email );

        // Hvis det gik, fortsætter vi til step 3
        if(!is_wp_error($new_user_id)){

            // gem ny brugers id i $response
            $response['user_id'] = $new_user_id;

            // Opdater brugerrettigheder og info. Den nye bruger får typen 'elev'.
            // Vi indstiller også nickname, fornavn og efternavn, nu vi har det...
            wp_update_user( array(
                'ID' => $new_user_id,
                'role' => 'subscriber',
                'first_name' => $fname, 
                'last_name' => $lname,
                'nickname ' => $fname .' '.$lname,
            ) );

            // Opret en ny elev-post med brugernavn som titel
            $new_elev_id = wp_insert_post(array(
                'post_title' => $username, 
                'post_status' => 'publish', 
                'post_type' => 'elev',
                ),true );

            // Hvis det gik, fortsætter vi til step 4
            if(!is_wp_error($new_elev_id)){

                // Indsæt metaværdier for den nye elev-post
                update_post_meta($new_elev_id,'elev_fname',$fname);     // Fornavn
                update_post_meta($new_elev_id,'elev_lname',$lname);     // Efternavn
                update_post_meta($new_elev_id,'elev_email',$email);     // Email
                update_post_meta($new_elev_id,'elev_klasse',$klasse);   // Klasse
                update_post_meta($new_elev_id,'userID',$new_user_id);   // Tilknyt brugerid, så vi kan kalde bruger og elev-post parallelt fremover

                // Vi prøver at logge den nye bruger ind
                $login_data = array();
                $login_data['user_login'] = $username;      // Brugernavn
                $login_data['user_password'] = $password;   // Adgangskode (uden hash)
                $login_data['remember'] = 'true';           // remember sat til true. Ændr, hvis det er for meget
                
                // Login med WP funktion
                $new_user_login = wp_signon( $login_data, true ); 

                // Hvis det gik, fortsætter vi til step 5
                if(!is_wp_error($new_user_login)){

                    // Indstil $response med basisvariabler
                    $response['name'] = $fname .' '. $lname;            // Navn
                    $response['id'] = $new_user_login->data->ID;        // ID
                    $response['klasse'] = 'elev';    // Klasse sættes til elev som default

                    
                    // Opdater med den nye elev-post
                    $elev_args = array(
                        'posts_per_page'   => 1,
                        'meta_key'         => 'userID',
                        'meta_value'       => $new_user_login->data->ID,
                        'post_type'        => 'elev',
                        'suppress_filters' => true 
                    );

                    // Som tidligere...
                    $elev_posts = get_posts($elev_args);
                    if(!empty($elev_posts)){
                        foreach($elev_posts as $elev){

                            $response['klasse'] = get_post_meta($elev->ID,'elev_klasse',true);
                            
                            $response['name'] = get_post_meta($elev->ID,'elev_fname',true).' '.get_post_meta($elev->ID,'elev_lname',true);

                        }

                    }

                }

                else{
                    
                    // Hvis det ikke lykkedes at logge ind, opretter vi en fejlmeddelelse
                    $response['error'] = $new_user_login->get_error_message();

                }

            }

            else{
                
                // hvis det ikke lykkedes at oprette en ny elev-post, sender vi en fejlmeddelelse
                $response['error'] = $new_elev_id->get_error_message();
            }

        }

        else{
            
            // Hvis det ikke lykkedes at oprette en ny bruger, opretter vi en fejlmeddelelse
            $response['error'] = $new_user_id->get_error_message();
        }

    }


    //////////////////////////////////////////////////////////
    //                                                      //
    //                    PROFILE_EDIT                      //
    //                                                      //
    //////////////////////////////////////////////////////////
    
    // Kommer snart...
    elseif($dir == 'profile_edit'){
        $response['error'] = 'no road ahead. Den funktion er ikke bygget endnu...';
    }
    
    
    
    
    //////////////////////////////////////////////////////////
    //                                                      //
    //                    PROFILE_MODIFY                    //
    //                                                      //
    //////////////////////////////////////////////////////////
    
    // Kommer snart...
    elseif($dir == 'profile_modify'){
        $response['error'] = 'no road ahead. Den funktion er ikke bygget endnu...';
    }

    
    
    
    
    //////////////////////////////////////////////////////////
    //                                                      //
    //                    FINAL_ERROR                       //
    //                                                      //
    //////////////////////////////////////////////////////////
    
    // Hvis dir ikke er gendkendt, sender vi en fejlbesked retur
    
    else{
        
        $response['error'] = '$dir blev ikke genkendt. Se kildefilen for en liste over tilgængelige $dir på denne fil';
    
    }



// Til sidst: Spyt $response ud i JSON (JavaScript Object Notation)
echo json_encode($response);


// - SmartMonkey