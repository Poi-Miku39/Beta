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
    bodyBgs[0] = "https://download.moeli.org/images/nya/0.jpg";
    bodyBgs[1] = "https://download.moeli.org/images/nya/1.jpg";
    bodyBgs[2] = "https://download.moeli.org/images/nya/2.jpg";
    bodyBgs[3] = "https://download.moeli.org/images/nya/3.jpg";
    bodyBgs[4] = "https://download.moeli.org/images/nya/4.jpg";
    bodyBgs[5] = "https://download.moeli.org/images/nya/5.jpg";
    bodyBgs[6] = "https://download.moeli.org/images/nya/6.jpg";
    bodyBgs[7] = "https://download.moeli.org/images/nya/7.jpg";
    var randomBgIndex = Math.round(Math.random() * 7);
    addCSS('.cb-slideshow li:nth-child(1) span{background-image:url('+ bodyBgs[randomBgIndex] +')}');
    window.setTimeout(function() {
        change()
    }, 50000)
}
change();

function change1() {
    var bodyBgs = [];
    bodyBgs[0] = "https://download.moeli.org/images/nya/8.jpg";
    bodyBgs[1] = "https://download.moeli.org/images/nya/9.jpg";
    bodyBgs[2] = "https://download.moeli.org/images/nya/10.jpg";
    bodyBgs[3] = "https://download.moeli.org/images/nya/11.jpg";
    bodyBgs[4] = "https://download.moeli.org/images/nya/12.jpg";
    bodyBgs[5] = "https://download.moeli.org/images/nya/13.jpg";
    bodyBgs[6] = "https://download.moeli.org/images/nya/14.jpg";
    bodyBgs[7] = "https://download.moeli.org/images/nya/15.jpg";
    var randomBgIndex1 = Math.round(Math.random() * 7);
    addCSS('.cb-slideshow li:nth-child(2) span{background-image:url('+ bodyBgs[randomBgIndex1] +')}');
    window.setTimeout(function() {
        change1()
    }, 50000)
}
change1();

function change2() {
    var bodyBgs = [];
    bodyBgs[0] = "https://download.moeli.org/images/nya/16.jpg";
    bodyBgs[1] = "https://download.moeli.org/images/nya/17.jpg";
    bodyBgs[2] = "https://download.moeli.org/images/nya/18.jpg";
    bodyBgs[3] = "https://download.moeli.org/images/nya/19.jpg";
    bodyBgs[4] = "https://download.moeli.org/images/nya/20.jpg";
    bodyBgs[5] = "https://download.moeli.org/images/nya/21.jpg";
    bodyBgs[6] = "https://download.moeli.org/images/nya/22.jpg";
    bodyBgs[7] = "https://download.moeli.org/images/nya/23.jpg";
    var randomBgIndex2 = Math.round(Math.random() * 7);
    addCSS('.cb-slideshow li:nth-child(3) span{background-image:url('+ bodyBgs[randomBgIndex2] +')}');
    window.setTimeout(function() {
        change2()
    }, 50000)
}
change2();

function change3() {
    var bodyBgs = [];
    bodyBgs[0] = "https://download.moeli.org/images/nya/24.jpg";
    bodyBgs[1] = "https://download.moeli.org/images/nya/25.jpg";
    bodyBgs[2] = "https://download.moeli.org/images/nya/26.jpg";
    bodyBgs[3] = "https://download.moeli.org/images/nya/27.jpg";
    bodyBgs[4] = "https://download.moeli.org/images/nya/28.jpg";
    bodyBgs[5] = "https://download.moeli.org/images/nya/29.jpg";
    bodyBgs[6] = "https://download.moeli.org/images/nya/30.jpg";
    bodyBgs[7] = "https://download.moeli.org/images/nya/31.jpg";
    var randomBgIndex3 = Math.round(Math.random() * 7);
    addCSS('.cb-slideshow li:nth-child(4) span{background-image:url('+ bodyBgs[randomBgIndex3] +')}');
    window.setTimeout(function() {
        change3()
    }, 50000)
}
change3();

