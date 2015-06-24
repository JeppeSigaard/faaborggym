<?php get_header(); ?>

<div class="top-space"></div>
<div id="content-top">
    <h1 id="page-title">
        <?php 
        $term =	$wp_query->queried_object;
        echo $term->name; 
        ?>
    </h1>
</div>
<hr class="red"/>

<div id="content-main">
    
    <div class="content" id="page-center">
        <div class="post-list">
        
            <?php 

                $post_order = 0;
                $exclude_ansvar_id = '';
    
                $tax_query = get_posts(array(
                    'post_type' => 'medarbejder',
                    'posts_per_page' => -1,
                    'orderby'   => 'title',
                    'order'     => 'ASC',
                    'tax_query' => array(
                        array(
                            'taxonomy' => 'fag',
                            'field'    => 'ID',
                            'terms'    => $term->term_id,
                        ),
	               ),
                ));

                foreach($tax_query as $post){

                $meta_ansvar = strtolower(get_post_meta($post->ID, 'hverv',true));
                if (strpos($meta_ansvar,'fag') !== false 
                    && strpos($meta_ansvar,'ansvar') !== false 
                    && strpos($meta_ansvar,str_replace('dramatik','drama',str_replace('oldtidskundskab','old',strtolower($term->name)))) !== false) {
                    $exclude_ansvar_id = $post->ID;
                    $post_reading = ' reading';
                    $post_order ++;
                    // Spit out posts
                    include('partials/postlist-medarbejder.php');
                }

                }
            
                foreach($tax_query as $post){

                $post_order ++;
                
                $post_reading = '';
                if($post_order == 1 || $wp_query->post_count <= 3){$post_reading = ' reading';}

                if($post->ID !== $exclude_ansvar_id){
                    
                    // Spit out posts
                    include('partials/postlist-medarbejder.php');
                }

                }
                
                ?>
        
        </div>
        <hr class="red"/>
    </div>
    
    <div class="content" id="page-right">
        
        <?php 
        $parent_id = 302;
        include 'partials/sidemenu-page.php';
        ?>
        
        <?php dynamic_sidebar( 'mb-widgets-right' ); ?> 
    
    </div>

    <div class="content" id="page-left">
        
        <div class="sidemenu-container">
            <h4>Lærerne</h4>
            <ul id="menu-undervisere-sidemenu-1" class="menu">
                <?php wp_list_categories(array('taxonomy' => 'fag', 'title_li' => '')); ?>
            </ul>
        </div>
        <hr class="red"/>
        
        <?php dynamic_sidebar( 'mb-widgets-left' ); ?> 

    </div>
    
</div>

<?php get_footer();?>