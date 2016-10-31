<?php



add_rewrite_rule('^kalender/([^/]*)(/([^/]+))?(/([^/]+))?/?','index.php?post_type=kalender&event_id=$matches[1]&param_0=$matches[3]&param_1=$matches[5]','top');
add_filter('query_vars', 'smamo_add_query_vars');
function smamo_add_query_vars($vars) {
    $vars[] = "event_id";
    $vars[] = "param_0";
    $vars[] = "param_1";
    return $vars;
}
