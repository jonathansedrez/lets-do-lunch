import { createRestaurantRequest } from '../api';
import { isNotNull, isEmptyFieldAddress, isEmptyFieldAmount } from '../utils';

const modal = document.querySelector('#add-modal');
const formAdd = document.querySelector('#form-add');

async function addRestaurant(form) {
  try {
    const restaurant = {
      name: form.name.value,
      amount: form.amount.value,
      address: form.address.value
    };
    if (isNotNull(restaurant.name)) {
      restaurant.amount = isEmptyFieldAmount(restaurant.amount);
      restaurant.address = isEmptyFieldAddress(restaurant.address);
      const { data } = await createRestaurantRequest(restaurant);
      alert(data.message);
      window.location.reload();
    }
  } catch (error) {
    console.log(`Add error: ${error}`);
  }
}

export default function initEventsAdd() {
  document.querySelector('#open-add-modal').addEventListener('click', () => {
    formAdd.classList.remove('hide');
    modal.classList.remove('hide');
  });
  document.querySelector('#form-add').addEventListener('submit', event => {
    event.preventDefault();
    addRestaurant(formAdd);
  });
  document.querySelector('#close-add-modal').addEventListener('click', () => {
    formAdd.classList.add('hide');
    modal.classList.add('hide');
  });
}
