$(function(){
    $(".content-menu li").click(function(){
        let index = $(this).index();
        $(".ruan>div").eq(index).show().siblings().hide();
        $(this).addClass("f1").siblings().removeClass("f1");
    });

    $(".ask a").click(function(){
        let index = $(this).index();
        $(".hea_right_container>div").eq(index).show().siblings().hide();
        $(this).addClass("fs").siblings().removeClass("fs");
    });

    $(".hea_right").click(function(){
        $(".hea_right_con").slideToggle();
    })
})
