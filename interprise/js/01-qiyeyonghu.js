/**
 * Created by zlh on 2016/8/29.
 */

$(function () {
    //迎接“新ICT”时代部分开始
    $(".left img").mouseenter(function () {
        $(this).addClass("border");
    })

    $(".left img").mouseleave(function () {
        $(this).removeClass("border");
    })

    $(".center img").mouseenter(function () {
        $(this).addClass("border");
    })

    $(".center img").mouseleave(function () {
        $(this).removeClass("border");
    })

    $(".right img").mouseenter(function () {
        $(this).addClass("border");
    })

    $(".right img").mouseleave(function () {
        $(this).removeClass("border");
    })

    //中间视频部分开始
    $(".video-img").mouseenter(function () {
        $(".video-img>.img").animate({
            "opacity":0.7,
        },500)
    })

    $(".video-img").mouseleave(function () {
        $(".video-img>.img").animate({
            "opacity":1
        },500)
    })

    //华为新闻开始

   /* $(".new-m img").mouseenter(function () {
        $(this).addClass("border");
    })

    $(".new-m img").mouseleave(function () {
        $(this).removeClass("border");
    })

    //$(".new-r img").mouseenter(function () {
    //    $(this).addClass("border");
    //})

    $(".new-r img").mouseleave(function () {
        $(this).removeClass("border");
    });*/

    //三个小图标
   /* $(".foot-r .img img").mouseenter(function () {
        $(this).animate({
            width:40,
            height:40
        },500)
    });

    $(".foot-r .img img").mouseleave(function () {
        $(this).stop().animate({
            width:32,
            height:32
        },400)
    });

         //APP二维码





    $(".foot-r .ewm img").mouseenter(function () {
        $(this).animate({
            width:90,
            height:90
        },500)
    });


    $(".foot-r .ewm img").mouseleave(function () {
        $(this).stop().animate({
            width:81,
            height:81
        },400)
    });


*/




    //返回顶部图标

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) { //向下滚动像素大于这个值时，即出现小火箭~
            $('.ret-top').fadeIn(300); //火箭淡入的时间，越小出现的越快~
        } else {
            $('.ret-top').fadeOut(300); //火箭淡出的时间，越小消失的越快~
        }
    });
    //火箭动画停留时间，越小消失的越快~
    $('.ret-top').click(function () {
        $('html,body').animate({scrollTop: '0px'}, 400);

    });

})

