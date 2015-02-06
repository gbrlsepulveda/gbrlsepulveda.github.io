// var navIcon = $(".ico-nav");
// var nav = $("#nav");
// var navLink = $(".nav-a");
// $(navIcon).on("click", function () {
// 	$(nav).slideToggle(500)
// });


// $(navLink).on("click", function () {
// 	console.log($(this).attr("data-anchor"));
// });


WebFontConfig = {
	google: {
		families: ['Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700']
	}
};
(function () {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();