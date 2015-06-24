<?php
 

if( class_exists( 'WidgetImageField' ) )
    add_action( 'widgets_init', create_function( '', "register_widget( 'smamo_img_widget' );" ) );
 
 
class smamo_img_widget extends WP_Widget
{
    var $image_field = 'image';  // the image field ID
 
    function __construct()
    {
        $widget_ops = array(
                'classname'     => 'smamo_img_widget',
                'description'   => __( "Widget, der viser billede og en eventuelt overliggende tekst")
            );
        parent::__construct( 'smamo_img_widget', __('Billede med link'), $widget_ops );
    }
 
    function form( $instance )
    {
        $image_id   = esc_attr( isset( $instance[$this->image_field] ) ? $instance[$this->image_field] : 0 );
        $blurb      = esc_attr( isset( $instance['blurb'] ) ? $instance['blurb'] : '' );
        $url      = esc_attr( isset( $instance['url'] ) ? $instance['url'] : '' );
        $new      = esc_attr(  isset($instance['new']) ? 'true' : 'false' );
 
        $image      = new WidgetImageField( $this, $image_id );
        ?>
            <div>
                <label><?php _e( 'Billede' ); ?></label>
                <?php echo $image->get_widget_field(); ?>
            </div>
            <p>
                <label for="<?php echo $this->get_field_id( 'blurb' ); ?>"><?php _e( 'Tekst:' ); ?>
                    <input class="widefat" id="<?php echo $this->get_field_id( 'blurb' ); ?>" name="<?php echo $this->get_field_name( 'blurb' ); ?>" type="text" value="<?php echo $blurb; ?>" />
                </label>
            </p>
            <p>
                <label for="<?php echo $this->get_field_id( 'url' ); ?>"><?php _e( 'Link:' ); ?>
                    <input class="widefat" id="<?php echo $this->get_field_id( 'url' ); ?>" name="<?php echo $this->get_field_name( 'url' ); ?>" type="text" value="<?php echo $url; ?>" />
                </label>
            </p>
            <p>
                <label for="<?php echo $this->get_field_id( 'new' ); ?>"><?php _e( 'Åben i nyt vindue:' ); ?>
                    <input id="<?php echo $this->get_field_id( 'new' ); ?>" name="<?php echo $this->get_field_name( 'new' ); ?>" type="checkbox" <?php checked($instance['new'], 'on'); ?>/>
                </label>
            </p>
        <?php
    }
 
    function widget( $args, $instance )
    {
        extract($args);
 
        $image_id   = $instance[$this->image_field];
        $blurb      = $instance['blurb'];
        $url      = $instance['url'];
        $new      = $instance['new'] ? 'true' : 'false';
 
        $image      = new WidgetImageField( $this, $image_id );
 
        echo $before_widget;
 
        ?>
            <a <?php if (!empty($url)){echo 'href="'.$url.'"'; if ('on' == $instance['new']){echo ' target="_blank"';}}?>/>
            <?php if( !empty( $image_id ) ) : ?>
                <img src="<?php echo $image->get_image_src( 'full' ); ?>"/>
            <?php endif; ?>
            <?php if( !empty( $blurb ) ) : ?>
                <div><span><?php echo $blurb; ?></span></div>
            <?php endif; ?>
            </a>
            <?php
 
        echo $after_widget;
    }
 
    function update( $new_instance, $old_instance )
    {
        $instance = $old_instance;
        $instance[$this->image_field]    = intval( strip_tags( $new_instance[$this->image_field] ) );
        $instance['blurb']               = strip_tags( $new_instance['blurb'] );
        $instance['url']                 = strip_tags( $new_instance['url'] );
        $instance['new']                 = strip_tags( $new_instance['new'] );
 
        return $instance;
    }
}