function footerFun(){
	var liWidth=90;
	var footerHTMLA='<li><div class="footer-arrow"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="footer-skew"></div></li>'
	var footerHTMLB='<li style="margin-right:200px"><div class="footer-arrow"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="footer-skew"></div></li>'
	var footAllHTML='';
	var liHtml='';
	var iNum=500;//表示多少个li\
	var marginNum=0;
	for( var i=0;i<iNum;i++)
	{
		if(i==100000){
			liHtml=footerHTMLB;
			marginNum=marginNum+1;
		}
		else{
			liHtml=footerHTMLA;
		}
		
		footAllHTML=footAllHTML+liHtml;//循环一千次
	}
	var winWidth=$(document).width();//可视窗口宽度
	var winHeight=$(document).height();//可视高度
	
	$(".footer").css({width:(liWidth*iNum+marginNum*200)+"px"});//将地面设置一个宽度
	$(".scroll").css({height:(liWidth*iNum+marginNum*200-winWidth+winHeight)+"px"});//将scroll设置一个宽度
	$(".footer ul").append(footAllHTML);//找到ul将1000个li添加到ul里面
}
footerFun();




	/*云*/

	function cloudFun(){
		var cloudHTML='<div class="theCloud"><i></i><i></i></div>';
		$('.cloud').append($(cloudHTML).css({left:"100px",top:"150px"}));
		$('.cloud').append($(cloudHTML).css({left:"500px",top:"50px"}));
		$('.cloud').append($(cloudHTML).css({left:"1000px",top:"100px"}));
		$('.cloud').append($(cloudHTML).css({left:"1500px",top:"200px"}));
		$('.cloud').append($(cloudHTML).css({left:"2000px",top:"210px"}));
		$('.cloud').append($(cloudHTML).css({left:"2500px",top:"170px"}));
	}
	cloudFun();
	/*树*/
	function treeFun(){
		var treeHTML='<div class="tree-main"><div class="tree-footer"></div></div><div class="tree-i"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>';
		$('.tree').append($(treeHTML).css({left:"200px"}));
		$('.tree').append($(treeHTML).css({left:"700px"}));
		$('.tree').append($(treeHTML).css({left:"1500px"}));
	}
	treeFun();
	
	
	
	
	
	
	
	/*山*/
	function hillFun(){
		var hillHTML='<div class="theHill"></div>';
		$('.hill').append($(hillHTML).css({left:"1200px"}));
		$('.hill').append($(hillHTML).css({left:"2600px"}));
	}
	hillFun();
	
	
	var oldScroll=0;
	$(window).scroll(function(){//监听浏览器滚动，当浏览器滚动里即可触发函数
	var scrollLong=$('html').scrollTop()+$('body').scrollTop();//得到滚去的距离
	$(".footer").css({left:-scrollLong+"px"});
	$(".cloud").css({left:-scrollLong/4+"px"});
	$('.hill').css({left:-scrollLong/7+"px"});
	$('.tree').css({left:-scrollLong+"px"});
	
		if(oldScroll>scrollLong){//后退
				$(".person").addClass("person-R");
				$(".person-zk").addClass("person-R");
			}
			else{//前进
				$(".person").removeClass("person-R");
				$(".person-zk").removeClass("person-R");
			}
			oldScroll=scrollLong;	
	
	
})