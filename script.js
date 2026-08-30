/* =========================================================
   ADVANCED PERSONAL PORTFOLIO
   COMPLETE SCRIPT.JS
   Mobile Menu + Loader + Animations + Counters
   Scroll Effects + Skill Bars + Form Validation
========================================================= */

"use strict";


/* =========================================================
   01. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (window.lucide) {
        window.lucide.createIcons();
    }

    initLoader();

    initHeader();

    initMobileMenu();

    initSmoothScroll();

    initScrollReveal();

    initSkillBars();

    initCounters();

    initActiveNavigation();

    initContactForm();


    initProjectInteractions();

});


/* =========================================================
   02. PAGE LOADER
========================================================= */

function initLoader() {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

            document.body.style.overflow = "";

        }, 900);

    });

}


/* =========================================================
   03. HEADER SCROLL EFFECT
========================================================= */

function initHeader() {

    const header = document.querySelector(".site-header");

    if (!header) return;

    function updateHeader() {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

}


/* =========================================================
   04. MOBILE MENU
========================================================= */

function initMobileMenu() {

    const hamburger =
        document.querySelector(".hamburger");

    const nav =
        document.querySelector(".nav");

    if (!hamburger || !nav) return;


    function openMenu() {

        hamburger.classList.add("open");

        nav.classList.add("open");

        document.body.classList.add("menu-open");

        hamburger.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    function closeMenu() {

        hamburger.classList.remove("open");

        nav.classList.remove("open");

        document.body.classList.remove("menu-open");

        hamburger.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    function toggleMenu() {

        const isOpen =
            nav.classList.contains("open");

        if (isOpen) {

            closeMenu();

        } else {

            openMenu();

        }

    }


    hamburger.addEventListener(
        "click",
        toggleMenu
    );


    /* Close when clicking navigation */

    const navLinks =
        nav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


    /* Close when clicking outside */

    document.addEventListener(
        "click",
        event => {

            const clickedInside =
                nav.contains(event.target) ||
                hamburger.contains(event.target);

            if (!clickedInside) {

                closeMenu();

            }

        }
    );


    /* Close with Escape */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );


    /* Close menu after resizing */

    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 900) {

                closeMenu();

            }

        }
    );

}


/* =========================================================
   05. SMOOTH SCROLL
========================================================= */

function initSmoothScroll() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    links.forEach(link => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                const header =
                    document.querySelector(
                        ".site-header"
                    );

                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });

}


/* =========================================================
   06. SCROLL REVEAL ANIMATION
========================================================= */

function initScrollReveal() {

    const elements =
        document.querySelectorAll(".reveal");

    if (!elements.length) return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   07. SKILL BAR ANIMATION
========================================================= */

function initSkillBars() {

    const skills =
        document.querySelectorAll(".skill");

    if (!skills.length) return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.3
            }
        );


    skills.forEach(skill => {

        observer.observe(skill);

    });

}


/* =========================================================
   08. NUMBER COUNTERS
========================================================= */

function initCounters() {

    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );

    if (!counters.length) return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        animateCounter(
                            entry.target
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.5
            }
        );


    counters.forEach(counter => {

        observer.observe(counter);

    });

}


/* =========================================================
   COUNTER ANIMATION FUNCTION
========================================================= */

function animateCounter(element) {

    const target =
        Number(
            element.dataset.counter
        );

    if (Number.isNaN(target)) return;


    const duration = 1600;

    const startTime =
        performance.now();


    function updateCounter(currentTime) {

        const elapsed =
            currentTime - startTime;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        /* Ease-out animation */

        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const currentValue =
            Math.floor(
                eased * target
            );


        element.textContent =
            currentValue;


        if (progress < 1) {

            requestAnimationFrame(
                updateCounter
            );

        } else {

            element.textContent =
                target;

        }

    }


    requestAnimationFrame(
        updateCounter
    );

}


/* =========================================================
   09. ACTIVE NAVIGATION
========================================================= */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const links =
        document.querySelectorAll(
            ".nav a[href^='#']"
        );

    if (
        !sections.length ||
        !links.length
    ) {
        return;
    }


    function updateActiveLink() {

        const scrollPosition =
            window.scrollY +
            window.innerHeight * 0.35;


        sections.forEach(section => {

            const top =
                section.offsetTop;

            const bottom =
                top +
                section.offsetHeight;

            const id =
                section.getAttribute("id");


            if (
                scrollPosition >= top &&
                scrollPosition < bottom
            ) {

                links.forEach(link => {

                    link.classList.remove(
                        "active"
                    );

                });


                const activeLink =
                    document.querySelector(
                        `.nav a[href="#${id}"]`
                    );


                if (activeLink) {

                    activeLink.classList.add(
                        "active"
                    );

                }

            }

        });

    }


    updateActiveLink();

    window.addEventListener(
        "scroll",
        updateActiveLink,
        { passive: true }
    );

}


