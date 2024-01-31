import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line

// Change code below this line

// ###############################################################
// Variable Declarations and Assignments
// ###############################################################
const imageGallery = document.querySelector('.gallery');
imageGallery.addEventListener('click', clickOnImage);

// ###############################################################
// Functions
// ###############################################################
function clickOnImage(event) {
  event.preventDefault();
}

// ~~~~~~~~~~
function renderImages() {
  const elementsArray = [];

  for (const item of galleryItems) {
    const liInstance = document.createElement('li');
    const aInstance = document.createElement('a');
    const imgInstance = document.createElement('img');

    const largeImage = item.original;
    const smallImage = item.preview;
    const imageAlt = item.description;

    liInstance.classList.add('gallery__item');

    aInstance.classList.add('gallery__link');
    aInstance.setAttribute('href', largeImage);

    imgInstance.classList.add('gallery__image');
    imgInstance.setAttribute('src', smallImage);
    imgInstance.setAttribute('alt', imageAlt);

    liInstance.append(aInstance);
    aInstance.append(imgInstance);
    elementsArray.push(liInstance);
  }

  imageGallery.append(...elementsArray);
}

// ###############################################################
// Initialization
// ###############################################################
renderImages();

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
