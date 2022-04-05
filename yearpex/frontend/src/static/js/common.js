if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        var el = this;

        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}
/* 210705 추가 */
// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty("append")) {
            return;
        }
        Object.defineProperty(item, "append", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function append() {
                var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();

                argArr.forEach(function (argItem) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });

                this.appendChild(docFrag);
            },
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
/* 210705 추가 */

(function (window, document) {
    //검색영역
    const selecCon = document.querySelectorAll(".search-box");
    function searchBtnLeftOffset() {
        if (!selecCon) {
            //selecCon이 없을때
            return;
        }
        [].forEach.call(selecCon, function (item, index) {
            selectBoxW(item, index);
        });
    }

    function selectBoxW(item, index) {
        const boxCon = selecCon[index].querySelector(".column");
        const searchBtn = selecCon[index].querySelector(".column.large");
        const selectBox = item.querySelectorAll(".field");
        let searchWrapPos = 0;
        let selectRight = 0;

        if (!searchBtn) {
            return;
        }

        for (let i = 0; selectBox.length > i; i++) {
            let itemRect = selectBox[i].getBoundingClientRect();
            let newRight = itemRect.left + itemRect.width;

            if (selectRight < newRight) {
                selectRight = newRight;
            }
        }

        searchWrapPos = boxCon.getBoundingClientRect().right - selectRight - 30;
        searchBtn.style.left = -searchWrapPos + "px";
    }

    //좌측메뉴
    //210625 수정
    function gnb() {
        var gnb = document.querySelector(".ly-gnb-menu");
        if (!gnb) {
            return;
        }
        var li = gnb.querySelectorAll("li");
        [].forEach.call(li, function (x, j) {
            if (x.children[1]) {
                x.classList.add("depth");
                [].map.call(x.children, function (child) {
                    var _child = child.nextElementSibling;
                    if (_child) {
                        _child.classList.add("depth2");
                    } else {
                        return;
                    }
                });
            } else {
                return;
            }
            x.addEventListener("click", gnbClicked, false);
        });
    }

    function gnbClicked(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.target.nextElementSibling) {
            e.target.classList.toggle("on");
            e.target.nextElementSibling.classList.toggle("on");
        } else {
            return;
        }
    }
    //210625 수정

    function tabs() {
        var tabTarget = document.querySelectorAll(".tabs-head li");
        var tabsCont = document.querySelectorAll(".tabs-cont .tabs-content");

        [].forEach.call(tabTarget, function (data, index) {
            data.addEventListener("click", function (e) {
                //210714 수정
                if (e.target.tagName === "A") {
                    [].forEach.call(tabTarget, function (item, index) {
                        item.classList.remove("active");
                        tabsCont[index].classList.remove("active");
                    });

                    tabsCont[(this[index] = index)].classList.add("active");
                    e.target.parentElement.classList.add("active");
                }
                //210714 수정

                /* 210709 추가 */
                searchBtnLeftOffset();
                /* 210709 추가 */
            });
        });
    }

    function scrollUpdate() {
        //제이쿼리
        $(".ly-gnb-menu").mCustomScrollbar({
            theme: "minimal-dark",
            scrollEasing: "linear",
            scrollInertia: 890,
        });

        $(".iframe-wrapper").mCustomScrollbar({
            theme: "custom-main",
            scrollEasing: "linear",
            scrollbarPosition: "outside",
            //210714수정
            scrollInertia: 400,

            //210714수정
        });

        $(".drop-zone").each(function (index, data) {
            $(data).mCustomScrollbar({
                theme: "custom-main2",
                scrollEasing: "linear",
                scrollbarPosition: "outside",
                scrollInertia: 400,
            });
        });

        /* 210709 추가 */
        $(".popup-content").mCustomScrollbar({
            theme: "custom-main",
            scrollEasing: "linear",
            scrollbarPosition: "outside",
            scrollInertia: 400,
        });
        /* 210709 추가 */

        /* 210709 추가 */
        $(".tabs-content").mCustomScrollbar({
            theme: "custom-main",
            scrollEasing: "linear",
            scrollbarPosition: "outside",
            scrollInertia: 400,
        });
        /* 210709 추가 */
    }

    /* 211001 수정 */
    function accordion() {
        var acc = $(".accordion-wrap");

        $(acc).each(function (index, item) {
            var title = $(item).find(".accordion-title-rt .icon-arrow");
            var contents = $(item).find(".accordion-contents");
            $(title).on("click", function () {
                $(item).toggleClass("on");

                if ($(item).hasClass("on")) {
                    $(contents).show();
                } else {
                    $(contents).hide();
                }
            });
        });
    }
    /* 211001 수정 */

    /** 210917 추가 */
    function tglBtn() {
        var tgl = false;
        var target = document.querySelector(".tgl-btn a");
        var lnb = document.querySelector(".ly-gnb");
        var contents = document.querySelector(".ly-contents");

        if (!target) {
            return;
        }
        target.addEventListener("click", function () {
            target.parentElement.classList.toggle("on");

            if (!tgl) {
                contents.style.paddingLeft = "10px";
                setTimeout(function () {
                    lnb.style.display = "none";
                }, 390);
                tgl = true;
            } else {
                lnb.style.display = "inline-block";
                contents.style.paddingLeft = "200px";
                tgl = false;
            }
        });
    }
    /** 210917 추가 */

    var init = function () {
        tglBtn();
        gnb();
        tabs();
        setTimeout(function () {
            searchBtnLeftOffset();
        }, 50);
        /* 210709 추가 */
        accordion();
        /* 210709 추가 */
    };

    window.addEventListener("resize", function () {
        searchBtnLeftOffset();
    });

    document.addEventListener("DOMContentLoaded", function () {
        init();
        scrollUpdate();
    });
})(window, document);

