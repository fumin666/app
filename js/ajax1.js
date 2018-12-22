function ajax1(method,url,param,isAsync){
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
				setCookie("username",$("#username").val(),7);
				alert("注册成功");
				location.href = "login.html";
			}else if(str=="2"){
				setCookie("username",$("#username").val(),7);
				alert("欢迎您：" + $("#username").val());
				location.href = "index.html";
			}else{
				alert("登录失败");
			}
		}
	}
}
