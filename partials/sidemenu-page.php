<?php
    $post = get_post($parent_id);
	if($post->post_parent)
	$children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0");
	else
	$children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0");
	
	$parents = get_post_ancestors( $post->ID );
	/* Get the ID of the 'top most' Page if not return current page ID */
	$top_id = ($parents) ? $parents[count($parents)-1]: $post->ID;
	
	
	if ($children) { ?>
    <div class="sidemenu-container" id="side-menu">
    <a href="<?php echo get_the_permalink($top_id); ?>">
        <h4><?php echo get_the_title($top_id); ?></h4>
    </a>
        <ul class="menu">
        <?php if ($top_id == 345 ){ 
        
            $cur = '';
            if (is_archive()){$cur = ' current_page_item';}
            echo '<li class="menu-item'.$cur.'"><a href="'.get_bloginfo('url').'/studieretning">Studieretninger</a></li>'; 
    
        } 
        
        if ($top_id == 302 ){
            
            $underviser = '';
            $ledelse = '';
            $ovrige = '';
            
            $term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) );
            
            if(is_object($term)){if($term->slug == 'undervisere'){$underviser = ' current_page_item';}}
            
            echo '<li class="menu-item'.$underviser.'"><a href="'.get_bloginfo('url').'/medarbejdere/undervisere/">Undervisere</a></li>';
            
            if(is_object($term)){if($term->slug == 'ledelsen'){$ledelse = ' current_page_item';}}
            
            echo '<li class="menu-item'.$ledelse.'"><a href="'.get_bloginfo('url').'/medarbejdere/ledelsen/">Ledelsen</a></li>';
            
            if(is_object($term)){if($term->slug == 'oevrige-ansatte'){$ovrige = ' current_page_item';}}
            
            echo '<li class="menu-item'.$ovrige.'"><a href="'.get_bloginfo('url').'/medarbejdere/oevrige-ansatte/">Øvrige ansatte</a></li>';
        
        } ?>      
		<?php echo $children; ?>
    	</ul>
    </div>
    <hr class="red"/>
<?php } ?>