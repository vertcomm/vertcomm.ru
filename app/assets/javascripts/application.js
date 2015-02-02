// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require masonry.pkgd.min
//= require jquery.fancybox.pack
//= require turbolinks
//= require jquery.the-modal


//$(window).load(function () {
//
//    $('#mainGallery').masonry({
//        itemSelector: 'li',
//        columnWidth: 153,
//        gutter: 4
//    });
//
//});




$(document).ready(function() {

    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    }

    if (location.pathname.split("/")[1] == 'portfolio') {
        $('.main_menu > li > a[href="/portfolio"]').parent().addClass('selected');
    }
    if (location.pathname.split("/")[1] == 'services') {
        $('.main_menu > li > a[href="/services"]').parent().addClass('selected');
    }

    $('.fancybox').fancybox();

    $('.modal .close').on('click', function(e){
        e.preventDefault();
        $.modal().close();
    });


    $('#teamList li a').on('click', function(e){
        e.preventDefault();
        var c = $(this);
        $('#modal').modal().open({
            onOpen: function(el, options){
                console.log(c.find('.modal').html());
                el.html(c.parent('li').find('.modal').html());
            }
        });

    });
});
