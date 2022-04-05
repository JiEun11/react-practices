let f39Common = {};

// ---------------------------------------
// 로딩바 닫기
// ---------------------------------------
f39Common.getCloseLodingBar = function (){
	if($(top.document).length > 0){
		$(top.location).attr("href","javascript:f39Common.closeLodingBar();"); // jQuery이용
	}else{
		f39Common.closeLodingBar();
	}
};		

// ---------------------------------------
// 로딩바 열기
// ---------------------------------------
f39Common.getOpenLodingBar = function (){	
	if($(top.document).length > 0){
		$(top.location).attr("href","javascript:f39Common.openLodingBar();"); // jQuery이용
	}else{
		f39Common.openLodingBar();
	}
};

// ---------------------------------------
// 로딩바 닫기
// ---------------------------------------
f39Common.closeLodingBar = function (){
	$.unblockUI();
};		

// ---------------------------------------
// 로딩바 열기
// ---------------------------------------
f39Common.openLodingBar = function (){	
	$.blockUI({ 
		message : "<img src='/static/img/f21_loadingBar.gif' width='100px' height='100px' />",
		css 	:{	backgroundColor : "rgba(0,0,0,0.0,)",
			   		color           : "#000000",
			   		border          : "0px solid #a00"					
		  		  }  	
	});
};


//---------------------------------------
//IBSheet 높이 자동조절 
//---------------------------------------
f39Common.resize = function( p_offset ) {
	let winH    	= $(window).innerHeight();
	let height		= 0;
	let offsetTop	= 0;
	let minHeight   = 0;
	
	if( !p_offset ){
		p_offset = 0;
	}
	
	$(".resizable").each(function() {
		if($(this).closest(".modal").length > 0) {
			return;
		}
		
		offsetTop = $(this).position().top != 0 ? $(this).position().top : offsetTop;
		
		if(opener) {
			height = winH - (offsetTop - p_offset) - 50;
		}else {
			height = winH - (offsetTop - p_offset) - 16;
		}
		
		if( offsetTop > 0 && winH > 0 && $(this).height() > 0 ){
			if( $(this).hasClass("div_sheetTabNPageWrapper")){
				height = height - 45;	
			}else if( $(this).hasClass("div_sheetTabNTitleNPageWrapper")){
				height = height - 80;	
			}else if( $(this).hasClass("div_sheetMainJobWrapper")){
				height = height - 50;	
			}else if( $(this).hasClass("div_sheetTabWrapperUpper220px")){
				height = height - 45 - 300;
			}else if( $(this).hasClass("div_sheetInWrapper")) {
				// paging 이 존재하면
				if($(".paging").length > 0) {
					height = height - 30;
				}
			}
			
			if( height > 0 && $(this).height() != height ){
				$(this).height( height );
				/*
				console.log(  " ### resize ======================================== " );
				if( $(this).attr("id") ){
					let frames = $( $(this).attr("id"),  parent.frames );
					if( frames ){
						for( let i=0; i<frames.length;i++){
							console.log(  " ### resize parent frame : " + frames[i] );
						}
					}
				}
				console.log(  " ### resize id : " + $(this).attr("id") );
				console.log(  " ### resize class : " + $(this).attr("class") );
				console.log(  " ### resize isVisible : " + $(this).is(':visible') );
				console.log(  " ### resize winHeight  : " + winH );
				console.log(  " ### resize offsetTop : " + offsetTop );
				console.log(  " ### resize height : " + $(this).height() );
				*/
			}
		}
	});
};

//---------------------------------------
// ECM API 호출 > SysId: 시스템 구분 ID, 
//              > actId: regist:등록, viewlink:보기 편집,property:속성창보기,
//              > docId: 최종버젼을 기준으로 조회시 문서 ID , 
//              > objId: 첨부시점의 문서조회시 문서 ID, 
//              > windowName : window popup 이름
//---------------------------------------
f39Common.getOpenEcmFile = function (pDocId, pActId){
	let sysId = 'F55';
	let actId = pActId;
	let docId = pDocId;
	let windowName = 'ecm_popup';
	
	// let url = "http://dswpecm.posco.net:7001/ECM/ecm.redirect.jsp?"; //
	// 개발계 가동계이행시 주석처리
	let url = "http://swpecm.posco.net:7091/ECM/ecm.redirect.jsp?";    // 가동계추후URL변경작업필요
	// let url = "http://swpecm.posco.net:7091/ECM/swp_interface.jsp?"; // 가동계
	// 추후 URL 변경작업필요
	let domain     = '';
	let host = $(location).attr('host').toLowerCase();    
	let protocol = $(location).attr('protocol').toLowerCase();    
	let pSystemType = "";
    if( f39Common.checkUrl() == true){
        domain = protocol +"//"+ host;	        
    }
    // pSystemType : CA : 수익성
    let callbackURL = domain+"/common/ecm.popup.do";	    
    let targetUrl = callbackURL;
    url += "SYSID="+sysId; 
    url += "&ACTID="+actId;
    url += "&DOCID="+docId;
    url += "&OBJID=";    
    url += "&TARGET="+windowName;
    url += "&TARGETURL="+targetUrl;
	   
    let pWidth = 790;
    let pHeight = 700;
    let popupX = (window.screen.width / 2) - (pWidth / 2); // 만들 팝업창 좌우 크기의 1/2 만큼 보정값으로 빼주었음
	let popupY= (window.screen.height /2) - (pHeight / 2); // 만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음
	let options  = "width="   + pWidth;
    options += ",height=" + pHeight;
    options += ",top="    + popupY;
    options += ",left="   + popupX;
    options += ",toolbar=no,menubar=no,status=yes,scrollbars=yes,resizable=yes";    
    let pPopup = window.open( url, windowName, options);
    if(pPopup != undefined){
	   pPopup.focus();
    } 	
};

f39Common.openFile = function(objId){

	 //let sysId = "icms";
    let host = $(location).attr('host').toLowerCase();    
	     //URL 체크
    let sysId = "";
	     if(host.indexOf("localhost") != -1){
	    	sysId = "tawm.posco.co.kr:7070";
	     }else{
	    	sysId = host;
	     }
    //let url = "http://swpecm.posco.net:7091/ECM/ecm.redirect.jsp"
    let url = "http://swpecm.posco.net:7091/ECM/swp_interface.jsp"
		          +"?ACTID=open"
		          +"&DOCID=doc"+objId
		          +"&OBJECTID="+objId
		          +"&SYSID=" + sysId
		          ;
	
    let popOption = "width=600; height=300; toolbar=no; menubar=no; screollbars=0";
    let top  = (screen.height - 300) / 2;
    let left = (screen.width  - 800) / 2;
    popOption = popOption + "; top="+top+"; left="+left;
    let windowName = 'ecm_popup';
    let win = window.open( url,windowName, popOption );
    win.focus();
},

//---------------------------------------
// url체크하기
//---------------------------------------
f39Common.checkUrl = function (){
	let bCheckYn = false;
	let host = $(location).attr('host').toLowerCase();    
	if( host.indexOf("localhost") != -1 || host.indexOf("127.0.0.1") != -1 || host.indexOf("172.18") != -1 || host.indexOf("posco.co.k") != -1 || host.indexOf("172.31") != -1 ){
		bCheckYn = true;
    }
	return bCheckYn;
};	


