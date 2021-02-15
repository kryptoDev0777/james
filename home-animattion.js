/* Section1 images animations */

let img_1 = $('.section1 article img'),
    img_1offset = $(img_1).offset().top;

let img_2 = $('.section2 article img'),
    img_2offset = $(img_2).offset().top;



$(window).scroll(()=>{



    if ($(document).scrollTop() >( img_1offset + img_1.height() - window.innerHeight)){
        $('.section1 article img').css(
            {'animation': '1.5s rotate-in-2 ease forwards'}
        )
    }
    if($(document).scrollTop() > (img_2offset + img_2.height() - window.innerHeight)){
        $('.section2 article img').css(
            {'animation': '2s fade-in ease forwards'}

        )
        console.log(12)
    }
})


// let img_1 = $('.section1 article img')

// window.onscroll = ()=>{
//     let img_1offset = img_1[0].offset().top;
//     if (window.scrollY >= img_1offset){
//         console.log('intersected')
//         // $('.section1 article img').css(
//         //     {'animation': '.5s rotate-in-2 ease'}
//         // )s
//         img_1.forEach(element => {
//             element.style.animation = "1s rotate-in-2 ease"
//         });
//     }
// }



// let img_2 = document.querySelectorAll('.section2 article img')

// window.onscroll = ()=>{
//     let img_2offset = img_2[0].offsetHeight;
//     if (window.pageYOffset >= img_2offset){
//         console.log('intersected')
//         // $('.section1 article img').css(
//         //     {'animation': '.5s rotate-in-2 ease'}
//         // )s
//         img_2.forEach(element => {
//             element.style.animation = "5s fade-in ease"
//         });
//     }
// }
