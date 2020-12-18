# test
jQuery(function () {


    // ページトップに戻るボタン
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { //100pxスクロールしたら
            if (appear == false) {
                appear = true;
                pagetop.stop().animate({
                    'bottom': '50px' //下から50pxの位置に
                }, 300); //0.3秒かけて現れる
            }
        } else {
            if (appear) {
                appear = false;
                pagetop.stop().animate({
                    'bottom': '-50px' //下から-50pxの位置に
                }, 300); //0.3秒かけて隠れる
            }
        }
    });
    pagetop.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ戻る
        return false;
    });



    $('header a').click(function () {
        var id = $(this).attr('href');
        var position = $(id).offset().top;

        $('html,body').animate({
            'scrollTop': position
        }, 500);
    });

    $('.hamburger-menu').on('click', function() {
        $(this).toggleClass('hamburger-menu-active')
        $('.menu-wrapper').fadeToggle(500);
    });
    $('.menu-nav a[href]').on('click', function(event) {
        $('.hamburger-menu-active').trigger('click');
    });

});
