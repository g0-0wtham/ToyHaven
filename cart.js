// =========================================
// TOY HAVEN - SHOPPING CART
// =========================================


const cartItemsContainer =
    document.getElementById("cartItems");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const cartTotal =
    document.getElementById("cartTotal");

const cartCount =
    document.getElementById("cartCount");

const clearCartButton =
    document.getElementById("clearCartButton");

const checkoutButton =
    document.getElementById("checkoutButton");


// =========================================
// GET CART
// =========================================

function getCart() {

    return JSON.parse(
        localStorage.getItem("toyHavenCart")
    ) || [];

}


// =========================================
// SAVE CART
// =========================================

function saveCart(cart) {

    localStorage.setItem(
        "toyHavenCart",
        JSON.stringify(cart)
    );

}


// =========================================
// DISPLAY CART
// =========================================

// =========================================
// DISPLAY CART
// =========================================

function displayCart() {

    const cart = getCart();

    cartItemsContainer.innerHTML = "";


    // EMPTY CART
    if (cart.length === 0) {

        cartItemsContainer.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h2>
                    Your cart is empty
                </h2>

                <p>
                    Looks like you haven't added
                    anything yet.
                </p>

                <a
                    href="products.html"
                    class="shop-now-button"
                >
                    SHOP NOW
                </a>

            </div>

        `;

        cartSubtotal.textContent = "Rs. 0.00";
        cartTotal.textContent = "Rs. 0.00";
        cartCount.textContent = "0";

        const headingCount =
            document.getElementById("cartHeadingCount");

        if (headingCount) {
            headingCount.textContent = "(0 items)";
        }

        checkoutButton.disabled = true;

        return;
    }


    checkoutButton.disabled = false;


    let subtotal = 0;
    let totalItems = 0;


    cart.forEach(item => {

        const itemSubtotal =
            Number(item.price) * Number(item.quantity);


        subtotal += itemSubtotal;

        totalItems += Number(item.quantity);


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-table-row";


        cartItem.innerHTML = `

            <!-- PRODUCT -->
            <div class="cart-table-product">

                <div class="cart-table-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>


                <div class="cart-table-name">

                    ${item.name}

                </div>

            </div>


            <!-- PRICE -->
            <div class="cart-table-price">

                Rs.
                ${Number(item.price).toLocaleString(
                    "en-LK",
                    {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                )}

            </div>


            <!-- QUANTITY -->
            <div class="cart-table-quantity">

                <button
                    class="quantity-button"
                    data-action="decrease"
                    data-id="${item.id}"
                >
                    −
                </button>


                <span>
                    ${item.quantity}
                </span>


                <button
                    class="quantity-button"
                    data-action="increase"
                    data-id="${item.id}"
                >
                    +
                </button>

            </div>


            <!-- DISCOUNT -->
            <div class="cart-table-discount">

                Rs. 0.00

            </div>


            <!-- TOTAL -->
            <div class="cart-table-total">

                Rs.
                ${itemSubtotal.toLocaleString(
                    "en-LK",
                    {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                )}

            </div>


            <!-- ACTION -->
            <div class="cart-table-action">

                <button
                    class="remove-item"
                    data-id="${item.id}"
                    aria-label="Remove item"
                >
                    ×
                </button>

            </div>

        `;


        cartItemsContainer.appendChild(
            cartItem
        );

    });


    // SUBTOTAL
    cartSubtotal.textContent =
        `Rs. ${subtotal.toLocaleString(
            "en-LK",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        )}`;


    // TOTAL
    cartTotal.textContent =
        `Rs. ${subtotal.toLocaleString(
            "en-LK",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        )}`;


    // CART COUNT
    cartCount.textContent =
        totalItems;


    // HEADING COUNT
    const headingCount =
        document.getElementById("cartHeadingCount");

    if (headingCount) {

        headingCount.textContent =
            `(${totalItems} ${
                totalItems === 1
                    ? "item"
                    : "items"
            })`;

    }

}

// =========================================
// REMOVE ITEM
// =========================================

function removeItem(productId) {

    const cart = getCart();


    const updatedCart =
        cart.filter(
            item => item.id !== productId
        );


    saveCart(updatedCart);

    displayCart();

}


// =========================================
// CART BUTTON EVENTS
// =========================================

cartItemsContainer.addEventListener(
    "click",
    function (event) {


        // Quantity buttons

        if (
            event.target.classList.contains(
                "quantity-button"
            )
        ) {

            const productId =
                Number(
                    event.target.dataset.id
                );


            const action =
                event.target.dataset.action;


            if (action === "increase") {

                changeQuantity(
                    productId,
                    1
                );

            }


            if (action === "decrease") {

                changeQuantity(
                    productId,
                    -1
                );

            }

        }


        // Remove button

        if (
            event.target.classList.contains(
                "remove-item"
            )
        ) {

            const productId =
                Number(
                    event.target.dataset.id
                );


            removeItem(productId);

        }

    }
);


// =========================================
// CLEAR CART
// =========================================

clearCartButton.addEventListener(
    "click",
    function () {

        const cart = getCart();


        if (cart.length === 0) {
            return;
        }


        const confirmation =
            confirm(
                "Are you sure you want to clear your cart?"
            );


        if (confirmation) {

            localStorage.removeItem(
                "toyHavenCart"
            );


            displayCart();

        }

    }
);


// =========================================
// CHECKOUT
// =========================================

checkoutButton.addEventListener(
    "click",
    function () {

        const cart = getCart();


        if (cart.length === 0) {

            alert(
                "Your cart is empty."
            );

            return;

        }


        window.location.href =
            "checkout.html";

    }
);


// =========================================
// INITIAL DISPLAY
// =========================================

displayCart();