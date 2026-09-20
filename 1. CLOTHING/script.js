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