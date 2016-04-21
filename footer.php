<?php 

//////////////////////////////////////////////////////////
/* --      FOOTER - Vis footer og tilføj scripts     -- */
//////////////////////////////////////////////////////////

$options = get_option( 'footer_options' );

?>
<footer id="footer">
    <div class="footer-inner">
        <a class="footer-logo" href="<?php echo esc_url(get_bloginfo('url')); ?>"><img src="<?php echo get_template_directory_uri() ?>/statics/fg-logo.png"></a>
        <div class="footer-column">
            <div>
                <p><strong><?php echo (isset($options['field_0'])) ? esc_attr($options['field_0']) : ''; ?></strong></p>
                <p><?php echo (isset($options['field_1'])) ? esc_attr($options['field_1']) : ''; ?></p> 
                <p><?php echo (isset($options['field_2'])) ? esc_attr($options['field_2']) : ''; ?></p>
            </div>
            <div>
                <p><strong>EAN-nummer </strong> <?php echo (isset($options['field_5'])) ? esc_attr($options['field_5']) : ''; ?></p>
                <p><strong>CVR-nummer </strong> <?php echo (isset($options['field_6'])) ? esc_attr($options['field_6']) : ''; ?></p>
            </div>
            <div>
                <p><strong>Skolenummer </strong> <?php echo (isset($options['field_7'])) ? esc_attr($options['field_7']) : ''; ?></p>
                <p><strong>Eksamensnummer </strong> <?php echo (isset($options['field_8'])) ? esc_attr($options['field_8']) : ''; ?></p>
            </div>
        </div>
        <div class="footer-column">
            <div>
                <p><strong>Telefon</strong> <?php echo (isset($options['field_3'])) ? esc_attr($options['field_3']) : ''; ?></p>
                <p><strong>Email</strong> <?php echo (isset($options['field_4'])) ? esc_attr($options['field_4']) : ''; ?></p>
            </div>
            <div>
                <p><strong>Kontorets åbningstid</strong></p>
                <p>7.45 - 14.30</p>
            </div>
        </div>
        <div class="footer-column footer-menu">
            <div>
                <p><strong>LINKS</strong></p>
                <?php wp_nav_menu(
                    array(
                        'theme_location' => 'footer-menu',
                        'container'       => false,
                        'menu_class'      => 'footer-menu',
                        'menu_id'         => false,
                        'fallback_cb'     => false,
                        'items_wrap'      => '<ul class="%2$s">%3$s</ul>',
                    )
                ); ?>    
            </div>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>