// ==========================================
// TOY HAVEN - WISHLIST / MY COLLECTION
// ==========================================

const wishlistGrid =
    document.getElementById("wishlistGrid");

const wishlistCount =
    document.getElementById("wishlistCount");

const cartCount =
    document.getElementById("cartCount");


// ==========================================
// GET WISHLIST
// ==========================================

function getWishlist() {

    return JSON.parse(
        localStorage.getItem("toyHavenWishlist")
    ) || [];

}


// ==========================================
// SAVE WISHLIST
// ==========================================

function saveWishlist(wishlist) {

    localStorage.setItem(
        "toyHavenWishlist",
        JSON.stringify(wishlist)
    );

}


// ==========================================
// GET CART
// ==========================================

function getCart() {

    return JSON.parse(
        localStorage.getItem("toyHavenCart")
    ) || [];

}


// ==========================================
// UPDATE CART COUNT
// ==========================================

function updateCartCount() {

    const cart = getCart();

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    if (cartCount) {
        cartCount.textContent = count;
    }

}


// ==========================================
// DISPLAY WISHLIST
// ==========================================

function displayWishlist() {

    const wishlist = getWishlist();

    wishlistGrid.innerHTML = "";


    if (wishlist.length === 0) {

        wishlistGrid.innerHTML = `

            <div class="empty-collection">

                <div class="empty-icon">
                    ♡
                </div>

                <h2>Your collection is empty</h2>

                <p>
                    Start adding your favourite
                    toys and collectibles!
                </p>

                <a
                    href="products.html"
                    class="shop-now-button"
                >
                    Explore Products
                </a>

            </div>

        `;

        wishlistCount.textContent = "0 items";

        return;
    }


    wishlistCount.textContent =
        `${wishlist.length} ${
            wishlist.length === 1
                ? "item"
                : "items"
        }`;


    wishlist.forEach(product => {

        const card =
            document.createElement("div");

        card.className =
            "collection-card";


        const status =
            product.status || "Interested";


        card.innerHTML = `

            <div class="collection-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <button
                    class="remove-wishlist"
                    data-id="${product.id}"
                    title="Remove from wishlist"
                >
                    ×
                </button>

            </div>


            <div class="collection-info">

                <span class="collection-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p class="collection-price">
                    Rs. ${product.price.toLocaleString()}
                </p>


                <label>
                    Collection Status
                </label>

                <select
                    class="collection-status"
                    data-id="${product.id}"
                >

                    <option
                        value="Interested"
                        ${status === "Interested" ? "selected" : ""}
                    >
                        Interested
                    </option>

                    <option
                        value="Owned"
                        ${status === "Owned" ? "selected" : ""}
                    >
                        Owned
                    </option>

                    <option
                        value="Not Interested"
                        ${status === "Not Interested" ? "selected" : ""}
                    >
                        Not Interested
                    </option>

                </select>


                <div class="collection-actions">

                    <button
                        class="collection-cart-button"
                        data-id="${product.id}"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        `;


        wishlistGrid.appendChild(card);

    });


    addWishlistEvents();

}


// ==========================================
// WISHLIST EVENTS
// ==========================================

function addWishlistEvents() {

    // REMOVE BUTTONS

    const removeButtons =
        document.querySelectorAll(
            ".remove-wishlist"
        );


    removeButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    Number(button.dataset.id);

                let wishlist =
                    getWishlist();


                wishlist =
                    wishlist.filter(
                        item => item.id !== id
                    );


                saveWishlist(wishlist);

                displayWishlist();

            }
        );

    });


    // STATUS SELECT

    const statusSelects =
        document.querySelectorAll(
            ".collection-status"
        );


    statusSelects.forEach(select => {

        select.addEventListener(
            "change",
            () => {

                const id =
                    Number(select.dataset.id);

                const newStatus =
                    select.value;

                const wishlist =
                    getWishlist();


                const product =
                    wishlist.find(
                        item => item.id === id
                    );


                if (product) {

                    product.status =
                        newStatus;

                    saveWishlist(wishlist);

                }

            }
        );

    });


    // ADD TO CART

    const cartButtons =
        document.querySelectorAll(
            ".collection-cart-button"
        );


    cartButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    Number(button.dataset.id);

                const wishlist =
                    getWishlist();

                const product =
                    wishlist.find(
                        item => item.id === id
                    );


                if (!product) return;


                let cart = getCart();


                const existing =
                    cart.find(
                        item => item.id === id
                    );


                if (existing) {

                    existing.quantity++;

                } else {

                    cart.push({

                        id: product.id,
                        name: product.name,
                        category: product.category,
                        price: product.price,
                        image: product.image,
                        quantity: 1

                    });

                }


                localStorage.setItem(
                    "toyHavenCart",
                    JSON.stringify(cart)
                );


                updateCartCount();


                button.textContent =
                    "Added ✓";


                setTimeout(() => {

                    button.textContent =
                        "Add to Cart";

                }, 1500);

            }
        );

    });

}


// ==========================================
// INITIAL LOAD
// ==========================================

displayWishlist();
updateCartCount();