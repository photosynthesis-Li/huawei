/**
 * Created by zhu on 2016/8/27.
 */

$(function(){

    var i = 0;
    //在图片最后一张时复制第一张到最后一张后面
    var clone=$(".banner .img li").first().clone();//复制第一张
    $(".banner .img").append(clone)//添加加第一张到最后一页
    var size= $(".banner .img li").size();
    //console.log(size);

    for(var j=0; j<size-1; j++){//用for循环添加li标签
        $(".banner .num").append("<li></li>")
    }

    $(".banner .num li").first().addClass("on")

    //鼠标划入原点
    $(".banner .num li").hover(function(){
        var index=$(this).index();
        i = index;//箭头和圆点相匹配
        $(".banner .img").stop().animate({left:-index*1500},1000)
        $(this).addClass("on").siblings().removeClass("on")
    })

    //自动轮播
    var t = setInterval(moveL,2000);

    //鼠标移入关闭定时器
    $(".banner").hover(function(){
        clearInterval(t)//移入关闭定时器
    },function(){
        t = setInterval(moveL,2000)//移除打开
    })//两个function一个划入一个划出

    //向左切换
    $(".banner .btn_l").click(function(){
        moveL()
    })/*.click点击事件*/

    //向右按钮
    $(".banner .btn_r").click(function(){
        moveL()
    })/*.click点击事件*/

    function moveL(){
        i++;
        if(i==size){/*用if判断是否在最后一张若果*/

            $(".banner .img").css({left:0})//用css迅速拉回第一张
            i=1;
        }

        $(".banner .img").stop().animate({left:-i*1500},1000);


        if(i==size-1){
            $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on")
        }else{
            $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
        }
    }


})