

function getFbInfo(){
	//FB登入相關程序
	var fbUinfo=new Object();
	//如果FB用戶沒有同意，則回傳null
	if(dummyResult(true)){
		fbUinfo="fake facebook userID";
	}else{
		fbUinfo=null;
		}
	
	return fbUinfo;
}

//info:用來傳遞資料參數的物件，cbf="c"all"b"ack"f"unction
function setLoginInfo(info,cbf){
	//一般登入，需要帳號跟密碼
	console.log("from getLoginInfo  "+info.type);
	console.log("from getLoginInfo  "+info.acc);
	console.log("from getLoginInfo  "+info.ps);
	switch(info.type){
		case c_lt_normal:
			info.param=c_lt_normal;
			jamLogin(info,cbf);break;
		case c_lt_fb:jamLogin(getFbInfo(),cbf);break;
		default: alert("你是不是哪邊打錯了 \n from setLoginInfo");break;
	}
	
}
	//實際login到jam中
function jamLogin(info,cbf){
	//送出一個xhr到jam的伺服器，然後等待回應
	//
	if(dummyResult(true)){
		//把假資料寫進cookie
		document.cookie="jamInfo="+JSON.stringify(dummyUinfo());
			cbf();
	}
	
}