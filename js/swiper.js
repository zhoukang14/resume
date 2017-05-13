window.onload = function() {
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical',
	  	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		} 
	});
	var swiper3 = new Swiper('.swiper-container3', {
        zoom: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
   });
   var swiper4 = new Swiper('.swiper-container4', {
        pagination: '.swiper-pagination',
        effect: 'cube',
        grabCursor: true,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    $(function(){
		$("#content").typed({
	        strings: ["世&nbsp;界&nbsp;那&nbsp;么&nbsp;大&nbsp;，<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我&nbsp;想&nbsp;去&nbsp;看&nbsp;看"],
	        typeSpeed: 100,
	        showCursor: true,
			cursorChar: "|",
  		});
	})
}
