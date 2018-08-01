import { randomRequest } from './api';

export default function random() {
  const randomButton = document.querySelector('#random-button');
  const randomResult = document.querySelector('#random-result');
  const loading = document.querySelector('.loading');
  randomButton.addEventListener('click', async () => {
    try {
      loading.classList.remove('hide');
      randomButton.classList.add('hide');
      const { data } = await randomRequest();
      const restaurant = data[0];
      document.querySelector('#name').textContent = restaurant.name;
      document.querySelector('#amount').textContent = `Preço: ${restaurant.amount}`;
      document.querySelector('#address').textContent = `Endereço: ${restaurant.address}`;
      loading.classList.add('hide');
      randomResult.classList.remove('hide');
    } catch (error) {
      console.log(`Random error: ${error}`);
    }
  });
}
