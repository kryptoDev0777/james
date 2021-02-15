


let img_odd = $('section article.odd .image-container img'),
img_1offset = $(img_odd).offset().top;

let img_even = $('section article.even .image-container img'),
img_2offset = $(img_even).offset().top;


$(window).scroll(()=>{

    for (let index = 0; index < img_odd.length; index++) {

        const element = img_odd[index];

        if ($(document).scrollTop() >( $(element).offset().top + img_odd.height() - window.innerHeight)){
            $(element).css(
                {'animation': '1.5s to-left ease forwards'}
            )
        }}
    
    for (let index = 0; index < img_even.length; index++) {

        const element = img_even[index];

        if ($(document).scrollTop() >( $(element).offset().top + img_odd.height() - window.innerHeight)){
            $(element).css(
                {'animation': '1.5s to-left ease forwards'}
            )
        }}
})