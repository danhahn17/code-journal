/* global data */

const $displayedImage = document.getElementById('displayed-image');
const $inputImage = document.getElementById('input-image-url');

function urlToImage(event) {
  const inputURL = event.target.value;
  $displayedImage.setAttribute('src', inputURL);
}

$inputImage.addEventListener('input', urlToImage);

const $titleInput = document.querySelector('.actual-title-input');
const $photoUrlInput = document.querySelector('.actual-photo-url-input');
const $notesInput = document.querySelector('.notes-input');
const $formInput = document.querySelector('.form');

$formInput.addEventListener('submit', function (event) {
  event.preventDefault();
  data.entries.unshift({
    title: $titleInput.value,
    url: $photoUrlInput.value,
    notes: $notesInput.value,
    entryID: data.nextEntryId,
  });
  data.nextEntryId = data.nextEntryId + 1;
  $displayedImage.src = 'images/placeholder-image-square.jpg';
  $formInput.reset();
});
