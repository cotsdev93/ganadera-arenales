// // INTRO

// const intro = document.querySelector(".intro");
// const logo = document.querySelector(".logoHeader");
// const logoSpan = document.querySelectorAll(".logo");

// function animacionInicial() {
//   setTimeout(() => {
//     logoSpan.forEach((span, idx) => {
//       setTimeout(() => {
//         span.classList.add("active");
//       }, (idx + 1) * 400);
//     });

//     setTimeout(() => {
//       logoSpan.forEach((span, idx) => {
//         setTimeout(() => {
//           span.classList.remove("active");
//           span.classList.add("fade");
//         }, (idx + 1) * 50);
//       });
//     }, 3000);

//     setTimeout(() => {
//       intro.style.top = "-120vh";
//     }, 3200);
//   });
// }

// // POP UP

// const popup = document.querySelector(".popupContainer");
// const buttonx = document.getElementById("x");
// function popUp() {
//   if (isSmallScreen) {
//     popup.style.top = "100px";
//   } else {
//     popup.style.top = "50px";
//   }
// }

// buttonx.addEventListener("click", () => {
//   popup.style.transform = "translateX(-50%) translateY(-100vh)";
// });

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

  allDropdowns.forEach((dropdown) => {
    if (dropdown.id !== id) {
      dropdown.style.maxHeight = "0";
    }
  });

  allButtons.forEach((button) => {
    if (button !== btn) {
      button.classList.remove("active");
    }
  });

  // Alternar el dropdown actual
  const dropdown = document.getElementById(id);
  const isActive = btn.classList.contains("active");

  if (isActive) {
    dropdown.style.maxHeight = "0"; 
    btn.classList.remove("active"); 
  } else {
    dropdown.style.maxHeight = dropdown.scrollHeight + "px"; 
    btn.classList.add("active");
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

    if (productos.length > 0) {
      cargarProductos(productos);
    } else {
      // Busca la categoría del producto en la base de datos
      const categoria = bdProductos.productos.find(
        (producto) =>
          producto.nombre.toLowerCase() === boton.dataset.nombre.toLowerCase()
      )?.categoria; // Obtiene la categoría o undefined si no se encuentra

      noHayProductos(boton.dataset.nombre, categoria);
      console.log("aca");
    }
  });
});

// FORM

const form = document.querySelector(".form");
const input = document.querySelectorAll("input");

form.addEventListener("submit", function (e) {
  setTimeout(vaciarCampos(), 3000);
});

function vaciarCampos() {
  setTimeout(() => {
    input.forEach(function (e) {
      e.value = "";
    });
  }, 2000);
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("https://formsubmit.co/cotsdev93@gmail.com", {
    method: "POST",
    body: new FormData(this),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// Productos Listar

class BaseDeDatosProductos {
  constructor() {
    this.productos = [];
    this.cargarRegistros();
  }

  async cargarRegistros() {
    const resultado = await fetch(
      `./JSON/productos.json?timestamp=${new Date().getTime()}`
    );
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

function noHayProductos(nombre) {
  const productosListar = document.querySelector(".productosListar");

  if (productosListar) {
    productosListar.innerHTML = `
      <div class="noHayProductos">
        <p>Por el momento no contamos con stock de <b>${capitalizarPrimeraLetra(
          nombre
        )}</b></p>
      </div>
    `;
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
            <div class="productoInfo2">
              <div class="precioContainer">
               <p class="precio">$${producto.precio}</p>
                <p class="xKilo"><i class="fa-solid fa-x"></i> kg. </p>
              </div>
              <i class="fa-solid fa-cart-plus"></i>
            </div>
          </div>
          <div class="logoContainer">
            <img class="logo" src="${producto.logo}" alt="" />
          </div>
        </div>
      `;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const bdProductos = new BaseDeDatosProductos();
});

const bdProductos = new BaseDeDatosProductos();

function capitalizarPrimeraLetra(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Carrito

class Carrito {
  constructor() {
    this.carrito = [];
    this.total = 0;
    this.cantidadProductos = 0;

    this.listar();
  }

  estaEnCarrito({ id }) {
    return this.carrito.find((producto) => producto.id === id);
  }

  agregar(producto) {
    const productoEnCarrito = this.estaEnCarrito(producto);

    if (!productoEnCarrito) {
      this.carrito.push({ ...producto, cantidad: 1 });
    } else {
      productoEnCarrito.cantidad += 1;
    }

    this.listar();
  }

  quitar(id) {
    const indice = this.carrito.findIndex((producto) => producto.id == id);

    if (this.carrito[indice].cantidad > 1) {
      this.carrito[indice].cantidad--;
    } else {
      this.carrito.splice(indice, 1);
    }

    this.listar();
  }

  listar() {
    this.total = 0;
    this.cantidadProductos = 0;
    carritoListar.innerHTML = "";

    for (const producto of this.carrito) {
      carritoListar.innerHTML += `
        <div class="productoCarrito">
          <img src="./assets/img/${producto.imagen}" />
          <div class="dataCarrito">
            <p class="cNombre">${producto.nombre}</p>
            <div class="dataCarrito2">
              <p class="cCantidad">x u. ${producto.cantidad}</p>
              <p class="cPrecio">$${producto.precio}</p>
            </div>
            <a href="#" class="btnQuitar" data-id="${producto.id}">
              <i class="fa-solid fa-square-minus"></i>
            </a>
            <a href="#" class="btnAgregar" data-id="${producto.id}">
              <i class="fa-solid fa-square-plus"></i>
            </a>
          </div>
        </div>
        <div class="line"></div>
        `;
      this.total += producto.precio * producto.cantidad;
      this.cantidadProductos += producto.cantidad;
    }

    for (const boton of botonesAgregar) {
      boton.addEventListener("click", (event) => {
        event.preventDefault();
        const idProducto = Number(boton.dataset.id);
        const producto = bd.registroPorId(idProducto);
        console.log(producto);
        carrito.agregar(producto);

        // Toastify({
        //   text: `${producto.nombre} fue agregado al carrito`,
        //   duration: 1500,
        //   style: {
        //     background: "linear-gradient(to right, #00b09b, #96c93d)",
        //   },
        //   offset: {
        //     x: 180,
        //   },
        // }).showToast();
      });
    }

    spanCantidadProductos.innerText = this.cantidadProductos;
    spanTotalCarrito.innerText = this.total;
  }
}

// Ir arriba

const irArriba = document.querySelector(".irArriba");
const footer = document.querySelector("footer");

let lastScrollY = window.scrollY;
let initialScrollDownY = 0;
let scrolledUp = false;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    if (scrolledUp) {
      initialScrollDownY = currentScrollY;
      scrolledUp = false;
    }
    if (currentScrollY > initialScrollDownY + 300) {
      irArriba.classList.add("mostrar");
    }
  } else if (currentScrollY < lastScrollY) {
    irArriba.classList.remove("mostrar");
    scrolledUp = true;
  }

  const footerRect = footer.getBoundingClientRect();
  const buttonRect = irArriba.getBoundingClientRect();

  if (footerRect.top < window.innerHeight) {
    irArriba.style.position = "absolute";
    irArriba.style.top = `${
      window.scrollY + footerRect.top - buttonRect.height - 20
    }px`;
  } else {
    irArriba.style.position = "fixed";
    irArriba.style.top = "85%";
  }

  lastScrollY = currentScrollY;
});

irArriba.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
