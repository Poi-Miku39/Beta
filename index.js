function addCSS(cssText){
    var style = document.createElement('style'),  //创建一个style元素
        head = document.head || document.getElementsByTagName('head')[0]; //获取head元素
    style.type = 'text/css'; //这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
    if(style.styleSheet){ //IE
        var func = function(){
            try{ //防止IE中stylesheet数量超过限制而发生错误
                style.styleSheet.cssText = cssText;
            }catch(e){

            }
        }
        //如果当前styleSheet还不能用，则放到异步中则行
        if(style.styleSheet.disabled){
            setTimeout(func,10);
        }else{
            func();
        }
    }else{ //w3c
        //w3c浏览器中只要创建文本节点插入到style元素中就行了
        var textNode = document.createTextNode(cssText);
        style.appendChild(textNode);
    }
    head.appendChild(style); //把创建的style元素插入到head中
}

function change() {
	var bodyBgs = [];
	bodyBgs[0] = "https://cdn39.miku.cat/photos/10.png";
	bodyBgs[1] = "https://cdn39.miku.cat/photos/11.png";
	bodyBgs[2] = "https://cdn39.miku.cat/photos/12.png";
	bodyBgs[3] = "https://cdn39.miku.cat/photos/13.png";
	bodyBgs[4] = "https://cdn39.miku.cat/photos/14.png";
	bodyBgs[5] = "https://cdn39.miku.cat/photos/15.png";
	bodyBgs[6] = "https://cdn39.miku.cat/photos/16.png";
	bodyBgs[7] = "https://cdn39.miku.cat/photos/17.png";
	var randomBgIndex = Math.round(Math.random() * 7);
addCSS('.cb-slideshow li:nth-child(1) span{background-image:url('+ bodyBgs[randomBgIndex] +')}');
	window.setTimeout(function() {
		change()
	}, 50000)
}
change();

function change1() {
	var bodyBgs = [];
	bodyBgs[0] = "https://cdn39.miku.cat/photos/1.png";
	bodyBgs[1] = "https://cdn39.miku.cat/photos/2.png";
	bodyBgs[2] = "https://cdn39.miku.cat/photos/3.png";
	bodyBgs[3] = "https://cdn39.miku.cat/photos/4.png";
	bodyBgs[4] = "https://cdn39.miku.cat/photos/5.png";
	bodyBgs[5] = "https://cdn39.miku.cat/photos/6.png";
	bodyBgs[6] = "https://cdn39.miku.cat/photos/7.png";
	bodyBgs[7] = "https://cdn39.miku.cat/photos/8.png";
	var randomBgIndex1 = Math.round(Math.random() * 7);
addCSS('.cb-slideshow li:nth-child(2) span{background-image:url('+ bodyBgs[randomBgIndex1] +')}');
	window.setTimeout(function() {
		change1()
	}, 50000)
}
change1();

function change2() {
	var bodyBgs = [];
	bodyBgs[0] = "https://cdn39.miku.cat/photos/20.png";
	bodyBgs[1] = "https://cdn39.miku.cat/photos/21.png";
	bodyBgs[2] = "https://cdn39.miku.cat/photos/22.png";
	bodyBgs[3] = "https://cdn39.miku.cat/photos/23.png";
	bodyBgs[4] = "https://cdn39.miku.cat/photos/24.png";
	bodyBgs[5] = "https://cdn39.miku.cat/photos/25.png";
	bodyBgs[6] = "https://cdn39.miku.cat/photos/26.png";
	bodyBgs[7] = "https://cdn39.miku.cat/photos/27.png";
	var randomBgIndex2 = Math.round(Math.random() * 7);
addCSS('.cb-slideshow li:nth-child(3) span{background-image:url('+ bodyBgs[randomBgIndex2] +')}');
	window.setTimeout(function() {
		change2()
	}, 50000)
}
change2();

function change3() {
	var bodyBgs = [];
	bodyBgs[0] = "https://cdn39.miku.cat/li/24.jpg";
	bodyBgs[1] = "https://cdn39.miku.cat/li/25.jpg";
	bodyBgs[2] = "https://cdn39.miku.cat/li/26.jpg";
	bodyBgs[3] = "https://cdn39.miku.cat/li/27.jpg";
	bodyBgs[4] = "https://cdn39.miku.cat/li/28.jpg";
	bodyBgs[5] = "https://cdn39.miku.cat/li/29.jpg";
	bodyBgs[6] = "https://cdn39.miku.cat/li/30.jpg";
	bodyBgs[7] = "https://cdn39.miku.cat/li/31.jpg";
	var randomBgIndex3 = Math.round(Math.random() * 7);
addCSS('.cb-slideshow li:nth-child(4) span{background-image:url('+ bodyBgs[randomBgIndex3] +')}');
	window.setTimeout(function() {
		change3()
	}, 50000)
}
change3();

