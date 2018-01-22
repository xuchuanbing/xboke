delog = {
	//成功弹出层
	success:function(msg){
		layer.open({
		  title: '信息',
		  icon: 1,
		  skin: 'layer-ext-yourskin',
		  content:msg
		})	
	}
	//错误弹出层
	error:function(msg){
		layer.open({
		  title: '信息',
		  icon: 2,
		  skin: 'layer-ext-yourskin',
		  content: msg
		})
	}
}