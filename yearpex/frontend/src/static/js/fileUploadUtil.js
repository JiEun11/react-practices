
(function() {

/**
 * Default Constructor
 */
fileUploadUtil = {};



/** 
 *=============================================================================== 덱스트 파일업로드
 */

fileUploadUtil.initDext5 = function(configParam){
	DEXT5UPLOAD.config.InitXml = '/dext5upload.config.xml';
	var uploadId = configParam.uploadId ? configParam.uploadId : "dext5upload";
	DEXT5UPLOAD.config.UploadHolder = configParam.uploadHolder ? configParam.uploadHolder : "dext5place";
	DEXT5UPLOAD.config.IgnoreSameUploadName = configParam.ignoreSameUploadName ? configParam.ignoreSameUploadName : "1";
	if(configParam.mode) DEXT5UPLOAD.config.Mode = configParam.mode;
	if(configParam.width) DEXT5UPLOAD.config.Height = configParam.Width;
	if(configParam.height) DEXT5UPLOAD.config.Height = configParam.height;
	if(configParam.maxTotalFileCount) DEXT5UPLOAD.config.MaxTotalFileCount = configParam.maxTotalFileCount;
	if(configParam.headerBar) DEXT5UPLOAD.config.HeaderBar = configParam.headerBar;
	if(configParam.statusBar) DEXT5UPLOAD.config.StatusBar = configParam.statusBar;
	if(configParam.buttonBarEdit) DEXT5UPLOAD.config.ButtonBarEdit = configParam.buttonBarEdit;
	if(configParam.buttonBarView) DEXT5UPLOAD.config.ButtonBarView = configParam.buttonBarView;		
	if(configParam.extensionAllowOrLimit) DEXT5UPLOAD.config.ExtensionAllowOrLimit = configParam.extensionAllowOrLimit;
	if(configParam.extensionArr) DEXT5UPLOAD.config.ExtensionArr = configParam.extensionArr;
	
	return new Dext5Upload(uploadId);
};
	
//함수 - 첨부파일관련 frm에 세팅 
//frmId = 파일 form 태그 아이디
//resulJsonList = 추가된 첨부파일 Json리스트
//P_ATCHMNFL_GROUP_NO = 첨부파일일그룹번호
//delJsonList = 삭제된 첨부파일 리스트  
fileUploadUtil.uploadFileSet = function(frmId, resulJsonList, P_ATCHMNFL_GROUP_NO, fileGroup , delJsonList){
	
	var outHtml = "";
	var fileListName = "ATCH_FILE";
  	//먼저 input 지우고 시작  
  	$( "#"+frmId+" > input[type='hidden']" ).remove();
  	
  	//파일 수정이라면 그룹값세팅
  	if(undefined !== P_ATCHMNFL_GROUP_NO && null != P_ATCHMNFL_GROUP_NO && "" != P_ATCHMNFL_GROUP_NO ){
  		outHtml += "<input type='hidden' name='P_ATCHMNFL_GROUP_NO' value='" + P_ATCHMNFL_GROUP_NO + "' />";
  	}
  	//추가된 파일리스트
  	if(undefined !== resulJsonList &&  resulJsonList != null && resulJsonList != ""){
        for (var i = 0; i < resulJsonList.originalName.length; i++) {
        	var path = resulJsonList.uploadPath[i]; //업로드경로 + 파일명
        	var path2 = resulJsonList.logicalPath[i]; //업로드경로 + 파일명
        	
        	//alert(FwkMssageUtil.getMessage("FILE.SAVE.PATH"));
        	path = path.replace(FwkMssageUtil.getMessage("FILE.SAVE.PATH"), "");   				
			path = path.slice(0, path.indexOf(".")).toLowerCase();   				
			path = path.slice(0, path.lastIndexOf(FwkCmmnUtil.fileSeparator)).toLowerCase();
			//alert(path);
			outHtml += "<input type='hidden' name='"+fileListName+"[][P_STRE_FILE_NM]' value='" + resulJsonList.uploadName[i] + "' />";					//파일명+확장자
			outHtml += "<input type='hidden' name='"+fileListName+"[][P_ATCHMNFL_NM]' value='" + resulJsonList.originalName[i]+ "' />";					//실제파일명
			outHtml += "<input type='hidden' name='"+fileListName+"[][P_ATCHMNFL_COURS_NM]' value='" + path + "' />";								//파일명				
			outHtml += "<input type='hidden' name='"+fileListName+"[][P_FILE_CPCTY]' value='" + resulJsonList.size[i]  + "' />";								//사이즈
			outHtml += "<input type='hidden' name='"+fileListName+"[][P_ATCHMNFL_EXTSN_NM]' value='" + resulJsonList.extension[i] + "' />";			//파일타입
        };
  	}
  	//제거된 파일리스트
  	if(undefined !== delJsonList &&  delJsonList != null && delJsonList != ""){
		for(var i = 0; i < delJsonList.uniqKey.length; i++){
			outHtml += "<input type='hidden' name='DELETE_"+fileListName+"[][P_ATCHMNFL_SN]' value='" + delJsonList.uniqKey[i] + "' />";   				
		};
	}
	  	
    $(outHtml).appendTo("#"+frmId);
};
	
	//다운로드 리스트 세팅
fileUploadUtil.downLoadFileSet = function(param, dextId){
	FwkCmmnUtil.submitAjax(
		"/com/atfi/atchFileListInqireByAtchFileGroupNo" 
		, param
		, function(data) {
			for (var i = 0; i < data.atchFileList.length; i++) {
				var atchFile = data.atchFileList[i];
				var sn = atchFile.ATCHMNFL_SN;
				var name = atchFile.ATCHMNFL_NM;
				var path = atchFile.ATCHMNFL_COURS_NM;
				var cpcty = atchFile.FILE_CPCTY;
				var filePath = path + FwkCmmnUtil.fileSeparator + atchFile.STRE_FILE_NM;
				DEXT5UPLOAD.AddUploadedFile(sn, name, filePath , cpcty, filePath, dextId);
			}
		}
	);
};

//업로드 객체의 생성이 완료되었을 때 발생합니다.
DEXT5UPLOAD_OnCreationComplete = function(uploadID) {
	
//	alert('페이지 온로드후 히든에 다운로드 파일 리스트 input 생성'+uploadID+"======="+upload1.ID);
	
	var param = {};
	var idx=uploadID.substring(uploadID.length-1,uploadID.length);
	param.P_ATCHMNFL_GROUP_NO = $("#P_ATCHMNFL_GROUP_NO"+idx).val();
	fileUploadUtil.downLoadFileSet(param, uploadID);
};

//DEXT5UPLOAD 에러시
DEXT5UPLOAD_OnError = function(uploadID, ErrorCode, sMsg) {
    //에러 발생 후 경고창 띄어줌
    alert("Error Code : " + ErrorCode + "\nError Message : " + sMsg);
};


//업로드전송완료 후에 호출
var resultJsonList = "";
fileUploadUtil.onTransferComplete = function(uploadID , callBackFunc, fileGroup ) {
	var P_ATCHMNFL_GROUP_NO = $("#"+fileGroup).val();
//	alert(uploadID +": " +fileGroup+"=====================파일그룹번호=="+P_ATCHMNFL_GROUP_NO);
	var url;
	if("" == P_ATCHMNFL_GROUP_NO){
//		alert("등록");
		
		if(0 == DEXT5UPLOAD.GetTotalFileCount(uploadID) ){
			
			if(typeof callBackFunc=='function' ){
				callBackFunc(uploadID);
			}
			return;
		}
		url = "/com/atma/fileInfoRegist";
		delJsonList = null;
	} else {
//		alert("수정");
		delJsonList = DEXT5UPLOAD.GetDeleteListForJson(uploadID);
		url = "/com/atma/fileInfoUpt";
	}
	
	resultJsonList = DEXT5UPLOAD.GetNewUploadListForJson(uploadID);
	fileUploadUtil.uploadFileSet("fileFrm", resultJsonList, P_ATCHMNFL_GROUP_NO, fileGroup, delJsonList);

	FwkCmmnUtil.submitAjax(
		url
		, $("#fileFrm").serializeJSON()
		, function(res) {
			if("" == P_ATCHMNFL_GROUP_NO) {
				if (null == res.atchFileGroupNo) {
					alert("저장이 실패하였습니다.");
					return;
				}else {
					if (res.atchFileGroupNo !='' && res.atchFileGroupNo != null) {
						
						$("#"+fileGroup).val(res.atchFileGroupNo);
//						alert($("#"+fileGroup).val());
					}
					if(typeof(callBackFunc)=='function' ){
						callBackFunc(uploadID);
					}
				}
			} else {
				if(typeof(callBackFunc)=='function' ){
					callBackFunc(uploadID);
				}
			}
	},null,null,function(res) {
		alert("시스템 오류가 발생하였습니다");
		return;
	});
};



	
})();


