// 引入模板
var indexTpl = require("../templates/index.string");
// 引入util
var util = require("../util/util");

// 定义视图
SPA.defineView("index",{
	// 定义HTML
	html:indexTpl,
	// 引入delegated插件，用于定义tap事件
	plugins:["delegated"],
	// 定义子视图  主页 
	modules:[{
       name:"content",  // 子视图的名称，用于引用的句柄
       defaultTag:"home",
       views:["home","find","my"], // 定义子视图集
       container:".m-wrapper"   // 将子视图中的内容渲染到主视图的哪个容器
	}],
	// 绑定视图事件
	bindEvents:{
		// 视图显示出来之前执行的回调函数
		beforeShow:function(){
            console.log("before");
		},
		// 视图显示出来之后执行的回调函数
		show:function(){
			//console.log(Swiper);
		}
	},
	// 绑定元素事件
	bindActions:{
        "switch.tabs":function(e,data){
            // 当前高亮显示
            util.setFocus($(e.el));
            // 切换子视图
            this.modules.content.launch(data.tag);
        },
        "goto.my":function(){
        	SPA.open("my",{
        		ani:{
                   name:"dialog",
                   width:280,
                   height:200
        		}
        	});
        },
/*        "goto.search":function(){
        	SPA.open("find",{
        		ani:{
                name:"actionSheet",
                distance:300
        		}
        	});
        },*/
        "goto.search":function(){
          SPA.open("search");
        }
	}
})