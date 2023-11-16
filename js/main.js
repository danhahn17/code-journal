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

// function renderEntry(entry) {
//   const $returnEntry = document.createElement('li');

//   const $rowDiv = document.createElement('div');
//   $rowDiv.className = 'row';

//   const $firstColumnHalfDiv = document.createElement('div');
//   $firstColumnHalfDiv.className = 'column-half';

//   const $imageEntry = document.createElement('img');
//   $imageEntry.setAttribute('src', $photoUrlInput);
//   $imageEntry.className = 'dummy-image';
//   $imageEntry.setAttribute('alt', 'url image');

//   const $secondColumnHalfDiv = document.createElement('div');
//   $secondColumnHalfDiv.className = 'column-half';

//   const $titleEntry = document.createElement('div');
//   $titleEntry.className = 'entry-image-title text-spacing';

//   const $notesEntry = document.createElement('div');
//   $notesEntry.className = 'text-spacing';

//   $returnEntry.appendChild($rowDiv);
//   $rowDiv.appendChild($firstColumnHalfDiv);
//   $firstColumnHalfDiv.appendChild($imageEntry);
//   $rowDiv.appendChild($secondColumnHalfDiv);
//   $secondColumnHalfDiv.appendChild($titleEntry);
//   $secondColumnHalfDiv.appendChild($notesEntry);

//   return $returnEntry;
// }