/**
 * 팝업창 열기
 * 
 * @param pUrl
 *            url 및 파라미터정보 예) /S75/S75A10/popup/s75Testpop01.do?ServiceName=s75Code-service&find=1
 * @param pWidth
 *            팝업창 가로사이즈 예 700
 * @param pHeight
 *            팝업창 세로사이즈 예 800
 * @param pName
 *            팝업창이름
 * @return
 */
f39Common.getOpenPopup = function (pUrl, pWidth, pHeight, pName){	
	// let popupX = (window.screen.width / 2) - (pWidth / 2); // 만들 팝업창 좌우 크기의 1/2 만큼 보정값으로 빼주었음
	// let popupY= (window.screen.height /2) - (pHeight / 2); // 만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음
	let popupX	= (screen.availWidth - pWidth	) / 2;
	let popupY	= (screen.availHeight - pHeight	) / 2 - 10;
	
	if(window.screenLeft < 0) {
		popupX += window.screen.width*-1;
	}else if(window.screenLeft > window.screen.width) {
		popupX += window.screen.width;
	}

	let options  = "width="   + pWidth;
    options += ",height=" + pHeight;
    options += ",top="    + popupY;
    options += ",left="   + popupX;
    options += ",toolbar=no,menubar=no,status=yes,scrollbars=yes,resizable=yes";       
    let pPopup = window.open( pUrl, pName, options);
    if(pPopup != undefined){
    	pPopup.focus();
    } 
};

/**
 * 팝업창 열기(Get/Post방식 열기)
 * 
 * @param pUrl
 *            url 및 파라미터정보 예 /S75/S75A10/popup/s75Testpop01.do?ServiceName=s75Code-service&find=1
 * @param pWidth
 *            팝업창 가로사이즈 예 700
 * @param pHeight
 *            팝업창 세로사이즈 예 800
 * @param pName
 *            팝업창이름
 * @param pFormId =>
 *            폼이름이 없으면, Get방식, 폼이름이 있으면, Post방식 예 form
 * @return
 */
f39Common.getOpenPopupWindow = function (pName,pUrl, pWidth, pHeight,  pFormId, callBackFunc){
	let popupX = (window.screen.width / 2) - (pWidth / 2);	// 만들 팝업창 좌우 크기의 1/2 만큼 보정값으로 빼주었음
	let popupY= (window.screen.height /2) - (pHeight / 2);	// 만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음
	let options  = "width="   + pWidth;
    options += ",height=" + pHeight;
    options += ",top="    + popupY;
    options += ",left="   + popupX;
    options += ",toolbar=no,menubar=no,status=yes,scrollbars=yes,resizable=yes";        
   let pPopup;
   let url = contextPath + pUrl;
   if(pFormId == "" || pFormId == undefined){// Get방식
	   pPopup = window.open( url, pName, options);
	   if(pPopup != undefined){
		   pPopup.focus();
	   } 
   }else{// Post방식
	   pPopup = window.open('', pName, options);
	   if(pPopup != undefined){
		   pPopup.focus();
	   } 
	   $form = $(pFormId);	
	   if(callBackFunc !='' && callBackFunc !=undefined){
		   $('<input type="hidden" value="'+ callBackFunc +'" >').attr("name", 'P_CALLBACK').appendTo($form);	   	   
	   }
	   $form.attr({
		    target : pName
		  , action : url
		  , method : "post"
	   }).submit();
	   setTimeout(f39Common.getCloseLodingBar, 500);			
   }
   return pPopup;
};

f39Common.getOpenPopupMaxWindow = function (pName, pUrl, pFormId, callBackFunc){
	
	let pWidth = window.screen.width;
	let pHeight = window.screen.height; 
	let popupX = (window.screen.width / 2) - (pWidth / 2);	// 만들 팝업창 좌우 크기의 1/2 만큼 보정값으로 빼주었음
	let popupY= (window.screen.height /2) - (pHeight / 2);	// 만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음
	
	let options = "";   
	options  = "width="   + pWidth;
    options += ",height=" + pHeight;
    options += ",top="    + popupY;
    options += ",left="   + popupX;
    options += ",location=yes,toolbar=yes,menubar=yes,status=yes,scrollbars=yes,resizable=yes";    
	
	let pPopup;
	let url = pUrl;
   
	if(pFormId == "" || pFormId == undefined){//Get방식
		pPopup = window.open( url, pName, options);
	   
		if(pPopup != undefined){
		   pPopup.focus();
		} 
	}else{//Post방식
		pPopup = window.open( '', pName, options);
		if(pPopup != undefined){
		   pPopup.focus();
		} 
		let $form = $("#"+pFormId);	
		if(callBackFunc !='' && callBackFunc !=undefined){
			$('<input type="hidden" value="'+ callBackFunc +'" >').attr("name", 'P_CALLBACK').appendTo($form);	   	   
		}
		$form.attr({
		    target : pName
		  , action : url
		  , method : "post"
		}).submit();
		setTimeout(f39Common.getCloseLodingBar, 500);			
	}
   
	return pPopup;
};

/**
 * ajax submit
 * 
 * @param actionUrl :
 *            acction url ex: /F38B/sample/sample
 * @param jsonParam :
 *            let jsonParam = { 'ServiceName' : 'sample-service' ,'custom' : '1' ,'result-keys' : 'EmpList' }; viewname : 'GlueJsonView'
 * @param callbackSuccess :
 *            성공시 호출 함수
 * @param callbackError :
 *            에러시 호출 함수
 * @param callbackBeforeSend :
 *            submit 전 호출함수
 * @param callbackComplete :
 *            완료 후 호출 함수
 * @param sync :
 *            동기(false) ,비동기(true) 여부
 * @return
 */
f39Common.submitAjax = function (url, type, dataType, data, sync, callbackSuccess, callbackError, callbackBeforeSend, callbackComplete){
	f39Common.getOpenLodingBar();
	let actionUrl = '/api' + url ;
	let tmpSync = sync==null||sync ==undefined? false: sync;
	$.ajax({
		url 			: actionUrl
		,type 			: type
		,dataType 		: dataType
		,data 			: data		
		,async			: tmpSync
		,contentType	: "application/json; charset=UTF-8"	
		,beforeSend 	: function(xmlHttpRequest) {
			xmlHttpRequest.setRequestHeader("AJAX", "true"); // ajax 호출을 header에 기록
			if(typeof callbackBeforeSend == 'function') callbackBeforeSend(); 
		}
		,success 		: function(res) { 
			f39Common.getCloseLodingBar();
			if(typeof callbackSuccess == 'function') callbackSuccess(res); 
		}
		,complete 		: function() {
			if(typeof callbackComplete == 'function') callbackComplete(); 
		}
		,error 			: function(xhr , textStatus , error) {
			f39Common.getCloseLodingBar();		
			
			if(typeof callbackError == 'function') {
				callbackError(xhr.responseJSON, textStatus, error);
			} else {
				alert( 'Http Server Not Responsed for Your Request or Your certification is not valid!' );
			} 
			
			if(xhr.status == "449"){// 세션종료일경우
				location.href = contextPath+"/CA/common/f55ZaCommonError.do?ERR_MSG_CODE=ERR_AUTH_FAIL_10";
			}			
		}
	});		
};

