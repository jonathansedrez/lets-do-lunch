import { updateRestaurantRequest } from '../api';
import {
  isNotNull,
  getRowValue,
  isEmptyFieldAmount,
  isEmptyFieldAddress
} from '../utils';

const formEdit = document.querySelector('#form-edit');
const modal = document.querySelector('#edit-modal');

async function editRestaurant(id) {
  try {
    const restaurant = {
      id,
      name: formEdit.name.value,
      amount: formEdit.amount.value,
      address: formEdit.address.value
    };
    if (isNotNull(restaurant.name)) {
      restaurant.amount = isEmptyFieldAmount(restaurant.amount);
      restaurant.address = isEmptyFieldAddress(restaurant.address);
      const { data } = await updateRestaurantRequest(restaurant);
      alert(data.message);
      window.location.reload();
    }
  } catch (error) {
    console.log(`Edit error: ${error}`);
  }
}

export default function initEventEdit() {
  const btnEdit = document.querySelectorAll('#edit-button');
  let id = null;
  btnEdit.forEach(btn => {
    btn.addEventListener('click', event => {
      id = getRowValue(event.target, 0);
      formEdit.classList.remove('hide');
      modal.classList.remove('hide');
      formEdit.name.value = getRowValue(event.target, 1);
      formEdit.amount.value = getRowValue(event.target, 2);
      formEdit.address.value = getRowValue(event.target, 3);
    });
  });

  document.querySelector('#form-edit').addEventListener('submit', event => {
    editRestaurant(id);
    event.preventDefault();
  });

  document.querySelector('#close-edit-modal').addEventListener('click', () => {
    formEdit.classList.add('hide');
    modal.classList.add('hide');
  });
}
