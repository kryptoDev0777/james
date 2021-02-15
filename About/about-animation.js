
let img_1 = $('.our-people article'),
    img_1offset = $(img_1).offset().top;




$(window).scroll(()=>{

    if ($(document).scrollTop() >( img_1offset + img_1.height() - window.innerHeight)){

        document.querySelectorAll('.our-people article').forEach(element => {

        });

        for (let index = 0; index < img_1.length; index++) {
            const element = img_1[index];
            setTimeout($(element).css({'animation': '2.5s fade-in ease forwards'}),1000)
        }
    }

})