f39Common.submitAjaxNonLoadingbar = function (url, jsonParam, sync, callbackSuccess, callbackError, callbackBeforeSend, callbackComplete){
	// default jsonView name
	jsonParam.viewname = 'GlueJsonView';
	let jsonData = jsonParam;
	let actionUrl = contextPath + url ;
	let tmpSync = sync==null||sync ==undefined? false: sync;
	$.ajax({
		type : "POST"
		,contentType: "application/x-www-form-urlencoded; charset=UTF-8"	
		,dataType : 'json'
		,url : actionUrl
		,data : jsonData		
		,async:tmpSync
		,beforeSend : function(xmlHttpRequest) {
			xmlHttpRequest.setRequestHeader("AJAX", "true"); // ajax 호출을 header에 기록
			if(typeof callbackBeforeSend == 'function') callbackBeforeSend(); 
		}	
		,success : function(res) {
			if(typeof callbackSuccess == 'function') callbackSuccess(res); 
		}
		,complete : function() {
			if(typeof callbackComplete == 'function') callbackComplete(); 
		}
		,error : function(xhr , textStatus , error) {
			f39Common.getCloseLodingBar();
			if(xhr.status == "999"  ){// 세션종료일경우
				location.href = contextPath+"/common/f55ZaCommonError.do?ERR_MSG_CODE=ERR_AUTH_FAIL_10";
			}
			if(typeof callbackError == 'function') {
				callbackError(xhr.responseText, textStatus, error);
			} else {
				alert(xhr.responseText);
			} 
		}
	});		
};


/**
 * ajax submit
 * 
 * @param pUrl :
 *            acction url ex: /common/sample2.file
 * @param pData :
 *            let pData = { 'ServiceName' : 'sample-service' ,'custom' : '1' ,'result-keys' : 'EmpList' ,viewname : 'FileDownloadView' };
 * @param callbackSuccess :
 *            성공시 호출 함수
 * @param failCallback :
 *            에러시 호출 함수
 * @return
 */
f39Common.fileDownload = function (pUrl, pData, callbackSuccess, failCallback){	
	f39Common.getOpenLodingBar();	
	let data = pData;
	let url = contextPath + pUrl ;
	$.fileDownload( url, {
	      httpMethod: "POST"
		, data: data
	    , successCallback: function (url) {                    
	    	  f39Common.getCloseLodingBar();
	    	  if(typeof callbackSuccess == 'function') {
	    		  callbackSuccess(url); 
	    	  }
	      }
	    , failCallback: function(responesHtml, url){   			            	
	    	  f39Common.getCloseLodingBar();		
	    	  if(typeof failCallback == 'function') failCallback(responesHtml, url); 
	      }
	});  	
};

/**
 * f39Common.createTabPaging 페이징 관련 Object 생성
 *
 * @param option :
 *            페이징 관련 정보
 * @param id :
 *            페이징 div Id
 * @return
 */
f39Common.createTabPaging = function(option, id) {
	let _opt = new Object();
	
	// default options
	let _dOpt = {
		totalCnt 	: "0",		// 전체 레코드 수
		dataSize 	: "1000",	// 페이지당 보여줄 데이타 수
		pageSize 	: "10",		// 페이지 그룹 범위 1 2 3 5 6 7 8 9 10
		pageNo		: "1"		// 현재 페이지
	};
	
	let createPageObj = function(a, b) {
		
		if(!f39Common.hasOwnProperty("paging")) {
			f39Common.paging = new Object();
		}
		
		f39Common.paging[a] = new Object();
		
		let _p = $.extend(f39Common.paging[a], b);
		
		if(!$.isEmptyObject(_p)) {
			let _a = _p["totalCnt"];
			let _b = _p["dataSize"];
			let _c = _p["pageSize"];
			let _d = _p["pageNo"];
			
			// page관련 객체
            $("#ROW_COUNT"   ).val(_b);
            $("#PAGE_SIZE"   ).val(_c);
            $("#CURRENT_PAGE").val(_d);
		}
	};
	
	if(typeof option === "object" && !$.isEmptyObject(option)) {
		_opt = $.extend({}, _dOpt, option);
	}else {
		_opt = $.extend({}, _dOpt);
	}
	
	if(typeof id === "string" && id != undefined && id != null && id != "") {
		createPageObj(id, _opt);
	}else {
		$(".tab_content > .paging").each(function() {
			createPageObj(this.id, _opt);
	    });
	}
};

/**
 * f39Common.setPaging 페이지 정보 설정
 * 
 * @return
 */
f39Common.setTabPaging = function() {
	// 페이지 설정
	let setPage = function(i) {
		
    	if(f39Common.paging.hasOwnProperty(i)) {
    		// Paging ID 별 Object
    		let _o = f39Common.paging[i];
    		
    		if(!$.isEmptyObject(_o)) {
    			let _a = _o["totalCnt"];
    			let _b = _o["dataSize"];
    			let _c = _o["pageSize"];
    			let _d = _o["pageNo"];
    			
    			// page관련 객체
                $("#ROW_COUNT"   ).val(_b);
                $("#PAGE_SIZE"   ).val(_c);
                $("#CURRENT_PAGE").val(_d);
                
                f39Common.getPaging(i, _a, _b, _c, _d, "getPaging");
    		}
    	}
	};
	
	if(f39Common.paging != undefined) {
		$(".tab_content > .paging").each(function() {
	        if($(this).is(":visible")) {
	        	setPage(this.id);
	        }
	    });
	}
};

/**
 * f39Common.getPaging 페이징 화면 생성
 * 
 * @param pageId :
 *            페이징처리 div Id
 * @param totalCnt :
 *            전체레코드수
 * @param dataSize :
 *            페이지당 보여줄 데이터수
 * @param pageSize :
 *            페이지 그룹 범위
 * @param pageNo :
 *            현재페이지
 * @param functionName :
 *            함수이름(페이징번호 클릭 시 호출 함수이름)
 * @return
 */
