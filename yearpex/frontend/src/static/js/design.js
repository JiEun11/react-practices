// table resize로 화면 조절했을때 테이블 깨지지 않게 함
$(window).resize(function() {
	$(".scrollTable").each(function() {
		let _scrollBox02 = $(this).children('.scrollBox');
		let _scrollTable02 = $(this).children('.scrollBox').children('table');
		_scrollTable02.width('100%');
		
		if (_scrollBox02.innerWidth() > _scrollTable02.width()) {
			_scrollTable02.width(_scrollBox02.innerWidth());
		}		
	});	
});


$(window).resize(function() {
	$(".scrollBox table").width($(".scrollBox").innerWidth());

	$(".scrollTable").each(function() {
		$(this).children('.scrollBox').children('table').width(
		$(this).children('.scrollBox').innerWidth());
	});
});


$(document).ready(function() {	
	// lnb
	let _container = $('#container');
	let _scrollBox = $('.scrollBox');
	let _scrollTable = $('.scrollBox table');
	
	$('.lnbClose').click(function() {
		_container.addClass('lnbOff');
		_scrollTable.width(_scrollBox.innerWidth());
		return false;
	});
	
	$('.lnbOpen').click(function() {
		_container.removeClass('lnbOff');
		_scrollTable.width(_scrollBox.innerWidth());
		return false;
	});

	// slide 권성호
	let _con = $('#con');
	
	$('.slideClose').click(function() {
		_con.addClass('slideOff');
	});
	
	$('.slideOpen').click(function() {
		_con.removeClass('slideOff');
	});
	
	// folder
	$('.tree li a').click(function() {
		$(this).parent('li').toggleClass('open');
		return false;
	});
	
	let _treeLi = $('.tree li');
	
	$('.tree li a').click(function() {
		_treeLi.removeClass('on');
		$(this).parent('li').addClass('on');

		if ($(this).parent('li').children('ul').css("display") == "block") {
			if ($(this).parent('li').parent('ul').hasClass('menu2')) {
				$(this).css('background-image', 'url(/static/img/h250010bul.gif)');
			}
		} else {
			if ($(this).parent('li').parent('ul').hasClass('menu2')) {
				$(this).css('background-image', 'url(/static/img/h250008bul.gif)');
			}
		}
		return false;
	});

	// menu 모두 열고 닫기
	let _treeFolder = $('ul.tree div');
	
	$('.btn .allOpen').click(function() {
		_treeFolder.show();
		$(".menu").removeClass("on");
	});

	$('.btn .allClose').click(function() {
		_treeFolder.hide();
		$(".menu").addClass("on");
		return false;
	});

	// table
	$('.tbl-bg tr:nth-child(even)').addClass('bg');
	
	// 마우스 오버시 레이어 display값을 block으로 변경
	$("#more").bind("mouseover", function() {
		$(this).css({
			"display" : "block"
		});
	});

	// 마우스아웃시 레이어 display값을 none으로 변경
	$("#more").bind("mouseout", function() {
		$(this).css({
			"display" : "none"
		});
	});	
	
	// 분류검색 folder
	$('.treeBox .treeS li a').click(function() {
		$(this).parent('li').toggleClass('open');
		return false;
	});
	
	_treeFolder = $('.treeBox .treeS li');
	
	$('.treeBox .btn .allOpen').click(function() {
		_treeFolder.addClass('open');
		return false;
	});
	
	$('.treeBox .btn .allClose').click(function() {
		_treeFolder.removeClass('open');
		return false;
	});

	// link
	$(".menu2_sub > li > a").click(function(event) {
		location.href = jQuery(this).attr("href");
	});
	
	/* gnb */
	$("#gnb>ul>li").hover(function() {
		$("div", this).stop(true, true).fadeIn(200);
	}, function() {
		$("div", this).stop(true, true).fadeOut(200);
	});
	
	
	$(".scrollTable").each(function() {
		let _scrollBox02 = $(this).children('.scrollBox');
		let _scrollTable02 = $(this).children('.scrollBox').children('table');

		$(this).scroll(function(event){
			_scrollBox02.css({
				"marginRight" : -$(this).scrollLeft() + "px"
			});
		});

		if (_scrollBox02.innerWidth() > _scrollTable02.width()) {
			_scrollTable02.width(_scrollBox02.innerWidth());
		}
		
		$('.scrollTable .bbsListA tbody td:last-child').addClass('pdr25');
		$('.scrollTable .bbsListA1 tbody td:last-child').addClass('pdr25');
	});
});