function change4() {
    var bodyBgs = [];
    bodyBgs[0] = "https://download.moeli.org/images/nya/32.jpg";
    bodyBgs[1] = "https://download.moeli.org/images/nya/33.jpg";
    bodyBgs[2] = "https://download.moeli.org/images/nya/34.jpg";
    bodyBgs[3] = "https://download.moeli.org/images/nya/35.jpg";
    bodyBgs[4] = "https://download.moeli.org/images/nya/36.jpg";
    bodyBgs[5] = "https://download.moeli.org/images/nya/37.jpg";
    bodyBgs[6] = "https://download.moeli.org/images/nya/38.jpg";
    bodyBgs[7] = "https://download.moeli.org/images/nya/39.jpg";
    var randomBgIndex4 = Math.round(Math.random() * 7);
    addCSS('.cb-slideshow li:nth-child(5) span{background-image:url('+ bodyBgs[randomBgIndex4] +')}');
    window.setTimeout(function() {
        change4()
    }, 50000)
}
change4();

function change5() {
    var bodyBgs = [];
    bodyBgs[0] = "https://download.moeli.org/images/nya/40.jpg";
    bodyBgs[1] = "https://download.moeli.org/images/nya/41.jpg";
    bodyBgs[2] = "https://download.moeli.org/images/nya/42.jpg";
    bodyBgs[3] = "https://download.moeli.org/images/nya/43.jpg";
    bodyBgs[4] = "https://download.moeli.org/images/nya/44.jpg";
    bodyBgs[5] = "https://download.moeli.org/images/nya/45.jpg";
    bodyBgs[6] = "https://download.moeli.org/images/nya/46.jpg";
    bodyBgs[7] = "https://download.moeli.org/images/nya/47.jpg";
    var randomBgIndex5 = Math.round(Math.random() * 7);
    addCSS('.cb-slideshow li:nth-child(6) span{background-image:url('+ bodyBgs[randomBgIndex5] +')}');
    window.setTimeout(function() {
        change5()
    }, 50000)
}
change5();

function change6() {
    var bodyBgs = [];
    bodyBgs[0] = "https://download.moeli.org/images/nya/48.jpg";
    bodyBgs[1] = "https://download.moeli.org/images/nya/49.jpg";
    bodyBgs[2] = "https://download.moeli.org/images/nya/50.jpg";
    bodyBgs[3] = "https://download.moeli.org/images/nya/51.jpg";
    bodyBgs[4] = "https://download.moeli.org/images/nya/52.jpg";
    bodyBgs[5] = "https://download.moeli.org/images/nya/53.jpg";
    bodyBgs[6] = "https://download.moeli.org/images/nya/54.jpg";
    bodyBgs[7] = "https://download.moeli.org/images/nya/55.jpg";
    var randomBgIndex6 = Math.round(Math.random() * 7);
    addCSS('.cb-slideshow li:nth-child(7) span{background-image:url('+ bodyBgs[randomBgIndex6] +')}');
    window.setTimeout(function() {
        change6()
    }, 50000)
}
change6();

var bgarr = [
    "https://download.moeli.org/images/nya/1.jpg",
    "https://download.moeli.org/images/nya/4.jpg",
    "https://download.moeli.org/images/nya/5.jpg",
    "https://download.moeli.org/images/nya/11.jpg",
    "https://download.moeli.org/images/nya/12.jpg",
    "https://download.moeli.org/images/nya/15.jpg",
    "https://download.moeli.org/images/nya/17.jpg",
    "https://download.moeli.org/images/nya/23.jpg",
    "https://download.moeli.org/images/nya/25.jpg",
    "https://download.moeli.org/images/nya/26.jpg",
    "https://download.moeli.org/images/nya/27.jpg",
    "https://download.moeli.org/images/nya/31.jpg",
    "https://download.moeli.org/images/nya/32.jpg",
    "https://download.moeli.org/images/nya/33.jpg",
    "https://download.moeli.org/images/nya/34.jpg",
    "https://download.moeli.org/images/nya/35.jpg",
    "https://download.moeli.org/images/nya/36.jpg",
    "https://download.moeli.org/images/nya/37.jpg",
    "https://download.moeli.org/images/nya/38.jpg",
    "https://download.moeli.org/images/nya/39.jpg",
    "https://download.moeli.org/images/nya/40.jpg",
    "https://download.moeli.org/images/nya/41.jpg",
    "https://download.moeli.org/images/nya/43.jpg",
    "https://download.moeli.org/images/nya/46.jpg",
    "https://download.moeli.org/images/nya/48.jpg",
    "https://download.moeli.org/images/nya/49.jpg",
    "https://download.moeli.org/images/nya/50.jpg"
];
var bgindex = ~~(Math.random()*bgarr.length);