f39Common.getPaging = function(pageId, totalCnt, dataSize, pageSize, pageNo, functionName){
	
    if(totalCnt == 0) {
    	$("#"+pageId).empty().hide();
    	return "";
    }
    
    if(f39Common.hasOwnProperty("paging") && f39Common.paging.hasOwnProperty(pageId)) {
		// pageObj 에 저장
		f39Common.paging[pageId]["totalCnt"] 	= totalCnt;	// 전체레코드수
		f39Common.paging[pageId]["dataSize"] 	= dataSize;	// 페이지당 보여줄 데이타수
		f39Common.paging[pageId]["pageSize"] 	= pageSize;	// 페이지 그룹 범위 1 2 3 5 6 7 8 9 10
		f39Common.paging[pageId]["pageNo"]		= pageNo;	// 현재페이지
		
	    totalCnt 	= parseInt(f39Common.paging[pageId]["totalCnt"]);	// 전체레코드수
	    dataSize 	= parseInt(f39Common.paging[pageId]["dataSize"]); 	// 페이지당 보여줄 데이타수
	    pageSize 	= parseInt(f39Common.paging[pageId]["pageSize"]); 	// 페이지 그룹 범위 1 2 3 5 6 7 8 9 10
	    pageNo		= parseInt(f39Common.paging[pageId]["pageNo"]);	// 현재페이지
	}else {
		totalCnt	= parseInt(totalCnt);	// 전체레코드수
		dataSize	= parseInt(dataSize);	// 페이지당 보여줄 데이타수
		pageSize	= parseInt(pageSize);	// 페이지 그룹 범위 1 2 3 5 6 7 8 9 10
		pageNo		= parseInt(pageNo);		// 현재페이지
	}
    
    let  html = new Array();

    // 페이지 카운트
    let pageCnt = totalCnt % dataSize;    
    if(pageCnt == 0){
    	pageCnt = parseInt(totalCnt / dataSize);
    }else{
        pageCnt = parseInt(totalCnt / dataSize) + 1;
    }
    let pRCnt = parseInt(pageNo / pageSize);
    if(pageNo % pageSize == 0){
    	pRCnt = parseInt(pageNo / pageSize) - 1;
    }
    html.push('<div>');
    // 처음페이지, 이전페이지
    if(pageNo > pageSize){
	   let s2;
	   if(pageNo % pageSize == 0){
		   s2 = pageNo - pageSize;
	   }else{
	       s2 = pageNo - pageNo % pageSize;
	   }
	   
	   // 처음페이지
	   html.push('<a href="javascript:' + functionName + '(1);">');
	   html.push('<img src="/static/img/page_ico01.gif" align="absmiddle" title="처음" />');
	   html.push("</a> ");	   
	   
	   // 이전페이지
	   html.push('<a href="javascript:' + functionName + '(');
	   html.push(s2);
	   html.push(');">');
	   html.push('<img src="/static/img/page_ico02.gif" align="absmiddle" title="이전" />');
	   html.push("</a> ");
    }
   
    html.push('<span class="num">');
    
    // paging Bar
    for(let index=pRCnt * pageSize + 1;index<(pRCnt + 1)*pageSize + 1;index++){
    	if (index > pageCnt){
			break;
		}
    	html.push('<a href="javascript:' + functionName + '(');
	    html.push(index);
	    if(index == pageNo){		   
	       html.push(');" class="on">');	      
	    }else{	     
	       html.push(');">');	  
	    }
	    html.push(index);
	    html.push('</a> ');
    }
    html.push('</span>');
    
    // 다음페이지, 마지막페이지
    if(pageCnt > (pRCnt + 1) * pageSize){
	   html.push('<a href=javascript:' + functionName + '(');
	   html.push((pRCnt + 1)*pageSize+1);
	   html.push(');>');
	   html.push('<img src="/static/img/page_ico03.gif" align="absmiddle" title="다음" />');
	   html.push('</a> ');
	   
	   html.push('<a href=javascript:' + functionName + '(');
	   html.push(pageCnt);
	   html.push(');>');
	   html.push('<img src="/static/img/page_ico04.gif" align="absmiddle" title="마지막" />');
	   html.push('</a>');
    } 
    html.push('</div>');
    
    $("#"+pageId).empty().append(html.join("")).show();
};

/**
 * *****************************************************
 * 날짜 관련 함수
 * *****************************************************
 */

/**
 * 1. 개요 : 날짜 포멧 변화
 * 2. 처리내용 : str값을 type으로 구분자를 넣어 변화
 * 		
 * ex) ibmTpComUtil.dateFormat ('20150201','-') =&gt; return : 2015-02-01   	
 */
f39Common.dateFormat = function(str, type ){
    let yyyyMMdd = String(str);
    let sYear = yyyyMMdd.substring(0,4);
    let sMonth = yyyyMMdd.substring(4,6);
    sMonth = sMonth.length > 1 ? sMonth : '0' + sMonth;
    let sDate = yyyyMMdd.substring(6,8);
    sDate = sDate.length > 1 ? sDate : '0' + sDate;
    return sYear + type + sMonth + type + sDate;
};


//현재날짜를 yymmdd str 타입의 String으로 리턴 없으면 yyyymmdd , -이면 yyyy-mm-dd
f39Common.strDefaultNowDateFrom = function(type){
	let now = new Date();
	let sYear = now.getFullYear();
	let sMonth = now.getMonth();
	if(sMonth<10) sMonth = "0" + sMonth;
	let strDate = '';
	if(type != null && type != 'undefined'){
		strDate = sYear + type + sMonth + type + "01";
	}else{
		strDate = sYear + '' + sMonth + '' + "01";
	}
	return strDate;
};

f39Common.strDefaultNowDateTo = function(type){
	let now = new Date();
	let sYear = now.getFullYear();
	let sMonth = now.getMonth();
	let lastDate = new Date(sYear,sMonth, 0);
	let slastDate = lastDate.getDate(); 
	if(sMonth<10) sMonth = "0" + sMonth;
	if(slastDate<10) slastDate = "0" + slastDate;
	let strDate = '';
	if(type != null && type != 'undefined'){
		strDate = sYear + type + sMonth + type + slastDate;
	}else{
		strDate = sYear + '' + sMonth + '' + slastDate;
	}
	return strDate;
};


// 현재날짜를 yymmdd str 타입의 String으로 리턴 없으면 yyyymmdd , -이면 yyyy-mm-dd
f39Common.strNowDate = function(type){
	let now = new Date();
	let sYear = now.getFullYear();
	let sMonth = now.getMonth()+1;
	let sDate = now.getDate();
	if(sMonth<10) sMonth = "0" + sMonth;
	if(sDate<10) sDate = "0" + sDate;
	let strDate = '';
	if(type != null && type != 'undefined'){
		strDate = sYear + type + sMonth + type + sDate;
	}else{
		strDate = sYear + '' + sMonth + '' + sDate;
	}
	return strDate;
};


//현재날짜를 yymm str 타입의 String으로 리턴 없으면 yyyymmdd , -이면 yyyy-mm-dd
f39Common.strDefaultMonth = function(type){
	let now = new Date();
	let sYear = now.getFullYear();
	let sMonth = now.getMonth();		
	if(sMonth<10) sMonth = "0" + sMonth;
	if(sMonth==0) {	// now.getMonth()가 1월(0) ~ 12월(11) 리턴이므로 1월엔 전년도 12월
		sYear = sYear-1;
		sMonth = 12;
	}
	let strDate = '';
	if(type != null && type != 'undefined'){
		strDate = sYear + type + sMonth;
	}else{
		strDate = sYear + '' + sMonth;
	}
	return strDate;
};

//입력받은 new Date(milliseconds)를 str타입의 String으로 리턴 없으면 yyyymm, -이면 yyyy-mm
f39Common.getMonthByUTC = function(date, type){
	let sYear  = date.getFullYear();
	let sMonth = (1 + date.getMonth());
	let sDay   = date.getDate();
    sMonth     = sMonth >= 10 ? sMonth : '0' + sMonth;
    sDay       = sDay   >= 10 ? sDay   : '0' + sDay;

	let strDate = '';
	if(type != null && type != 'undefined'){
		strDate = sYear + type + sMonth;
	}else{
		strDate = sYear + '' + sMonth;
	}
    return strDate;
};

/**
 * 현재날짜시간 가져오기
 * 
 * @return true / false
 * @exception
 */
