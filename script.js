/* ================================
   MOBILE NAVIGATION
================================ */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });
}


/* ================================
   SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(
    "section, .project-card, .skill-card, .about-card, .experience-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


/* ================================
   ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navigationLinks.forEach(link => {
                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {
                        link.classList.add("active");
                    }
                });
            }
        });
    },
    {
        threshold: 0.35
    }
);

sections.forEach(section => {
    sectionObserver.observe(section);
});


/* ================================
   CONTACT FORM
================================ */

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");

        if (
            !name ||
            !email ||
            !message ||
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {
            if (formMessage) {
                formMessage.textContent =
                    "Please fill in all required fields.";
                formMessage.classList.add("error");
            }

            return;
        }

        if (formMessage) {
            formMessage.textContent =
                "Thanks! Your message has been received.";
            formMessage.classList.remove("error");
            formMessage.classList.add("success");
        }

        contactForm.reset();
    });
}


/* ================================
   REDUCED MOTION SUPPORT
================================ */

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = "auto";
}