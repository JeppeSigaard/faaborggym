$(function(){var o=$("#head"),l=o.offset().top;$(window).on("scroll",function(){console.log($(window).scrollTop(),l),$(window).scrollTop()>l+10?o.addClass("fixed"):o.removeClass("fixed")})});
