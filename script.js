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
      intro.style.top = "-120vh";
    }, 3200);
  });
}

// POP UP

const popup = document.querySelector(".popupContainer");
const buttonx = document.getElementById("x");
function popUp() {
  if (isSmallScreen) {
    popup.style.top = "100px";
  } else {
    popup.style.top = "50px";
  }
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

  if (carritoListarContainer.classList.contains("showCarrito")) {
    body.style.overflow = "hidden"; // Desactiva el scroll del body
  } else {
    body.style.overflow = "";
  }
});

// SLIDER

const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const slider = document.getElementById("slider");
const sliderSection = document.querySelectorAll(".sliderSection");

btnLeft.addEventListener("click", (e) => moveToLeft());
btnRight.addEventListener("click", (e) => moveToRight());

setTimeout(() => {
  setInterval(() => {
    moveToRight();
  }, 7000);
}, 12000);

let operacion = 0;
let counter = 0;
let widthImg = 100 / sliderSection.length;

function moveToRight() {
  if (counter >= sliderSection.length - 1) {
    counter = 0;
    operacion = 0;
    slider.style.transform = `translate(-${operacion}%)`;
    return;
  }
  counter++;
  operacion = operacion + widthImg;
  slider.style.transform = `translate(-${operacion}%)`;
}

function moveToLeft() {
  counter--;
  if (counter < 0) {
    counter = sliderSection.length - 1;
    operacion = widthImg * (sliderSection.length - 1);
    slider.style.transform = `translate(-${operacion}%)`;
    return;
  }
  operacion = operacion - widthImg;
  slider.style.transform = `translate(-${operacion}%)`;
}

// AOS

AOS.init();

// MAP

function initMap() {
  var isSmallScreen = window.innerWidth <= 737;
  var centerPosition = isSmallScreen
    ? { lat: 10, lng: 0 }
    : { lat: 20, lng: 0 };
  var zoomPosition = isSmallScreen ? 1 : 1.5;
  var options = {
    center: centerPosition,
    zoom: zoomPosition,
    // gestureHandling: "none",
    mapTypeControl: false,
    draggable: true,
    fullscreenControl: false,
    disableDefaultUI: true,
    styles: [
      {
        elementType: "geometry",
        stylers: [{ color: "#d1d1d1" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#ebebeb" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{ color: "#a3a3a3" }],
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative",
        elementType: "labels.text",
        stylers: [{ visibility: "off" }],
      },
    ],
  };
  const map = new google.maps.Map(document.getElementById("map"), options);

  function crearMarcador(lat, lng, iconUrl, title, infoContent) {
    const markerIcon = {
      url: iconUrl,
      scaledSize: new google.maps.Size(40, 45),
    };

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
      title: title,
      icon: markerIcon,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: infoContent,
    });

    marker.addListener("mouseover", function () {
      infoWindow.open(map, marker);
    });

    marker.addListener("mouseout", function () {
      setTimeout(() => {
        infoWindow.close();
      }, 1000);
    });

    return marker;
  }

  crearMarcador(
    35.86166,
    104.195397,
    "assets/img/marker.png",
    "marcador",
    "China"
  );

  crearMarcador(
    37.09024,
    -95.712891,
    "assets/img/marker.png",
    "marcador",
    "USA"
  );

  crearMarcador(
    55.75222,
    37.61556,
    "assets/img/marker.png",
    "marcador",
    "Rusia"
  );

  crearMarcador(
    7.48801,
    -65.87919,
    "assets/img/marker.png",
    "marcador",
    "Venezuela"
  );

  crearMarcador(
    5.963889,
    -73.796387,
    "assets/img/marker.png",
    "marcador",
    "Colombia"
  );

  crearMarcador(-6, -50.796387, "assets/img/marker.png", "marcador", "Brasil");

  crearMarcador(-32, 25, "assets/img/marker.png", "marcador", "Sudafrica");
}

initMap();

// Categorias Productos

const dropDownButtons = document.querySelectorAll(".dropDownBtn");

dropDownButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const dropDownId = button.getAttribute("id").replace("Btn", "DropDown");

    toggleDropdown(dropDownId, button);
  });
});

