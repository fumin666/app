function ajax(method,url,param,isAsync){
	let xml = new XMLHttpRequest();
	let urlStr = url;
	if(method.toLowerCase()=="get" && param!=""){
		urlStr += "?" + param;
	}
	xml.open(method,urlStr,isAsync);
	if(method.toLowerCase()=="post"){
		xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xml.send(param);
	}else{
		xml.send();	
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4&&xml.status==200){
			let str = xml.responseText;
			if(str=="1"){
				$("#usernameMessage").css("color","red");
				$("#usernameMessage").html("已经有人注册了");
			}else if(str=="0"){
				$("#usernameMessage").css("color","green");
				$("#usernameMessage").html("可以放心注册");
			}else{
				alert("服务器发生错误");
			}
		}
	}
}

function ajax01(method,url,param,isAsync,func){
	let xml = new XMLHttpRequest();
	let urlStr = url;
	if(method.toLowerCase()=="get" && param!=""){
		urlStr += "?" + param;
	}
	xml.open(method,urlStr,isAsync);
	if(method.toLowerCase()=="post"){
		xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xml.send(param);
	}else{
		xml.send();	
	}
	xml.onreadystatechange = function(){
			if(xml.readyState==4&&xml.status==200){
				func&&func(xml.responseText);
			}
		}
}
