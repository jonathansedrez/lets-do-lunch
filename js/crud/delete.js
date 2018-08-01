import { deleteRestaurantRequest } from '../api';
import { getRowValue } from '../utils';

async function deleteRestaurant(id) {
  try {
    const { data } = await deleteRestaurantRequest(id);
    alert(data.message);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

export default function initEventDelete() {
  const btnDelete = document.querySelectorAll('#delete-button');
  btnDelete.forEach(btn => {
    btn.addEventListener('click', event => {
      deleteRestaurant(getRowValue(event.target, 0));
    });
  });
}