f39Common.getCurrentDateTime= function (){
	let nowDate = new Date();
	let year = nowDate.getFullYear();
    let month = nowDate.getMonth() + 1;
    let date = nowDate.getDate();
    let hours = nowDate.getHours();
    let minute = nowDate.getMinutes();
    let second = nowDate.getSeconds();    
    let arrCurrent = new Array();
    
    arrCurrent.push(year);
    arrCurrent.push("-"+(month < 10 ? ("0"+month) : month));
    arrCurrent.push("-"+(date < 10 ? ("0"+date) : date));
    arrCurrent.push(" "+(hours < 10 ? ("0"+hours) : hours));
    arrCurrent.push(":"+(minute < 10 ? ("0"+minute) : minute));
    arrCurrent.push(":"+(second < 10 ? ("0"+second) : second));
	
    return arrCurrent.join("");
};


f39Common.getCalculatedDate = function (crruntDay, iDay){	 
	// 현재 날짜 객체를 얻어옴.
	let gdCurDate = new Date();
	let seperator = "-";
	gdCurDate.setYear( crruntDay.substring(0,4) );
	gdCurDate.setMonth( crruntDay.substring(4,6) );
	gdCurDate.setDate( crruntDay.substring(6,8) );
	gdCurDate.setDate( gdCurDate.getDate() + iDay );
	// 실제 사용할 연, 월, 일 변수 받기.
	let giYear = gdCurDate.getFullYear();
	let giMonth = gdCurDate.getMonth();
	let giDay = gdCurDate.getDate();
	// 월, 일의 자릿수를 2자리로 맞춘다.
	giMonth = "0" + giMonth;
	giMonth = giMonth.substring(giMonth.length-2,giMonth.length);
	giDay   = "0" + giDay;
	giDay   = giDay.substring(giDay.length-2,giDay.length); 
	let day = giYear + seperator + giMonth + seperator +  giDay;
	return day;
};


/***
 * 입력날짜 기준 날짜 계산하기
 *  @param dateType  날짜계산 구분 값(연도 : Y, 월 : M, 일 : D) 
 *  @param seperator  날짜구분자 
 *  @param pDate      입력날짜 
 *  @param  pDate2   계산날짜
 *  @return  sTemp  
 * @exception 
 */
 f39Common.calculatedDate = function (dateType, seperator, pDate, pDate2){	 	
	var arrDate = new Array();
	
	if(seperator != ""){
		arrDate = pDate.split(seperator);
	}else{
		arrDate[0] = pDate.substring(0,4);
		arrDate[1] = pDate.substring(4,6);
		arrDate[2] = pDate.substring(6,8);
	}
	
	var tempDate = new Date(arrDate[0], Number(arrDate[1])-1, Number(arrDate[2]));	
	
	if("Y" == dateType){
		tempDate.setFullYear(tempDate.getFullYear() + pDate2);		
	}else if("M" == dateType){
		tempDate.setMonth(tempDate.getMonth() + pDate2);		
	}else{
		tempDate.setDate(tempDate.getDate() + pDate2);		
	}
		
	//실제 사용할 연, 월, 일 변수 받기.
	var sYear = tempDate.getFullYear();
	var sMonth = tempDate.getMonth()+1;
	var sDate = tempDate.getDate();
	
	if(sMonth < 10){
		sMonth = "0"+sMonth;
	}	
	
	if(sDate < 10){
		sDate = "0"+sDate;
	}
	
	var sTemp = sYear + seperator + sMonth + seperator + sDate;
	return sTemp;
};

/**
 * 2020-07-03 추가 
 * 현재 월 기준으로 지난 달 가져오기
 * @returns strDate
 */
f39Common.strLastMonth = function(type){
	let date = new Date();
	let firstDayOfMonth = new Date( date.getFullYear(), date.getMonth(), 1 ); // 이 달의 첫 날
	let lastDayOflastMonth = new Date ( firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 1) ); // 지난 달의 마지막 날

	let lastMonth = lastDayOflastMonth.getMonth() + 1; // 월의 값이 0부터 시작하므로 1 더해줌
	if(lastMonth < 10) {
		lastMonth = "0" + lastMonth;
	}
	
	let strDate = '';
	if(type != null && type != undefined && type != ''){
		strDate = lastDayOflastMonth.getFullYear() + type + lastMonth;
	}else{
		strDate = lastDayOflastMonth.getFullYear() + "" + lastMonth;
	}
	return strDate;
};

/**
 * 2020-10-29 추가 
 * replace null value
 * @returns target
 */
f39Common.nvl = function(target, replaceStr) {
	if(target === null || target === undefined) {
		if(replaceStr === null || replaceStr === undefined) {
			return '';
		} else {
			return replaceStr;
		}
	} else {
		return target;
	}
};

/**
 * *****************************************************
 * 포맷체크 관련함수	(날짜, 숫자등)
 * *****************************************************
 */

/**
 * 숫자값 3자리마다 , 체크(123,456,789)
 * 
 * @param objValue
 * @return true / false
 * @exception
 */
f39Common.formatNumber = function(value){
	let str = String(value);
	str = str.split('.');
	let tmpStr = str[0];
	let re  = /(-?[0-9]+)([0-9]{3})/;
	while (re.test(tmpStr)){
	   tmpStr = tmpStr.replace(re, "$1,$2");
	}
	if(str.length>1){
		str = tmpStr+'.'+str[1];
	}else{
		str = tmpStr;
	}
	return str;
};

/**
 * 입력값이 숫자인지 체크한다(정수와 실수)
 * 
 * @param objValue
 * @return true / false
 * @exception
 */
f39Common.isNum = function (objValue){
    let bool = true;
    
    for (let i=0; i<objValue.length; i++){
        ch = objValue.charCodeAt(i);
        if(!((ch >= 0x30 && ch <= 0x39) || ch == 0x2E)){
            bool = false;
            break;
        }
    }
   
    return bool;
};

/**
 * 입력값이 -값인지 체크한다(정수와 실수)
 * 
 * @param objValue
 * @return true / false
 * @exception
 */
f39Common.isMinus = function (objValue){
	let bool = true;
	
	 if(new RegExp("^-[0-9]+","g").test(objValue)){
		bool = false;
	}
	
	return bool;
};

