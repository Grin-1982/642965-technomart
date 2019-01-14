'use strict';

  var link = document.querySelector(".main-contacts__btn");
  var popup = document.querySelector(".modal-form");
  var close = popup.querySelector(".modal-form__close");
  var name = popup.querySelector(".feedback__write");
  var form = popup.querySelector(".modal-form__feedback");
  var maplink = document.querySelector(".main-contacts__map");
  var mappopup = document.querySelector(".modal-map");
  var mapclose = mappopup.querySelector(".modal-map__close");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-form-show");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-form-show");
  });

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
      if (popup.classList.contains("modal-form-show")) {
        popup.classList.remove("modal-form-show");
      }
    }
  });

  maplink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.add("modal-map-show");
  });

  mapclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.remove("modal-map-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mappopup.classList.contains("modal-map-show")) {
        mappopup.classList.remove("modal-map-show");
      }
    }
  });
