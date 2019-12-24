<script>
$(document).ready(function(){
    $(".vs li.item").eq(0).css({"left":"0px","z-index":"22"});
    var cnt=$(".vs li.item").length;
    var n=0;
    var intv = setInterval(function(){
        if(n<cnt){
            vsAni(n); 
            n++;  
        } else {
            n=0;  
            vsAni(0);
        }
    }, 2500);
    function vsAni(len){
        $(".vs li.item").eq(len).siblings().css("z-index","20");
        $(".vs li.item").eq(len).not(":animated").animate({"left":"0px","z-index":"22"}, 600,  function(){
            $(".vs li.item").eq(len).siblings().css("left", "100vw");
        });
    }
});    
</script>
<script>
$(document).ready(function(){
    var ht = parseInt($(window).height());
    $(".to_top").css("display", "none");
    $(window).scroll(function(){
        var sc = parseInt($(window).scrollTop()); 
        if(sc>=200){
            $(".hd").slideDown(200, function(){
                $(".hd").addClass("on");
                $(".hd").slideDown(700);
            });
        } else {
            $(".hd").slideDown(200, function(){
                $(".hd").removeClass("on");
                $(".hd").slideDown(700);
            });
        }
        if(sc>=380){
            $(".arrow").fadeOut();
        } else {
            $(".arrow").fadeIn();
        }
        if(sc>=ht){
            $(".to_top").fadeIn();
        } else {
            $(".to_top").fadeOut();
        }
    });
    $(".to_top").click(function(){
        $("body, html").animate({scrollTop:"0px"}, 500); 
    });
});    
</script>
<script>
$(document).ready(function(){
    arrMov();
    var intv_arr = setInterval(function(){ arrMov(); }, 1600);
    function arrMov(){
       $(".arrow").animate({"bottom":"-40px"}, 800, function(){
           $(".arrow").animate({"bottom":"-80px"}, 800);
       }); 
    }
});    
</script>