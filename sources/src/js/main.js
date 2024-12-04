import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("html").classList.add("is-loaded");



    //BUTTON
    const skinEls = document.querySelectorAll(".btn-wrap");
    skinEls.forEach(skinEl => {
        skinEl.removeAttribute("href");

        if ('ontouchstart' in window) {
            skinEl.addEventListener("click", (event) => {
                if (skinEl.classList.contains("is-activated")) {
                    skinEl.setAttribute("href", skinEl.dataset.href);
                } else {
                    event.preventDefault();
                    skinEls.forEach(el => {
                        if (el !== skinEl) {
                            el.classList.remove("is-activated");
                            el.removeAttribute("href");
                        }
                    });
                    skinEl.classList.add("is-activated");
                    skinEl.setAttribute("href", skinEl.dataset.href);
                }
            });
        } else {
            let activationTimeout;

            skinEl.addEventListener("mouseenter", () => {
                activationTimeout = setTimeout(() => {
                    skinEl.classList.add("is-activated");
                    skinEl.setAttribute("href", skinEl.dataset.href);
                }, 200);
            });

            skinEl.addEventListener("mouseleave", () => {
                clearTimeout(activationTimeout);
                skinEl.classList.remove("is-activated");
                skinEl.removeAttribute("href");
            });
        }
    });
    //BUTTON
    
    let splideLeft = new Splide( '.skins-splide-left',{
        focus: 'center',
        type   : 'loop',
        rewind : true, 
        // autoWidth: true,
        autoHeight: true,
        clones: 4,
        arrows: false,
        pagination: false,
        gap: 0,
        // autoplay: true,
        // interval: 3000,
        autoScroll: {
            speed: 1,
            pauseOnHover: false,
        },
        drag: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        direction : 'ttb',
        height    : '100svh',  
        breakpoints: {
            979: {
                autoWidth: true,
                direction : 'ltr',
                height    : false,  
            },
        }
    } ).mount({AutoScroll});
    
    let splideRight = new Splide( '.skins-splide-right',{
        focus: 'center',
        type   : 'loop',
        rewind : true, 
        // autoWidth: true,
        autoHeight: true,
        clones: 4,
        arrows: false,
        pagination: false,
        gap: 0,
        // autoplay: true,
        autoScroll: {
            speed: -1,
            pauseOnHover: false,
        },
        drag: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        direction : 'ttb',
        height    : '100svh',  
        breakpoints: {
            979: {
                autoWidth: true,
                direction : 'ltr',
                height    : false,  
            },
        }
    } ).mount({AutoScroll});
    
});