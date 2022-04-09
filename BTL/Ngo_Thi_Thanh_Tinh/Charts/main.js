var icon1 = document.querySelector('.fa1')
var icon2 = document.querySelector('.fa2')
var icon3 = document.querySelector('.fa3')
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