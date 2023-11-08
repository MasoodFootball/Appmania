
let allspan = document.querySelectorAll(".tog")
let nav = document.querySelector(".navlink")
let tog = document.getElementById("Toggle")
tog.addEventListener("click",()=>{
    nav.classList.toggle('act');
    tog.classList.toggle("meow");
  
})

const tabBtn = document.querySelectorAll('.tab-btn');
const tabItems = document.querySelectorAll('.tab-item');

tabBtn.forEach(function (tab) {
    tab.addEventListener('click', function () {
        let tabId = this.dataset.id;
        let tabItem = document.getElementById(tabId);

        //for tab button active
        for (let i = 0; i < tabBtn.length; i++) {
            tabBtn[i].classList.remove('active');
        }

        //for tab-item show hide
        for (let j = 0; j < tabItems.length; j++) {
            tabItems[j].style.display = "none";
        }

        tabItem.style.display = 'block';
        this.classList.add('active');
    });
});

//enable or show first tab-item
document.querySelector('.tab-btn').click();//enable its click 


let swiper = new Swiper(".testemonial", {
    effect: "slide",
    speed: 1000,
    slidesPerView: 1,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    lazyLoading: true,
    loop: true,
});


const swiper2 = new Swiper(".gallery", {
    effect: "crossflow",
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 100,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,


    },
    breakpoints: {
        240:{
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        930: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});

function smooth(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
smooth();



// document.addEventListener('DOMContentLoaded', () => {
//     const menuLinks = document.querySelectorAll('header .navbar .navlink ul li a');
//     const sections = document.querySelectorAll('section');

//     window.addEventListener('scroll', () => {
//         const current = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - 100) - 1;
//         menuLinks.forEach(link => link.classList.remove('ok'));
//         menuLinks[current].classList.add('ok');
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('header .navbar .navlink ul li a');
    
    window.addEventListener('scroll', () => {
        const fromTop = window.scrollY;

        menuLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('ok');
            } else {
                link.classList.remove('ok');
            }
        });
    });
});