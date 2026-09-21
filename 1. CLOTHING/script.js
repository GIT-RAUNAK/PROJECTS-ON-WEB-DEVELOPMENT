const products = [
    {
        id: "#623357",
        name: "RØGUE.",
        category: "men",
        color: "metal"
    },

    {
        id: "#623358",
        name: "RØGUE GREEN",
        category: "men",
        color: "green"
    },

    {
        id: "#623359",
        name: "RØGUE OVERSHIRT",
        category: "men",
        color: "black"
    }
];

//FEATURE 1 — COLOR SELECTION

let selectedColor = "metal";

const metalButton = document.querySelector(".color-metal");
const greenButton = document.querySelector(".color-green");

function renderColorSelection() {
    metalButton.classList.remove("selected");
    greenButton.classList.remove("selected");

    if(selectedColor === "green"){
        greenButton.classList.add("selected");
    }
    if(selectedColor === "metal"){
        metalButton.classList.add("selected");
    }
}

function selectColor(color){
    selectedColor  = color;
    console.log("Selected Color:", selectedColor);
    renderColorSelection();
}

metalButton.addEventListener("click", function(){
    selectColor("metal");
});

greenButton.addEventListener("click", function(){
    selectColor("green");
});

renderColorSelection();

//FEATURE 2 — SIZE SELECTION

let selectedSize = null;

const sizeButtons = document.querySelectorAll(".size-options button");

function renderSizeSelection(){
    sizeButtons.forEach(function(button){
        button.classList.remove("selected");
    });
    sizeButtons.forEach(function(button){
        if(button.innerHTML === selectedSize){
            button.classList.add("selected");
        }
    });
}

function selectSize(size){
    selectedSize = size;
    console.log("Selected Size:", selectedSize);
    renderSizeSelection();
}

sizeButtons.forEach(function (button){
    button.addEventListener("click", function(){
        selectSize(button.innerHTML);
    });
});

// FEATURE 3 - WISHLIST

let isWishlisted = false;

const wishlistButton = document.querySelector(".wishlist-button");

function renderWishlist(){
    if(isWishlisted){
        wishlistButton.innerHTML="♥";
        wishlistButton.classList.add("active");
    }
    else{
        wishlistButton.innerHTML="♡";
        wishlistButton.classList.remove("active");
    }
}

function toggleWishlist(){
    isWishlisted = !isWishlisted;
    console.log("Wishlist:", isWishlisted);
    renderWishlist();
}

wishlistButton.addEventListener("click", function(){
    toggleWishlist();
});

renderWishlist();

// FEATURE 4 — ADD TO SHOPPING BAG

const cart = [];

const addToBagButton = document.querySelector(".add-to-bag");

function addToBag() {
    if(selectedSize === null){
        alert("Please select a size");
        return;
    }
    const product = {
        productId : "623357",
        productName : "ROGUE.",
        color : selectedColor,
        size : selectedSize,
        quantity : 1
    };

    cart.push(product);
    console.log("Cart:", cart);
    renderCartCount();
}

addToBagButton.addEventListener("click", function(){
    addToBag();
});

// FEATURE 5 — CART COUNT

const cartCount = document.querySelector(".cart-count");

function renderCartCount(){
    cartCount.innerHTML = cart.length;
}

renderCartCount();

// FEATURE 6 — SEARCH

let isSearchOpen = false;

const searchButton = document.querySelector(".search-button");
const searchPanel = document.querySelector(".search-panel");
const searchInput = document.querySelector(".search-input");
const searchClose = document.querySelector(".search-close");

const searchMessage = document.querySelector(".search-message");

function renderSearch() {
    if(isSearchOpen) {
        searchPanel.classList.add("active");
    }
    else{
        searchPanel.classList.remove("active");
    }
}

function openSearch() {
    isSearchOpen = true;
    renderSearch();
    searchInput.focus();
}

function closeSearch() {
    isSearchOpen = false;
    renderSearch();
    searchInput.value = "";
}

searchButton.addEventListener("click", function() {
    openSearch();
});

searchClose.addEventListener("click", function() {
    closeSearch();
});

searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.trim();
    console.log("Search:", searchText);
    if(searchText === ""){
        searchMessage.innerHTML = "";
        searchResults.innerHTML = "";
        return;
    }
    const results = searchProducts(searchText);
    searchMessage.innerHTML = results.length + " PRODUCT(S) FOUND";
    renderSearchResults(results);
});

renderSearch();

// FEATURE 7 — PRODUCT SEARCH / SEARCH RESULTS

const searchResults = document.querySelector(".search-results");

function searchProducts(query) {
    const searchText = query.toLowerCase().trim();
    if(searchText === ""){
        return [];
    }
    const results = products.filter(function (product) {
        return product.name.toLowerCase().includes(searchText);
    });
    return results;
}

function renderSearchResults(results) {
    searchResults.innerHTML = "";
    if(results.length === 0){
         searchResults.innerHTML = `NO PRODUCTS FOUND`;
         return;
    }
    results.forEach(function (product) {
        const result = document.createElement("div");
        result.classList.add("search-result");
        result.innerHTML = `
            <span>${product.name}</span>
            <span>${product.id}</span>
        `;
        searchResults.appendChild(result);
    });
}

