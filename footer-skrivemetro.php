<?php 

//////////////////////////////////////////////////////////
/* --      FOOTER - Vis footer og tilføj scripts     -- */
//////////////////////////////////////////////////////////

$options = get_option( 'footer_options' );

?>
<footer id="footer">
    <div>
       <?php if (isset($options['field_0'])) :?>
           <?php echo $options['field_0'] ?> · 
       <?php endif; ?>
       <?php if (isset($options['field_1'])) :?>
           <?php echo $options['field_1'] ?> · 
       <?php endif; ?>
       <?php if (isset($options['field_2'])) :?>
           <?php echo $options['field_2'] ?> · 
       <?php endif; ?>
       <?php if (isset($options['field_3'])) :?>
           <?php echo $options['field_3'] ?> · 
       <?php endif; ?>
       <?php if (isset($options['field_4'])) :?>
           <a href="mailto:<?php echo $options['field_4'] ?>"><?php echo $options['field_4'] ?></a>
       <?php endif; ?>
       
       <br/>
       
       <?php if (isset($options['field_5'])) :?>
           EAN: <?php echo $options['field_5'] ?> · 
       <?php endif; ?>
       <?php if (isset($options['field_6'])) :?>
           CVR: <?php echo $options['field_6'] ?> · 
       <?php endif; ?>
       <?php if (isset($options['field_7'])) :?>
           Skolenummer: <?php echo $options['field_7'] ?> · 
       <?php endif; ?>
       <?php if (isset($options['field_8'])) :?>
           Eksamensnummer: <?php echo $options['field_8'] ?> 
       <?php endif; ?>
    </div>
    
    <a href="<?php echo get_bloginfo('url'); ?>">
        <img src="<?php header_image(); ?>" alt="<?php echo get_bloginfo(); ?>" />
    </a>
</footer>
<?php wp_footer(); ?>
<script src="<?php echo get_template_directory_uri().'/skrivemetro/js/metro.min.js' ?>"></script>
</body>
</html>