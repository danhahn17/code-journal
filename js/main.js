// /* global data */

const $displayedImage = document.getElementById('displayed-image');
const $inputImage = document.getElementById('input-image-url');

function urlToImage(event) {
  const inputURL = event.target.value;
  $displayedImage.setAttribute('src', inputURL);
}

$inputImage.addEventListener('input', urlToImage);
