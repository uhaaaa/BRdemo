$(document).ready(function(){
   

    setInterval(function(){
        $('#slider .slide').animate({left : '-100%' }, 2500, function(){
            $('#slider .slide li:first').insertAfter('#slider .slide li:last');
            $(this).css('left', 0);
            let num = $('.slide li img:first').attr('alt');
            $('.dot span').eq(num).addClass('on').siblings('span').removeClass('on');
        });
    }, 3500);

    $(window).scroll(function(){
        if (  $(window).scrollTop() > 150) {
            $('.top').fadeIn(500); 
         } 
        else {
            $('.top').fadeOut(500); 
        }
    });

    $('.toggle').click(function(){
        $('nav .mainmenu').slideToggle(500);
    });
    

    $(window).resize(function(){ 

        let wrapWidth = $(window).width();

        if ( wrapWidth > 640 ) { 
            $('.mainmenu>li').off();
            $('.mainmenu>li').on({
                'mouseover' : function(){
                    $('.submenu').stop().slideDown(500);
                    $('.bg').stop().slideDown(500);
                },
                'mouseout' : function(){
                    $('.submenu').stop().slideUp(500);
                    $('.bg').stop().slideUp(500);
                }
            });

        } else { 
            $('.mainmenu>li').off();
            $('.mainmenu>li').on({
                'mouseover' : function(){
                    $('.submenu').hide();
                    $('.bg').hide();
                }
            });
        }

    });

    $(window).resize();
});