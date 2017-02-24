


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
function onLogIn(){
	//將一個按鈕的監聽器事件改為onLogOut。，假設登入/ 登出的按鈕是同一個。
	$(btn_logout).on("click",onLogOut);
	fetchUserData();
}
	//登入失敗的處理
function onLogFailed(){
	
}


function onLogOut(){
	
}


function fetchData(){
	
	
}