function toggleDropdown(id, btn) {
  const allDropdowns = document.querySelectorAll(".dropDownContent");
  const allButtons = document.querySelectorAll(".dropDownBtn");

  // Cerrar todos los dropdowns y quitar la clase activa de todos los botones
  allDropdowns.forEach((dropdown) => {
    if (dropdown.id !== id) {
      dropdown.style.maxHeight = "0"; // Cerrar los que no están seleccionados
    }
  });

  allButtons.forEach((button) => {
    if (button !== btn) {
      button.classList.remove("active"); // Quitar la clase activa de los otros botones
    }
  });

  // Alternar el dropdown actual
  const dropdown = document.getElementById(id);
  const isActive = btn.classList.contains("active");

  if (isActive) {
    dropdown.style.maxHeight = "0"; // Cerrar si está activo
    btn.classList.remove("active"); // Eliminar la clase activa del botón
  } else {
    dropdown.style.maxHeight = dropdown.scrollHeight + "px"; // Abrir el dropdown
    btn.classList.add("active"); // Agregar la clase activa al botón
  }
}

const btnCategoria = document.querySelectorAll(".btnCategoria");

btnCategoria.forEach((boton) => {
  boton.addEventListener("click", () => {
    const categoria = boton.dataset.categoria;

    // Si la categoría es "todos", cerrar todos los dropdowns
    if (categoria == "todos") {
      cargarProductos(bdProductos.traerRegistros());

      const allDropdowns = document.querySelectorAll(".dropDownContent");

      // Cerrar todos los dropdowns al seleccionar "todos"
      allDropdowns.forEach((dropdown) => {
        dropdown.style.maxHeight = "0";
      });

      // Quitar la clase activa de todos los botones dropdown
      const allButtons = document.querySelectorAll(".dropDownBtn");
      allButtons.forEach((button) => {
        button.classList.remove("active");
      });
    } else {
      // cargar productos según la categoría seleccionada
      const productos = bdProductos.registrosPorCategoria(
        boton.dataset.categoria
      );
      cargarProductos(productos);
    }
  });
});

const btnNombre = document.querySelectorAll(".btnNombre");

btnNombre.forEach((boton) => {
  boton.addEventListener("click", () => {
    const productos = bdProductos.registroPorNombre(boton.dataset.nombre);
    cargarProductos(productos);
  });
});

// Productos Listar

class BaseDeDatosProductos {
  constructor() {
    this.productos = [];
    this.cargarRegistros();
  }

  async cargarRegistros() {
    const resultado = await fetch("./JSON/productos.json");
    this.productos = await resultado.json();
    this.productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    cargarProductos(this.productos);
  }

  registrosPorCategoria(categoria) {
    return this.productos.filter((producto) => producto.categoria == categoria);
  }

  registroPorNombre(nombre) {
    return this.productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().indexOf(nombre.toLowerCase()) !== -1
    );
  }

  registroPorId(id) {
    return this.productos.find((producto) => producto.id === id);
  }

  traerRegistros() {
    return this.productos;
  }
}

function cargarProductos(productos) {
  const productosListar = document.querySelector(".productosListar");

  if (productosListar) {
    productosListar.innerHTML = "";

    for (const producto of productos) {
      productosListar.innerHTML += `
        <div class="productoContainer">
          <div class="imgContainer">
            <img class="img"src="${producto.img}" alt="${producto.alt}" />
          </div>
          <div class="productoInfo">
            <p class="nombreProducto">${capitalizarPrimeraLetra(
              producto.nombre
            )}</p>
            <div class="precioContainer">
              <p class="precio">$${producto.precio}</p>
              <p class="xKilo"><i class="fa-solid fa-x"></i> kg. </p>
            </div>
          </div>
          <div class="logoContainer">
            <img class="logo" src="${producto.logo}" alt="" />
          </div>
        </div>
      `;
    }
  } else {
    console.error("El contenedor de productos no existe");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const bdProductos = new BaseDeDatosProductos();
});

const bdProductos = new BaseDeDatosProductos();

function capitalizarPrimeraLetra(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
