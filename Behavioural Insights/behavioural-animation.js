
let img_1 = $('.section1 article img'),
img_1offset = $(img_1).offset().top;



$(window).scroll(()=>{

    
    if ($(document).scrollTop() >( img_1offset + img_1.height() - window.innerHeight)){
        $('.section1 article img').css(
            {'animation': '2s scale-in ease forwards'},
            {'display':'none'}
            )
    }

})
