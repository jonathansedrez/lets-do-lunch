export const isNotNull = str => {
  if (!str.length) {
    alert('Nome nao pode ficar vazio');
    return false;
  }
  return true;
};

export function getRowValue(event, column) {
  return event.parentNode.parentNode.children[column].innerHTML;
}

export function createTd(elements) {
  const td = document.createElement('td');
  if (Array.isArray(elements)) {
    elements.forEach(element => {
      td.append(element);
    });
  } else {
    td.textContent = elements;
  }
  return td;
}

export function createTr(elements) {
  const tr = document.createElement('tr');
  elements.forEach(element => {
    tr.append(element);
  });
  return tr;
}

export function isEmptyFieldAmount(amount) {
  if (!amount.length) {
    return '0';
  }
  return amount;
}

export function isEmptyFieldAddress(address) {
  if (!address.length) {
    return 'Não informado';
  }
  return address;
}
