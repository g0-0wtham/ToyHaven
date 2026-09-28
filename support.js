document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       CART COUNT
    ========================== */

    function updateSupportCartCount() {

        const cartCount = document.getElementById("cartCount");

        if (!cartCount) {
            return;
        }

        const cart =
            JSON.parse(localStorage.getItem("toyHavenCart")) || [];

        let totalQuantity = 0;

        cart.forEach(function (item) {
            totalQuantity += item.quantity || 1;
        });

        cartCount.textContent = totalQuantity;
    }

    updateSupportCartCount();


    /* =========================
       FEEDBACK FORM
    ========================== */

    const feedbackForm =
        document.getElementById("feedbackForm");

    if (feedbackForm) {

        feedbackForm.addEventListener("submit", function (event) {

            event.preventDefault();


            /* GET INPUT VALUES */

            const name =
                document.getElementById("feedbackName").value.trim();

            const email =
                document.getElementById("feedbackEmail").value.trim();

            const message =
                document.getElementById("feedbackMessage").value.trim();


            /* GET ERROR ELEMENTS */

            const nameError =
                document.getElementById("nameError");

            const emailError =
                document.getElementById("emailError");

            const messageError =
                document.getElementById("messageError");

            const successMessage =
                document.getElementById("feedbackSuccess");


            /* CLEAR OLD MESSAGES */

            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";
            successMessage.textContent = "";


            let valid = true;


            /* =========================
               NAME VALIDATION
            ========================== */

            if (name === "") {

                nameError.textContent =
                    "Please enter your name.";

                valid = false;

            } else if (name.length < 2) {

                nameError.textContent =
                    "Name must contain at least 2 characters.";

                valid = false;
            }


            /* =========================
               EMAIL VALIDATION
            ========================== */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {

                emailError.textContent =
                    "Please enter your email.";

                valid = false;

            } else if (!emailPattern.test(email)) {

                emailError.textContent =
                    "Please enter a valid email address.";

                valid = false;
            }


            /* =========================
               MESSAGE VALIDATION
            ========================== */

            if (message === "") {

                messageError.textContent =
                    "Please enter your message.";

                valid = false;

            } else if (message.length < 10) {

                messageError.textContent =
                    "Message must contain at least 10 characters.";

                valid = false;
            }


            /* STOP IF INVALID */

            if (!valid) {
                return;
            }


            /* =========================
               SAVE FEEDBACK
            ========================== */

            const feedback =
                JSON.parse(
                    localStorage.getItem("toyHavenFeedback")
                ) || [];


            feedback.push({
                name: name,
                email: email,
                message: message,
                date: new Date().toLocaleString()
            });


            localStorage.setItem(
                "toyHavenFeedback",
                JSON.stringify(feedback)
            );


            /* =========================
               SUCCESS MESSAGE
            ========================== */

            successMessage.textContent =
                "Thank you! Your feedback has been submitted successfully.";

            successMessage.style.display = "block";


        });

    }


    /* =========================
       FAQ ACCORDION
    ========================== */

    const faqQuestions =
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem =
                question.parentElement;

            const currentAnswer =
                currentItem.querySelector(".faq-answer");

            const isActive =
                currentItem.classList.contains("active");


            /* CLOSE ALL FAQ ITEMS */

            document
                .querySelectorAll(".faq-item")
                .forEach(function (item) {

                    item.classList.remove("active");

                    const answer =
                        item.querySelector(".faq-answer");

                    answer.style.maxHeight = null;

                    const icon =
                        item.querySelector(
                            ".faq-question span:last-child"
                        );

                    if (icon) {
                        icon.textContent = "+";
                    }

                });


            /* OPEN CURRENT FAQ */

            if (!isActive) {

                currentItem.classList.add("active");

                currentAnswer.style.maxHeight =
                    currentAnswer.scrollHeight + "px";


                const icon =
                    question.querySelector(
                        "span:last-child"
                    );

                if (icon) {
                    icon.textContent = "−";
                }

            }

        });

    });

});