// SIBEDAR
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const hamburger = document.querySelector('.hamburger');

  // Alternar la clase 'show' para el sidebar
  sidebar.classList.toggle('show');

  // Ocultar el botón de hamburguesa mientras el sidebar está activo
  if (sidebar.classList.contains('show')) {
    hamburger.classList.add('hidden');
  } else {
    hamburger.classList.remove('hidden');
  }
}


//NUESTRA BODA ES...


document.addEventListener("DOMContentLoaded", () => {
  const flor = document.querySelector(".flor-decorativa");
  const nuestraBodaSection = document.getElementById("nuestra-boda-sera");

  // Función para comprobar si la sección está visible
  function isSectionInViewport() {
    const sectionTop = nuestraBodaSection.getBoundingClientRect().top;
    const sectionBottom = nuestraBodaSection.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Verifica si cualquier parte de la sección es visible en la ventana
    return sectionTop < windowHeight && sectionBottom > 0;
  }

  // Escucha el scroll y activa o desactiva la clase según visibilidad
  function handleScroll() {
    if (isSectionInViewport()) {
      flor.classList.add("active");
    } else {
      flor.classList.remove("active");
    }
  }

  window.addEventListener("scroll", handleScroll);

  // Ejecuta al cargar para el caso en que ya esté visible
  handleScroll();
});





// Fecha de la boda
const weddingDate = new Date('2025-05-03T00:00:00');

// Nuestra boda Será

// Función para alternar el popup
// Función para mostrar u ocultar el popup
function toggleCalendarPopup() {
  const popup = document.getElementById('calendar-popup');
  popup.classList.toggle('show');
}

function toggleCalendarPopup() {
  const popup = document.getElementById("calendar-popup");
  popup.classList.toggle("hidden"); // Ocultar o mostrar
  popup.classList.toggle("show");  // Aplica la animación
}

document.addEventListener("click", function (event) {
  const popup = document.getElementById("calendar-popup");
  const isClickInside = popup.contains(event.target) || event.target.closest(".btn-standard");

  if (!isClickInside && popup.classList.contains("show")) {
    toggleCalendarPopup();
  }
});



// ITINERARIO botones de navegación

// Variable para llevar el control del índice actual
let currentSlide = 0;

// Función para mover el carrusel
function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');

  // Número total de elementos
  const totalSlides = items.length;

  // Actualizar el índice actual
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Mover el carrusel
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Actualizar las pelotitas activas
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

// Evento de clic en las pelotitas (opcional para sincronizar)
document.querySelectorAll('.dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.dot');

    // Actualizar el índice actual
    currentSlide = index;

    // Mover el carrusel
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Actualizar las pelotitas activas
    dots.forEach(dot => dot.classList.remove('active'));
    dot.classList.add('active');
  });
});


// Función para calcular y actualizar el contador
function updateCountdown() {
  const today = new Date();
  const timeDifference = weddingDate - today;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Actualizar los valores en cada elemento
    document.getElementById('days').querySelector('.number').textContent = days;
    document.getElementById('hours').querySelector('.number').textContent = hours;
    document.getElementById('minutes').querySelector('.number').textContent = minutes;
    document.getElementById('seconds').querySelector('.number').textContent = seconds;
  } else {
    document.getElementById('countdown').textContent = "¡Hoy es el gran día!";
  }
}

// Llamar a la función cada segundo para actualizar el contador
setInterval(updateCountdown, 1000);

// CONFIRMACIÓN DE ASISTENCIA
// Función para mostrar/ocultar el formulario
function toggleForm() {
  const form = document.getElementById('attendance-form');
  form.classList.toggle('hidden'); // Alterna la clase "hidden"
}


// Conexión con Google Sheets
// Conexión con Google Sheets

document.getElementById('attendanceGoogleForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío predeterminado del formulario

  // Crear objeto FormData con los datos del formulario
  var formData = new FormData(this);

  // Enviar los datos a la API de Google Apps Script
  fetch('https://script.google.com/macros/s/AKfycby1kam-OIAbFfNoUbLTxeLHn6j_ifLpqSZ9dbBCayrPQX6TRIjuC6gf7SIXsuZ9UZ1R/exec', { // Reemplaza con la URL del Web App
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    alert(data); // Mostrar respuesta de éxito
    this.reset(); // Reiniciar el formulario
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al enviar los datos. Inténtalo nuevamente.');
  });
});


