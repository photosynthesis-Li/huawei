/**
 * Created by zlh on 2016/8/29.
 */

$(function () {
    //ӭ�ӡ���ICT��ʱ�����ֿ�ʼ
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

    //�м���Ƶ���ֿ�ʼ
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

    //��Ϊ���ſ�ʼ

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

    //����Сͼ��
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

         //APP��ά��





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




    //���ض���ͼ��

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) { //���¹������ش������ֵʱ��������С���~
            $('.ret-top').fadeIn(300); //��������ʱ�䣬ԽС���ֵ�Խ��~
        } else {
            $('.ret-top').fadeOut(300); //���������ʱ�䣬ԽС��ʧ��Խ��~
        }
    });
    //�������ͣ��ʱ�䣬ԽС��ʧ��Խ��~
    $('.ret-top').click(function () {
        $('html,body').animate({scrollTop: '0px'}, 400);

    });

})

