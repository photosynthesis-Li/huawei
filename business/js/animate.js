/**
 * Created by ���� on 2016/8/19.
 */
function animate(obj,target){
    //��ֻ֤��һ����ʱ�������Խ��Խ�������
    if(obj.timer){
        clearInterval(obj.timer);
    }
    obj.timer = setInterval(function () {

        var leader = obj.offsetLeft;
        var step = 20;
        if(leader > target){
            step = -step;
        }

        var distance = Math.abs(leader - target);
        if(distance > Math.abs(step)){
            leader = leader + step;
            obj.style.left = leader+"px";

        }else {
            clearInterval(obj.timer);
            obj.style.left = target+"px";
        }

    },15)
}
