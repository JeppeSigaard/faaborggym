<?php get_header(); ?>

<div class="top-space"></div>
<div id="content-top">
    <h1 id="page-title"><?php echo $wp_query->queried_object->name ?></h1>
</div>
<hr class="red"/>

<div id="content-main">
    
    <div class="content" id="page-center">
        <div class="post-list">
                
                
                
                <?php 
                
                $post_order = 0;
    
                $tax_query = get_posts(array(
                    'post_type' => 'medarbejder',
                    'posts_per_page' => -1,
                    'orderby'   => 'title',
                    'order'     => 'ASC',
                    'tax_query' => array(
                        array(
                            'taxonomy' => 'medarbejdere',
                            'field'    => 'ID',
                            'terms'    => $wp_query->queried_object->term_id,
                        ),
	               ),
                ));

                foreach($tax_query as $post){

                $post_order ++;
                
                $post_reading = '';

                include('partials/postlist-medarbejder.php');
                
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