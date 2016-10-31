<?php

// Gul kasse widgets
class smamo_calendar extends WP_Widget {

    function __construct() {
    parent::__construct(
    // Base ID of your widget
    'smamo_calendar',

    // Widget name will appear in UI
    __('Kalender', 'smamo'),

    // Widget description
    array( 'description' => __( 'Widget, der viser begivenheder fra Facebook og arkivet', 'smamo' ), )
    );
    }

    // FRONT END
    public function widget( $args, $instance ) {

        echo $args['before_widget'];

        $wp_events = get_posts(array(
            'posts_per_page' => get_option('posts_per_page'),
            'offset'=> 0,
            'post_type' => 'kalender',
            'orderby' => 'meta_value',
            'meta_type' => 'DATETIME',
            'meta_key' => 'cal_start',
            'order' => 'ASC',
        ));

        $events = smamo_merge_events(smamo_fetch_fb_events(), $wp_events);
        ksort($events);
        $post_order = 0;
        $post_reading = '';
        foreach($events as $event) :

            include get_template_directory() . '/partials/postlist-cal-widget.php';

        endforeach;

        echo $args['after_widget'];

    }

    // BACKEND
    public function form( $instance ) {

        if ( isset( $instance[ 'title' ] ) ) {

            $title = $instance[ 'title' ];

        }

        else {

            $title = __( 'Kalender', 'smamo' );

        }

        // Widget admin form
        ?>
        <p>
        <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Titel:' ); ?></label>
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
add_action( 'widgets_init', 'smamo_add_cal_widget' );
function smamo_add_cal_widget() {
	register_widget( 'smamo_calendar' );
}
