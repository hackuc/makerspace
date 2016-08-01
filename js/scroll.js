$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 500);
				return false;
			}
        }
	});
});
$(window).scroll(function() {
	if ($(window).width() > 768) {
		if ($(document).scrollTop() > $(window).height()) {
			$("#circle").fadeOut("fast");
			$("#ucvtsLogo").fadeOut("fast");
			$("#magnetLogo").fadeOut("fast");
			$("#facebook").removeClass("facebook","fast");
			$("#facebook").addClass("facebook-left","fast");
			$("#twitter").removeClass("twitter","fast");
			$("#twitter").addClass("twitter-left","fast");
			$("#instagram").removeClass("instagram","fast");
			$("#instagram").addClass("instagram-left","fast");
			$("#mail").removeClass("mail","fast");
			$("#mail").addClass("mail-left","fast");
			$("#main").fadeIn("fast");
		} else {
			$("#main").fadeOut("fast");
			$("#ucvtsLogo").fadeIn("fast");
			$("#magnetLogo").fadeIn("fast");
			$("#facebook").removeClass("facebook-left","fast");
			$("#facebook").addClass("facebook","fast");
			$("#twitter").removeClass("twitter-left","fast");
			$("#twitter").addClass("twitter","fast");
			$("#instagram").removeClass("instagram-left","fast");
			$("#instagram").addClass("instagram","fast");
			$("#mail").removeClass("mail-left","fast");
			$("#mail").addClass("mail","fast");
			$("#circle").fadeIn("fast");
		}
	}
});