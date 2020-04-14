//copy-paste this to the console for quick use
//скопіюйте це до консолі браузреа для швидкого використання
setInterval(function(){
	$('.item').not('.patch_my').append('<button class="hide_my">сховати/відобразити відео</button>').addClass('patch_my');
},1000)

$(document).on('click', '.hide_my', function(){
	var tmp = $(this).parent().text().trim()
	$('.user-info').each(function() {
		if (tmp.indexOf($(this).text()) == 0) {
			$(this).parent().toggle();
		}
	});
});

