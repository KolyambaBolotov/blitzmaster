$(document).ready(function() {

$(".js-open-modal").click(function() {
		$("#callback .modal__title").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});

	$("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").magnificPopup({
		type:'image',
		// Delay in milliseconds before popup is removed
		removalDelay: 300,

		// Class that is added to popup wrapper and background
		// make it unique to apply your CSS animations just to this exact popup
		mainClass: 'mfp-fade'
	});

	$('.js-bxslider').bxSlider({
		minSlides: 2,
		maxSlides: 10,
		slideWidth: 394,
		slideMargin: 25
	});
	$(".tabs__list").children("li").click(function(){
		$('.call-me').css('display','none');
		$(this).addClass("tabs__name--active");
		$(this).siblings().removeClass("tabs__name--active");

		var num_active = $('.tabs__list').find(".tabs__name--active").index();
		$(".tabs__content-box").css("display", "none");
		$(".tabs__content-box").eq(num_active).css("display", "block");	
	});

	$(".price-table tr").mouseover(function(){
		var tr_pos = $(this).position();
		$('.call-me').css('display','inline-block');
		$('.call-me').css({"top" : tr_pos.top, "left" : tr_pos.left + 160});
	});
	$(".wrapper").mouseout(function(){
		// $('.call-me').css('display','none');
		 
	});


});

