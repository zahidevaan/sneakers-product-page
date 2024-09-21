const hamburger = document.querySelector(".mobile-menu img");
const menuClose = document.querySelector(".menu-close");
const menuWrapper = document.querySelector(".mobile-menus-wrapper");

const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart-wrapper");
const cartClose = document.querySelector(".cart-close");

// for menu
handlePopups(
  hamburger,
  menuClose,
  menuWrapper,
  "translateX(0%)",
  "translateX(-100%)"
);

// for cart
handlePopups(cartIcon, cartClose, cart, "scale(1)", "scale(0)");

// Handle popups function
function handlePopups(openBtn, closeBtn, target, opneAction, colseAction) {
  openBtn.addEventListener("click", () => {
    target.style.transform = opneAction;
  });
  closeBtn.addEventListener("click", () => {
    target.style.transform = colseAction;
  });
}

function handleRelaod() {
  const a = document.querySelectorAll("a");
  a.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
}
handleRelaod();
// Product Slider Js

function handleSlider() {
  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}

handleSlider();

function handleQuantity() {
  const quantityInput = document.querySelector(".input");
  const quantityMunus = document.querySelector(".munus");
  const quantityPlus = document.querySelector(".plus");

  let quantity = 0;

  quantityPlus.addEventListener("click", () => {
    quantity++;
    quantityInput.value = quantity;
  });

  quantityMunus.addEventListener("click", () => {
    if (quantity > 0) {
      quantity--;
      quantityInput.value = quantity;
    }
  });
}

handleQuantity();
