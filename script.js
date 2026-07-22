"use strict";

/*=========================================
DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*=========================================
    ELEMENTS
    =========================================*/

    const header = document.querySelector("header");

    const menuToggle = document.querySelector(".menu-toggle");

    const nav = document.querySelector("nav");

    const navLinks = document.querySelectorAll("nav ul li a");

    const backToTop = document.getElementById("backToTop");

    /*=========================================
    MOBILE MENU
    =========================================*/

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            nav.classList.toggle("active");

            menuToggle.classList.toggle("active");

        });

    }

    /*=========================================
    CLOSE MENU AFTER CLICK
    =========================================*/

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav.classList.contains("active")) {

                nav.classList.remove("active");

                menuToggle.classList.remove("active");

            }

        });

    });

    /*=========================================
    STICKY HEADER
    =========================================*/

    function stickyHeader() {

        if (window.scrollY > 60) {

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";

            header.style.transition = "0.3s";

        } else {

            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";

        }

    }

    stickyHeader();

    window.addEventListener("scroll", stickyHeader);

    /*=========================================
    BACK TO TOP BUTTON
    =========================================*/

    function toggleBackButton() {

        if (!backToTop) return;

        if (window.scrollY > 400) {

            backToTop.style.display = "flex";

        } else {

            backToTop.style.display = "none";

        }

    }

    toggleBackButton();

    window.addEventListener("scroll", toggleBackButton);

    if (backToTop) {

        backToTop.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*=========================================
    SMOOTH SCROLL
    =========================================*/

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            if (!href || !href.startsWith("#")) return;

            const target = document.querySelector(href);

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        });

    }); /*=========================================
    EMI CALCULATOR
    =========================================*/

    const systemSize = document.getElementById("systemSize");

    const systemPrice = document.getElementById("systemPrice");

    const downPayment = document.getElementById("downPayment");

    const emiMonths = document.getElementById("emiMonths");

    const calculateBtn = document.getElementById("calculateBtn");

    const monthlyEMI = document.getElementById("monthlyEMI");

    const totalAmount = document.getElementById("totalAmount");

    if (calculateBtn) {

        calculateBtn.addEventListener("click", function () {

            const price = Number(systemPrice.value);

            const down = Number(downPayment.value);

            const months = Number(emiMonths.value);

            if (price <= 0 || months <= 0) {

                alert("Please enter valid values.");

                return;

            }

            const loanAmount = price - down;

            const annualInterest = 10;

            const monthlyInterest = annualInterest / 12 / 100;

            const emi = (

                loanAmount *

                monthlyInterest *

                Math.pow(1 + monthlyInterest, months)

            ) /

            (

                Math.pow(1 + monthlyInterest, months) - 1

            );

            if (monthlyEMI) {

                monthlyEMI.innerText = "₹ " + emi.toFixed(0);

            }

            if (totalAmount) {

                totalAmount.innerText =

                    "₹ " + (emi * months).toFixed(0);

            }

        });

    }

    /*=========================================
    AUTO PRICE UPDATE
    =========================================*/

    if (systemSize && systemPrice) {

        systemSize.addEventListener("change", function () {

            const size = Number(this.value);

            let price = 0;

            switch (size) {

                case 1:

                    price = 65000;

                    break;

                case 2:

                    price = 130000;

                    break;

                case 3:

                    price = 195000;

                    break;

                case 5:

                    price = 325000;

                    break;

                case 10:

                    price = 650000;

                    break;

                default:

                    price = 0;

            }

            systemPrice.value = price;

        });

    }

    /*=========================================
    COUNTER ANIMATION
    =========================================*/

    const counters = document.querySelectorAll(".counter-number");

    function runCounter(counter) {

        const target = Number(counter.getAttribute("data-target"));

        let count = 0;

        const speed = target / 100;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    }

    const counterObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    runCounter(entry.target);

                    counterObserver.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.5

        }

    );

    counters.forEach(function (counter) {

        counterObserver.observe(counter);

    });/*=========================================
    SCROLL REVEAL ANIMATIONS
    =========================================*/

    const animatedElements = document.querySelectorAll(

        ".fade-up, .fade-left, .fade-right, .zoom-in"

    );

    if (animatedElements.length > 0) {

        const animationObserver = new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        animationObserver.unobserve(entry.target);

                    }

                });

            },

            {

                threshold: 0.20

            }

        );

        animatedElements.forEach(function (element) {

            animationObserver.observe(element);

        });

    }

    /*=========================================
    FAQ ACCORDION
    =========================================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {

        const question = item.querySelector("h3");

        const answer = item.querySelector("p");

        if (!question || !answer) return;

        answer.style.display = "none";

        question.style.cursor = "pointer";

        question.addEventListener("click", function () {

            const isOpen = answer.style.display === "block";

            faqItems.forEach(function (faq) {

                const p = faq.querySelector("p");

                if (p) {

                    p.style.display = "none";

                }

            });

            if (!isOpen) {

                answer.style.display = "block";

            }

        });

    });

    /*=========================================
    ACTIVE NAVIGATION
    =========================================*/

    const sections = document.querySelectorAll("section[id]");

    function updateActiveMenu() {

        const scrollPosition = window.scrollY + 120;

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop;

            const sectionHeight = section.offsetHeight;

            const sectionId = section.getAttribute("id");

            const navLink = document.querySelector(
                'nav a[href="#' + sectionId + '"]'
            );

            if (!navLink) return;

            if (

                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight

            ) {

                navLink.classList.add("active");

            } else {

                navLink.classList.remove("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveMenu);

    updateActiveMenu();

    /*=========================================
    CONTACT FORM VALIDATION
    =========================================*/

    const contactForm = document.querySelector(".contact-form form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const requiredFields = contactForm.querySelectorAll(

                "input[required], textarea[required], select[required]"

            );

            let isValid = true;

            requiredFields.forEach(function (field) {

                if (field.value.trim() === "") {

                    field.style.borderColor = "red";

                    isValid = false;

                } else {

                    field.style.borderColor = "#1db954";

                }

            });

            if (!isValid) {

                alert("Please fill all required fields.");

                return;

            }

            alert("Thank you! Your enquiry has been submitted successfully.");

            contactForm.reset();

        });

    }

    /*=========================================
    IMAGE LAZY LOADING
    =========================================*/

    const lazyImages = document.querySelectorAll("img[data-src]");

    if (lazyImages.length > 0) {

        const imageObserver = new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (!entry.isIntersecting) return;

                    const image = entry.target;

                    image.src = image.dataset.src;

                    image.removeAttribute("data-src");

                    observer.unobserve(image);

                });

            }

        );

        lazyImages.forEach(function (image) {

            imageObserver.observe(image);

        });

    }
