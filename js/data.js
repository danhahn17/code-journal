/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
});

const previousData = localStorage.getItem('data');
if (previousData) {
  data = JSON.parse(previousData);
}
