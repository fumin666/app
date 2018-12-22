$(function(){
    $(".lunbo").slide({
        mainCell:".banner ul",
		autoPlay:true
    });
});

$(function(){
    $("#title_right a").click(function(){
        let index = $(this).index();
        $("#ruan>div").eq(index).show().siblings().hide();
        $(this).addClass("f1").siblings().removeClass("f1");
    });

    $("#title_right1 a").click(function(){
        let index = $(this).index();
        $("#ruan1>div").eq(index).show().siblings().hide();
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

    /** function change(navid,conid){
        var nav = document.getElementById(navid);
        var navlist = nav.getElementsByTagName("li");
        var con = document.getElementById(conid);
        var conlist = con.getElementsByTagName("li");
        for (i=0;i<navlist.length;i++){
            navlist[i].onclick = function (i){
                return function (){
                    for (m = 0;m<conlist.length;m++){
                        navlist[m].className ="";
                        conlist[m].style.display = "none";
                    }
                    this.className = "active";
                    conlist[i].style.display = "block";
                }
            }(i);
        }
    };
    change("nav","content");  //调用函数方法
    */ 
});