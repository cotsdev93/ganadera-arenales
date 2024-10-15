// INTRO

const intro = document.querySelector(".intro");
const logo = document.querySelector(".logoHeader");
const logoSpan = document.querySelectorAll(".logo");

function animacionInicial() {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 3000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 3200);
  });
}

// POP UP

const popup = document.querySelector(".popupContainer");
const buttonx = document.getElementById("x");
function popUp() {
  popup.style.top = "50px";
}

buttonx.addEventListener("click", () => {
  popup.style.transform = "translateX(-50%) translateY(-100vh)";
});

// INICIO INTRO Y POP UP

window.addEventListener("DOMContentLoaded", () => {
  animacionInicial();
  setTimeout(() => {
    popUp();
  }, 5000);
});

// NAV

const menu = document.querySelector(".menuContainer");
const navMenu = document.querySelector(".navMenu");
const opcionMenu = document.querySelectorAll(".opcionMenu");
const body = document.querySelector("body");

// const blureado2 = document.querySelector(".blureado2");
// const blureado3 = document.querySelector(".blureado3");
var isSmallScreen = window.innerWidth <= 737;

menu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menu.classList.toggle("opacity");
  body.classList.toggle("hidden");

  // if (isSmallScreen) {
  //   blureado2.classList.toggle("blur");
  //   blureado3.classList.toggle("blur");
  // }
});

opcionMenu.forEach((opcion) => {
  opcion.addEventListener("click", () => {
    navMenu.classList.remove("show");
    menu.classList.remove("opacity");
    body.classList.remove("hidden");
    // if (isSmallScreen) {
    //   blureado2.classList.toggle("blur");
    //   blureado3.classList.toggle("blur");
    // }
  });
});

// CARRITO

const spanTotalCarrito = document.querySelector("#totalCarrito");
const spanCantidadProductos = document.querySelector("#cantidadProductos");
const botonCarrito = document.querySelector("#carrito");
const carritoListar = document.querySelector(".carritoListar");
const carritoListarContainer = document.querySelector(
  ".carritoListarContainer"
);

botonCarrito.addEventListener("click", () => {
  carritoListarContainer.classList.toggle("showCarrito");
  body.classList.toggle("hidden");
});