$(function () {
    //210714 수정
    var tooltipTime;
    $(".tooltip-triger").on({
        mouseenter: function () {
            //현재 위치가 아이프레임안인지 밖인지 구분
            var posW = self !== top ? 0 : 40;
            var posH = self !== top ? 0 : 101;
            //현재 위치가 아이프레임안인지 밖인지 구분
            let docW = $(document).width();
            let docH = $(this).parents(".mCSB_container") ? $(this).parents(".mCSB_container").height() : $(document).height();
            let target_id = "#" + $(this).attr("data-id");
            let triger_posL = $(this).offset().left + $(this).outerWidth();
            let triger_posT = $(this).offset().top;
            let trigerW = $(this).outerWidth();
            //pos_gap으로 위치 조절
            let pos_gapL = 5;
            let pos_gapT = 0;
            //pos_gap으로 위치 조절
            let tooltip_posL = 0;
            let tooltip_posT = 0;
            let tooltipW = $(target_id).outerWidth();
            let tooltipH = $(target_id).outerHeight();
            let mcus_scrT = parseInt($(this).parents(".mCSB_container").css("top"));

            clearInterval(tooltipTime);

            if (triger_posL + tooltipW > docW) {
                tooltip_posL = triger_posL - trigerW - pos_gapL - tooltipW - posW;
            } else {
                tooltip_posL = triger_posL + 5 - posW;
            }

            if (triger_posT - mcus_scrT + pos_gapT + tooltipH > docH) {
                tooltip_posT = triger_posT - mcus_scrT + pos_gapT + (docH - (triger_posT - mcus_scrT + pos_gapT + tooltipH)) - posH;
            } else {
                tooltip_posT = triger_posT - mcus_scrT + pos_gapT - posH;
            }

            $(target_id).css({ opacity: "1", visibility: "visible", left: tooltip_posL, top: tooltip_posT });
        },
        mouseleave: function () {
            let target_id = "#" + $(this).attr("data-id");

            tooltipTime = setInterval(function () {
                $(target_id).css({ opacity: "0", visibility: "hidden" });
            }, 1000);
        },
    });

    //210714 수정

    $(".ly-tooltip").on({
        mouseenter: function () {
            clearInterval(tooltipTime);
        },
        mouseleave: function () {
            tooltipTime = setInterval(function () {
                $(".ly-tooltip").css({ opacity: "0", visibility: "hidden" });
            }, 1000);
        },
    });
});

function panelClose() {
    console.log("close");
}

