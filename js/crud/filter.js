export default function filter() {
  const restaurantes = document.querySelectorAll('#restaurante');
  const inputFiltro = document.querySelector('#filter');
  inputFiltro.addEventListener('input', () => {
    if (inputFiltro.value.length > 0) {
      restaurantes.forEach(rest => {
        const id = rest.querySelector('#restaurante-nome');
        const exp = new RegExp(inputFiltro.value, 'i');
        if (exp.test(id.textContent)) {
          rest.classList.remove('hide');
        } else {
          rest.classList.add('hide');
        }
      });
    } else {
      restaurantes.forEach(rest => {
        rest.classList.remove('hide');
      });
    }
  });
}
