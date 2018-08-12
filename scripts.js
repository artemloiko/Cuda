/*
console.log(valueShift);
console.log(valueShift*2 + 'px');
console.log(typeof(valueShift*2 + 'px'));
console.log(computedStyle.left);
console.log(typeof(computedStyle.left));
var number = Number(computedStyle.left);
console.log(number);
console.log(typeof(number));
console.log(parseFloat(computedStyle.left));
console.log(parseFloat(computedStyle.left)+parseFloat(computedStyle.left));
console.log(typeof(parseInt(computedStyle.left)));
if (window.matchMedia("(max-device-width : 1024px)").matches) {

} else { }
*/

	//slider 
	var next, back, sliderBlock;
	nextBtn = document.getElementById('sliderNext');
	backBtn = document.getElementById('sliderBack');
	sliderBlock = document.getElementById('sliderBlock');
	var computedStyle = getComputedStyle(sliderBlock), valueShift = parseFloat(computedStyle.borderTopLeftRadius);
	var counterShifts = 0;
	var canChange = true;
	nextBtn.onclick = function shiftNext() {
		if (!canChange) return;
		if (counterShifts <= 3) {	
			counterShifts += 1;
			var styleLeft = parseFloat(computedStyle.left);
			var doubleValueShift = styleLeft - valueShift;
			// console.log('parseFloat(computedStyle.left) = ' + parseFloat(computedStyle.left));
			// console.log('styleLeft = ' + styleLeft);
			// console.log('doubleValueShift = ' + doubleValueShift);
			// console.log('---------------------------------------')
			sliderBlock.style.left = (doubleValueShift + 'px');
		}
		canChange = false;
		setTimeout(function () {
			canChange = true; 
		}, 30);
	}
	backBtn.onclick = function shiftBack() {
		if (!canChange) return;
		if (counterShifts >= 1) {	
			counterShifts -= 1;
			var styleLeft = parseFloat(computedStyle.left);
			var doubleValueShift = styleLeft + valueShift;
			// console.log('parseFloat(computedStyle.left) = ' + parseFloat(computedStyle.left));
			// console.log('styleLeft = ' + styleLeft);
			// console.log('doubleValueShift = ' + doubleValueShift);
			sliderBlock.style.left = (doubleValueShift + 'px');
		}
		canChange = false;
		setTimeout(function () {
			canChange = true; 
		}, 30);
	}


// Mobile menu


$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('#navMob').toggleClass('openMenu');
	});
	var links = $('.linkMobile');
	for (var i = 0; i <= links.length - 1; i++) {
		links[i].onclick = function () {
			$('#nav-icon').toggleClass('open');
			$('#navMob').toggleClass('openMenu');
		}
	}
});

// Scroll

$(document).ready(function(){
    $('.go_to').click( function(){ 
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });
});

//  Button to top

function toTop() {
	var scrl = $(document).scrollTop()
	scrl = scrl - 100;
	$(document).scrollTop(scrl);
	if (scrl > 0) {
		setTimeout(toTop,10);
	}
}

$(document).scroll(function() {
	var scrl = $(document).scrollTop();
	if (scrl > 400) {
		$('#btnTop').css({'opacity':'1'})
	}
	else {
		$('#btnTop').css({'opacity':'0'})
	};
	//$('#but').click(function() {
	//	$('body').scrollTop(0);
	//});
});

/*$('#nav-icon').click(function(){
	var icon = $('#nav-icon').hasClass('open');
	alert(icon);
});
$(document).ready(function(){
	$('#nav-icon').click(function(){
		var icon = $('#nav-icon').hasClass('open');
		if (!icon) {
			$(this).toggleClass('open');
			showMenu();
		} else {
			hideMenu();
			$(this).toggleClass('open');
		}
	});
});*/