/* =========================================================
   10. CONTACT FORM VALIDATION
========================================================= */

function initContactForm() {

    const form = document.getElementById("contactForm");

    if (!form) return;

    const status = form.querySelector(".form-status");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            form.querySelector('[name="name"]').value.trim();

        const email =
            form.querySelector('[name="email"]').value.trim();

        const subject =
            form.querySelector('[name="subject"]').value.trim();

        const message =
            form.querySelector('[name="message"]').value.trim();


        /* =========================
           VALIDATION
        ========================= */

        if (name.length < 2) {

            status.textContent =
                "Please enter your name.";

            status.style.color = "#ff7373";

            return;
        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            status.textContent =
                "saifbaris14@gmail.com";

            status.style.color = "#ff7373";

            return;
        }


        if (message.length < 10) {

            status.textContent =
                "Message must contain at least 10 characters.";

            status.style.color = "#ff7373";

            return;
        }


        /* =========================
           SENDING
        ========================= */

        const button =
            form.querySelector(".submit-btn");

        const buttonText =
            button.querySelector("span");


        button.disabled = true;

        buttonText.textContent =
            "SENDING...";

        status.textContent =
            "Sending your message...";

        status.style.color =
            "#54e28b";


        /* =========================
           EMAILJS
        ========================= */

        emailjs.sendForm(

            "YOUR_SERVICE_ID",

            "YOUR_TEMPLATE_ID",

            form

        ).then(

            function(response) {

                console.log(
                    "SUCCESS!",
                    response.status,
                    response.text
                );


                status.textContent =
                    "Message sent successfully!";

                status.style.color =
                    "#54e28b";


                buttonText.textContent =
                    "MESSAGE SENT ✓";


                form.classList.add(
                    "submitted"
                );


                setTimeout(function() {

                    form.reset();

                    button.disabled = false;

                    buttonText.textContent =
                        "SEND MESSAGE";

                    form.classList.remove(
                        "submitted"
                    );

                }, 2500);

            },


            function(error) {

                console.error(
                    "EMAILJS ERROR:",
                    error
                );


                status.textContent =
                    "Message could not be sent. Please try again.";

                status.style.color =
                    "#ff7373";


                button.disabled = false;

                buttonText.textContent =
                    "SEND MESSAGE";

            }

        );

    });

}


document.addEventListener(
    "DOMContentLoaded",
    initContactForm
);
/* =========================================================
   EMAIL VALIDATION
========================================================= */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* =========================================================
   SHOW INPUT ERROR
========================================================= */

function showInputError(
    input,
    message
) {

    if (!input) return;


    input.classList.add(
        "input-error"
    );


    input.setAttribute(
        "aria-invalid",
        "true"
    );


    let error =
        input.parentElement.querySelector(
            ".field-error"
        );


    if (!error) {

        error =
            document.createElement("small");

        error.className =
            "field-error";

        input.parentElement.appendChild(
            error
        );

    }


    error.textContent =
        message;

}


/* =========================================================
   CLEAR FORM ERRORS
========================================================= */

function clearFormErrors(form) {

    const inputs =
        form.querySelectorAll(
            "input, textarea"
        );

    inputs.forEach(input => {

        input.classList.remove(
            "input-error"
        );

        input.removeAttribute(
            "aria-invalid"
        );

    });


    const errors =
        form.querySelectorAll(
            ".field-error"
        );

    errors.forEach(error => {

        error.remove();

    });

}


/* =========================================================
   11. CUSTOM CURSOR
========================================================= */

function initCursor() {

    const dot =
        document.querySelector(
            ".cursor-dot"
        );

    const ring =
        document.querySelector(
            ".cursor-ring"
        );


    if (!dot || !ring) return;


    /* Disable on touch devices */

    if (
        window.matchMedia(
            "(hover: none)"
        ).matches
    ) {

        dot.style.display = "none";

        ring.style.display = "none";

        return;

    }


    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;


            dot.style.left =
                `${mouseX}px`;

            dot.style.top =
                `${mouseY}px`;

        }
    );


    function animateCursor() {

        ringX +=
            (mouseX - ringX) *
            0.15;

        ringY +=
            (mouseY - ringY) *
            0.15;


        ring.style.left =
            `${ringX}px`;

        ring.style.top =
            `${ringY}px`;


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    /* Cursor hover effect */

    const interactiveElements =
        document.querySelectorAll(
            "a, button, input, textarea, .project-card, .service"
        );


    interactiveElements.forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                ring.style.width =
                    "45px";

                ring.style.height =
                    "45px";

                ring.style.borderColor =
                    "rgba(78,140,255,0.8)";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                ring.style.width =
                    "30px";

                ring.style.height =
                    "30px";

                ring.style.borderColor =
                    "rgba(255,255,255,0.5)";

            }
        );

    });

}


