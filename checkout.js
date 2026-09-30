// ==========================================
// TOY HAVEN - CHECKOUT
// ==========================================


// ==========================================
// ELEMENTS
// ==========================================

const checkoutForm =
    document.getElementById("checkoutForm");

const checkoutItems =
    document.getElementById("checkoutItems");

const checkoutSubtotal =
    document.getElementById("checkoutSubtotal");

const checkoutTotal =
    document.getElementById("checkoutTotal");

const cartCount =
    document.getElementById("cartCount");

const cardDetails =
    document.getElementById("cardDetails");

const cashDetails =
    document.getElementById("cashDetails");

const kokoDetails =
    document.getElementById("kokoDetails");

const orderSuccess =
    document.getElementById("orderSuccess");

const continueShoppingButton =
    document.getElementById(
        "continueShoppingButton"
    );


// ==========================================
// GET CART
// ==========================================

function getCart() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "toyHavenCart"
            )
        ) || [];

    } catch (error) {

        return [];

    }

}


// ==========================================
// UPDATE CART COUNT
// ==========================================

function updateCartCount() {

    const cart = getCart();

    let count = 0;

    cart.forEach(item => {

        count +=
            Number(item.quantity) || 1;

    });


    if (cartCount) {

        cartCount.textContent =
            count;

    }

}


// ==========================================
// DISPLAY CHECKOUT
// ==========================================

function displayCheckout() {

    const cart = getCart();


    if (!checkoutItems) {

        return;

    }


    // EMPTY CART

    if (cart.length === 0) {

        checkoutItems.innerHTML = `

            <div class="empty-checkout">

                <p>
                    Your cart is empty.
                </p>

                <a
                    href="products.html"
                    class="shop-now-button"
                >
                    Shop Now
                </a>

            </div>

        `;


        if (checkoutSubtotal) {

            checkoutSubtotal.textContent =
                "Rs. 0.00";

        }


        if (checkoutTotal) {

            checkoutTotal.textContent =
                "Rs. 0.00";

        }


        return;

    }


    // CLEAR OLD ITEMS

    checkoutItems.innerHTML = "";


    let subtotal = 0;

    let itemCount = 0;


    // DISPLAY EACH PRODUCT

    cart.forEach(item => {

        const price =
            Number(item.price) || 0;

        const quantity =
            Number(item.quantity) || 1;

        const itemTotal =
            price * quantity;


        subtotal +=
            itemTotal;

        itemCount +=
            quantity;


        const itemElement =
            document.createElement(
                "div"
            );


        itemElement.className =
            "checkout-item";


        itemElement.innerHTML = `

            <div class="checkout-item-info">

                <h3>
                    ${item.name}
                </h3>

            </div>

            <div class="checkout-item-price">
                Rs. ${itemTotal.toLocaleString(
                    "en-LK",
                    {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                )}
            </div>

            <div class="checkout-item-quantity">
                ${quantity}
            </div>

        `;


        checkoutItems.appendChild(
            itemElement
        );

    });


    // SUBTOTAL

    if (checkoutSubtotal) {

        checkoutSubtotal.textContent =
            `Rs. ${subtotal.toLocaleString(
                "en-LK",
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            )}`;

    }


    // TOTAL

    if (checkoutTotal) {

        checkoutTotal.textContent =
            `Rs. ${subtotal.toLocaleString(
                "en-LK",
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            )}`;

    }


    // ITEM COUNT

    const checkoutItemCount =
        document.getElementById(
            "checkoutItemCount"
        );


    if (checkoutItemCount) {

        checkoutItemCount.textContent =
            itemCount;

    }

}


// ==========================================
// PAYMENT METHODS
// ==========================================

const paymentMethods =
    document.querySelectorAll(
        'input[name="payment"]'
    );


function updatePaymentMethod() {

    const selected =
        document.querySelector(
            'input[name="payment"]:checked'
        );


    // Hide all payment information

    if (cardDetails) {

        cardDetails.style.display =
            "none";

    }


    if (cashDetails) {

        cashDetails.style.display =
            "none";

    }


    if (kokoDetails) {

        kokoDetails.style.display =
            "none";

    }


    if (!selected) {

        return;

    }


    // CARD

    if (
        selected.value ===
        "Card"
    ) {

        if (cardDetails) {

            cardDetails.style.display =
                "block";

        }

    }


    // CASH ON DELIVERY

    if (
        selected.value ===
        "Cash on Delivery"
    ) {

        if (cashDetails) {

            cashDetails.style.display =
                "block";

        }

    }


    // KOKO

    if (
        selected.value ===
        "Koko"
    ) {

        if (kokoDetails) {

            kokoDetails.style.display =
                "block";

        }

    }

}


// Add payment listeners

paymentMethods.forEach(
    method => {

        method.addEventListener(
            "change",
            updatePaymentMethod
        );

    }
);


// ==========================================
// CARD NUMBER FORMATTING
// ==========================================

const cardNumber =
    document.getElementById(
        "cardNumber"
    );


if (cardNumber) {

    cardNumber.addEventListener(
        "input",
        () => {

            let value =
                cardNumber.value
                    .replace(
                        /\D/g,
                        ""
                    )
                    .substring(
                        0,
                        16
                    );


            value =
                value.replace(
                    /(.{4})/g,
                    "$1 "
                )
                .trim();


            cardNumber.value =
                value;

        }
    );

}


