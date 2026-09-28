```javascript
/* =========================================================
   TERRAVITA ENVIRONMENTAL & GEOSPATIAL CONSULTANCY
   Main Website JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. MOBILE NAVIGATION
       ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            const isOpen = mainNav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );
        });


        /* Close menu after clicking a navigation link */

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {
                mainNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });

        });
    }


    /* =====================================================
       2. HEADER SCROLL EFFECT
       ===================================================== */

    const siteHeader = document.getElementById("siteHeader");

    if (siteHeader) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 30) {

                siteHeader.classList.add("scrolled");

            } else {

                siteHeader.classList.remove("scrolled");

            }

        });

    }


    /* =====================================================
       3. SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        revealElements.forEach((element) => {

            revealObserver.observe(element);

        });

    } else {

        /* Fallback for older browsers */

        revealElements.forEach((element) => {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       4. CONSULTATION FORM
       ===================================================== */

    const consultationForm =
        document.getElementById("consultationForm");

    if (consultationForm) {

        consultationForm.addEventListener(
            "submit",
            (event) => {

                /* Prevent normal form submission */

                event.preventDefault();


                /* Collect form data */

                const formData =
                    new FormData(consultationForm);


                /* Get individual fields */

                const name =
                    formData.get("name") || "";

                const company =
                    formData.get("company") || "";

                const email =
                    formData.get("email") || "";

                const phone =
                    formData.get("phone") || "";

                const projectType =
                    formData.get("projectType") ||
                    "Project";

                const location =
                    formData.get("location") || "";

                const timeline =
                    formData.get("timeline") || "";

                const message =
                    formData.get("message") || "";


                /* =================================================
                   5. CREATE EMAIL SUBJECT
                   ================================================= */

                const emailSubject =
                    `TerraVita Project Consultation — ${projectType}`;


                /* =================================================
                   6. CREATE EMAIL BODY
                   ================================================= */

                const emailBody = `Hello TerraVita,

I would like to discuss a project.

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Project Type: ${projectType}
Location: ${location}
Timeline: ${timeline}

Project Brief:
${message}

Regards,
${name}`;


                /* =================================================
                   7. ENCODE EMAIL CONTENT
                   ================================================= */

                const encodedSubject =
                    encodeURIComponent(emailSubject);

                const encodedBody =
                    encodeURIComponent(emailBody);


                /* =================================================
                   8. OPEN EMAIL CLIENT
                   ================================================= */

                const mailtoLink =
                    `mailto:terravita.giec@gmail.com` +
                    `?subject=${encodedSubject}` +
                    `&body=${encodedBody}`;


                window.location.href = mailtoLink;

            }
        );

    }

});
```
