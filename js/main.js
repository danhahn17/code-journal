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
  const submitObject = {
    title: $titleInput.value,
    url: $photoUrlInput.value,
    notes: $notesInput.value,
    entryID: data.nextEntryId,
  };
  if (data.editing === null) {
    data.entries.unshift(submitObject);
    $unorderedList.prepend(renderEntry(submitObject));
    data.nextEntryId = data.nextEntryId + 1;
    $displayedImage.src = 'images/placeholder-image-square.jpg';
    $formInput.reset();
  } else {
    submitObject.entryID = data.editing.entryID;
    for (let i = 0; i < data.entries.length; i++) {
      if (submitObject.entryID === data.entries[i].entryID) {
        data.entries[i] = submitObject;
      }
    }
    const $submitObject = renderEntry(submitObject);
    const $originalLi = document.querySelector(
      `[data-entry-id='${data.editing.entryID}']`
    );
    $originalLi.replaceWith($submitObject);
    $editHeader.textContent = 'New Entry';
    data.editing = null;
  }
  viewSwap('entries');
  toggleNoEntries();
});

function renderEntry(entry) {
  const $returnEntry = document.createElement('li');
  $returnEntry.setAttribute('data-entry-id', entry.entryID);

  const $rowDiv = document.createElement('div');
  $rowDiv.className = 'row';

  const $firstColumnHalfDiv = document.createElement('div');
  $firstColumnHalfDiv.className = 'column-half';

  const $imageEntry = document.createElement('img');
  $imageEntry.setAttribute('src', entry.url);
  $imageEntry.className = 'dummy-image';
  $imageEntry.setAttribute('alt', 'url image');

  const $secondColumnHalfDiv = document.createElement('div');
  $secondColumnHalfDiv.className = 'column-half';

  const $titleEntry = document.createElement('div');
  $titleEntry.className = 'entry-image-title text-spacing';
  $titleEntry.textContent = entry.title;

  const $notesEntry = document.createElement('div');
  $notesEntry.className = 'text-spacing';
  $notesEntry.textContent = entry.notes;

  const $pencilIcon = document.createElement('i');
  $pencilIcon.className = 'fa-solid fa-pencil';

  $returnEntry.appendChild($rowDiv);
  $rowDiv.appendChild($firstColumnHalfDiv);
  $firstColumnHalfDiv.appendChild($imageEntry);
  $rowDiv.appendChild($secondColumnHalfDiv);
  $secondColumnHalfDiv.appendChild($titleEntry);
  $titleEntry.appendChild($pencilIcon);
  $secondColumnHalfDiv.appendChild($notesEntry);

  return $returnEntry;
}

const $unorderedList = document.querySelector('.first-list');

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const existingEntries = renderEntry(data.entries[i]);
    $unorderedList.appendChild(existingEntries);
  }
  toggleNoEntries();
  viewSwap(data.view);
});

const $noEntry = document.querySelector('.no-entry');

function toggleNoEntries() {
  if (data.entries.length === 0) {
    $noEntry.className = 'centered-text no-entry';
  } else {
    $noEntry.className = 'centered-text no-entry hidden';
  }
}

const $entries = document.querySelector('[data-view=entries]');
const $entryForm = document.querySelector('[data-view=entry-form]');

function viewSwap(swappyswappy) {
  if (swappyswappy === 'entries') {
    $entries.className = '';
    $entryForm.className = 'hidden';
    data.view = swappyswappy;
  } else if (swappyswappy === 'entry-form') {
    $entries.className = 'hidden';
    $entryForm.className = '';
    data.view = swappyswappy;
  }
}

const $entriesAnchor = document.querySelector('a');
const $newButton = document.querySelector('.new-button');

$entriesAnchor.addEventListener('click', function () {
  viewSwap('entries');
});

$newButton.addEventListener('click', function () {
  viewSwap('entry-form');
});

const $ulElement = document.querySelector('ul');
const $editHeader = document.querySelector('.body-main-header');
const $deleteButton = document.querySelector('.delete-button');
$ulElement.addEventListener('click', function (event) {
  if (event.target.tagName === 'I') {
    viewSwap('entry-form');
    const makeNumber = parseInt(
      event.target.closest('li').getAttribute('data-entry-id')
    );
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryID === makeNumber) {
        data.editing = data.entries[i];
      }
    }
    $titleInput.value = data.editing.title;
    $photoUrlInput.value = data.editing.url;
    $notesInput.value = data.editing.notes;
    $displayedImage.src = data.editing.url;
    $editHeader.textContent = 'Edit Entry';
    $deleteButton.className = 'delete-button';
  }
});

function showPopUp(event) {
  $overlay.className = 'overlay';
}
$deleteButton.addEventListener('click', showPopUp);

const $cancelButton = document.querySelector('.delete-button-cancel');
const $overlay = document.querySelector('.overlay');
function hidePopUp(event) {
  $overlay.className = 'overlay hidden';
}
$cancelButton.addEventListener('click', hidePopUp);

// const $confirmButton = document.querySelector('.delete-button-confirm');