// ==========================================
// EXPIRY DATE FORMATTING
// ==========================================

const expiry =
    document.getElementById(
        "expiry"
    );


if (expiry) {

    expiry.addEventListener(
        "input",
        () => {

            let value =
                expiry.value
                    .replace(
                        /\D/g,
                        ""
                    )
                    .substring(
                        0,
                        4
                    );


            if (
                value.length >= 3
            ) {

                value =
                    value.substring(
                        0,
                        2
                    )
                    + "/"
                    +
                    value.substring(
                        2
                    );

            }


            expiry.value =
                value;

        }
    );

}


// ==========================================
// PLACE ORDER
// ==========================================

if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            // Get cart //

            const cart =
                getCart();


            // Check empty cart//

            if (
                cart.length === 0
            ) {

                alert(
                    "Your cart is empty. Please add products before checking out."
                );

                return;

            }


            // Customer Name //

            const fullName =
                document
                    .getElementById(
                        "fullName"
                    )
                    .value
                    .trim();


            // Email //

            const email =
                document
                    .getElementById(
                        "email"
                    )
                    .value
                    .trim();


            // Address //

            const address =
                document
                    .getElementById(
                        "address"
                    )
                    .value
                    .trim();


            // PHONE

            const phoneElement =
                document.getElementById(
                    "phone"
                );


            const phone =
                phoneElement
                    ? phoneElement.value.trim()
                    : "";


            // PAYMENT

            const selectedPayment =
                document.querySelector(
                    'input[name="payment"]:checked'
                );


            if (!selectedPayment) {

                alert(
                    "Please select a payment method."
                );

                return;

            }


            const payment =
                selectedPayment.value;


            // ==========================================
            // BASIC VALIDATION
            // ==========================================

            if (
                fullName === ""
                ||
                email === ""
                ||
                address === ""
            ) {

                alert(
                    "Please complete all required delivery information."
                );

                return;

            }


            // ==========================================
            // CARD VALIDATION
            // ==========================================

            if (
                payment === "Card"
            ) {

                const card =
                    cardNumber
                        ? cardNumber.value
                            .replace(
                                /\s/g,
                                ""
                            )
                        : "";


                const expiryValue =
                    expiry
                        ? expiry.value
                        : "";


                const cvvElement =
                    document.getElementById(
                        "cvv"
                    );


                const cvv =
                    cvvElement
                        ? cvvElement.value
                        : "";


                // CARD NUMBER

                if (
                    card.length !== 16
                ) {

                    alert(
                        "Please enter a valid 16-digit card number."
                    );

                    return;

                }


                // EXPIRY

                if (
                    !/^\d{2}\/\d{2}$/
                        .test(
                            expiryValue
                        )
                ) {

                    alert(
                        "Please enter a valid expiry date."
                    );

                    return;

                }


                // CVV

                if (
                    !/^\d{3}$/
                        .test(
                            cvv
                        )
                ) {

                    alert(
                        "Please enter a valid 3-digit CVV."
                    );

                    return;

                }

            }


            // ==========================================
            // CALCULATE TOTAL
            // ==========================================

            let total = 0;


            cart.forEach(
                item => {

                    const price =
                        Number(
                            item.price
                        ) || 0;


                    const quantity =
                        Number(
                            item.quantity
                        ) || 1;


                    total +=
                        price *
                        quantity;

                }
            );


            // ==========================================
            // CREATE ORDER
            // ==========================================

            const order = {

                orderId:
                    "TH" +
                    Date.now(),

                customer: {

                    name:
                        fullName,

                    email:
                        email,

                    address:
                        address,

                    phone:
                        phone

                },

                paymentMethod:
                    payment,

                items:
                    cart,

                total:
                    total,

                date:
                    new Date()
                        .toLocaleString()

            };


            // ==========================================
            // GET OLD ORDERS
            // ==========================================

            let orders = [];


            try {

                orders =
                    JSON.parse(
                        localStorage.getItem(
                            "toyHavenOrders"
                        )
                    ) || [];

            } catch (error) {

                orders = [];

            }


            if (
                !Array.isArray(
                    orders
                )
            ) {

                orders = [];

            }


            // ==========================================
            // SAVE ORDER
            // ==========================================

            orders.push(
                order
            );


            localStorage.setItem(
                "toyHavenOrders",
                JSON.stringify(
                    orders
                )
            );


            // ==========================================
            // CLEAR CART
            // ==========================================

            localStorage.removeItem(
                "toyHavenCart"
            );


            // UPDATE CART COUNT

            updateCartCount();


            // ==========================================
            // SHOW SUCCESS MESSAGE
            // ==========================================

            if (orderSuccess) {

                orderSuccess.classList.add(
                    "show"
                );

                orderSuccess.style.display =
                    "flex";

            }

        }
    );

}


// ==========================================
// CONTINUE SHOPPING
// ==========================================

if (
    continueShoppingButton
) {

    continueShoppingButton.addEventListener(
        "click",
        () => {

            window.location.href =
                "products.html";

        }
    );

}


// ==========================================
// INITIAL PAYMENT METHOD
// ==========================================

updatePaymentMethod();


// ==========================================
// INITIAL PAGE LOAD
// ==========================================

displayCheckout();

updateCartCount();