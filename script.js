// =========================================
// TOY HAVEN - MAIN JAVASCRIPT
// =========================================


// =========================================
// NAVIGATION MENU
// =========================================

const menuToggle = document.getElementById("menuToggle");
const mainNavigation = document.getElementById("mainNavigation");

if (menuToggle && mainNavigation) {

    menuToggle.addEventListener("click", function () {

        const isOpen = mainNavigation.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

}



// =========================================
// ROTATING BANNER
// =========================================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextButton = document.getElementById("nextSlide");
const previousButton = document.getElementById("previousSlide");

let currentSlide = 0;

let slideTimer;



// =========================================
// SHOW SLIDE
// =========================================

function showSlide(index) {

    // Stop and reset all videos

    slides.forEach(function (slide) {

        slide.classList.remove("active");

        const video = slide.querySelector("video");

        if (video) {

            video.pause();
            video.currentTime = 0;

        }

    });


    // Remove active from all dots

    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    // Make selected slide active

    if (slides[index]) {

        slides[index].classList.add("active");

    }


    // Make selected dot active

    if (dots[index]) {

        dots[index].classList.add("active");

    }


    // Update current slide

    currentSlide = index;


    // Check if the new slide contains a video

    const activeVideo = slides[index].querySelector("video");


    if (activeVideo) {

        // Play the video

        activeVideo.play();


        // Move to the next slide when video finishes

        activeVideo.onended = function () {

            nextSlide();

        };


    } else {

        // Image slide

        // Automatically change after 5 seconds

        slideTimer = setTimeout(function () {

            nextSlide();

        }, 5000);

    }

}



// =========================================
// NEXT SLIDE
// =========================================

function nextSlide() {

    // Clear existing timer

    clearTimeout(slideTimer);


    let nextIndex = currentSlide + 1;


    // Go back to first slide

    if (nextIndex >= slides.length) {

        nextIndex = 0;

    }


    showSlide(nextIndex);

}



// =========================================
// PREVIOUS SLIDE
// =========================================

function previousSlide() {

    // Clear existing timer

    clearTimeout(slideTimer);


    let previousIndex = currentSlide - 1;


    // Go to last slide

    if (previousIndex < 0) {

        previousIndex = slides.length - 1;

    }


    showSlide(previousIndex);

}



// =========================================
// NEXT BUTTON
// =========================================

if (nextButton) {

    nextButton.addEventListener("click", function () {

        nextSlide();

    });

}



// =========================================
// PREVIOUS BUTTON
// =========================================

if (previousButton) {

    previousButton.addEventListener("click", function () {

        previousSlide();

    });

}



// =========================================
// SLIDER DOTS
// =========================================

dots.forEach(function (dot) {

    dot.addEventListener("click", function () {

        clearTimeout(slideTimer);


        const slideNumber =
            Number(this.getAttribute("data-slide"));


        showSlide(slideNumber);

    });

});



// =========================================
// START SLIDER
// =========================================

if (slides.length > 0) {

    showSlide(0);

}



// =========================================
// SEARCH
// =========================================

const searchForm = document.getElementById("searchForm");

if (searchForm) {

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const searchInput =
            document.getElementById("homeSearch");


        const searchValue =
            searchInput.value.trim();


        if (searchValue !== "") {

            window.location.href =
                "products.html?search=" +
                encodeURIComponent(searchValue);

        }

    });

}



// =========================================
// NEWSLETTER
// =========================================

const newsletterForm =
    document.getElementById("newsletterForm");


if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const emailInput =
            document.getElementById("newsletterEmail");


        const message =
            document.getElementById("newsletterMessage");


        const email =
            emailInput ? emailInput.value.trim() : "";


        // Check if email is empty

        if (email === "") {

            if (message) {
                message.textContent =
                    "Please enter your email address.";
            }

            return;

        }


        // Basic email validation

        if (!email.includes("@") || !email.includes(".")) {

            if (message) {
                message.textContent =
                    "Please enter a valid email address.";
            }

            return;

        }


        // Save email

        localStorage.setItem(
            "newsletterEmail",
            email
        );


        // Confirmation message

        if (message) {
            message.textContent =
                "Thank you for joining Toy Haven!";
        }


        // Clear form

        newsletterForm.reset();

    });

}



// =========================================
// LOAD SAVED NEWSLETTER EMAIL
// =========================================

const savedEmail =
    localStorage.getItem("newsletterEmail");


if (savedEmail) {

    const emailInput =
        document.getElementById("newsletterEmail");


    if (emailInput) {

        emailInput.placeholder =
            "Subscribed: " + savedEmail;

    }

}

// =========================================
// PWA SERVICE WORKER
// =========================================

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("service-worker.js")
            .then(function () {
                console.log("Toy Haven service worker registered.");
            })
            .catch(function (error) {
                console.log("Service worker registration failed:", error);
            });
    });
}
