/**
 * Created by a on 2016/8/29.
 */
$(function () {
//        头部下拉菜单
    $(".head .appsoft,.head .s-sitemap").mouseenter(function () {
        $(this).find(".b").show();
    });
    $(".head .appsoft,.head .s-sitemap").mouseleave(function () {
        $(this).find(".b").hide();
    });

    //        搜索框内容移除显示
    $(".top .input-box").children(".search-box").focus(function () {
        $(this).val("");
    });
    $(".top .input-box").children(".search-box").blur(function () {
        $(this).val("荣耀8");
    });

//        顶部右侧二维码切换
    $(".top>.header-qrcode .ec-slider-nav").children().mouseenter(function () {
        $(this).css("backgroundColor", "#ca141d");
        var idx = $(this).index();
        $(".top>.header-qrcode .ec-slider-list").children().eq(idx).show().siblings().hide();
    });
    $(".top>.header-qrcode .ec-slider-nav").children().mouseleave(function () {
        $(this).css("backgroundColor", "#888");
    });

    //        鼠标经过时左侧导航显示
    $(".nav .left-nav").mouseenter(function () {
        $(this).children(".b").show();
        $("#icon-category").css("backgroundPosition", "-229px -24px");
    });
//        鼠标离开时左侧导航隐藏
    $(".nav .left-nav").mouseleave(function () {
        $(this).children(".b").hide();
        $("#icon-category").css("backgroundPosition", "-229px -27px");
    });

    //鼠标经过时显示精彩频道的下拉菜单
    $("#wonderful").mouseenter(function () {
        $(this).children(".b").show();
        $(this).find(".icon-category").css("backgroundPosition", "-229px -24px");
    });
    //鼠标离开时隐藏精彩频道的下拉菜单
    $("#wonderful").mouseleave(function () {
        $(this).children(".b").hide();
        $(this).find(".icon-category").css("backgroundPosition", "-229px -27px");
    });


    //点击左侧导航的显示左侧导航的右面部分
    $(".left-nav .category-item").mouseenter(function () {
        $(this).children(".category-info").css("opacity", "0.8");
        $(this).children(".category-panels").show();
    });
    $(".left-nav .category-item").mouseleave(function () {
        $(this).children(".category-info").css("opacity", "0.7");
        $(this).children(".category-panels").hide();
    });
});

//放大镜
$(function () {
    //商品部分放大镜效果
    $("#smallBox").mouseenter(function () {
        $("#smallBoxmask").show();
        $("#bigBox").show();
    });
    $("#smallBox").mouseleave(function () {
        $("#smallBoxmask").hide();
        $("#bigBox").hide();
    });
    $("#smallBoxmask").mousemove(function (e) {
        //smallBoxmask 需要移动的坐标为 x = pageX - box距离页面顶端的距离(因为box有定位所以smallBox。offsetleft为 0) - smallBoxmask的宽度的一半(将鼠标放在smallBoxmask的中间)
        var spaceX = e.pageX - $(".phone_hBox").offset().left - $("#smallBoxmask").width() / 2;
        var spaceY = e.pageY - $(".phone_hBox").offset().top - $("#smallBoxmask").height() / 2;
        // 限定mask的范围
        if (spaceX > $("#smallBox").width() - $("#smallBoxmask").width()) {
            spaceX = $("#smallBox").width() - $("#smallBoxmask").width();
        }
        if (spaceX < 0) {
            spaceX = 0;
        }
        if (spaceY > $("#smallBox").height() - $("#smallBoxmask").height()) {
            spaceY = $("#smallBox").height() - $("#smallBoxmask").height();
        }
        if (spaceY < 0) {
            spaceY = 0;
        }
        $("#smallBoxmask").css({
            "left": spaceX + "px",
            "top": spaceY + "px"
        })
        //大图片移动的距离/mask移动的距离 = 大图片可移动的范围/mask可移动的范围
        //大图片可移动的范围是 bigBox.offsetWidth - bigImg.offsetWidth
        //水平方向
        var $bigImg = $("#bigBox>img");
        var $bigBox = $("#bigBox");
        var $smallBox = $("#smallBox");
        var bigImgX = $bigImg.width() - $bigBox.width();
        var smallBoxX = $smallBox.width() - $("#smallBoxmask").width();
        var moveRateX = bigImgX / smallBoxX;
        //竖直方向
        var bigImgY = $bigImg.height() - $bigBox.height();
        var smallBoxY = $smallBox.height() - $("#smallBoxmask").height();
        var moveRateY = bigImgY / smallBoxY;
        // 设置大图片的位置
        $("#bigBox>img").css({
            "left": -moveRateX * spaceX + "px",
            "top": -moveRateY * spaceY + "px"
        });
    });


// 左面手机展示区下方

// 鼠标经过显示边框
    $(".phone_b>ul>li>a").mouseenter(function () {
        $(".phone_hBox img").attr("src", $(this).attr("href"));
        $(this).css("backgroundColor", "red").siblings().css("backgroundColor", "");
        return false;
    });
    $(".phone_b>ul>li>a").mouseleave(function () {
        $(this).css("backgroundColor", "");
        return false;
    });
// 点击右箭头
    var pic = 0;
    $("#rightArr").click(function () {

        if (pic < $(".phone_b>ul>li").length - 4) {
            pic++;
            var liWidth = $(".phone_b>ul>li").width();
            if (pic === 1) {
                var target = -pic * liWidth - 20;
            } else {
                var target = -pic * liWidth;
            }
            $(".phone_b>ul").stop().animate({
                "left": target + "px"
            }, 500);
        }
    });
    $("#leftArr").click(function () {
        if (pic > 0) {
            pic--;
            var liWidth = $(".phone_b>ul>li").width();
            if (pic === 1) {
                var target = -pic * liWidth - 20;
            } else {
                var target = -pic * liWidth;
            }
            $(".phone_b>ul").stop().animate({
                "left": target + "px"
            }, 500);
        }
    });

    // 商品区手机购买的二维码
    $(".pro-mobile-code").mouseenter(function () {
        $(".pro-mobile-code .tips-area").show();
    });
    $(".pro-mobile-code").mouseleave(function () {
        $(".pro-mobile-code .tips-area").hide();
    });
});


//推荐搭配选择
$(function () {
    var pic = 0;
    $(".stt .bottom .left li a span").click(function () {
        pic++;
        if (pic % 2 != 0) {
            $(this).css("border", "solid 1px red");
            $(this).text("√").css("color", "black");

        } else {
            $(this).css("border", "solid 1px #B2B2B2");
            $(this).text("");

        }

    })
});


//固定小盒子返回顶部
$(function () {

    $(".fixbox .shang").click(function () {
        $('html,body').animate({scrollTop: '0px'}, 500);
    })
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > 360){
            $(".fixbox .shang").show(1000);

        }else {
            $(".fixbox .shang").hide(1000);
        }
    });
});