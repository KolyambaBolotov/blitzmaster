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


});

