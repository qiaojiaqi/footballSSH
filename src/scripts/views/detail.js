var detailTpl=require('../templates/detail.string');

SPA.defineView("detail",{
	html:detailTpl,
	plugins:["delegated",{
		name:"avalon",
		options:function(vm){
            vm.imgsrc = null;
            vm.title = null;
            vm.description = null;
            vm.isShowLoading = true;
		}
	}],
	init:{
       param:5
	},
	bindEvents:{
        show:function(){
        	var vm = this.getVM();
        	var id = this.param.id;
        	$.ajax({
        		url:"/footballApp/mock/liveDetail.json",
        		url:"/api/getLiveDetail.php",
        		data:{
        			id:id
        		},
        		success:function(rs){
		   		   var data = rs.data;
		           vm.imgsrc = data.imgsrc;
		           vm.title = data.title;
		           vm.description = data.description;
        		   setTimeout(function(){
                       vm.isShowLoading = false;
        		   },1000)
        		}
        	})
        }
	},
	bindActions:{
		"goto.back":function(){
			SPA.open("index");
		}
	}
})