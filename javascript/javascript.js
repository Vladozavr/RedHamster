
$(document).ready(function(){
   $(".menu , button-link").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
});
/*----*/
$(document).ready(function(){
   $(".button, .button-three, .button-four, .button-five, .button-six, .button-seven, .scroll1, .scroll2, .scroll3, .scroll4, .scroll5 ").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
});
/*---*/
$(document).ready(function(){
  $('a').click(function(){
      $('a').removeClass('activa');
    $(this).addClass('activa');
});
});


/* Открытие меню */
var main = function() { //главная функция
    $('.icon-menu').click(function() { //выбираем класс icon-menu и добавляем метод click с функцией, вызываемой при клике
        $('.menu-mobile').animate({ //выбираем класс menu и метод animate
            left: '0px' //теперь при клике по иконке, меню, скрытое за левой границей на 285px, изменит свое положение на 0px и станет видимым
        }, 200); //скорость движения меню в мс

        $('body').animate({ //выбираем тег body и метод animate
            left: '285px' //чтобы всё содержимое также сдвигалось вправо при открытии меню, установим ему положение 285px
        }, 200); //скорость движения меню в мс
    });


/* Закрытие меню */
    $('.icon-close').click(function() { //выбираем класс icon-close и метод click
        $('.menu-mobile').animate({ //выбираем класс menu и метод animate
            left: '-285px' //при клике на крестик меню вернется назад в свое положение и скроется
        }, 200); //скорость движения меню в мс

    $('body').animate({ //выбираем тег body и метод animate
            left: '0px' //а содержимое страницы снова вернется в положение 0px
        }, 200); //скорость движения меню в мс
    });
};

$(document).ready(main); //как только страница полностью загрузится, будет вызвана функция main, отвечающая за работу меню









if ($(window).width()> 1000) {


$(document).ready(function bla(){
drops();
  function drops(){
    $('#logo-wrap').css({'opacity':'0'});
    $('#display-one-description-header').css({'margin-top':'-410px'});
    $('.header-yellow-line').css({'width':'0%'});
    $('.header-white-line').css({'width':'0%','top': '2.2%','position':'absolute','right': '0'});
    $('#header-title').css({'margin-top':'-508px'});
    $('#header-title-two').css({'marginTop':'1837px'});
    $('.header-yellow-line-light').css({'width':'0.3px'});
    $('.description-header-four').css({'opacity':'0'});
    $('.description-header-five').css({'opacity':'0'});
    $('body').css({'overflow-y': 'hidden'});
  }
  /*-----------------*/
    function logo(){$('#logo-wrap').animate({opacity: '1'},3000);}
    function text(){$('#display-one-description-header').animate({marginTop:'21px'},4000);}
    function lineOne(){$('.header-yellow-line').animate({width:'40%'},2000);$('.header-white-line').animate({width:'60%'},2000);}
    function MainTextOne(){$('#header-title').animate({marginTop:'-8px'},1500);$('#header-title-two').animate({marginTop:'-37px'},1500);}
    function MainTextTwo(){$('.header-yellow-line-light').animate({width:'307px'},2000);$('.description-header-four').animate({opacity:'1'},3000);$('.description-header-five').animate({opacity:'1'},3000);}
    function Butt (){$('.button').animate({opacity:'1'},2000);$('.menu').animate({opacity:'1'},2000);$('body').css({'overflow-y': 'auto'});}

    setTimeout(logo,500)
    setTimeout(text,1010)
    setTimeout(lineOne,4500)
    setTimeout(MainTextOne,8000)
    setTimeout(MainTextTwo,10000)
    setTimeout(Butt,10000)
});
} else if ($(window).width()<1024){
  bla = null/*
  $(document).ready(function(){
  $('#logo-wrap').css({'opacity':'1'});
  $('#display-one-description-header').css({'margin-top':'21px'});
  $('.header-yellow-line').css({'width':'40%'});
  $('.header-white-line').css({'width':'60%'});
  $('#header-title').css({'margin-top':'auto'});
  $('#header-title-two').css({'marginTop':'-25px'});*/

}
