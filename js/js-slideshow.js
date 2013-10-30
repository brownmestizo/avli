

function slideSwitch() {
    var $active = $('.image_thumb ul li.active');
  
    //console.log($active.length);
    if ( $active.length == 0 ) $active = $('.image_thumb ul li:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next(): $('.image_thumb ul li:first');
    $active.removeClass('active');
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            //$active.removeClass('active last-active');
        });
    var imgAlt = $next.find('img').attr("alt"); //Get Alt Tag of Image
    var imgTitle = $next.find('a').attr("href"); //Get Main Image URL
    var imgDesc = $next.find('.block').html();  //Get HTML of block
    var imgDescHeight = $(".main_image").find('.block').height(); //Calculate height of block 

    $(".main_image .block").animate({ opacity: 0, marginBottom: -imgDescHeight }, 250 , function() {
        //$(".main_image .block").html(imgDesc).animate({ opacity: 0.85,  marginBottom: "0" }, 250 );
        $(".main_image img").attr({ src: imgTitle , alt: imgAlt});
      });
}