/* layer popup */
function layer_popup_open(popup_id) {
    $(popup_id).show();

    if ($(popup_id).find(".popup_area").height() > $(window).height()) {
        $(popup_id).find(".popup_area").addClass("max_height");
    }

    /* popup position */
    popup_position(popup_id);

    /* popup move */
    $(popup_id).find(".popup_area").draggable({ containment: "parent", handle: ".popup_header" });

    $(popup_id).animate({ opacity: "1" }, { duration: 500, easing: "easeInOutQuart" });
}
function layer_popup_close(popup_id) {
    $(popup_id).animate(
        { opacity: "0" },
        {
            duration: 500,
            easing: "easeInOutQuart",
            complete: function () {
                /* popup move */
                $(popup_id).find(".popup_area").draggable("destroy");

                $(popup_id).hide();

                $(popup_id).find(".popup_area").css({ left: "50%", top: "50%" });
            },
        }
    );
}

/* popup position */
function popup_position(popup_id) {
    $(popup_id).find(".popup_area").css({ left: "50%", top: "50%" });

    var popupX_pos = parseInt(parseInt($(popup_id).find(".popup_area").css("left")) - parseInt($(popup_id).find(".popup_area").width()) / 2);
    var popupY_pos = parseInt(parseInt($(popup_id).find(".popup_area").css("top")) - parseInt($(popup_id).find(".popup_area").height()) / 2);

    if (popupY_pos < 0) {
        popupY_pos = 0;
    }

    $(popup_id).find(".popup_area").css({ left: popupX_pos, top: popupY_pos });
}

//파일첨부
function humanFileSize(bytes, si) {
    /* 파일업로드시 호출될 포메터 */
    var dp = 1;
    var thresh = si === false ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
        return bytes + " B";
    }

    var units = si ? ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    let u = -1;
    var r = 10 * dp;

    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

    return bytes.toFixed(dp) + " " + units[u];
}

function getExtensionOfFilename(filename) {
    /**
     * 파일명에서 확장자명 추출
     * @param filename   파일명
     * @returns _fileExt 확장자명
     */
    var _fileLen = filename.length;

    /**
     * lastIndexOf('.')
     * 뒤에서부터 '.'의 위치를 찾기위한 함수
     * 검색 문자의 위치를 반환한다.
     * 파일 이름에 '.'이 포함되는 경우가 있기 때문에 lastIndexOf() 사용
     */
    var _lastDot = filename.lastIndexOf(".");

    // 확장자 명만 추출한 후 소문자로 변경
    var _fileExt = filename.substring(_lastDot, _fileLen).toLowerCase();

    if (_fileExt === ".pptx" || _fileExt === ".xls" || _fileExt === ".xlsx" || _fileExt === ".doc" || _fileExt === ".hwp") {
        //이 외의 케이스는 etc로 변환
        return _fileExt;
    } else {
        return ".etc";
    }
}

function readfiles(target, files) {
    var body = target.querySelector("tbody");
    var id = 0;
    for (var i = 0; i < files.length; i++) {
        reader = new FileReader();
        reader.fileName = files[i].name;
        reader.fileSize = files[i].size;
        reader.fileType = files[i].type;

        reader.addEventListener("load", function (e) {
            var target = e.target;
            var data = '<tr><td><input class="checkbox" type="checkbox" id="ra' + id + '"/><label for="ra' + id + '"></label></td><td class="left"><a data-area=' + target.result + " data-type=" + getExtensionOfFilename(target.fileName).replace(".", "") + ">" + target.fileName + "</a></td><td class='right' style='color:#777777;'>" + humanFileSize(target.fileSize, true) + "</td></tr>";
            body.innerHTML += data;
            id++;
        });
        reader.readAsDataURL(files[i]);
    }
}

function fileDragOver(e) {
    e.preventDefault();
    e.target.classList.add("on");
}

function fileDragEnd(props) {}

function fileDrop(e) {
    e.preventDefault();
    var get = e.target.closest(".drop-zone");

    if (!get) {
        return;
    }
    get.classList.remove("on");
    if (e.dataTransfer.files.length > 0) {
        e.target.closest(".file-drop").classList.add("data-active");
    }

    readfiles(get, e.dataTransfer.files);
}
//파일첨부

