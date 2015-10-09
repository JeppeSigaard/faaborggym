<?php
// Instagram widget
class smamo_instagram_widget extends WP_Widget {

    function __construct() {
    parent::__construct(
    // Base ID of your widget
    'smamo_instagram_widget', 

    // Widget name will appear in UI
    __('Instagram Widget', 'smamo'), 

    // Widget description
    array( 'description' => __( 'Widget, der viser billeder fra instagram', 'smamo' ), ) 
    );
    }

    // FRONT END
    public function widget( $args, $instance ) {
        
        $hash_no_hash = esc_attr(str_replace('#','',$instance['hashtag']));
        
        echo $args['before_widget']; ?>
        
        <div class="instagram-box" data-fetch-url="<?php echo admin_url('admin-ajax.php'); ?>" data-hashtag="<?php echo $hash_no_hash; ?>">
            <header class="instagram-header">
                <a target="_blank" href="https://instagram.com/explore/tags/<?php echo sanitize_title($hash_no_hash) ?>"><h4><?php echo '#'. $hash_no_hash; ?></h4></a>
            </header>
            <ul>
                <li>
                    <a class="loading" href="#"></a>
                </li>
                <li>
                    <a class="loading" href="#"></a>
                </li>
                <li>
                    <a class="loading" href="#"></a>
                </li>
                <li>
                    <a class="loading" href="#"></a>
                </li>
            </ul>
            <a href="#" class="news-more-btn">Vis flere billeder</a>
        </div>
        
        <?php echo $args['after_widget'];
    }

    // BACKEND
    public function form( $instance ) {

        if ( isset( $instance[ 'hashtag' ] ) ) {

            $hashtag = $instance[ 'hashtag' ];

        }

        else {

            $hashtag = __( 'faaborggym', 'smamo' );

        }

        // Widget admin form
        ?>
        <p>
        <label for="<?php echo $this->get_field_id( 'hashtag' ); ?>"><?php _e( 'Hashtag:' ); ?></label> 
        <input class="widefat" id="<?php echo $this->get_field_id( 'hashtag' ); ?>" name="<?php echo $this->get_field_name( 'hashtag' ); ?>" type="text" value="<?php echo esc_attr( $hashtag ); ?>" />
        </p>
        <?php 
    }

    // OPDATER
    public function update( $new_instance, $old_instance ) {

        $instance = array();

        $instance['hashtag'] = '#' . str_replace('#','',( ! empty( $new_instance['hashtag'] ) ) ? strip_tags( $new_instance['hashtag'] ) : 'faaborggym');

        return $instance;

    }

} // SLUT INSTAGRAM WIDGET









// Registrer ekstra widget
add_action( 'widgets_init', 'smamo_load_instagram_widget' );
function smamo_load_instagram_widget() {
	register_widget( 'smamo_instagram_widget' );
}
