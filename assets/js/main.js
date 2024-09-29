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
            speed: 2000,
            autoplay: {
                delay: 2,
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
            speed: 20000,
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
                    slidesPerView: 2,
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
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });

        //team-slider
        var swiper = new Swiper(".expert-team-slider", {
            slidesPerView: 1,
            spaceBetween: 10,
            freeMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 50
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 60
                }
            }
        });

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
                768: {
                    slidesPerView: 2,
                    spaceBetween: 100
                }
            }
        });

        // working slider
        var swiper = new Swiper(".working-swiper", {
            slidesPerView: 1,
            spaceBetween: 50,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
            }
        });

        //testimonial3
        var swiper = new Swiper(".testimonial3", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 1,
            spaceBetween: 50,
            breakpoints: {
                992: {
                    slidesPerView: 2,
                    spaceBetween: 50
                }
            }
        });

        //team3
        var swiper = new Swiper(".team3", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 1,
            spaceBetween: 50,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });

        //case-details swiper
        var swiper = new Swiper(".case-details", {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });

        //case-img-swiper
        var swiper = new Swiper(".case-img-swiper", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".case-img-swiper-2", {
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });

        // service-details-bottom-faq
        $(document).ready(function () {
            $('.accordion-list > li > .answer').hide();
            $('.accordion-list > li').click(function (event) {
                event.stopPropagation();
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active").find(".answer").slideUp();
                    $(this).find("h3 i").removeClass('ri-subtract-fill').addClass('ri-add-fill');
                } else {
                    $(".accordion-list > li.active .answer").slideUp();
                    $(".accordion-list > li.active").removeClass("active");
                    $(".accordion-list > li h3 i").removeClass('ri-subtract-fill').addClass('ri-add-fill');
                    $(this).addClass("active").find(".answer").slideDown();
                    $(this).find("h3 i").removeClass('ri-add-fill').addClass('ri-subtract-fill');
                }
                return false;
            });
        });

        //blog3
        var swiper = new Swiper(".blog3", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 1,
            spaceBetween: 50,
            breakpoints: {
                992: {
                    slidesPerView: 2,
                    spaceBetween: 50
                }
            }
        });

        // reword single
        $('.rewards-single').hover(function () {
            $('.rewards-single').removeClass('active');
            $(this).addClass('active');
        });
        $('.rewards-single:nth-child(2)').addClass('active');

        // magnific video popup init
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
            slidesPerView: 1,
            spaceBetween: 60,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 80
                }
            }
        });

        // blog-slider-2
        var swiper = new Swiper(".blog-slider-2", {
            slidesPerView: 1,
            spaceBetween: 60,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 50
                }
            }
        });


        //back to top
        // $(document).ready(function () {
        //     "use strict";
        //     var progressPath = document.querySelector('.progress-wrap path');
        //     var pathLength = progressPath.getTotalLength();
        //     progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        //     progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        //     progressPath.style.strokeDashoffset = pathLength;
        //     progressPath.getBoundingClientRect();
        //     progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        //     var updateProgress = function () {
        //         var scroll = $(window).scrollTop();
        //         var height = $(document).height() - $(window).height();
        //         var progress = pathLength - (scroll * pathLength / height);
        //         progressPath.style.strokeDashoffset = progress;
        //     }
        //     updateProgress();
        //     $(window).scroll(updateProgress);
        //     var offset = 50;
        //     var duration = 550;
        //     jQuery(window).on('scroll', function () {
        //         if (jQuery(this).scrollTop() > offset) {
        //             jQuery('.progress-wrap').addClass('active-progress');
        //         } else {
        //             jQuery('.progress-wrap').removeClass('active-progress');
        //         }
        //     });
        //     jQuery('.progress-wrap').on('click', function (event) {
        //         event.preventDefault();
        //         jQuery('html, body').animate({ scrollTop: 0 }, duration);
        //         return false;
        //     })
        // });
        $(document).ready(function () {
            "use strict";
            var progressPath = document.querySelector('.progress-wrap path');
            if (progressPath) {
                var pathLength = progressPath.getTotalLength();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
                progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
                progressPath.style.strokeDashoffset = pathLength;
                progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
                var updateProgress = function () {
                    var scroll = $(window).scrollTop();
                    var height = $(document).height() - $(window).height();
                    var progress = pathLength - (scroll * pathLength / height);
                    progressPath.style.strokeDashoffset = progress;
                };
                updateProgress();
                $(window).scroll(updateProgress);
            }
            var offset = 50;
            var duration = 550;
            jQuery(window).on('scroll', function () {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery('.progress-wrap').addClass('active-progress');
                } else {
                    jQuery('.progress-wrap').removeClass('active-progress');
                }
            });
            jQuery('.progress-wrap').on('click', function (event) {
                event.preventDefault();
                jQuery('html, body').animate({ scrollTop: 0 }, duration);
                return false;
            });
        });

        //copy email
        if (document.getElementById('copy-email')) {
            document.getElementById('copy-email').addEventListener('click', function () {
                var email = this.innerText;
                navigator.clipboard.writeText(email).then(function () {
                    var copyStatus = document.getElementById('copyStatus');
                    var clickStatus = document.getElementById('clickStatus');
                    copyStatus.style.display = 'inline';
                    clickStatus.style.display = 'none';
                    setTimeout(function () {
                        copyStatus.style.display = 'none';
                    }, 5000);
                }).catch(function (err) {
                    console.error('Could not copy text: ', err);
                });
            });
        }
        else {
            console.log('function not working')
        }

        //award hocer function
        $('.tab-link').on('mouseenter', function (event) {
            event.preventDefault(); // Prevent default action if necessary

            var tab_id = $(this).attr('data-tab');

            // Remove 'active' class from all tabs and content
            $('.tab-link').removeClass('active');
            $('.tab-content').removeClass('active');

            // Add 'active' class to the hovered tab and the corresponding content
            $(this).addClass('active');
            $("#" + tab_id).addClass('active');
        });

        // Time
        const displayTime = document.querySelector(".display-time");
        if (displayTime) {
            function showTime() {
                let time = new Date();
                displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
                setTimeout(showTime, 1000);
            }
            showTime();
        }
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