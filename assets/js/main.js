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
                    spaceBetween: 20
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

        // /service-details-bottom-faq
        $(document).ready(function(){
            $('.accordion-list > li > .answer').hide();
              
            $('.accordion-list > li').click(function() {
              if ($(this).hasClass("active")) {
                $(this).removeClass("active").find(".answer").slideUp();
              } else {
                $(".accordion-list > li.active .answer").slideUp();
                $(".accordion-list > li.active").removeClass("active");
                $(this).addClass("active").find(".answer").slideDown();
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
                    spaceBetween: 20
                }
            }
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
            slidesPerView: 1,
            spaceBetween: 60,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
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
                    spaceBetween: 20
                }
            }
        });

        //copy email
        document.getElementById('copy-email').addEventListener('click', function () {
            // Get the email text
            var email = this.innerText;

            // Copy the email to the clipboard using Clipboard API
            navigator.clipboard.writeText(email).then(function () {
                // Successfully copied to clipboard
                var copyStatus = document.getElementById('copyStatus');
                var clickStatus = document.getElementById('clickStatus');
                copyStatus.style.display = 'inline'; // Show the "Copied!" message
                clickStatus.style.display = 'none'; // Show the "Copied!" message

                // Hide the message after 2 seconds
                // setTimeout(function() {
                //     copyStatus.style.display = 'none';
                // }, 2000);
            }).catch(function (err) {
                // Handle error if unable to copy
                console.error('Could not copy text: ', err);
            });
        });

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
        function showTime() {
            let time = new Date();
            displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
            setTimeout(showTime, 1000);
        }
        showTime();

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
