var myTpl=require("../templates/my.string");
// 引入swiper的第三方的animate插件
var mod = require("../lib/swiper.animate1.0.2.min");

SPA.defineView("my",{
	html:myTpl,
	plugins:["delegated"],
	styles:{
		background:"transparent!important"
	},
	bindEvents:{
		show:function(){
			// 解决iscroll与swiper的冲突
			// 获取是视图下指定的widget
		/*	var liveScroll = this.widgets["livenavScroll"];
			liveScroll.options.scrollX = true;
			liveScroll.options.scrollY = false;*/

			console.log(this);
		}
	},
	bindActions:{
        "tap.close":function(){
        	this.hide();
        }
	}
})
