var findTpl=require("../templates/search.string");

SPA.defineView("search",{
	html:findTpl,
	bindEvents:{
		"show":function(){
			var fxScroll = this.widgets.fixedScroll;
			fxScroll.on("scroll",function(scroll){
                // 如果menu滑到顶部
                if(Math.abs(this.y)>=200){
                   if($(".m-search").siblings(".m-search-menu").length>0){
                      ;
                   }else{
                   	  $(".m-search").after($(".m-search-menu").clone(true).addClass("fixed")); 
                   } 
                }else{
                	$(".m-search-menu.fixed").remove();
                }
			})
		}
	}
})