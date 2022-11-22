// проверка на поддержку webp
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });
//бургер меню
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__link, .header__burger-menu, .checking').toggleClass('active');

        //при открытом меню блокируем прокрутку страницы
        $('body').toggleClass('lock');

        //если с открытым меню увеличить окно то бургер скроектся
        if(windowWidth > 767.9)$(".header__burger, .header__link, .header__burger-menu, .checking").toggleClass('active');
    })
}); 

