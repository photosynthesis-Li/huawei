/**
 * Created by emily on 2016/8/28.
 */

//导航栏固定
$(function () {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var topHeight = $(".head").height();
        //2. 获取scrollTop 和 topPart的高度比较
        if(scrollTop > topHeight) {
            //3. 如果大于，给navBar加上fixed类，否则就移除这个类
            $(".head").addClass("fixed");
            $("#div1").css("display","none");
            $("#div2").css("display","none");
            $("#div3").css("display","none");
            $("#div4").css("display","none");
            //navBar脱离了文档流,给mainPart设置一个margin，让它顶住
            //jquery强大
            $("#box").css("marginTop", $(".head").height()+"px");
        }else {
            $(".head").removeClass("fixed");
            $(".head").css("marginTop", "0px");
            $(".picture").css("marginTop", "0px");
        }

    });


});

//二维码显示隐藏
$(function () {
    $("#weixinsmall").mouseenter(function () {
        $("#wechat").css("display", "block");
    });
    $("#weixinsmall").mouseleave(function () {
        $("#wechat").css("display", "none");
    });
})

//智能手机1显示
$(function () {
    $("#headerli1").mouseenter(function () {
        $("#div1").css("z-index", "5").fadeIn();
    });
    $("#headerli1").mouseleave(function () {
        $("#div1").fadeOut();
    });
});

//智能手机2显示
$(function () {
    $("#headerli2").mouseenter(function () {
        $("#div2").css("z-index", "5").fadeIn();
    });
    $("#headerli2").mouseleave(function () {
        $("#div2").fadeOut();
    });
});

//智能手机3显示
$(function () {
    $("#headerli3").mouseenter(function () {
        $("#div3").css("z-index", "5").fadeIn();
    });
    $("#headerli3").mouseleave(function () {
        $("#div3").fadeOut();
    });
});

//智能手机4显示
$(function () {
    $("#headerli4").mouseenter(function () {
        $("#div4").css("z-index", "5").fadeIn();
    });
    $("#headerli4").mouseleave(function () {
        $("#div4").fadeOut();
    });
});

//首页大轮播图
$(function () {
    var timer = null;
    var $li = $("#box .ul_one>li").eq(0).clone();
    $("#box .ul_one").append($li);
    for (var i = 0; i < $("#box .ul_one>li").length - 1; i++) {
        var newli = document.createElement("li");
        $("#box .ad ol").append($(newli));
//            $(newli).html(i+1);
    }
    //$("#box .ad ol>li").eq(0).addClass("current")
    var $imgWidth = $(".ad").width();

    //鼠标移上去停止
    $("#box").mouseenter(function () {
        $("#arr").fadeIn();
        clearInterval(timer);
    });

    $("#box").mouseleave(function () {
        $("#arr").fadeOut();
        timer = setInterval(function () {
            $("#right").click();
        }, 2000);
    });

    //鼠标移上去
    $("#box .ad ol>li").mouseenter(function () {
        var idx = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        animate($(".ul_one")[0], -idx * $imgWidth);
        pic = idx;
    });
//        右箭头
    var pic = 0;
    $("#right").click(function () {
        if (pic === $("#box .ul_one>li").length - 1) {
            pic = 0;
            $("#box .ul_one").css("left", "0px");
        }
        pic++;
        var target = -pic * $imgWidth;
        $("#box .ul_one").animate({
            "left": target + "px"
        });

        //下面圆点
        $("#box .ad ol>li").removeClass("current");
        if (pic == $("#box .ul_one>li").length - 1) {
            $("#box .ad ol>li").eq(0).addClass("current");
        } else {
            $("#box .ad ol>li").eq(pic).addClass("current");
        }
    });
    // 左箭头
    $("#left").click(function () {
        if (pic === 0) {
            pic = $("#box .ul_one>li").length - 1;
            $("#box .ul_one").css("left", -pic * $imgWidth + "px");
        }
        pic--;
        var target = -pic * $imgWidth;
//            alert(target);
        $("#box .ul_one").animate({
            "left": target + "px"
        });
        $("#box .ad ol>li").eq(pic).addClass("current").siblings().removeClass("current");
    });
    timer = setInterval(function () {
        $("#right").click();
    }, 2000);
});

//下面轮播

$(function () {
    var timer1 = null;
    var $imgWidth1 = $(".bgul1").width();
//        右箭头
    var pic1 = 0;
    $(".arr1 .right1").click(function () {
        var ulleft = parseInt($(".bgul1 .ul1").css("left"));
        if (ulleft <= -$(".bgul1 .ul1>li").eq(1).width() * ($(".bgul1 .ul1>li").length - 7)) {
            pic1 = 0;
            $(".bgul1 .ul1").css("left", "0px");
        }
        pic1++;
        var target1 = -pic1 * $imgWidth1;
        $(".bgul1 .ul1").animate({
            "left": target1 + "px"
        });
    });
    // 左箭头
    $(".arr1 .left1").click(function () {
        if (pic1 === 0) {
            pic1 = $(".bgul1 .ul1>li").length - 1;
            $(".bgul1 .ul1").css("left", -pic1 * $imgWidth1 + "px");
        }
        pic1--;
        var target1 = -pic1 * $imgWidth1;
//            alert(target);
        $(".bgul1 .ul1").animate({
            "left": target1 + "px"
        });
    });

    timer1 = setInterval(function () {
        $(".arr1 .right1").click();
    }, 2000);
//鼠标浮上去图片停止
    $(".bgul1").mouseenter(function () {
        $(".arr1").fadeIn();
        clearInterval(timer1);
    });
//鼠标离开时再次开启定时器
    $(".bgul1").mouseleave(function () {
        $(".arr1").fadeOut();
        timer1 = setInterval(function () {
            $(".right1").click();
        }, 2000);
    });

});

//下面第二个轮播图

$(function () {
    var timer2 = null;
    var $imgWidth2 = $(".bgul2").width();
//        右箭头
    var pic2 = 0;
    $(".arr2 .right2").click(function () {
        /*if(pic2 === $(".bgul2 .ul2>li").length-1){
         pic2 = 0;
         $(".bgul2 .ul2").css("left","0px");
         }*/
        var ulleft = parseInt($(".bgul2 .ul2").css("left"));
        if (ulleft <= -$(".bgul2 .ul2>li").eq(1).width() * ($(".bgul2 .ul2>li").length - 4)) {
            pic2 = 0;
            $(".bgul2 .ul2").css("left", "0px");
        }
        pic2++;
        var target2 = -pic2 * $imgWidth2;
        $(".bgul2 .ul2").animate({
            "left": target2 + "px"
        });
    });
    // 左箭头
    $(".arr2 .left2").click(function () {
        if (pic2 === 0) {
            pic2 = $(".bgul2 .ul2>li").length - 1;
            $(".bgul2 .ul2").css("left", -pic2 * $imgWidth2 + "px");
        }
        pic2--;
        var target2 = -pic2 * $imgWidth2;
//            alert(target);
        $(".bgul2 .ul2").animate({
            "left": target2 + "px"
        });
    });

    timer2 = setInterval(function () {
        $(".arr2 .right2").click();
    }, 3000);
//鼠标浮上去图片停止
    $(".bgul2").mouseenter(function () {
        $(".arr2").fadeIn();
        clearInterval(timer2);
    });
//鼠标离开时再次开启定时器
    $(".bgul2").mouseleave(function () {
        $(".arr2").fadeOut();
        timer2 = setInterval(function () {
            $(".right2").click();
        }, 3000);
    });

});