/* =========================================================
   12. PROJECT INTERACTIONS
========================================================= */

function initProjectInteractions() {

    const cards =
        document.querySelectorAll(
            ".project-card"
        );

    if (!cards.length) return;


    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth < 901
                ) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) /
                    25;

                const rotateY =
                    (centerX - x) /
                    25;


                card.style.transform =
                    `
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-7px)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   13. PARALLAX HERO
========================================================= */

function initHeroParallax() {

    const heroArt =
        document.querySelector(
            ".hero-art"
        );

    if (!heroArt) return;


    if (
        window.innerWidth <= 900
    ) {
        return;
    }


    window.addEventListener(
        "scroll",
        () => {

            const scroll =
                window.scrollY;


            heroArt.style.transform =
                `
                translateY(${scroll * 0.08}px)
                `;

        },
        { passive: true }
    );

}


/* =========================================================
   14. TYPING EFFECT
========================================================= */

function initTypingEffect() {

    const element =
        document.querySelector(
            "[data-typing]"
        );

    if (!element) return;


    const words =
        element.dataset.typing
            .split(",");


    if (!words.length) return;


    let wordIndex = 0;

    let characterIndex = 0;

    let deleting = false;


    function type() {

        const currentWord =
            words[wordIndex].trim();


        if (!deleting) {

            element.textContent =
                currentWord.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;


            if (
                characterIndex ===
                currentWord.length
            ) {

                deleting = true;

                setTimeout(
                    type,
                    1500
                );

                return;

            }

        } else {

            element.textContent =
                currentWord.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;


            if (
                characterIndex === 0
            ) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) %
                    words.length;

            }

        }


        const speed =
            deleting
                ? 50
                : 100;


        setTimeout(
            type,
            speed
        );

    }


    type();

}


/* =========================================================
   15. BACK TO TOP BUTTON
========================================================= */

function initBackToTop() {

    const button =
        document.querySelector(
            "#backToTop"
        );

    if (!button) return;


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 500
            ) {

                button.classList.add(
                    "show"
                );

            } else {

                button.classList.remove(
                    "show"
                );

            }

        },
        { passive: true }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   16. INITIALIZE OPTIONAL EFFECTS
========================================================= */

initHeroParallax();

initTypingEffect();

initBackToTop();


/* =========================================================
   17. CONSOLE MESSAGE
========================================================= */

console.log(
    "%c Portfolio Loaded Successfully ",
    "background:#4e8cff;color:#fff;padding:8px 14px;border-radius:4px;"
);

console.log(
    "Advanced Portfolio JavaScript is running."
);





document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) return;


    form.addEventListener("submit", function (event) {

        const name =
            form.querySelector('[name="name"]').value.trim();

        const email =
            form.querySelector('[name="email"]').value.trim();

        const subject =
            form.querySelector('[name="subject"]').value.trim();

        const message =
            form.querySelector('[name="message"]').value.trim();


        const status =
            form.querySelector(".form-status");


        /* =========================
           VALIDATION
        ========================= */

        if (name.length < 2) {

            event.preventDefault();

            status.textContent =
                "Please enter your name.";

            status.style.color =
                "#ff7373";

            return;

        }


        if (!email.includes("@")) {

            event.preventDefault();

            status.textContent =
                "Please enter a valid email.";

            status.style.color =
                "#ff7373";

            return;

        }


        if (subject.length < 2) {

            event.preventDefault();

            status.textContent =
                "Please enter a subject.";

            status.style.color =
                "#ff7373";

            return;

        }


        if (message.length < 10) {

            event.preventDefault();

            status.textContent =
                "your form succesfully";

            status.style.color =
                "#35e438";

            return;

        }


        /* =========================
           REPLY TO VISITOR
        ========================= */

        const replyTo =
            form.querySelector('[name="_replyto"]');

        if (replyTo) {

            replyTo.value = email;

        }


        /* =========================
           SUCCESS UI
        ========================= */

        status.textContent =
            "Sending your message...";

        status.style.color =
            "#54e28b";


        const button =
            form.querySelector(".submit-btn");

        const buttonText =
            button.querySelector("span");


        buttonText.textContent =
            "SENDING...";

        button.disabled = true;


        /*
        IMPORTANT:

        Do NOT use:

        event.preventDefault();

        here.

        Form must actually submit to FormSubmit.
        */

    });

});