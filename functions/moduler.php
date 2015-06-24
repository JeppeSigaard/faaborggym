<?php
/*

    Opretter en særlig side til indstillinger for forsiden.
    Hvis siden er uønsket, kan du fjerne require(); fra functions.php.
    BEMÆRK: Slideshow (post_type: 'slide') er indstillet til at vises som undermenupunkt til Forside.
    Du kan ændre denne adfærd i functions/post-types.php:
    
    1) Find [ $args ] under  [ // Slides ]
    2) ændr [ "show_in_menu" => "instillinger_for_forsiden", ] til [ "show_in_menu" => true, ]
    
*/

add_action( 'admin_menu', 'smamo_add_admin_menu',5 );
add_action( 'admin_init', 'smamo_settings_init' );


function smamo_add_admin_menu(  ) { 

	add_menu_page( 'moduler', 'Forsiden', 'manage_options', 'moduler', 'moduler_options_page','dashicons-welcome-widgets-menus',11 );

}


function smamo_settings_exist(  ) { 

	if( false == get_option( 'instillinger_for_forsiden_settings' ) ) { 

		add_option( 'instillinger_for_forsiden_settings' );

	}

}


function smamo_settings_init(  ) { 

	register_setting( 'pluginPage', 'smamo_settings' );

	add_settings_section(
		'smamo_pluginPage_section', 
		__( '<div class="dashicons dashicons-format-gallery"></div> Slideshow', 'smamo' ), 
		'slideshow_callback', 
		'pluginPage'
	);

	add_settings_field( 
		'slide_num', 
		__( 'Hvor mange slides skal vises?', 'smamo' ), 
		'slide_num', 
		'pluginPage', 
		'smamo_pluginPage_section' 
	);
    
    add_settings_field( 
		'slide_duration', 
		__( 'Slide vises i', 'smamo' ), 
		'slide_duration', 
		'pluginPage', 
		'smamo_pluginPage_section' 
	);
    
     add_settings_field( 
		'slide_transition', 
		__( 'Transistion ', 'smamo' ), 
		'slide_transition', 
		'pluginPage', 
		'smamo_pluginPage_section' 
	);

    
    
    register_setting( 'pluginPage_2', 'smamo_settings' );
    
    add_settings_section(
		'smamo_pluginPage_section_2', 
		__( '<div class="dashicons dashicons-format-chat"></div> Statusopdateringer', 'smamo' ), 
		'status_callback', 
		'pluginPage_2'
	);

    add_settings_field( 
		'status_q', 
		__( 'Indstil status spørgsmål', 'smamo' ), 
		'status_q', 
		'pluginPage_2', 
		'smamo_pluginPage_section_2' 
	);
    
    add_settings_field( 
		'status_q_max', 
		__( 'Max viste svar', 'smamo' ), 
		'status_q_max', 
		'pluginPage_2', 
		'smamo_pluginPage_section_2' 
	);
    
}


function slide_num(  ) { 

	$options = get_option( 'smamo_settings' );
	?>
	<input type='number' name='smamo_settings[slide_num]' value='<?php echo $options['slide_num']; ?>'> slides
	<?php

}

function slide_duration(  ) { 

	$options = get_option( 'smamo_settings' );
	?>
	<input type='number' step="100" name='smamo_settings[slide_duration]' value='<?php echo $options['slide_duration']; ?>'> millisekunder
	<?php

}


function slide_transition(  ) { 

	$options = get_option( 'smamo_settings' );
	?>
	<input type='number' step="100" name='smamo_settings[slide_transition]' value='<?php echo $options['slide_transition']; ?>'> millisekunder
	<?php

}

function status_q(  ) { 

	$options = get_option( 'smamo_settings' );
	?>
	<input class="widefat" style="max-width:500px;" type='text' name='smamo_settings[status_q]' value='<?php echo $options['status_q']; ?>'>
	<?php

}


function status_q_max(  ) { 

	$options = get_option( 'smamo_settings' );
	?>
	<input type='number' name='smamo_settings[status_q_max]' value='<?php echo $options['status_q_max']; ?>'> svar
	<?php

}


function slideshow_callback(  ) { 

	echo __( 'Indstil opførslen for forsidens slideshow. Du kan tilføje nye slides, fjerne gamle eller ændre rækkefølgen <a href="'.get_bloginfo("url").'/wp-admin/edit.php?post_type=slide">på denne side</a>.', 'smamo' );

}


function status_callback(  ) { 

	echo __( 'Indstil opførsel for statusopdateringer. Du kan redigere de enkelte opdateringer <a href="'.get_bloginfo("url").'/wp-admin/edit.php?post_type=status">på denne side</a>. Indstillinger påvirker alle status-moduler på hjemmesiden', 'smamo' );

}


function moduler_options_page(  ) { 

	?>
    <div class="wrap">
        <form action='options.php' method='post'>

            <h2>Indstillinger for forsidens moduler på faaborg-gym.dk</h2>

            <br/><hr/><br/>

             <?php if( isset($_GET['settings-updated']) && $_GET['settings-updated'] == 'true' ) { ?>
            <div id="message" class="updated">
                <p><strong><?php _e('Indstillingerne er gemt.') ?></strong></p>
            </div>
            <?php } ?>

            <?php

            settings_fields( 'pluginPage_2' );
            do_settings_sections( 'pluginPage_2' );

            submit_button();

            ?>
            <br/><hr/><br/>
            <?php

            settings_fields( 'pluginPage' );
            do_settings_sections( 'pluginPage' );

            submit_button();    

            ?>

        </form>
    </div>
	<?php

}

?>