const galleryImages = document.querySelectorAll(".gallery-grid img");

    galleryImages.forEach(function (image) {

        image.addEventListener("mouseenter", function () {

            this.style.transform = "scale(1.05)";

        });

        image.addEventListener("mouseleave", function () {

            this.style.transform = "scale(1)";

        });

    });

    /*=========================================
    BUTTON RIPPLE EFFECT
    =========================================*/

    const buttons = document.querySelectorAll(

        ".primary-btn, .secondary-btn, .call-btn, .whatsapp-btn"

    );

    buttons.forEach(function (button) {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const rect = this.getBoundingClientRect();

            const size = Math.max(rect.width, rect.height);

            ripple.style.width = size + "px";

            ripple.style.height = size + "px";

            ripple.style.position = "absolute";

            ripple.style.borderRadius = "50%";

            ripple.style.pointerEvents = "none";

            ripple.style.background = "rgba(255,255,255,0.4)";

            ripple.style.left = (e.clientX - rect.left - size / 2) + "px";

            ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

            ripple.style.transform = "scale(0)";

            ripple.style.transition = "transform .6s, opacity .6s";

            this.style.position = "relative";

            this.style.overflow = "hidden";

            this.appendChild(ripple);

            requestAnimationFrame(function () {

                ripple.style.transform = "scale(2.5)";

                ripple.style.opacity = "0";

            });

            setTimeout(function () {

                ripple.remove();

            }, 600);

        });

    });

    /*=========================================
    HEADER HIDE / SHOW
    =========================================*/

    let lastScroll = 0;

    window.addEventListener("scroll", function () {

        const currentScroll = window.pageYOffset;

        if (!header) return;

        if (currentScroll > lastScroll && currentScroll > 150) {

            header.style.transform = "translateY(-100%)";

        } else {

            header.style.transform = "translateY(0)";

        }

        lastScroll = currentScroll;

    });

    /*=========================================
    PRELOAD IMAGES
    =========================================*/

    function preloadImages() {

        const images = document.querySelectorAll("img");

        images.forEach(function (image) {

            const preload = new Image();

            preload.src = image.src;

        });

    }

    preloadImages();

    /*=========================================
    PERFORMANCE OPTIMIZATION
    =========================================*/

    let resizeTimer;

    window.addEventListener("resize", function () {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {

            window.dispatchEvent(new Event("optimizedResize"));

        }, 250);

    });

    /*=========================================
    CONSOLE MESSAGE
    =========================================*/

    console.log(
        "%cAwadh Green Developers",
        "color:#1db954;font-size:22px;font-weight:bold;"
    );

    console.log(
        "%cProfessional Solar Website Loaded Successfully.",
        "color:#0d1b2a;font-size:14px;"
    );
const scrollProgress = document.getElementById("scrollProgress");

    function updateScrollProgress() {

        if (!scrollProgress) return;

        const scrollTop = window.pageYOffset;

        const documentHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        scrollProgress.style.width = progress + "%";

    }

    window.addEventListener("scroll", updateScrollProgress);

    updateScrollProgress();

    /*=========================================
    AUTO FOOTER YEAR
    =========================================*/

    const footerYear = document.getElementById("footerYear");

    if (footerYear) {

        footerYear.textContent = new Date().getFullYear();

    }

    /*=========================================
    WHATSAPP QUICK MESSAGE
    =========================================*/

    const whatsappButtons = document.querySelectorAll(
        ".whatsapp-btn, .floating-whatsapp"
    );

    whatsappButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const message =
                "Hello Awadh Green Developers,%0A%0AI want information about Solar Panel Installation.";

            const phone = "919996801232";

            const url =
                "https://wa.me/" + phone + "?text=" + message;

            window.open(url, "_blank");

        });

    });

    /*=========================================
    CALL BUTTON
    =========================================*/

    const callButtons = document.querySelectorAll(
        ".call-btn, .floating-call"
    );

    callButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            window.location.href = "tel:+918423948053";

        });

    });

    /*=========================================
    PREVENT EMPTY LINKS
    =========================================*/

    document.querySelectorAll('a[href="#"]').forEach(function (link) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

        });

    });

    /*=========================================
    GLOBAL ERROR HANDLER
    =========================================*/

    window.addEventListener("error", function (event) {

        console.error(
            "JavaScript Error:",
            event.message
        );

    });

    /*=========================================
    WEBSITE INITIALIZED
    =========================================*/

    console.log("Website Initialized Successfully.");

});
