$(function(){
	$(".navmenu a").click(function(){
		$(this).css({"background":"none"})
	})
	
	//插入小三角
	var sub_list=$(".sub_nmenu2").find(".sub_list");
	var str='<span class="caret"></span>'; 
	sub_list.prev().append(str);
	//下拉菜单
	var sub_list_a=sub_list.prev();
	sub_list_a.each(function(i){
		$(this).click(function(){
			$(this).next().slideToggle("slow")
		})
	})
})
//导航
$(function(){
	var asideWidth=$("#aside").width();
	$("#aside").css({"left":(-asideWidth)+"px"});
	$("#nav_menu").click(function(){
		$("#mask").fadeIn("slow")
		$("#aside").css({"display":"block"}).stop().animate({"left":0},800)
	})
	var currentTop=0;
	$(window).scroll(function(){
		$("#mask,#aside").hide();
		$("#aside").css({"left":(-asideWidth)+"px"});
		
		var targetTop=$("body").scrollTop();
		if(targetTop>50){
			$(".head_top").stop().animate({marginTop:"-100px"},800)
		}
		if(targetTop==0){
			$(".head_top").stop().animate({marginTop:0},800)
		}
		setTimeout(function(){
			currentTop=$("body").scrollTop();
		},1000)
		if(targetTop<currentTop){
			$(".head_top").stop().animate({marginTop:0},800)
		}
	})
	
	
})

