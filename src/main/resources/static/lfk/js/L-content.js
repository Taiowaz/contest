/*ajax测试*/
    $.ajax({
	url: "/listAllInfo",
	type: "GET",
	dataType: "json",
	success: function (json) {
	    var list="<div id='D-content' style='display:flex;justify-content:center;font-size:20px;flex-wrap:wrap'>";
		$.each(json,function(i,info){
		if(info.infoType=="生活"){
		var img=info.imgList;
		var a;
		for(i=0;i<img.length;i++){
		if(img[i].serialNum==0){
		a=img[i];
		}
		}
		list+="<div style='width:auto;height:auto;margin:20px;text-align:center;' id='"+info.infoId+"'class='info'><div style='padding:10px 0 0 0;background-color:#ABB9C5;'><img style='width:400px;height:200px' src='.."+a.imgPath+"' alt='图片'></div>"+"<div style='padding:0 10px 10px 10px;background-color:#ABB9C5;width:400px;'>"+"<span>"+info.infoTitle+"</span></div></div>";
		}
		})
		list+="</div>"
		$("#content").append(list);
		$("#loading").toggle();
	}
    });