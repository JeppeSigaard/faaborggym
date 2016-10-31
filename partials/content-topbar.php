<section id="topbar" class="top loading">

    <a class="pt-preview-link" href="<?php echo bloginfo('url') ?>/tema/">
        <img src="<?php echo get_template_directory_uri() ?>/statics/gul-pil.png">
    </a>

    <?php foreach(get_theme_mod('topbar_icons') as $icon) :
    $url = esc_url($icon['icon_url']);
    $str = false;

    $type = esc_attr($icon['icon_type']);
    if(!$type){$type = 'email';}

    if($type === 'phone'){
        $url = 'tel:' . str_replace(' ','',str_replace('+','00', $icon['icon_url']));
        $str = esc_attr($icon['icon_url']);
    }

    if($type === 'email'){
        $url = 'mailto:' . sanitize_email($icon['icon_url']);
        $str = sanitize_email($icon['icon_url']);
    }

    ?>
    <a target="_blank" href="<?php echo $url; ?>" class="topbar-icon topbar-<?php echo $type ?>-icon">
        <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <use xlink:href="#icon-<?php echo $type; ?>"></use>
        </svg>
        <?php if(in_array($type,array('phone','email'))) : ?>
        <span><?php echo $str; ?></span>
        <?php endif; ?>
    </a>
    <?php endforeach; ?>

    <?php if (get_theme_mod('topbar_search') !== '0') : ?>
    <form action="<?php echo esc_url(get_bloginfo('url')); ?>" method="get" class="topbar-search">
        <fieldset>
            <input type="text" name="s">
            <input type="submit" value="søg">
        </fieldset>
        <a href="#" class="topbar-icon topbar-search-icon">
            <svg viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <use xlink:href="#icon-search"></use>
            </svg>
        </a>
    </form>

    <?php endif; ?>
</section>
