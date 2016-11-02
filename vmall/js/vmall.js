/**
 * Created by lh on 2016/8/30.
 */

$(function () {
    $(".head .appsoft,.head .s-sitemap").children().mouseenter(function () {
        $(this).find(".b").show();
    });
    $(".head .appsoft,.head .s-sitemap").children().mouseleave(function () {
        $(this).find(".b").hide();
    });
    $(".top .input-box .search-box").focus(function () {
        var value = $(this).val()
        if (value == "荣耀8") {
            $(this).val("")
        }
    })
    $(".top .input-box .search-box").blur(function () {
        var value = $(this).val()
        if (value == "") {
            $(this).val("荣耀8")
        }
    })

    $(".top .header-qrcode .ec-slider-nav").children().mouseenter(function () {
        $(this).css("backgroundColor", "red");
        var idx = $(this).index();
        $(".top .header-qrcode .ec-slider-list").children().eq(idx).show().siblings().hide()
    })
    $(".top .header-qrcode .ec-slider-nav").children().mouseleave(function () {
        $(this).css("backgroundColor", "#888");
    })
    $(".left-nav .category-item").mouseenter(function () {
        $(this).children(".category-info").css("backgroundColor", "#F6F6F6");
        $(this).children(".category-panels").show();
    });
    $(".left-nav .category-item").mouseleave(function () {
        $(this).children(".category-info").css("backgroundColor", "white");
        $(this).children(".category-panels").hide();
    });
    $("#wonderful").mouseenter(function () {
        $(this).children(".b").show();
        $(this).find(".icon-category").css("backgroundPosition", "-229px -24px");
    });
    $("#wonderful").mouseleave(function () {
        $(this).children(".b").hide();
        $(this).find(".icon-category").css("backgroundPosition", "-229px -27px");
    });
    var timer1 = null
    var pic = 0
    var square = 0
    //获取图片的宽度
    var imgWidth = $(".hot-board .ec-slider li").width()
    //克隆第一张图片
    var cloneImg = $(".hot-board .ec-slider-list").children(".img0").clone()
    //克隆第一张的图片放在最后li的位置
    $(".hot-board .ec-slider-nav span").eq(0).addClass("current")
    $(".hot-board .ec-slider-list").append(cloneImg)
    //给ul设置mouseenter事件，清除定时器
    $(".hot-board .ec-slider-list").mouseenter(function () {
        clearInterval(timer1)
    })
    //给ul设置mouseleave事件，重新设置定时器
    $(".hot-board .ec-slider-list").mouseleave(function () {
        timer1 = setInterval(function () {
            if (pic == $(".hot-board .ec-slider-list").children().length - 1) {
                pic = 0
                $(".hot-board .ec-slider-list").css("left", "0px")
            }
            pic++;
            square++
            $(".hot-board .ec-slider-list").animate({
                "left": -pic * imgWidth + "px"
            }, 600)
            if (square > $(".hot-board .ec-slider-nav span").length - 1) {
                square = 0;}
            $(".hot-board .ec-slider-nav span").eq(square).addClass("current").siblings().removeClass("current")

        }, 1800)
    })
    //给span设置mouseenter事件，当鼠标移动在span标签，ul动画。
    $(".hot-board .ec-slider-nav span").mouseenter(function () {
        //当面span设置current属性，清除其他的current属性
        $(this).addClass("current").siblings().removeClass("current")
        var idx = $(this).index()
        //给ul设置动画,target的距离为小方块*图片的距离
        $(".hot-board .ec-slider-list").stop().animate({
            "left": -idx * imgWidth + "px"
        }, 1000)
        square=pic=idx
    })
    //自动播放
    timer1 = setInterval(function () {
        if (pic == $(".hot-board .ec-slider-list li").length - 1) {
            pic = 0
            $(".hot-board .ec-slider-list").css("left", "0px")
        }
        pic++
        $(".hot-board .ec-slider-list").animate({
            "left": -pic * imgWidth + "px"
        }, 600)
        square++
        if (square > $(".hot-board .ec-slider-nav span").length - 1) {
            square = 0;}
//                } else {
//                    square++
//                }
        $(".hot-board .ec-slider-nav span").eq(square).addClass("current").siblings().removeClass("current")

    }, 1800)
    $(".goods .goods_hot1").mouseenter(function () {
        $(this).css("borderColor","#efcacc")
    })
    $(".goods .goods_hot1").mouseleave(function () {
        $(this).css("borderColor","#f8f8f8")
    })
    $(".goods .goods_hot2").mouseenter(function () {
        $(this).css("borderColor","#efcacc")
    })
    $(".goods .goods_hot2").mouseleave(function () {
        $(this).css("borderColor","#e2f9fb")
    })
    $(".goods .goods_new1").mouseenter(function () {
        $(this).css("borderColor","#efcacc")
    })
    $(".goods .goods_new1").mouseleave(function () {
        $(this).css("borderColor","#fffce7")
    })
    $(".goods .goods_new2").mouseenter(function () {
        $(this).css("borderColor","#efcacc")
    })
    $(".goods .goods_new2").mouseleave(function () {
        $(this).css("borderColor","#fffce7")
    })
    $(".goods .goods_tab .goods_tab_item").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active")
        var idx = $(this).index();
        $(".goods .goods_h").children().eq(idx).show().siblings().hide();

    })
    //中部荣耀路由无缝滚动
    var $li=$("#lunbobox").find("li").eq(0).clone();
    $("#lunbobox>ul").append($li);
    var pic1=0;
    setInterval(function () {
        if (pic1==$("#lunbobox li").length-1) {
            pic1=0;
            $("#lunbobox>ul").css("left","0px");
        }
        pic1++;
        var imgwidth=$(".w").width()
        var target=-pic1*imgwidth;
        $("#lunbobox>ul").stop().animate({
            "left":target+"px"
        },1500)
    },3000)
    //给每一个盒子设置边框
    $(".wrap li").mouseenter(function () {
        $(this).css("backgroundColor","#edc9cb");
    });
    $(".wrap li").mouseleave(function () {
        $(this).css("backgroundColor","");
    });

    $(".wrap li").mouseenter(function () {
        $(this).css("backgroundColor","#edc9cb");
    });
    $(".wrap li").mouseleave(function () {
        $(this).css("backgroundColor","");
    });

    $("#e-prot li").mouseenter(function() {
        $(this).children(".imgwrap").css("border","#edc9cb 4px solid");
    })
    $("#e-prot li").mouseleave(function() {
        $(this).children(".imgwrap").css("border","rgba(255,255,255,0) 4px solid");
    })
    $("#e-prob li").mouseenter(function(){

        $(this).children(".imgwrap").css("border","#edc9cb 4px solid");
    })
    $("#e-prob li").mouseleave(function() {
        $(this).children(".imgwrap").css("border","rgba(255,255,255,0) 4px solid");
    })
    //二维码显示  隐藏
    $(".fbanner-t .erweima").parent().mouseenter(function(){
        $(".erweima").show();
    })
    $(".fbanner-t .erweima").parent().mouseleave(function(){
        $(".erweima").hide();
    })
    //返回顶部
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
})