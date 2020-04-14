const PATCH_CLASS = 'patch_my';
const BTN_CLASS = 'hide_my';
const BTN_TEXT = 'сховати/відобразити відео';


setInterval(() => {
	document.querySelectorAll('.item').forEach((el)=>{
		if(!el.classList.contains(PATCH_CLASS)) {
			el.classList.add(PATCH_CLASS);
			let btn = document.createElement('button');
			btn.textContent = BTN_TEXT;
			btn.classList.add(BTN_CLASS);
			el.appendChild(btn);
		}
	});

	if (!document.body.classList.contains(PATCH_CLASS)) {
		document.body.classList.add(PATCH_CLASS);
		let script = document.createElement('script');
		script.textContent =
`
$(document).on('click', '.hide_my', function(){
		var tmp = $(this).parent().text().trim()
		$('.user-info').each(function() {
			if (tmp.indexOf($(this).text()) == 0) {
				$(this).parent().toggle();
			}
		});
	});
`;
		document.body.appendChild(script);
	}
	
},1000);