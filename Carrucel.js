document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('carruselAbanico');
  const btnAnterior = document.getElementById('btnAnterior');
  const btnSiguiente = document.getElementById('btnSiguiente');

  if (!contenedor || !btnAnterior || !btnSiguiente) {
    console.error("Faltan elementos HTML por identificar (IDs o Clases).");
    return;
  }

  const posiciones = [
    { rotate: -21, translateY: 50, zIndex: 1 },
    { rotate: -15, translateY: 28, zIndex: 2 },
    { rotate: -9,  translateY: 10, zIndex: 3 },
    { rotate: -3,  translateY: -5, zIndex: 4 }, 
    { rotate: 3,   translateY: -5, zIndex: 4 }, 
    { rotate: 9,   translateY: 10, zIndex: 3 },
    { rotate: 15,  translateY: 28, zIndex: 2 },
    { rotate: 21,  translateY: 50, zIndex: 1 },
];

  function actualizarCarrusel() {
    const tarjetas = Array.from(contenedor.querySelectorAll('.Tarjetas'));
    tarjetas.forEach((tarjeta, index) => {
      const config = posiciones[index];
      if (config) {
        tarjeta.style.transform = `rotate(${config.rotate}deg) translateY(${config.translateY}px)`;
        tarjeta.style.zIndex = config.zIndex;
      }
    });
  }

  btnSiguiente.addEventListener('click', () => {
    contenedor.appendChild(contenedor.firstElementChild);
    actualizarCarrusel();
  });

  btnAnterior.addEventListener('click', () => {
    contenedor.insertBefore(contenedor.lastElementChild, contenedor.firstElementChild);
    actualizarCarrusel();
  });

  contenedor.addEventListener('click', (e) => {
    const tarjetaClic = e.target.closest('.Tarjetas');
    if (!tarjetaClic) return;

    const tarjetas = Array.from(contenedor.querySelectorAll('.Tarjetas'));
    const index = tarjetas.indexOf(tarjetaClic);

    if (index !== 2 && index !== 3) {
      e.preventDefault();
      if (index < 2) {
        for (let i = 0; i < 2 - index; i++) btnAnterior.click();
      } else if (index > 2) {
        for (let i = 0; i < index - 2; i++) btnSiguiente.click();
      }
    }
  });

  actualizarCarrusel();
});