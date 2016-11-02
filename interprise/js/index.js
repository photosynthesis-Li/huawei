/**
 * Created by zhu on 2016/8/28.
 */
$(function () {
    $(".nav-list .nav-list-left .tab-item").mouseenter(function(){

        var idx = $(this).index();

        //$(".nav-cont-wrap .main").eq(idx).addClass("selected").siblings().removeClass("selected");
        $(".nav-cont-wrap .main").eq(idx).stop().slideDown();
    });

    $(".nav-list .nav-list-left .tab-item").mouseleave(function(){

        var idx = $(this).index();

        //$(".nav-cont-wrap .main").eq(idx).removeClass("selected");
        $(".nav-cont-wrap .main").eq(idx).stop().slideUp();
    });

});



