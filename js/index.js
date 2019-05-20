$(document).ready(function(){

	$('#left').bind('click', marginLeft);
	$('#right').bind('click', marginRight);
	
	var text = document.getElementsByClassName('strong');

	for(var i = 0; i < text.length; i++) {

		var texts = text[i].innerHTML;

		if(texts.search('.') != -1) {
			text[i].append('..');
		} else {
			text[i].append('...');
		}
	}

	var text = document.getElementsByClassName('right-strong');

	for(var i = 0; i < text.length; i++) {

		var texts = text[i].innerHTML;

		if(texts.search('.') != -1) {
			text[i].append('..');
		} else {
			text[i].append('...');
		}
	}

	$(".strong").text(function(i, text) {

  		if (text.length > 475) {
   		 text = text.substring(0, 475);
   		 var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
   		 text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
  		}
  
  		$(this).text(text);
  
});

	$(".news-right-strong a").text(function(i, text) {

  		if (text.length > 100) {
   		 text = text.substring(0, 100);
   		 var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
   		 text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
  		}
  
  		$(this).text(text);
  
});


	$(function () {
    $(".news-left-div").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".news-left-div:hidden").slice(0, 4).slideDown();
        if ($(".news-left-div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

});

var Right = 0;
var html = document.documentElement.clientWidth;

function marginRight(event) {

	/*var target = event.target;
	var date = new Date();
	var dateSecond = date.getSeconds();
	if(target) {
		$(document).ready(onLoad);
		function onLoad() {
			window.setTimeout(onLoad, 1000);
			$('#polosa').animate({
				right : '1890px',
			},1000);
		}
	}
	*/

	Right += 1890;
	if(Right > 3780) {
		Right = 0;
	}
	$('#polosa').animate({
		right : Right+'px',
	},1000);
}

function marginLeft() {
	Right -= 1890;
	if(Right < 0) {
		Right = 3780;
	}
	$('#polosa').animate({
		right : Right+'px',
	},1000);
}

window.onscroll = function () {

	var menu = $('#menu');
	var scroll = document.documentElement.scrollTop;
	var width = document.documentElement.clientWidth;

	if(scroll > 1200) {
		$('#a').css('display', 'block');
		$('#a').bind('click', function(){
			scrollTo(0,0);
		});
	} else {
		$('#a').css('display', 'none');
	}
	

	if(scroll > 900) {
			menu.css('position', 'fixed');
			menu.css('z-index', '9999');
			if(html == 1024) {
				menu.css('height', '90px');
			} else if(html == 1366) {
				menu.css('height', '100px');
			} else {
				menu.css('height', '120px');
			}	
			menu.css('padding-left', '1%');
			$('#logo').css('position', 'relative');
			$('#logo').css('bottom', '');
			$('#logo').css('margin', '');
			$('#logo').css('float', 'left');
			$('#menu ul').css('float', 'left');
			$('#menu ul').css('margin','0 auto');
			$('#menu li').css('line-height', '4.5');
		} else {
			menu.css('position', 'absolute');
			menu.css('height', '189px');
			menu.css('z-index', '0');
			menu.css('padding-left', '0');
			$('#logo').css('margin', '0 auto');
			$('#logo').css('float', 'none');
			$('#logo').css('position', 'none');
			$('#logo').css('bottom', '0');
			$('#menu ul').css('float', 'none');
			$('#menu li').css('line-height', '');
		}
		//if(scroll.clientWidth)
}


