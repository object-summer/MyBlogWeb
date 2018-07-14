$(function(){
     changeFrameHeight();
     /*tip*/
    toggleInfo('.adminMessage','.dropdownMessages');
    toggleInfo('.adminTask','.dropdowTask01');
    caretMenuTab('.caret','.nav-sec-toggle');
});
/*iframe的高度随着屏幕而改变*/
function changeFrameHeight(){
    var ifm = document.getElementById("pageWellcome"); 
    ifm.height =document.documentElement.clientHeight;
}
function toggleInfo(a,b){
	$(a).on('click',function(){
		$(b).toggle();
	})
}
function caretMenuTab(target,event){
	$(target).click(function(){
    	$(event).toggle();
    })
}
function selectColor(){
　	var color = document.getElementById("color"); 　　      　　　　　　　　//通过使用 getElementById() 来访问 <color> 元素
//　　var colorInfo = document.getElementById("colorInfo");
　　colorInfo.style.color = color.value; 　　　　　　　　　　　　　　　　 //给<span>的字体加颜色
//　　colorInfo.innerHTML = color.value;　　　　　　　　	　　　　　　　　	//给<span>加内容(<color>的值)
　　function changeColor(){ 　　　　　　　　　　　　　　　　　　　　 //改变颜色的事件
　　　　colorInfo.style.color = color.value;
　　　　colorInfo.innerHTML = color.value; 
　　}
}