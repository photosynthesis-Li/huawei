/**
 * Created by zhu on 2016/8/27.
 */

$(function(){

    var i = 0;
    //��ͼƬ���һ��ʱ���Ƶ�һ�ŵ����һ�ź���
    var clone=$(".banner .img li").first().clone();//���Ƶ�һ��
    $(".banner .img").append(clone)//��Ӽӵ�һ�ŵ����һҳ
    var size= $(".banner .img li").size();
    //console.log(size);

    for(var j=0; j<size-1; j++){//��forѭ�����li��ǩ
        $(".banner .num").append("<li></li>")
    }

    $(".banner .num li").first().addClass("on")

    //��껮��ԭ��
    $(".banner .num li").hover(function(){
        var index=$(this).index();
        i = index;//��ͷ��Բ����ƥ��
        $(".banner .img").stop().animate({left:-index*1500},1000)
        $(this).addClass("on").siblings().removeClass("on")
    })

    //�Զ��ֲ�
    var t = setInterval(moveL,2000);

    //�������رն�ʱ��
    $(".banner").hover(function(){
        clearInterval(t)//����رն�ʱ��
    },function(){
        t = setInterval(moveL,2000)//�Ƴ���
    })//����functionһ������һ������

    //�����л�
    $(".banner .btn_l").click(function(){
        moveL()
    })/*.click����¼�*/

    //���Ұ�ť
    $(".banner .btn_r").click(function(){
        moveL()
    })/*.click����¼�*/

    function moveL(){
        i++;
        if(i==size){/*��if�ж��Ƿ������һ������*/

            $(".banner .img").css({left:0})//��cssѸ�����ص�һ��
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