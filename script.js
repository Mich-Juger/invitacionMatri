// Fecha de la boda
const weddingDate = new Date('2025-05-03T00:00:00');

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
function confirmAttendance() {
  const confirmation = document.getElementById("confirmation");
  confirmation.classList.remove("hidden");
  confirmation.classList.add("fade-in");
}

// Animación al hacer scroll para todas las secciones y elementos
const fadeElements = document.querySelectorAll('.section, .fade-up');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// Cambio gradual de opacidad en el fondo al hacer scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  document.body.style.setProperty('--scroll-opacity', Math.min(0.15 + scrollPosition / 1000, 0.5));
});



