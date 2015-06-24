<?php 

// Gul kasse widgets
class smamo_pt_box extends WP_Widget {

    function __construct() {
    parent::__construct(
    // Base ID of your widget
    'smamo_pt_box', 

    // Widget name will appear in UI
    __('Projekter og Temaer', 'smamo'), 

    // Widget description
    array( 'description' => __( 'Widget, der viser et link til Projekter og Temaer', 'smamo' ), ) 
    );
    }

    // FRONT END
    public function widget( $args, $instance ) {
        
        $check_for_pts = get_posts( array('post_type' => 'tema', 'posts_per_page' => -1) );
        if ($check_for_pts) :
        
        echo $args['before_widget']; ?>

        <a href="<?php echo bloginfo('url') ?>/tema" class="pt-widget-box">
            <img src="<?php echo get_template_directory_uri() ?>/statics/gul-pil.png"/>
            <h3>Projekter og Temaer</h3>
            <span><?php echo $instance['title'] ?></span>
        </a>

        <?php echo $args['after_widget'];
        
        endif;
    }

    // BACKEND
    public function form( $instance ) {

        if ( isset( $instance[ 'title' ] ) ) {

            $title = $instance[ 'title' ];

        }

        else {

            $title = __( 'Faaborg Gymnasium 2014', 'smamo' );

        }

        // Widget admin form
        ?>
        <p>
        <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Knappens undertitel:' ); ?></label> 
        <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
        </p>
        <?php 
    }

    // OPDATER
    public function update( $new_instance, $old_instance ) {

        $instance = array();

        $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';

        return $instance;

    }

} // SLUT GUL KASSE WIDGET









// Registrer ekstra widgets
add_action( 'widgets_init', 'smamo_load_widgets' );
function smamo_load_widgets() {
	register_widget( 'smamo_pt_box' );
}
