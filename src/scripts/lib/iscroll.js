var myScroll=new IScroll(".wrapper",{
	probeType:3,
	mouseWheel:true
});
myScroll.scrollBy(0,-30);

var head=$(".head img"),
    topImgHasClass=head.hasClass("up");
var foot=$(".foot img"),
    bottomImgHasClass=head.hasClass("down");
myScroll.on("scroll",function(){
	var y=this.y,
	    maxY=this.maxScrollY-y;
	    if(y>=0){
           !topImgHasClass && head.addClass("up");
           return "";
	    }
	    if(maxY>=0){
           !bottomImgHasClass && foot.addClass("down");
           return "";
	    }
})

myScroll.on("scrollEnd",function(){
	if(this.y>=-scrollSize && this.y<0){
        myScroll.scrollTo(0,-scrollSize);
        head.removeClass("up");
	}else if(this.y>=0){
        head.attr("src","football-app/images/loader.gif");
	    
	    setTimeout(function(){
            myScroll.scrollTo(0,-scrollSize);
	        head.removeClass("up");
	        head.attr("src","football-app/images/arrow.png");
	    },1000)
	}

	var maxY=this.maxScrollY-this.y;
	var self=this;
	if(maxY>-scrollSize && maxY<0){
        myScroll.scrollTo(0,self.maxScrollY+scrollSize);
        foot.removeClass("down")
	}else if(maxY>=0){
	    foot.attr("src",football-app/images/ajax-loader.gif)
        // 请求加载数据
        setTimeout(function(){
            $(".foot").before(
               '<div>add1</div>',
               '<div>add2</div>'
            )

            myScroll.refresh();

            myScroll.scrollTo(0,self.y+30);
            foot.removeClass("down");
            foot.attr("src","football-app/images/arrow.png")
        },1000)
	}
})