//----------------------------------------------------
//패스워드, 이메일, 아이디 등 형식 맞는지 확인
//----------------------------------------------------
f39Common.checkRegularExp = function(type, input){
	 let regularExp;   // 정규표현식
	 let val  = input;
	 if("password" ==  type){// 패스워드
		 regularExp  = /^(?=.*[a-zA-Z])(?=.*[!@#$\-+:;/])(?=.*[0-9]).{6,10}$/;  // 패스워드정규표현식 체크(영문, 숫자, 특수문자 조합하여6~10자리 체크)
	 }else if("email" == type){// 이메일
		 regularExp  = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;   	
	 }else if("id" == type){// 아이디
		 regularExp  = /^[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{5,12}$/;  // 아이디 정규표현식 체크(영문 대소문자 또는 숫자를 이용하여 5~12자리 체크)
	 }else if("yyyy-mm-dd" == type){// 날짜형식
		 regularExp  = /^([1-9][0-9])\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;  // yyyy-mm-dd
	 }else if("yyyymmdd" == type){// 날짜형식
		 regularExp  = /^([1-9][0-9])\d{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[0-1])$/;  // yyyymmdd
	 }else if("yyyymm" == type){// 날짜형식
		 regularExp  = /^([1-9][0-9])\d{2}(0[1-9]|1[012])$/;  // yyyymm
	 }else if("yyyy" == type){
		 regularExp  = /^([1-9][0-9])\d{2}$/;  // yyyy
	 }
	 if(regularExp.test(val) == false){
		 return false;
	 }
	 return true;
};

/**
 * 2020-11-24 추가
 * 날짜 형식이 YYYYMM 인지 판별  
 */
f39Common.checkYearMonthFormat = function(date) {
	 let dateFormat = /^\d{4}(0[1-9]|1[012])$/;
	 if(dateFormat.test(date) === true) {
		 return true;
	 } else {
		 return false;
	 }
};

/**
 * 2020-12-15 추가
 * 1분기 년도Q1/2분기 년도Q2/3분기 년도Q3/4분기 년도Q4 Return 
 */
f39Common.getQuarterOfTheYear = function() {
	let d = new Date();

	let year  = d.getFullYear();
	let month = d.getMonth() + 1; //월의 값이 0부터 시작하므로 1 더해줌
	let quarter = Math.ceil(month / 3);

	return year + "Q" + quarter;
};

/**
 * 공통코드 리스트 조회
 * 
 * @param param :
 *            공통코드 검색조건 CODE=BUDGET_TYPE&FORM_ID='+formID+'&FISCAL_YEAR='+year; type : 공통=common , 예산코드=budget 
 *            ...... id : 조회된 코드리스트로 셀렉트박스 또는 targetType : html형식 (select, radio, checkbox... selectedVal : 선택될 값 defaultP :
 *            첫번째옵션
 * @return
 * @exception
 */
f39Common.getCmmnCdList = function(param, type ,id, targetType, viewType,selectedVal,defaultP, callBackFunc, callbackComplete){
	let url = "/common/f39ommonCode.json";
	let params = {
	    'ServiceName' : 'f39ommonCode-service'
	    ,'code' : '1'
	    ,'type' : type
	    ,'result-keys' : 'resultList'
	    ,'params': JSON.stringify(param)
	};
	f39Common.submitAjax(url, params, false, function(res){
			if(targetType =='select'){
				f39Common.setCmmnCdSelectBox(res, id, selectedVal, defaultP, viewType);
			}else if(targetType =='grid'){
				let returnData = f39Common.setCmmnCdSelectBoxGrid(res,defaultP,viewType);
				if(typeof(callBackFunc) == 'function' || typeof(callBackFunc) =='object') callBackFunc(returnData);
			}
		}
		, ''
		, ''
		, function(){
			if(typeof(callbackComplete)=='function' ){
				callbackComplete();
			}
		}
	);
};

/**
 * 조회된 코드 리스트로 셀렉트 박스 생성
 * 
 * @param
 * @return
 * @exception
 */
f39Common.setSelectBoxCover = function(){
	for(let i=0;i<$("select").length;i++){
		let thisId = $("select")[i].id
		$("#"+thisId+"_BACK").remove();
		if($("#"+thisId+" option").length < 2){
			$("#"+thisId).closest("li").prepend('<div id="'+thisId+'_BACK" style="position:absolute;background-color:#c4c4c4;opacity:0.3;">');
			let back = $("#"+thisId+"_BACK");
			back.width($("#"+thisId).width()+6); 
			back.height($("#"+thisId).height()+6);
		}
	}
};

/*
 * inputBox Html생성
 */
f39Common.makeHtmlInputBox = function(Id, value, width, disabled, type) {
	let inputHtml = "";
	let inputType = "text";
	
	if(type != undefined && type != "") {
		inputType = type;
	}
	
	inputHtml = "<input type='" + inputType + "' id='" + Id + "' name='" + Id + "' value='" + value + "' style='width:" + width + "px;' " + (disabled == true ? "disabled" : "") + ">";
	
	return inputHtml;
};

/*
 * selectBox 콤보박스 Html생성
 * optValCol : 값, optNameCol : 이름, optTitleVal : 맨위 타이틀값, optTitleName : 맨위 타이틀명
 */
f39Common.makeHtmlSelectBox = function(jsonData, Id, selectVal, optValCol, optNameCol, optTitleVal, optTitleName, width, disabled) {
	let selectHtml = "<select id=" + Id + " name=" + Id + " style='width:" + width + "px;' " + (disabled == true ? "disabled" : "") + ">";
	
	if(optTitleName != "" && optTitleName != undefined && optTitleName != null) {
		selectHtml += "<option value='" + optTitleVal + "'>" + optTitleName + "</option>";
	}
	
	$.each(jsonData, function(idx, json) {
		let optVal = json[optValCol];		
		
		if(optVal == selectVal) {
			selectHtml += "<option value='" + json[optValCol] + "' selected>" + json[optNameCol] + "</option>";
		}else {
			selectHtml += "<option value='" + json[optValCol] + "'>" + json[optNameCol] + "</option>";
		}
	});
	
	selectHtml += "</select>";

	return selectHtml;
};

f39Common.makeHtmlRadioBox = function(jsonData, Id, optValCol, optNameCol, width) {
	let radioHtml = "";
	
	$.each(jsonData, function(idx, json) {
		let optVal = json[optValCol];		
		radioHtml += "<input type='radio' name='" + Id + "' value='" + json[optValCol] + "' style='width:" + width + "px;'>" + json[optNameCol];
	});
	
	return radioHtml;
};

f39Common.makeHtmlCheckBox = function(jsonData, Id, optValCol, optNameCol, width) {
	let checkHtml = "<input type='checkbox' id='" + Id + "' name='" + jsonData[optNameCol] +"' value='" + jsonData[optValCol] + "' style='width:" + width + "px;'>";
	return checkHtml;
};

/**
 * select박스 option 추가
 * 
 * @param jsonData
 *            json data
 * @param objId
 *            selectbox id
 * @param selectVal
 *            선택값
 * @param optValCol
 *            option 값 설정 json data name
 * @param optNameCol
 *            option 이름 설정 json data name
 * @param optTitleVal
 *            첫번째 option 값
 * @param optTitleName
 *            첫번째 option 이름
 * @exception
 */
f39Common.makeSelectBoxOptions = function(jsonData, objId, selectVal, optValCol, optNameCol, optTitleVal, optTitleName) {
	let optionsHtml = "";	
	let $selectbox  = $("#" + objId);
	
	if(optTitleName != "" && optTitleName != undefined && optTitleName != null) {
		optionsHtml += "<option value='" + optTitleVal + "'>" + optTitleName + "</option>";
	}
	
	$.each(jsonData, function(idx, json) {
		optionsHtml += "<option value='" + json[optValCol] + "'>" + json[optNameCol] + "</option>";
	});
	
	$selectbox.empty().append(optionsHtml);	
	
	if(selectVal != "") {
		$selectbox.val(selectVal).prop("selected", true);
	}
};

/**
 * 조회된 코드 리스트로 셀렉트 박스 생성
 * 
 * @param
 * @return
 * @exception
 */
f39Common.setCmmnCdSelectBox = function( jsonData,id, selectedVal, defaultP, viewType){
	let comboList = jsonData.resultList;
	let FLAG = false;
	let O_FLAG = "";
	let C_FLAG = "";
	$('select#'+id+' option').remove();
	if (selectedVal == undefined || selectedVal == null || selectedVal == '') {
		FLAG = true;
	}
	if(comboList != null && comboList !=''){
		if (defaultP != undefined && defaultP != null && defaultP != '' && comboList.length > 1) {
			$('#'+id).append('<option value="">'+defaultP+'</option>');
		}
		$.each(comboList,function(idx, json){
			if(FLAG && (json.CLOSED_FLAG=="O" || json.CLOSED_FLAG=="C")){
				if(json.CLOSED_FLAG=="O"){
					O_FLAG = json.CODE;
				}else if(json.CLOSED_FLAG=="C"){
					C_FLAG = json.CODE;
				}
				if(O_FLAG != ""){
					selectedVal = O_FLAG;
				}else{
					selectedVal = C_FLAG;
				}
			}
			if(viewType == 'CDVALUE'){
				$('#'+id).append('<option value="'+json.CODE+'">'+json.CODE+'|'+json.CODE_VALUE+'</option>');
			}else{
				$('#'+id).append('<option value="'+json.CODE+'">'+json.CODE_VALUE+'</option>');
			}
			if (selectedVal != undefined && selectedVal != null && selectedVal != '') {
				$('#'+id+' option[value="'+selectedVal +'"]').attr("selected", "true");
			}
		});
	}
};

/**
 * 조회된 코드 리스트로 그리드에 생성할 수 있게 데이타 핸들링
 * 
 * @param
 * @return
 * @exception
 */
f39Common.setCmmnCdSelectBoxGrid = function( jsonData,defaultP,viewType){
	let returnData ='';
	let comboList = jsonData.resultList; 
	if(comboList != null && comboList !=''){
		if (defaultP != undefined && defaultP != null && defaultP != '') {
			returnData +=''+':'+defaultP
		}
		$.each(comboList,function(idx, json){
			if(returnData !=''){
				returnData +=';';
			}
			if(viewType == 'CDVALUE'){
				returnData +=json.CODE+':'+json.CODE+'|'+json.CODE_VALUE;
				// $('#'+id).append('<option
				// value="'+json.CODE+'">'+json.CODE+'|'+json.CODE_VALUE+'</option>');
			}else{
				returnData +=json.CODE+':'+json.CODE_VALUE;
				// $('#'+id).append('<option
				// value="'+json.CODE+'">'+json.CODE_VALUE+'</option>');
			}
		});
	}
	return returnData;
};


/**
 * 조회된 코드 리스트로 라디오 박스 생성
 * 
 * @param
 * @return
 * @exception
 */
f39Common.setCmmnCdRadioBox = function( jsonData,id, selectedVal){
	let comboList = jsonData.resultList; 
	$('#'+id+' option').not('[value=""]').remove();
	if(comboList != null && comboList !=''){
		$.each(comboList,function(idx, json){
			// 필요할시 생성
		});
	}
};
/**
 * 조회된 코드 리스트로 체크 박스 생성
 * 
 * @param
 * @return
 * @exception
 */
f39Common.setCmmnCdCheckBox = function( jsonData,id, selectedVal){
	let comboList = jsonData.resultList; 
	$('#'+id+' option').not('[value=""]').remove();
	if(comboList != null && comboList !=''){
		$.each(comboList,function(idx, json){
			// 필요할시 생성
		});
	}
};



/**
 * 권한에서 부여된 기본버튼 숨기기: 수정버튼(add, delete,upload,save)
 * 
 * @return
 * @exception
 */
f39Common.basicBtnHide = function(id, mode){
	$('#'+id).find('a').each(function(){
		let tmpMode = $(this).attr('mode');
		if(tmpMode == mode){
			$('#'+$(this).attr('id')).hide();
		}
	});
};

/**
 * 권한에서 부여된 기본버튼 보이기
 * 
 * @return
 * @exception
 */
f39Common.basicBtnShow = function(id, mode){
	$('#'+id).find('a').each(function(){
		let tmpMode = $(this).attr('mode');
		if(tmpMode == mode){
			$('#'+$(this).attr('id')).show();
		}
	});
};

//----------------------------------------------------
// 코멘트 팝업창열기
//----------------------------------------------------
f39Common.openCommentPopU01 = function(pGubun){
    // 콜백함수
	let divId = "";
	let pWidth  = 0;
	let pHeight  = 0;
	
	if(pGubun == "P"){
		divId = "PasswordPopUp10";
		pWidth  = 600;
		pHeight  = 150;		
	}else if(pGubun == "I"){
		divId = "UserIdPopUp10";
		pWidth  = 600;
		pHeight  = 150;
	}
	callbackSuccess = function (data){
		let html = data.substring(data.indexOf("<div"), data.lastIndexOf("</div>")+7);		
		let $div = $("<div>" +html+"</div>");				
				
		$("body").append($div.find("#"+divId).clone());		
	};
	
	if($("#"+divId).length == 0){
		$.ajax({
			type : "POST"		
			,dataType : 'html'
			,url : contextPath+"/common/f39aHtmlForm.do"		
			,async:false			
			,success : function(data) { 				
				callbackSuccess(data);				
			}			
			,error : function(xhr , textStatus , error) { 
				alert(xhr.responseText);
			}
		});		
	}
	
	 $("#"+divId).dialog({            
         modal       : true,
         autoOpen    : true,
         resizable   : true,
         draggable   : false,
         width       : pWidth,
         height      : pHeight,
         appendTo    : "body",
         heightStyle : "content",        
         create: function (event, ui) {
            $(".ui-widget-header").hide();
         }
     });	
 	
 	// 닫기
     $(document).on("click", "#btn"+divId+"Close", function (){	
         $("#"+divId).dialog("close"); 
     });
};

//----------------------------------------------------
// 개인정보처리방침 동의 팝업창 열기
//----------------------------------------------------
f39Common.openPersonInfoAgreementPopUp10 = function(){	
	let popUpId = "PersonInfoAgreementPopUp10";
	// 이벤트 설정하기
	setEventHandler = function (){
			$("#"+popUpId).dialog({            
		         modal       : true,
		         autoOpen    : true,
		         resizable   : true,
		         draggable   : false,
		         width       : 845,
		         height      : 500,
		         appendTo    : "body",
		         heightStyle : "content",        
		         create		 : function (event, ui) {
		            $(".ui-widget-header").hide();
		         }
		     });	
		 	
		 	// 닫기
		     $(document).on("click", "#btn"+popUpId+"Close", function (){	
		         $("#"+popUpId).dialog("close"); 
		     });
		     
		     
		    // 확인
		     $(document).on("click", "#btn"+popUpId+"Confirm", function (){	
		    	 try{
		    		 callbackPersonInfoAgreementPopUp10();
		    	 }catch(e){
		    		 alert(e);
		    	 }
		     });
		};
    // 콜백함수
	callbackSuccess = function (data){
		let html = data.substring(data.indexOf("<div"), data.lastIndexOf("</div>")+6);		
		let $div = $("<div>" +html+"</div>");				
		$("body").append($div.find("#"+popUpId).clone());		
		setEventHandler();
	};
	
	if($("#"+popUpId).length == 0){	
		$.ajax({
			type : "POST"		
			,dataType : 'html'
			,url : contextPath+"/common/f39aAgreeInfo.do"		
			,async:false			
			,success : function(data) { 				
				callbackSuccess(data);				
			}			
			,error : function(xhr , textStatus , error) { 
				alert(xhr.responseText);
			}
		});		
	}else{
		setEventHandler();
	}
};


/**
 * 2020-11-04 추가
 * 페이징 스크롤 이벤트
 */
f39Common.scrollPaging = function(evtParam, sheet) {
	if(evtParam.sheet.DataRowCount > 0) {
        if(evtParam.vpos != 0 && evtParam.vpos >= evtParam.sheet.SheetSize.ScrollHeight - evtParam.sheet.SheetSize.BodyHeight - evtParam.sheet.RowHeight) {
            let fetchTotalSize = evtParam.sheet.Rows.AR1.TOTAL_CNT == null ? 0 : evtParam.sheet.Rows.AR1.TOTAL_CNT;
            let fetchedSize    = evtParam.sheet.DataRowCount;    // 패치된 row수
            
            if(fetchedSize < fetchTotalSize) {
            	sheet.search(fetchedSize);
            }
        }
	}
};

/**
 * 2021-06-11 추가
 * 다국어 정보 적용
 */
f39Common.setTextByLanguage = function(flag, msgName, className, userAttr) {

	// 다국어 객체 초기화
	const LANG = $("#P_SRC_LANG option:selected", parent.document).val() === "KO" ? KO : EN;

	if(flag === "tag") { // HTML 태그의 Text 변경
		$(className).each(function(idx, item){
			let msgName= $(this).attr(userAttr);
			$(this).text(LANG[msgName]);
		});
		return false;
	} else if(flag === "sheet") { // IB Sheet의 Header Text 변경
		return LANG[msgName];
	}
};

(function() {	
	$.fn.serializeObjectStr = function() {
		let obj = null;
		let strJson = "";
		try{
			if(this[0].tagName && this[0].tagName.toUpperCase() == "FORM" ) {			
				let arr = this.serializeArray();				
				if(arr){				
					obj = {};    
					
					$.each(arr, function() {				
						// obj의 key값은 arr의 name, obj의 value는 value값
						obj[this.name] = this.value;					
					});			
				}
			}
		}catch(ex){
			alert(ex.message);
		}			
		if(obj != null){
			strJson = JSON.stringify(obj)
		}
		return strJson;
	};
	
	$.fn.serializeObject = function() {
		"use strict"
		let result = {}
		let extend = function(i, element) {
			let node = result[element.name]
			if ("undefined" !== typeof node && node !== null) {
				if ($.isArray(node)) {
					node.push(element.value)
				} else {
					result[element.name] = [node, element.value]
				}
			} else {
				result[element.name] = element.value
			}
		};
	
		$.each(this.serializeArray(), extend)
		return result
	};
})( jQuery );

//----------------------------------------------------
// ajax 로딩바 적용하기
//----------------------------------------------------
$(document).ready(function (){
	if($("[type=text]").length == 1){
		$("form").append('<input type="text" name="TEXT_SUBMIT_NO" style="display: none;" />');
	}
	// form submit할경우 로딩바 실행하기
	$("form").submit(function (){
		setTimeout(f39Common.getOpenLodingBar, 500);
	});	
});

/**
 * 목표원가 화면 공통 LOV Setting
 * 
 * @param pageObj
 *            pageObj Object
 * @param selCompany
 *            Company selectbox id
 * @param selModel
 *            Model selectbox id
 * @param selType
 *            Type selectbox id
 * @param selBudget
 *            Budget selectbox id
 * @param selPeriodFrom
 *            Period From selectbox id
 * @param selPeriodTo
 *            Period To selectbox id
 * @param inpStatus
 *            hiddenStatus inputbox id
 * @exception
 * 
 */
f39Common.getPlanCommonLOV = function (pageObj, selCompany, selModel, selType, selBudget, selPeriodFrom, selPeriodTo, inputStatus) {

    // 기본 LOV 얻기
    pageObj.getPlanCommLOV = function() {

        let ajaxParams = {
                 'ServiceName'          : 'f55DaCommonLov-service'
                ,'budgetLov'            : '1'
                ,'result-keys'          : 'GetJsonInfoResult'
                ,'params'				: JSON.stringify(pageObj)
        };

        let url = '/f39Common.json';
        f39Common.submitAjaxNonLoadingbar(url, ajaxParams, false, function(res) {

        	let data = res.GetJsonInfoResult;

            if(data != null && data != "") {

                //Budget selectbox setting
            	f39Common.makeSelectBoxOptions(data, selBudget, data[0].VALUE, "VALUE", "TXT", "", "");

            	//hiddenStatus 설정
            	$.each(data, function(idx, item) {
            		$("."+inputStatus).append("<input type='hidden' id='"+data[idx].VALUE+"' value='"+data[idx].STAT+"'>");
            	});

                //Period From ~ To selectbox setting
            	pageObj.P_BUDGET_NAME = $("#"+selBudget).val();
                pageObj.getMonthLOV();

            } else {
            	$("#"+selBudget).empty();
            	$("#"+selPeriodFrom).empty();
            	$("#"+selPeriodTo).empty();
            }
        });
	};

    // MONTH_LOV
    pageObj.getMonthLOV = function() {
    	let ajaxParams = {
             'ServiceName'          : 'f55DaCommonLov-service'
            ,'monthLov'             : '1'
            ,'result-keys'          : 'GetJsonInfoResult'
            ,'params'               : JSON.stringify(pageObj)
        };

    	let url = '/f39Common.json';
    	f39Common.submitAjaxNonLoadingbar(url, ajaxParams, false, function(res) {

        	let data = res.GetJsonInfoResult;

            if(data != null && data != "") {

            	let optionsHtml    = "";
            	let maxValue       = "";
            	let $selectboxFrom = $("#"+selPeriodFrom); //Period From
            	let $selectboxTo   = $("#"+selPeriodTo);   //Period To
                $selectboxFrom.empty();
                $selectboxTo.empty();

                $.each(data, function(idx, item){
                    
                	//Date 객체 UTC 타입을 String으로 변환
                	let dateCode = f39Common.getMonthByUTC(new Date(data[idx].P_DATE));
                	let dateText = f39Common.getMonthByUTC(new Date(data[idx].P_DATE), '-');

                	optionsHtml += '<option value="'+dateCode+'">'+ dateText + "</>";

                    if (maxValue < dateCode) {
                        maxValue = dateCode;
                    }
                });

                $selectboxFrom.append(optionsHtml);
                $selectboxTo.append(optionsHtml);

                $selectboxTo.val(maxValue).prop("selected", true);

            } else {
            	$("#"+selBudget).empty();
            	$("#"+selPeriodFrom).empty();
            	$("#"+selPeriodTo).empty();
            }
        });
    };

    //CompanyCode 변경시
    $("#"+selCompany).change(function() {
    	pageObj.makeParam();
        $("."+inputStatus).html("");
    	pageObj.getPlanCommLOV();
    });

    // Model 변경시
    $("#"+selModel).change(function() {
    	pageObj.makeParam();
        $("."+inputStatus).html("");
    	pageObj.getPlanCommLOV();
    });

    // Type 변경시
    $("#"+selType).change(function() {
    	pageObj.makeParam();
    	$("."+inputStatus).html("");
        pageObj.getPlanCommLOV();
    });

    // Budget 변경시
    $("#"+selBudget).change(function() {
    	pageObj.P_BUDGET_NAME = $("#"+selBudget).val();
    	pageObj.getMonthLOV();
    });

    pageObj.getPlanCommLOV();

    return pageObj;
}
