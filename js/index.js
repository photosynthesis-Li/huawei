/**
 * Created by 晓娜 on 2016/8/29.
 */

$(function () {
    //tab切换
    $(".nav .nav_l ul li ").mouseenter(function () {
        var idx = $(this).index();
        $(".showpub").eq(idx).stop(false, true).slideDown();
    });
    $(".nav .nav_l ul li ").mouseleave(function () {
        var idx = $(this).index();
        $(".showpub").eq(idx).stop(false, true).slideUp();
    });
    //固定导航
   /* $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var topHeight = $(".top").height() + $(".logo").height();
        if (scrollTop > topHeight) {

            $("#nav").addClass("fixed");
        } else {

            $("#nav").removeClass("fixed");
        }
    })*/
    //固定小盒子返回顶部
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > 360){
            $(".fixbox #hide").show(1000);


        }else {
            $(".fixbox #hide").hide(1000);
        }
    });
    $(".fixbox li").mouseenter(function(){
        $(this).css("backgroundColor","#CC0000").siblings().css("backgroundColor","");
    });
    $(".fixbox li").mouseleave(function(){
        $(this).css("backgroundColor","");
    });





})