function change4() {
	var bodyBgs = [];
	bodyBgs[0] = "https://cdn39.miku.cat/photos/32.png";
	bodyBgs[1] = "https://cdn39.miku.cat/photos/33.png";
	bodyBgs[2] = "https://cdn39.miku.cat/photos/34.png";
	bodyBgs[3] = "https://cdn39.miku.cat/photos/35.png";
	bodyBgs[4] = "https://cdn39.miku.cat/photos/36.png";
	bodyBgs[5] = "https://cdn39.miku.cat/photos/37.png";
	bodyBgs[6] = "https://cdn39.miku.cat/photos/38.png";
	bodyBgs[7] = "https://cdn39.miku.cat/photos/39.png";
	var randomBgIndex4 = Math.round(Math.random() * 7);
addCSS('.cb-slideshow li:nth-child(5) span{background-image:url('+ bodyBgs[randomBgIndex4] +')}');
	window.setTimeout(function() {
		change4()
	}, 50000)
}
change4();

function change5() {
	var bodyBgs = [];
	bodyBgs[0] = "https://cdn39.miku.cat/photos/40.png";
	bodyBgs[1] = "https://cdn39.miku.cat/photos/41.png";
	bodyBgs[2] = "https://cdn39.miku.cat/photos/42.png";
	bodyBgs[3] = "https://cdn39.miku.cat/photos/43.png";
	bodyBgs[4] = "https://cdn39.miku.cat/photos/44.png";
	bodyBgs[5] = "https://cdn39.miku.cat/photos/45.png";
	bodyBgs[6] = "https://cdn39.miku.cat/photos/46.png";
	bodyBgs[7] = "https://cdn39.miku.cat/photos/47.png";
	var randomBgIndex5 = Math.round(Math.random() * 7);
addCSS('.cb-slideshow li:nth-child(6) span{background-image:url('+ bodyBgs[randomBgIndex5] +')}');
	window.setTimeout(function() {
		change5()
	}, 50000)
}
change5();

function change6() {
	var bodyBgs = [];
	bodyBgs[0] = "https://cdn39.miku.cat/photos/48.png";
	bodyBgs[1] = "https://cdn39.miku.cat/photos/49.png";
	bodyBgs[2] = "https://cdn39.miku.cat/photos/50.png";
	bodyBgs[3] = "https://cdn39.miku.cat/photos/51.png";
	bodyBgs[4] = "https://cdn39.miku.cat/photos/52.png";
	bodyBgs[5] = "https://cdn39.miku.cat/photos/53.png";
	bodyBgs[6] = "https://cdn39.miku.cat/photos/54.png";
	bodyBgs[7] = "https://cdn39.miku.cat/photos/55.png";
	var randomBgIndex6 = Math.round(Math.random() * 7);
addCSS('.cb-slideshow li:nth-child(7) span{background-image:url('+ bodyBgs[randomBgIndex6] +')}');
	window.setTimeout(function() {
		change6()
	}, 50000)
}
change6();

var bgarr = [
	"https://cdn39.miku.cat/li/li01.jpg"
	"https://cdn39.miku.cat/li/li02.jpg",
	"https://cdn39.miku.cat/li/li03.jpg",
	"https://cdn39.miku.cat/li/li04.jpg",
	"https://cdn39.miku.cat/li/li05.jpg",
	"https://cdn39.miku.cat/li/li06.jpg",
	"https://cdn39.miku.cat/li/li07.jpg",
	"https://cdn39.miku.cat/li/li08.jpg",
	"https://cdn39.miku.cat/li/li09.jpg",
	"https://cdn39.miku.cat/li/li10.jpg",
	"https://cdn39.miku.cat/li/li11.jpg",
	"https://cdn39.miku.cat/li/li12.jpg",
	"https://cdn39.miku.cat/li/li13.jpg",
	"https://cdn39.miku.cat/li/li14.jpg",
	"https://cdn39.miku.cat/li/li15.jpg",
	"https://cdn39.miku.cat/li/li16.jpg
	"https://cdn39.miku.cat/li/li17.jpg",
	"https://cdn39.miku.cat/li/li18.jpg",
	"https://cdn39.miku.cat/li/li19.jpg",
	"https://cdn39.miku.cat/li/li20.jpg",
	"https://cdn39.miku.cat/li/li21.jpg",
	"https://cdn39.miku.cat/li/li22.jpg",
	"https://cdn39.miku.cat/li/li23.jpg",
	"https://cdn39.miku.cat/li/li24.jpg",
	"https://cdn39.miku.cat/li/li25.jpg",
	"https://cdn39.miku.cat/li/li26.jpg",
	"https://cdn39.miku.cat/li/li27.jpg"
];
var bgindex = ~~(Math.random()*bgarr.length);