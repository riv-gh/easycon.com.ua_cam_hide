setInterval(function(){
	$('.item').not('.patch_my').append('<button class="hide_my">hide/show</button>').addClass('patch_my');
},1000)

$(document).on('click', '.hide_my', function(){
	var tmp = $(this).parent().text().trim()
	$('.user-info').each(function() {
		if (tmp.indexOf($(this).text()) == 0) {
			$(this).parent().toggle();
		}
	});
});

