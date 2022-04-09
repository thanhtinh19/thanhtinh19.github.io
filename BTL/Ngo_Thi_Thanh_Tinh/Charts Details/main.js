
$(document).ready(function () {

	var stBoxImg = document.querySelector('.content2');
	var isTweenMax = true;
	
	$('.music').css('visibility', 'hidden');

	$(window).scroll(function (event) {
		var st = $(this).scrollTop();
		if (st >= (stBoxImg.offsetTop - 400) && isTweenMax) {
			$('.music').css('visibility', 'visible');
			TweenMax.staggerFrom($('.music'), 1, { y: 100, opacity: 0 }, 0.3);
			isTweenMax = false;
		}
	});
});

var icon1 = document.querySelector('.fa1')
var icon2 = document.querySelector('.fa2')
var icon3 = document.querySelector('.fa3')
var icon4 = document.querySelector('.fa4')
var icon5 = document.querySelector('.fa5')
var isPlayIcon1 = true
function play1(){
    if(isPlayIcon1){
        icon1.classList.remove('fa-play-circle');
        icon1.classList.add('fa-pause-circle');
        isPlayIcon1 = false;
    } else {
        icon1.classList.remove('fa-pause-circle');
        icon1.classList.add('fa-play-circle');
        isPlayIcon1 = true;
    }
}
var isPlayIcon2 = true
function play2(){
    if(isPlayIcon2){
        icon2.classList.remove('fa-play-circle');
        icon2.classList.add('fa-pause-circle');
        isPlayIcon2 = false;
    } else {
        icon2.classList.remove('fa-pause-circle');
        icon2.classList.add('fa-play-circle');
        isPlayIcon2 = true;
    }
}
var isPlayIcon3 = true
function play3(){
    if(isPlayIcon3){
        icon3.classList.remove('fa-play-circle');
        icon3.classList.add('fa-pause-circle');
        isPlayIcon3 = false;
    } else {
        icon3.classList.remove('fa-pause-circle');
        icon3.classList.add('fa-play-circle');
        isPlayIcon3 = true;
    }
}
var isPlayIcon4 = true
function play4(){
    if(isPlayIcon4){
        icon4.classList.remove('fa-play-circle');
        icon4.classList.add('fa-pause-circle');
        isPlayIcon4 = false;
    } else {
        icon4.classList.remove('fa-pause-circle');
        icon4.classList.add('fa-play-circle');
        isPlayIcon4 = true;
    }
}
var isPlayIcon5 = true
function play5(){
    if(isPlayIcon5){
        icon5.classList.remove('fa-play-circle');
        icon5.classList.add('fa-pause-circle');
        isPlayIcon5 = false;
    } else {
        icon5.classList.remove('fa-pause-circle');
        icon5.classList.add('fa-play-circle');
        isPlayIcon5 = true;
    }
}