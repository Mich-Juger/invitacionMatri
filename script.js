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




// Función para inicializar el dropdown de menú personalizado
// Función para inicializar el dropdown de menú personalizado
// Función para inicializar el dropdown de menú personalizado
function setupDropdown(dropdownId, optionsListId, hiddenInputId) {
  const dropdown = document.getElementById(dropdownId);
  const optionsList = document.getElementById(optionsListId);
  const hiddenInput = document.getElementById(hiddenInputId);

  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".options-list").forEach((list) => {
      if (list !== optionsList) list.classList.add("hidden");
    });
    optionsList.classList.toggle("hidden");
  });

  optionsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("option")) {
      dropdown.textContent = e.target.textContent;
      hiddenInput.value = e.target.getAttribute("data-value");
      optionsList.classList.add("hidden");
    }
  });

  document.addEventListener("click", () => optionsList.classList.add("hidden"));
}

// Configurar dropdown inicial para el primer invitado
setupDropdown("selectedOption1", "optionsList1", "hiddenInput1");

// Mostrar/Ocultar formulario
function toggleForm() {
  const formContainer = document.getElementById("attendance-form");
  formContainer.classList.toggle("hidden");
}

// Función para agregar un segundo invitado dinámicamente
let personAdded = false;
document.getElementById("add-person").addEventListener("click", function () {
  if (personAdded) {
    alert("Solo puedes agregar un máximo de 2 personas.");
    return;
  }

  const guestsContainer = document.getElementById("guests-container");

  // Crear el nuevo invitado
  const newPerson = document.createElement("div");
  newPerson.classList.add("person");
  newPerson.innerHTML = `
    <label for="nombre-invitado-2">Nombre completo:</label>
    <input type="text" id="nombre-invitado-2" name="Nombre Invitado 2" placeholder="" required>
    <label>Menú:</label>
    <div class="custom-dropdown">
      <div class="dropdown-wrapper">
        <div class="selected-option" id="selectedOption2">Selecciona una opción...</div>
        <ul class="options-list hidden" id="optionsList2">
          <li class="option" data-value="Vegetariano">Menú Vegetariano</li>
          <li class="option" data-value="Vegano">Menú Vegano</li>
          <li class="option" data-value="Omnívoro">Menú Tradicional</li>
        </ul>
      </div>
      <input type="hidden" id="hiddenInput2" name="Preferencia 2" required>
    </div>
  `;

  // Agregar el nuevo invitado al contenedor
  guestsContainer.appendChild(newPerson);

  // Inicializar dropdown del segundo invitado
  setupDropdown("selectedOption2", "optionsList2", "hiddenInput2");

  personAdded = true; // Limitar a un solo invitado adicional
  this.style.display = "none"; // Ocultar el botón
});

// Enviar datos a Google Sheets
document.getElementById("attendanceGoogleForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("https://script.google.com/macros/s/AKfycbxdreE61eNx7b5Q0sNXheotnOtC3KAX6Tuzezrg6eScGbNJmBUoADv16XlzuoIJu2Hv/exec", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      alert("Datos enviados correctamente.");
      this.reset();
      location.reload(); // Recargar formulario después de envío
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error al enviar los datos. Inténtalo nuevamente.");
    });
});
