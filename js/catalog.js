  var sortlink1 = document.querySelector(".catalog-product__link-1");
  var sortlink2 = document.querySelector(".catalog-product__link-2");
  var sort = document.querySelector(".sort-link");
  var cartlink = document.querySelector(".button__buy--popup");
  var cartpopup = document.querySelector(".modal-cart");
  var cartclose = cartpopup.querySelector(".modal-cart__btn-close");
  var cartclose2 = cartpopup.querySelector(".modal-cart__btn");

  sortlink1.addEventListener("click", function (evt) {
    sort.classList.remove("catalog-product__link-active");
  });

  sortlink2.addEventListener("click", function (evt) {
    sort.classList.remove("catalog-product__link-active");
  });

  cartlink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartpopup.classList.add("modal-cart-show");
  });

  cartclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartpopup.classList.remove("modal-cart-show");
  });

  cartclose2.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartpopup.classList.remove("modal-cart-show");
  });

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (cartpopup.classList.contains("modal-cart-show")) {
      cartpopup.classList.remove("modal-cart-show");
      }
    }
  });
