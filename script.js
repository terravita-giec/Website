// TerraVita Website
// Simple JavaScript interactions

document.addEventListener("DOMContentLoaded", function () {

    // Add shadow to navbar when scrolling
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {
            navbar.style.boxShadow =
                "0 8px 30px rgba(0,0,0,0.18)";
        } else {
            navbar.style.boxShadow = "none";
        }

    });


    // Close mobile menu / smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});