function notification(info, message) {
    /**
     * 알람클릭시 함수호출 후 DOM생성
     * @param info 클래스명 "success", "warning", "fail" 총 3가지
     * @param message 메시지
     */
    var noti = document.querySelector(".notification-wrap");
    var createElementDIV = document.createElement("DIV");
    createElementDIV.classList.add("notification-list");
    createElementDIV.classList.add(info);
    createElementDIV.classList.add("bounce__in__right");
    createElementDIV.setAttribute("data-info", info);
    createElementDIV.innerHTML = message;
    noti.append(createElementDIV);

    //호출후 제거
    setTimeout(function () {
        createElementDIV.classList.add("bounce__out__right");
        setTimeout(function () {
            noti.removeChild(createElementDIV);
        }, 500);
    }, 3000);
}

/* 210721 추가 윈도우 팝업 오픈 */
function winOpenFunc(url, title, w, h) {
    //듀얼모니터 고려한 popupCenter
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    var left = width / 2 - w / 2 + dualScreenLeft;
    var top = height / 2 - h / 2 + dualScreenTop;
    var newWindow = window.open(url, title, "scrollbars=yes, width=" + w + ", height=" + h + ", top=" + top + ", left=" + left);
    if (window.focus) {
        newWindow.focus();
    }
}
/*
//가이드 툴팁 sample 211028 추가


 //현재 위치가 아이프레임안인지 밖인지 구분
 var posW = self !== top ? 0 : 40;
 var posH = self !== top ? 0 : 101;
 //현재 위치가 아이프레임안인지 밖인지 구분
 let docW = $(document).width();
 let docH = $(this).parents(".mCSB_container") ? $(this).parents(".mCSB_container").height() : $(document).height();
 let target_id = "#" + $(this).attr("data-id");
 let triger_posL = $(this).offset().left + $(this).outerWidth();
 let triger_posT = $(this).offset().top;
 let trigerW = $(this).outerWidth();
 //pos_gap으로 위치 조절
 let pos_gapL = 5;
 let pos_gapT = 0;
 //pos_gap으로 위치 조절
 let tooltip_posL = 0;
 let tooltip_posT = 0;
 let tooltipW = $(target_id).outerWidth();
 let tooltipH = $(target_id).outerHeight();
 let mcus_scrT = parseInt($(this).parents(".mCSB_container").css("top"));

 clearInterval(tooltipTime);

 if (triger_posL + tooltipW > docW) {
	 tooltip_posL = triger_posL - trigerW - pos_gapL - tooltipW - posW;
 } else {
	 tooltip_posL = triger_posL + 5 - posW;
 }

 if (triger_posT - mcus_scrT + pos_gapT + tooltipH > docH) {
	 tooltip_posT = triger_posT - mcus_scrT + pos_gapT + (docH - (triger_posT - mcus_scrT + pos_gapT + tooltipH)) - posH;
 } else {
	 tooltip_posT = triger_posT - mcus_scrT + pos_gapT - posH;
 }

 $(target_id).css({ opacity: "1", visibility: "visible", left: tooltip_posL, top: tooltip_posT });
  */
var guideTooltip = document.querySelectorAll(".ly-guide-tooltip");
var allTarget = document.querySelectorAll("[area-tooltip]");
function guideTooltipFunc() {
    [].forEach.call(allTarget, function (x, index) {
        var position = x.getBoundingClientRect();
        var positionL = position.left + position.width + 30;
        var positionR = position.right + position.width + 30;
        var positionY = position.top - 20;

        var iframeHeight = document.querySelector(".mCSB_container").getBoundingClientRect().top;

        if (x.getAttribute("area-tooltip") === "guide02") {
            guideTooltip[index].style.top = positionY - (iframeHeight ? iframeHeight : 0) + "px";
            guideTooltip[index].style.right = document.width - positionR + "px";
        } else if (x.getAttribute("area-tooltip") === "guide03") {
            guideTooltip[index].style.top = positionY - (iframeHeight ? iframeHeight : 0) - 60 + "px";
            guideTooltip[index].style.left = document.width - positionL + "px";
        } else {
            guideTooltip[index].style.top = positionY - 50 + "px";
            guideTooltip[index].style.left = document.width - positionL + "px";
        }
    });
}

function resizeUpdate() {
    guideTooltipFunc();
}

window.addEventListener("resize", function () {
    resizeUpdate();
});

function guideClicedRemove(props) {
    props.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        guideTooltipFunc();
    }, 1);
});

//가이드 툴팁 sample 211028 추가

$(function () {});
