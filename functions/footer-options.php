<?php 

add_action( 'admin_menu', 'add_footer_options' );
add_action( 'admin_init', 'footer_options_init' );


function  add_footer_options(  ) { 

	add_submenu_page( 'themes.php', 'Footer', 'Footer', 'manage_options', 'smamo', 'footer_options_func' );

}


function footer_options_init(  ) { 

	register_setting( 'footer_info', 'footer_options' );

	add_settings_section(
		'footer_info_section', 
		null, 
		'footer_info_callback', 
		'footer_info'
	);

	add_settings_field( 
		'field_0', 
		__( 'Skolenavn', 'smamo' ), 
		'field_0_render', 
		'footer_info', 
		'footer_info_section' 
	);
    
    add_settings_field( 
		'field_1', 
		__( 'Adresselinje', 'smamo' ), 
		'field_1_render', 
		'footer_info', 
		'footer_info_section' 
	);
    
    add_settings_field( 
		'field_2', 
		__( 'Postnummer / by', 'smamo' ), 
		'field_2_render', 
		'footer_info', 
		'footer_info_section' 
	);
    
    add_settings_field( 
		'field_3', 
		__( 'Telefonnummer', 'smamo' ), 
		'field_3_render', 
		'footer_info', 
		'footer_info_section' 
	);
    
    add_settings_field( 
		'field_4', 
		__( 'Email', 'smamo' ), 
		'field_4_render', 
		'footer_info', 
		'footer_info_section' 
	);
    
    add_settings_field( 
		'field_5', 
		__( 'EAN', 'smamo' ), 
		'field_5_render', 
		'footer_info', 
		'footer_info_section' 
	);
    
    add_settings_field( 
		'field_6', 
		__( 'CVR', 'smamo' ), 
		'field_6_render', 
		'footer_info', 
		'footer_info_section' 
	);
    
    add_settings_field( 
		'field_7', 
		__( 'Skolenummer', 'smamo' ), 
		'field_7_render', 
		'footer_info', 
		'footer_info_section' 
	);
    
    add_settings_field( 
		'field_8', 
		__( 'Eksamensnummer', 'smamo' ), 
		'field_8_render', 
		'footer_info', 
		'footer_info_section' 
	);


}


function field_foreach_render($name){
    $options = get_option( 'footer_options' );
	?>
	<input name='footer_options[<?php echo $name ?>]' value="<?php echo $options[$name]; ?>">
	<?php
}


function field_0_render(  ) { field_foreach_render('field_0');}
function field_1_render(  ) { field_foreach_render('field_1');}
function field_2_render(  ) { field_foreach_render('field_2');}
function field_3_render(  ) { field_foreach_render('field_3');}
function field_4_render(  ) { field_foreach_render('field_4');}
function field_5_render(  ) { field_foreach_render('field_5');}
function field_6_render(  ) { field_foreach_render('field_6');}
function field_7_render(  ) { field_foreach_render('field_7');}
function field_8_render(  ) { field_foreach_render('field_8');}


function footer_info_callback(  ) { 

	echo __( 'Indstillinger for footer', 'smamo' );

}


function footer_options_func(  ) { 

	?>
	<form action='options.php' method='post'>
		
		<h2>Footer</h2>
		
		<?php
		settings_fields( 'footer_info' );
		do_settings_sections( 'footer_info' );
		submit_button();
		?>
		
	</form>
	<?php

}

?>