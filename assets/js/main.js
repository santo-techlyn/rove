(function ($) {

    "use strict"
    $(document).ready(function () {

        // mobile menu
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991.98",
            onePage: false
        });

        // counter up
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });

        // brand marquee
        let brandmarquee = new Swiper('.brand-marquee', {
            spaceBetween: 0,
            centeredSlides: true,
            speed: 6000,
            autoplay: {
                delay: 1,
            },
            loop: true,
            slidesPerView: 2,
            allowTouchMove: false,
            disableOnInteraction: true,
            breakpoints: {

                576: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                992: {
                    slidesPerView: 6,
                    spaceBetween: 0,
                },
                1200: {
                    slidesPerView: 7,
                    spaceBetween: 0,
                },
            },
        });

        //footer-3-marquee
        let FooterSwiperTop = new Swiper('.footer-marquee-3', {
            spaceBetween: 0,
            centeredSlides: true,
            speed: 3000,
            autoplay: {
                delay: 1,
                // reverseDirection: true
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: false,
            disableOnInteraction: true
        });

        // vertical swiper
        let vertical = new Swiper('.vertical-swiper', {
            spaceBetween: 0,
            centeredSlides: true,
            // direction: "vertical",
            speed: 6000,
            autoplay: {
                delay: 1,
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: false,
            disableOnInteraction: true
        });

        //hero-top-marquee
        let SwiperTop = new Swiper('.swiper--top', {
            spaceBetween: 0,
            centeredSlides: true,
            speed: 9000,
            autoplay: {
                delay: 1,
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: false,
            disableOnInteraction: true
        });

        //vertical-marquee


        //case swiper
        var swiper = new Swiper(".case-swiper", {
            slidesPerView: 1,
            spaceBetween: 90,
            freeMode: true,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                2020: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
            },
        });

        //team-slider
        var swiper = new Swiper(".team-slider", {
            slidesPerView: 1,
            spaceBetween: 50,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            }
        });

        //vertical-marquee


        //testimonial2
        var swiper = new Swiper(".testimonial2", {
            slidesPerView: 1,
            spaceBetween: 50,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                }
            }
        });

        //testimonial3
        var swiper = new Swiper(".testimonial3", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 2,
            spaceBetween: 50,
        });

        //team3
        var swiper = new Swiper(".team3", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 3,
            spaceBetween: 50,
        });
        //blog3
        var swiper = new Swiper(".blog3", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 2,
            spaceBetween: 50,
        });
        // reword single
        $('.rewards-single').hover(function () {
            $('.rewards-single').removeClass('active');
            $(this).addClass('active');
        });
        $('.rewards-single:nth-child(2)').addClass('active');

        // magnific popup init
        $(".popup-gallery").magnificPopup({
            delegate: '.popup-img',
            type: 'image',
            gallery: {
                enabled: true
            },
        });
        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // service single
        $('.service-single').hover(function () {
            $('.service-single').removeClass('active');
            $(this).addClass('active');
        });
        $('.service-single:nth-child(2)').addClass('active');

        // testimonial slider 
        var swiper = new Swiper(".testimonial-slider", {
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        //footer-marquee
        var swiper = new Swiper(".footer-marquee", {
            spaceBetween: 30,
            slidesPerView: 3,
            spaceBetween: 0,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            loop: true,
            speed: 2000,
        });

        // blog-slider
        var swiper = new Swiper(".blog-slider", {
            slidesPerView: 2,
            spaceBetween: 60,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        // blog-slider-2
        var swiper = new Swiper(".blog-slider-2", {
            slidesPerView: 2,
            spaceBetween: 60,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        //tab
        $('.tab-link').on('click', function (event) {
            event.preventDefault(); // Prevent the default action of the <a> tag

            var tab_id = $(this).attr('data-tab');

            $('.tab-link').removeClass('active');
            $('.tab-content').removeClass('active');

            $(this).addClass('active');
            $("#" + tab_id).addClass('active');
        });
    });

    $(window).on('scroll', function () {

        // navbar fixed
        const headerHeight = $(".header-area").outerHeight();
        if ($(this).scrollTop() > headerHeight) {
            $('.menu-area').addClass("fixed-top");
        } else {
            $('.menu-area').removeClass("fixed-top");
        }

    });

    $(window).on('load', function () {

        // preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

    });

})(jQuery);
