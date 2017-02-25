


$(document).ready(changeState(1));


function changeState(sta){
	switch sta{
		case 0:initElement();sta=1;break;
		case 1:onlogIn();break;
		case 2:onLogOut();break;
	}
}
function loginNormal(){
	var accInfo=new Object();
	accInfo.type=c_lt_normal;
	accInfo.acc=$(field_ACC).val();
	accIndo.pw=$(fieldPW).val();
	getLoginInfo(accInfo,onLogin);
}

function initElement(){
	$(btn_login).on("click",loginNormal);
	$(btn_continueFB).on("click",loginFb);

	
}
	//成功登入後的處理
function onLogIn(success){
	//將一個按鈕的監聽器事件改為onLogOut。，假設登入/ 登出的按鈕是同一個。
	if(success){
	$(btn_logout).on("click",onLogOut);
	fetchUserData();
	}
	else{onLogFailed();}
}
	//登入失敗的處理
function onLogFailed(){
	
}


function onLogOut(){
	
}


function fetchUserData(){
	//這邊理論上是要去跟伺服器要資料啦，不過這邊用假資料假絕
	var data=extractCookie("jam_cookie_key");
	showData(data);
}

function showData(uInfo){
	//把要填入內容的tag擺在這邊
	
}

function extractCookie(key){
	var cookie=document.cookie;
	var dataSet=cookie.split(";");
	for(var i=0;i<dataSet.length;i++){
		var dataPair=dataSet[i].split("=");
		if(dataPair[0]==key){
			return JSON.parse(dataPair[1]);
		}
	}
}





