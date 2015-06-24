<?php 

// vi skal ikke bruger header, men WP's funktionsbibliotek
define('WP_USE_THEMES', false); 

// Vores retur encodes til json, så det er nemt at bruge i javascript.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

// Hent wp-load, så vi får mulighed for at bruge wordpress' funktionsarkiv
require '../../../../wp-load.php';
/*
$all = get_posts(array(

    'post_type' => 'skrivemetro',
    'posts_per_page'    => -1
    
));



$rand_content = array(
    
    '1' => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat
    
    ',
    
    '2' => 'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
    
    ',

    '3' => 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
    
    ',
    
    '4' => 'iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
    
    ',
    
    '5' => 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
    
    ',
);

$rand_headings = array(

    '1' => 'hendrerit in vulputate',
    '2' => 'option congue nihil imperdiet doming',
    '3' => 'ullamcorper suscipit lobortis nisl',
    '4' => 'consectetuer adipiscing elit',
    '5' => 'lobortis nisl ut aliquip ex ea commodo',
    '6' => 'zzril delenit augue duis dolore',
    '7' => 'esse molestie consequat',
    '8' => 'nobis eleifend option congue nihil imperdiet doming',
    '9' => 'congue nihil imperdiet doming id quod mazim placerat',
    
);

$rand_size = array(2,3,4);

$i = 0;
foreach($all as $one){
    
    $new_c = '';
    $rand_b = array_rand($rand_content,1);
    $rand_b_2 = array_rand($rand_content,1);
    
    $new_c .= '<p><strong>'.$rand_content[$rand_b].'</strong></p>';
    $new_c .= '<p>'.$rand_content[$rand_b_2].'</p>';
    
    $sections = rand(5, 11);
    $made = 0;
    while ($made < $sections){
        $made ++;
        
        $rand_h = array_rand($rand_headings,1);

        $rand_hs = array_rand($rand_size,1); 
        $new_c .= '<h'.$rand_size[$rand_hs].'>'.$rand_headings[$rand_h].'</h'.$rand_size[$rand_hs].'>';
        $rand_c = array_rand($rand_content,1);
        $rand_c_2 = array_rand($rand_content,1);
         $new_c .= '<p>'.$rand_content[$rand_c].'</p>';
         $new_c .= '<p>'.$rand_content[$rand_c_2].'</p>';
    }
    
    $update = wp_update_post(array(
        'ID' => $one->ID,
        'post_content'   => $new_c,
    ));
}
*/
?>