import list from './list';
import initEventEdit from './edit';
import initEventDelete from './delete';
import filter from './filter';
import initEventsAdd from './add';

export default async function initEvents() {
  initEventsAdd();
  if (await list()) {
    initEventDelete();
    initEventEdit();
    filter();
  }
}
