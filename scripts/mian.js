$(document).ready($(function() {
	console.log("hi! man")
	console.log("编程之路，海纳百川有容乃大， 壁立千刃无欲则刚")
	console.log("并不孤单，你我同行！")
// 	quanpingscroll();
	
	/*屏幕缩小到768px的时候显示菜单开关*/
	$('.toggle-nav-btn').on('click',function(){
		$('.info-nav ul li').slideToggle();
	})
	$('.bolg-menu-btn').click(function(){
		$('.blog-left-nav').slideToggle();
	})
	/*提示工具*/
	$("[data-toggle='tooltip']").tooltip();
	/*音乐开关*/
	var musicIndex =1;
	$('.music').hover(function() {
        if (musicIndex == 1) {
            $(this).find('span').eq(0).css('display', 'block')
        } else if (musicIndex == 0) {
            $(this).find('span').eq(1).css('display', 'block')
        }
    }, function() {
        $(this).find('span').hide()
    });
    var audio = document.getElementById("myAudio");
	$('.music').on('click', function() {
        if ($(this).find('span').eq(0).css('display') == 'block') {
            musicIndex = 0;
            $(this).find('span').eq(0).css('display', 'none');
            $(this).find('span').eq(1).css('display', 'block');
            audio.pause();
            return musicIndex
        } else {
            musicIndex = 1;
            $(this).find('span').eq(0).css('display', 'block');
            $(this).find('span').eq(1).css('display', 'none');
            audio.play();
            return musicIndex
        }
        $(this).find('span').hide();
        return false
    });
    $('.music').on('mouseover',function(){
    		$('.music-mask').css({    		
//	    		'opacity':'.5',
	    		'animation': 'background 0.5s linear',
				'-o-animation': 'background 0.5s linear',
				'-webkit-animation': 'background 0.5s linear',
				'-moz-animation': 'background 0.5s linear',
				'-msanimation': 'background 0.5s linear',
				'background':'rgb(255,255,255, .6)'
	    	})
    	}
   );
    /*分享*/
   $('.share').on('click',function(){
   		$('.share-content').toggle()
   })
    /*鼠标移动到skill上，显示内容*/
   $(document).on('mousemove','.skill-box ul li',function(){
   			$('.skill-box ul li').children("p").hide();
			$('.skill-box ul li').eq($(this).children("p").show())
	  }).mouseleave(function(){
   			$('.skill-box ul li').eq($(this).children("p").hide())
	  	})
   /*项目展示,委托事件*/
  $('.exLists ul').on('mouseover','li',function(e){
  	$(this).children('.exList').find('.exBg').css('display','block');
  	e.stopPropagation();
  }).on('mouseout','li',function(){
  	$(this).children('.exList').find('.exBg').css('display','none');
//	e.stopPropagation();
  })
  $('.huifuBtn').on('click',function(){
  	$('.huifuTextarea').toggle()
  })
  /*全屏滚动的js*/
 function quanpingscroll(){
 	var wrap = $("#HM-wrap");
    var main = $('#HM-mian');
    var hei = $(window).height();
    console.log(hei);
    var one =parseInt($('#HM-mian').height());
    console.log("on:"+one)
//	$('.section').height(hei);
	var obj = $('.section');
	for(var i=0;i<obj.length;i++){
        if(obj[i].className == 'section'){
             obj[i].style.height = hei + "px";
        }
    }
    //如果不加时间控制，滚动会过度灵敏，一次翻好几屏
    var startTime = 0, //翻屏起始时间  
        endTime = 0,  
        now = 0;     
    //浏览器兼容      
    if ((navigator.userAgent.toLowerCase().indexOf("firefox")!=-1)){   
        document.addEventListener("DOMMouseScroll",scrollFun,false);   
    }  
    else if (document.addEventListener) {  
        document.addEventListener("mousewheel",scrollFun,false);  
    }  
    else if (document.attachEvent) {  
        document.attachEvent("onmousewheel",scrollFun);   
    }  
    else{  
        document.onmousewheel = scrollFun;  
    }  
    //mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
    //DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动     
     //滚动事件处理函数
    function scrollFun(event){
    	var delta = event.detail || (event.wheelDelta);  
    	endTime = new Date().getTime(); 
    	var timeSum = endTime - startTime;
    	console.log($('#HM-mian').css('top'));
    	if (timeSum > -1000){
	    	if(delta >0 ){
	    		now  = now + hei;
	    		toPage(now);
	    		if($('#HM-mian').css('top') > 0){
	    			$('#HM-mian').css('top') = 0;
	    		}
	    	}
	    	if(delta <0){
	    		now = now - hei;
	    		toPage(now);
	    		if(now >6*hei){
	    			now = 0;
	    		}
	    	}
	    } else {  
            event.preventDefault();    
        }  
	     function toPage(now){        
	         $("#HM-mian").animate({top:(now+'px')},1000);     //jquery实现动画效果
	//         setTimeout("main.style.top = now + 'px'",100);     /*javascript 实现动画效果*/
	   	 }   
 	}	
}		

/*nav导航跟随页面的移动，fiex到顶部*/
$(window).scroll(function(){
	var navTop = $('.HM-top').height();
	var onee = $(window).scrollTop();
	
	if(onee>navTop){
		$('#mianNav').addClass("fixed");
		$('.title').css('padding-top','80px');
	}
	if(onee < navTop) {
		$('#mianNav').removeClass("fixed");
	}
	/*点击火箭，回到顶层*/
	if(onee>20){
		$('.backTop').show();
		$('.backTop').on('click',function(){
			$(window).scrollTop(0)
		})	
	}
});
/*点击导航栏li，显示相应的section*/
$('.info-nav ul li').on('click',function(){
	var sectionheight = $('.section').height();
	$(window).scrollTop(sectionheight*($(this).index()));
	$('.info-nav ul li').hide()
})
/*index.html的经历轮播*/
function skillLunbo() {
	var length,
		currentIndex = 0,
		interval,
		hasStarted = false, //是否已经开始轮播 
		t = 3000; //轮播时间间隔 
	length = $('.slider-panel').length;
	
	
	//将除了第一张图片隐藏 
	$('.slider-panel:not(:first)').hide();
	//将第一个slider-item设为激活状态 
	$('.slider-item:first').addClass('slider-item-selected');
	//隐藏向前、向后翻按钮 
//	$('.slider-page').hide();
	//鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动 
	$('.slider-panel, .slider-pre, .slider-next').hover(function() {
		stop();
//		$('.slider-page').show();
	}, function() {
//		$('.slider-page').hide();
		start();
	});
	$('.slider-item').hover(function(e) {
		stop();
		var preIndex = $(".slider-item").filter(".slider-item-selected").index();
		currentIndex = $(this).index();
		play(preIndex, currentIndex);
	}, function() {
		start();
	});
	$('.slider-pre').unbind('click');
	$('.slider-pre').bind('click', function() {
		pre();
	});
	$('.slider-next').unbind('click');
	$('.slider-next').bind('click', function() {
		next();
	});
	/** 
	 * 向前翻页 
	 */
	function pre() {
		var preIndex = currentIndex;
		currentIndex = (--currentIndex + length) % length;
		play(preIndex, currentIndex);
	}
	/** 
	 * 向后翻页 
	 */
	function next() {
		var preIndex = currentIndex;
		currentIndex = ++currentIndex % length;
		play(preIndex, currentIndex);
	}
	/** 
	 * 从preIndex页翻到currentIndex页 
	 * preIndex 整数，翻页的起始页 
	 * currentIndex 整数，翻到的那页 
	 */
	function play(preIndex, currentIndex) {
		$('.slider-panel').eq(preIndex).fadeOut(500)
			.parent().children().eq(currentIndex).fadeIn(1500);
		$('.slider-item').removeClass('slider-item-selected');
		$('.slider-item').eq(currentIndex).addClass('slider-item-selected');
	}
	/** 
	 * 开始轮播 
	 */
	function start() {
		if(!hasStarted) {
			hasStarted = true;
			interval = setInterval(next, t);
		}
	}
	/** 
	 * 停止轮播 
	 */
	function stop() {
		clearInterval(interval);
		hasStarted = false;
	}
	//开始轮播 
		start();
	};
 	skillLunbo();
  
  /*miss.html*/
 $('#commentNameInput').on('blur',function(){
 	$('span.uesrname').html($('#commentNameInput').val())
 })
  /*ajax解析经历*/
   
 
 
 
}))

