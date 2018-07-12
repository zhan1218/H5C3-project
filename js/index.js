$(function(){
    $("#heima").fullpage({
        navigation:true,
        sectionsColor:["#f9dd67", "#84a2d4", "#ef674d", "#ffeedd", "#cf4759", "#85d9ed", "#6faa85", "#84d9ed"],

        // //进入到某一屏时调用
        afterLoad:function(a,index){

            ////每一次离开当前屏（进入下一屏时），把所有的js动画先清除。 
            //jquery的动画的本质，其实是给动画元素添加了style的属性， 所以清除动画就是把style的属性干掉
            $(".section>div img, .section>div div").attr("style","");
            //如果上一屏的动画还没有执行完,就把该动画停掉
            $(".section>div img, .section>div div").stop();

            //移除所有的css动画,同时给当前屏添加css动画
            $(".section").removeClass("animation").eq(index-1).addClass("animation");


            //给第二屏添加动画  
            if(index==2){
                //                                                  easeOutBack是一个回弹效果
                $(".section2 .search01").animate({marginLeft:-111},1000,"easeOutBack",function(){
                    $(this).hide();
                    //右侧的搜索框(search01)移动到中间就隐藏,中间带字的搜索框显示出来(search02)
                    //停顿半秒后,再移到右上角
                    $(".section2 .search02").show().delay(500).animate({height:30, marginLeft:130,bottom:450},1000);
                    //停顿半秒，沙发显示并放大
                    $(".section2 .sofas").delay(500).animate({height:218,opacity:1},1000);

                })
            }


            //第4屏添加动画
            if(index==4){
                $(".section4 .carbox").animate({marginLeft:1000},2000,"easeInElastic",function(){
                    //delay延迟方法对animate方法生效,但是不能对show生效
                    $(".section4 .keyboard").fadeIn(500);
                })
            }


            // 第6屏添加动画
            if(index==6){
                //天上掉下沙发
                $(".section6 .sofabox").animate({bottom:100},1000,function(){
                    //街道开始往左移动,模拟开车效果(车实际上是没动的)
                    $(".section .street").animate({left:-1200},7000,function(){
                        //男孩下车,变大
                        $(".section6 .man").animate({height:120},500,function(){
                            //下车,往右移动一段距离
                            $(".section6 .man").animate({right:-150},1000,function(){
                                //开门,女孩出来
                                $(".section6 .door").show();
                                //设置定时器,延迟0.5秒后执行
                                setTimeout(function(){
                                    //女孩元素显示出来
                                    $(".section6 .girl").show();
                                },500)
                            })
                        })
                    })
                })
            }


            // 第8屏JS效果
            if(index==8){
                //拿到窗口的高度
                var screenheight=$(window).height();
                //console.log(screenheight);
                //监听鼠标移动事件
                $(".section8").mousemove(function(target){
                    //console.log(target.pageY);
                    //拿到鼠标所在的X,Y坐标
                    var x=target.pageX; 
                    var y=target.pageY;
                    //定位中left的值
                    var left=x-65;
                    //console.log(left);
                    var bottom=(screenheight-y)-449;
                    //console.log(bottom);
                    if(bottom >=0) bottom=0;
                //     $(".section8 .hand").css({left: left, bottom: bottom});
                 
                $(".section8 .hand").css({left:left,bottom:bottom})
            });
                $(".section8 .again").click(function(){
                    //fullage插件调方法
                    $.fn.fullpage.moveTo(1);
                });
            }
        }

    });
});