import { listRestaurantRequest } from '../api';
import { createTd, createTr } from '../utils';

function createEditButton() {
  const button = document.createElement('button');
  button.setAttribute('id', 'edit-button');
  button.textContent = 'Editar';
  return button;
}
function createDeleteButton() {
  const button = document.createElement('button');
  button.setAttribute('id', 'delete-button');
  button.textContent = 'Deletar';
  return button;
}
function createButtons() {
  const array = [createDeleteButton(), createEditButton()];
  return createTd(array);
}

function CreateRestaurant(restaurant) {
  const idRestaurant = createTd(restaurant._id);
  idRestaurant.classList.add('hide');
  const nameRestaurant = createTd(restaurant.name);
  nameRestaurant.setAttribute('id', 'restaurante-nome');
  let amountRestaurant = `R$  ${parseFloat(
    createTd(restaurant.amount).textContent
  ).toFixed(2)}`;
  amountRestaurant = createTd(amountRestaurant);
  const tr = createTr([
    idRestaurant,
    nameRestaurant,
    amountRestaurant,
    createTd(restaurant.address),
    createButtons()
  ]);
  tr.setAttribute('id', 'restaurante');
  return tr;
}

export default async function list() {
  const tbody = document.querySelector('#tbody');
  const table = document.querySelector('#restaurant-table');
  const loading = document.querySelector('.loading');
  try {
    table.classList.add('hide');
    loading.classList.remove('hide');
    const { data } = await listRestaurantRequest();
    table.classList.remove('hide');
    loading.classList.add('hide');
    data.forEach(restaurant => {
      tbody.append(CreateRestaurant(restaurant));
    });
    return true;
  } catch (error) {
    console.log(`List error: ${error}`);
    return false;
  }
}
