//бургер меню
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__link, .header__burger-menu, .lbl').toggleClass('active');
        //при открытом меню блокируем прокрутку страницы
        $('body').toggleClass('lock');
        //если с открытым меню увеличить окно то бургер скроектся
        if(windowWidth > 767.9)$(".header__burger, .header__link, .header__burger-menu, .lbl").toggleClass('active');
    })
}); 

$(window).keyup(function(e){
    var target = $('.checkbox-green input:focus');
    if (e.keyCode == 9 && $(target).length){
        $(target).parent().addClass('focused');
    }
});
  
$('.checkbox-green input').focusout(function(){
    $(this).parent().removeClass('focused');
});