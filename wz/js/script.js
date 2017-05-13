var loginNode=document.querySelector(".loginReg_login");
var shadeMainNode=document.querySelector(".shadeMain");
var spanNode=document.querySelector(".shadeMain span");

loginNode.onclick=login;

function login(){
	shadeMainNode.style.display="";
}
//spanNode.onclick=function(){
//	shadeMainNode.style.display="none";
//}
document.onclick=function(){
	shadeMainNode.style.display="none";
}
