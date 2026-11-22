// Website loading message
console.log("Bight Technologies Website Loaded Successfully");

// Automatically update copyright year
document.addEventListener("DOMContentLoaded", function () {

    const footer = document.querySelector("footer p");

    if (footer) {
        footer.textContent =
            "© " + new Date().getFullYear() +
            " Bight Technologies Pvt. Ltd. All Rights Reserved.";
    }

    // Navigation link functionality
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("Navigation clicked: " + link.textContent);

        });

    });

});