var ulNode=document.querySelector(".box-right ul");
var btnNode=document.querySelector(".box-btn");

btnNode.onclick=function(){
	window.location.reload();
};


var arrChess=[];//值为true，表示可以落子，false表示已落子
function Checkerboard(rows){//
	var frag=document.createDocumentFragment();//创建碎片
	for(var y=0;y<=rows;y++){
		arrChess[y]=[];
		for(var x=0;x<=20;x++){
			arrChess[y][x]=true;
			if(x!=20 && y!=rows){
				var lisNode=document.createElement("li");//创建li
				frag.appendChild(lisNode);//li插入碎片
			}
		}
	}
	ulNode.appendChild(frag);//碎片插入ul里面
}
Checkerboard(10);
var chessBool=true;//true表示落黑子,false表示落白子
var QPnode=document.querySelector("#QP");
QPnode.onclick=function(e){
    var event=e || window.event;//事件对象
    var x=event.clientX-this.offsetLeft+document.body.scrollLeft+document.documentElement.scrollLeft;//坐标x;
    var y=event.clientY-this.offsetTop+document.body.scrollTop+document.documentElement.scrollTop;//坐标y
  
  	var arrowNode=document.querySelector(".arrow");
    var liWidth=40;//li盒子得宽度
    var liHeight=40;//li盒子得高度
    var pieceX=Math.round(x/liWidth);
    var pieceY=Math.round(y/liHeight);
    if(arrChess[pieceY][pieceX]===true){
    	var span=document.createElement("span");
    	var chessColor;
	    if(chessBool){//true进入
	    	span.className="black";
	    	arrowNode.setAttribute("style","margin-top: 76px;");
	    	chessBool=false;
	    	arrChess[pieceY][pieceX]="black";
	    	chessColor="black";
	    }else{
	    	span.className="white";
	    	chessColor="white";
	    	arrowNode.setAttribute("style","margin-top: 0px;");
	    	chessBool=true;
	    	arrChess[pieceY][pieceX]="white";
	    }
	    span.style.left=(pieceX*liWidth-15)+"px";
	    span.style.top=(pieceY*liWidth-15)+"px";
	    QPnode.appendChild(span);
	    setTimeout(function(){
	    	win(pieceX,pieceY,chessColor)
	    },0);
    }
    else{
    	alert("操你妈！点老子干吊！");
    }
};
function win(x,y,color){
	var num=0;
	//横向
	for(var i=x-4;i<=x+4;i++){
		if(i>=0 && i<=20){
			if(arrChess[y][i]==color){
				num++
			}
			else{
				num=0;
			}
			if(num==5){
				alert(color+"赢了！");
                return window.location.reload();//刷新页面; 重新开始
			}
		}
	}
	//竖向
	for(var j=y-4;j<=y+4;j++){
		if(j>=0 && j<=20){
			if(arrChess[j][x]==color){
				num++
			}
			else{
				num=0;
			}
			if(num==5){
				alert(color+"赢了！");
                return window.location.reload();//刷新页面; 重新开始
			}
		}
	}
	//斜向上
	for(var i=x-4,j=y+4;i<=x+4,j>=y-4;i++,j--){
		if(i>=0 && i<=20 && j>=0 && j<=10){
			if(arrChess[j][i]==color){
				num++;
			}
			else{
				num=0;
			}
			if(num==5){
				alert(color+"赢了！");
                return window.location.reload();//刷新页面; 重新开始
			}
		}
	}
	//斜向下
	for(var i=x-4,j=y-4;i<=x+4,j<=y+4;i++,j++){
		if(i>=0 && i<=20 && j>=0 && j<=10){
			if(arrChess[j][i]==color){
				num++;
			}
			else{
				num=0;
			}
			if(num==5){
				alert(color+"赢了！");
                return window.location.reload();//刷新页面; 重新开始
			}
		}
	}
	
	
	
}












