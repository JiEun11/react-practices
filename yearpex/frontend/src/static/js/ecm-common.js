let ecmObj = {};
ecmObj.getOpenPopup = function (pUrl, pWidth, pHeight, pName){
	let popupX = (window.screen.width / 2) - (pWidth / 2);
	// 만들 팝업창 좌우 크기의 1/2 만큼 보정값으로 빼주었음
	
	let popupY= (window.screen.height /2) - (pHeight / 2);
	// 만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음	
	
	let options = "";
	options += (pWidth != "")?"width="   + pWidth:"";
	options += (pHeight != "")?",height=" + pHeight:"";
	options += ",toolbar=no,menubar=no,status=yes,scrollbars=yes,resizable=yes";
	options += ",top="    + popupY;
	options += ",left="   + popupX;
   
   let pPopup = window.open( pUrl, pName, options);
   
   if(pPopup != undefined){
	   pPopup.focus();
   } 
}; 

ecmObj.openEcmFile = function (pArgs, pWidth, pHeight){
	let url = ecmObj.getEcmUrlInfo(pArgs);	
	let windowName = 'ecm_popup';	   
	ecmObj.getOpenPopup(url, pWidth, pHeight, windowName);  
};

ecmObj.checkUrl = function (){
	let bCheckYn = false;
	let host = $(location).attr('host').toLowerCase(); 
	if( host.indexOf("localhost") != -1 || host.indexOf("127.0.0.1") != -1 ){
		bCheckYn = true;
    }
	return bCheckYn;
};	

ecmObj.getEcmUrlInfo = function (pArgs){
	//let args = pArgs;
	let pMenuName = pArgs.menuName;
	let pActId = pArgs.actId;
	let pDocId = pArgs.docId;
	
	let windowName = 'ecm_popup';	   
    let uagent	= navigator.userAgent.toLowerCase(); 
	let ret1	= uagent.search('android');	
	let ret2	= uagent.search('iphone'); 
	let ret3	= uagent.search('ipad');   
	let url = "";
	
	if(ret1 > -1 || ret2 > -1 || ret3 > -1) {//모바일
		if(ret1 > -1){
			url = "fasooview://open/url=http%3A%2F%2Fmobiledrm.posco.net%2Fdrmone%2Fposco%2FdownloadDoc.jsp%3Fdocid%3Ddoc"+pDocId+"%26ISHTML%3DT&authType=4&dsdCode=0000000000011214";	
		}else{
			url = "fasooview://open/url=http://mobiledrm.posco.net/drmone/posco/downloadDoc.jsp?docid=doc"+pDocId+"&SHTML=T&authType=4&dsdCode=0000000000011214";	
		}
	}else{
	    let sysId = 'f38b';
	    let actId = pActId;
	    let docId = pDocId;	
	    url = "http://swpecm.posco.net:7091/ECM/ecm.redirect.jsp?";
	    let domain     = '';
	    
	    let host = $(location).attr('host').toLowerCase();
	    
	    //개발계
	    if(host.indexOf("test") > -1 || host.indexOf("172.31.76.169") > -1 ){
	    	sysId = 't-f38b';
	    	url = "http://uswpecm.posco.net:7091/ECM/ecm.redirect.jsp?";
	    }
	    
	    let protocol = $(location).attr('protocol').toLowerCase();    	    
	    domain = protocol +"//"+ host;	                
	    
	    let callbackURL = domain+contextPath+"/popup/pop/f38EcmPop01.do";
	    let targetUrl = callbackURL;
	    
	    url += "SYSID="+sysId; 
	    url += "&ACTID="+actId;
	    url += "&DOCID="+docId;
	    url += "&OBJID=";    
	    url += "&TARGET="+windowName;
	    url += "&TARGETURL="+targetUrl;
	}
	
	return url;
};