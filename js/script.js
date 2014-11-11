
//Toggle side panel

$(function(){
        $(".button").toggle(fnShow, fnHide);
});
function fnShow(){
        $("#panel").animate({left:0});
        $(".button").animate({left:100});
}
function fnHide(){
        $("#panel").animate({left:-100});
        $(".button").animate({left:0});
}


//Counter

$(document).ready(function() {
  			/*
				Tips:
				
				event.target is DOM Element
				this is DOM element
				$(this) is jQuery Element
				timer is interval for countdown
				
				If a countdown should end early you could do:
				
				clearInterval( timer );
				$(this).trigger('complete');
			*/	
			

	$(".counter").countdown({
		date: "may 28, 2014", //Counting TO a date
		onChange: function( event, timer ){
		


		},
		onComplete: function( event ){
		
			$(this).html("Completed");
		},
		leadingZero: true,
		direction: "down"
	});

//Digit animation

var d = 28,//указываем число которое должно получиться
    step = 10,//указываем количество шагов до получения числа d
    border = 27,// если d меньше либо равно border, то счетчик будет уменьшаться, если больше то увеличиваться
    t = 10,//скорость анимации в милисекундах
    per = 100,//ускорение анимации в милисекундах
    divDate,//переменная для хранения объекта div
    c = d;//число с каторого начинается отсчет


if(c <= border)
    c += step;
else
    c -= step;

//функция изменения счетчика

function changeNum(){

    if(d <= border)
        c--;
    else
        c++;
    divDate.innerHTML = c;
    t += per;
    if(c != d)
        setTimeout(changeNum, t);
}

//функция расчета задержки времени перед анимацией шрифта
function setDelay(){
    var a = 0;
    var b = t;
    for(var i = 1;i < step;i++){
        b = b + per;
        a += b;
    }
    return a;
};

window.onload = function(){
    divDate = document.getElementById("clock");
    //функция анимации шрифта
	$("#clock").delay(setDelay()).fadeOut(1000).fadeIn();

    changeNum();
}


//Styles switcher

$(document).ready(function() { 
	$("#colorchanger a").click(function() { 
		$("link").attr("href",$(this).attr('rel'));
		return false;
	});
});