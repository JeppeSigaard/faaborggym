<?php 

//////////////////////////////////////////////////////////
/* --      FOOTER - Vis footer og tilføj scripts     -- */
//////////////////////////////////////////////////////////

?>
<footer id="footer">
    <div class="footer-inner">
        <a class="footer-logo" href="<?php echo esc_url(get_bloginfo('url')); ?>"><img src="<?php echo get_template_directory_uri() ?>/statics/fg-logo.png"></a>
        <div class="footer-column">
            <div>
                <p><strong><?php echo esc_attr(get_theme_mod('ft_school'))?></strong></p>
                <p><?php echo esc_attr(get_theme_mod('ft_address'))?></p>
                <p><?php echo esc_attr(get_theme_mod('ft_post_city'))?></p>
            </div>
            <div>
                <p><strong>EAN-nummer </strong> <?php echo esc_attr(get_theme_mod('ft_ean')) ?></p>
                <p><strong>CVR-nummer </strong> <?php echo esc_attr(get_theme_mod('ft_cvr')) ?></p>
            </div>
            <div>
                <p><strong>Skolenummer </strong> <?php echo esc_attr(get_theme_mod('ft_school_no')) ?></p>
                <p><strong>Eksamensnummer </strong> <?php echo esc_attr(get_theme_mod('ft_exam_no')) ?></p>
            </div>
        </div>
        <div class="footer-column">
            <div>
                <p><strong>Telefon</strong> <?php echo esc_attr(get_theme_mod('ft_phone')) ?></p>
                <p><strong>Email</strong> <?php echo esc_attr(get_theme_mod('ft_email')) ?></p>
            </div>
            <div>
                <p><strong>Kontorets åbningstid</strong></p>
                <p><?php echo get_theme_mod('ft_open'); ?></p>
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
<?php if ('skrivemetro' === get_post_type(get_the_ID())) : ?>
<script src="<?php echo get_template_directory_uri().'/skrivemetro/js/metro.min.js' ?>"></script>
<?php endif; ?>
</body>
</html>
