<?php 

/////////////////////////////////////////////////////
/* --   ATTACHMENT - Hjemmesidens BILLEDVISER   -- */
/////////////////////////////////////////////////////

// Hent header
get_header(); 
?>
<div class="top-space"></div>
<div class="top-space"></div>
<hr class="red"/>
<div id="content-main" style="margin:20px auto;max-width:1280px;">
    <?php if (wp_attachment_is_image($post->id)) {
				$att_image = wp_get_attachment_image_src( $post->id, "full");
				?>
				<p class="attachment">
					<a href="<?php echo wp_get_attachment_url($post->id); ?>" title="<?php the_title(); ?>">
					<img src="<?php echo $att_image[0];?>"class="attachment" alt="<?php $post->post_excerpt; ?>" />
					</a>
				</p>
				<?php } ?>
</div>
<?php get_footer(); ?>