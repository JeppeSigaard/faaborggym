<?php 

/* Undersøg om der findes et filtreret billede */
function smamo_has_filtered_thumbnail($post_id,$size){
    
    $img_url = wp_get_attachment_image_src( get_post_thumbnail_id($post_id), $size );
    $img_url = $img_url[0];

    $file = explode('?', basename($img_url));
    $file = $file[0];

    $upload_dir = wp_upload_dir();
    $filtered = $upload_dir['basedir'].'/filtered/'.$file;

    if (file_exists($filtered)){return true;}
    else {return false;}

}


// returner filtreret billede
function smamo_filtered_thumbnail($post_id, $size){
    
    $img_url = wp_get_attachment_image_src( get_post_thumbnail_id($post_id), $size );
    $img_url = $img_url[0];

    $file = explode('?', basename($img_url));
    $file = $file[0];
    
    $upload_dir = wp_upload_dir();
    $filtered = $upload_dir['baseurl'].'/filtered/'.$file;

    echo '<img src="'.$filtered.'"/>';
}





function smamo_has_filtered_img($post_id,$size){
    
    $image = get_post_meta($post_id, 'img',true);
    $load_image = wp_get_attachment_image_src($image,$size);
    $img_url = $load_image[0];

    $file = explode('?', basename($img_url));
    $file = $file[0];

    $upload_dir = wp_upload_dir();
    $filtered = $upload_dir['basedir'].'/filtered/'.$file;

    if (file_exists($filtered)){return true;}
    else {return false;}

}


function smamo_filtered_img($post_id, $size){
    
    $image = get_post_meta($post_id,'img',true);
    $load_image = wp_get_attachment_image_src($image,$size);
    $img_url = $load_image[0];
    
    
    $file = explode('?', basename($img_url));
    $file = $file[0];
    
    $upload_dir = wp_upload_dir();
    $filtered = $upload_dir['baseurl'].'/filtered/'.$file;

    echo '<img src="'.$filtered.'"/>';
}


function smamo_has_filtered_slide_img($post_id,$size){
    
    $image = get_post_meta($post_id, 'slide_img',true);
    $load_image = wp_get_attachment_image_src($image,$size);
    $img_url = $load_image[0];

    $file = explode('?', basename($img_url));
    $file = $file[0];

    $upload_dir = wp_upload_dir();
    $filtered = $upload_dir['basedir'].'/filtered/'.$file;

    if (file_exists($filtered)){return true;}
    else {return false;}

}


function smamo_filtered_slide_img($post_id, $size){
    
    $image = get_post_meta($post_id,'slide_img',true);
    $load_image = wp_get_attachment_image_src($image,$size);
    $img_url = $load_image[0];
    
    
    $file = explode('?', basename($img_url));
    $file = $file[0];
    
    $upload_dir = wp_upload_dir();
    $filtered = $upload_dir['baseurl'].'/filtered/'.$file;

    echo '<img src="'.$filtered.'"/>';
}



/* Undersøg om billede skal filtreres */
function smamo_image_filter($post_id){
    
    return get_post_meta($post_id,'img_filter',true) !== '0';

}











/* TING TIL STUDIERETNINGER */
/// Super nestet logik, undskyld. Jeg synes bare ikke man skal skrive meget kode hvis man kan skrive lidt


// Opret et span med fagets navn, for hvert fag i felt
function smamo_return_fag($array){
    
    if (!empty($array)){
        foreach ($array as $val){
            if(!empty($val)){
                echo '<span>'.get_the_title($val).'</span>';
            }
        }
    }
}

// Opret en box med opbligatoriske, studiespecifikke og valgfag for hvert trin (A,B,C)
function smamo_return_box($id,$letter){
    
    echo '<div class="sr-fag sr-fag-'.$letter.'">';
        echo '<h4>'.$letter.'</h4>';
        echo '<div class="sr-obligatorisk">';
            smamo_return_fag(get_post_meta($id,$letter.'_obligatorisk',true));
        echo '</div>';
        echo '<div class="sr-retning">';
            smamo_return_fag(get_post_meta($id,$letter.'_retning',true));
        echo '</div>';
        echo '<div class="sr-valg">';
            smamo_return_fag(get_post_meta($id,$letter.'_valg',true));
        echo '</div>';
    echo '</div>';
    

}

// Opret en samlet oversigt over fag
function smamo_fag_oversigt($id){
    
    smamo_return_box($id,'a');
    smamo_return_box($id,'b');
    smamo_return_box($id,'c');
    
}


function smamo_studieretning($id){
    
    echo '<div class="sr-adgang">';
    
    echo get_post_meta($id,'adgang',true);
    
    echo '</div>';
    
    
    echo '<h5>Hvis du interesserer dig for:</h5>';
    
    echo '<ul>';
    
    $list = get_post_meta($id,'interesse',true);
    foreach($list as $item){
        echo '<li>'.$item.'</li>';
    }

    
    echo '</ul>';
    
    echo '<h5>Adgangskortet</h5>';
    
    echo '<div class="sr-links">';
    
    $list = get_post_meta($id,'adgangskort',true);
    if(is_array($list) && !empty($list)){
        foreach($list as $item){
            echo '<a href="'.$item.'">'.get_the_title($id).'</a>';
    }}
    else{
        echo '<a href="'.$list.'">'.get_the_title($id).'</a>';
    }
        
    echo '</div>';
    
    echo '<div class="sr-regler">';
    
    echo get_post_meta($id,'regler',true);
    
    echo '</div>';
}







function edit_delete($post_id){

    if(current_user_can('manage_options')) :?>

        <div class="edit-delete" id="edit-<?php echo $post_id ?>">
            <a href="#" title="rediger indlæg" class="post-edit"><span class="dashicons dashicons-edit"></span></a>
            <a href="#" title="slet indlæg" class="post-delete"><span class="dashicons dashicons-trash"></span></a>
        </div>

<?php endif;} ?>