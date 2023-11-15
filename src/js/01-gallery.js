// Add imports above this line
// import { galleryItems } from './gallery-items';

import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
let activeLightbox = null;

function renderGallery() {
  const galleryHTML = galleryItems
    .map(
      (item, index) => `
        <li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
              data-index="${index}"
            />
          </a>
        </li>
      `
    )
    .join('');
  gallery.innerHTML = galleryHTML;
}

renderGallery();

gallery.addEventListener('click', (el) => {
  el.preventDefault();
  const target = el.target;
  if (target.tagName === 'IMG') {
    const index = Number(target.dataset.index);
    const imageSrc = galleryItems[index].original;

    const instance = basicLightbox.create(`
      <img src="${imageSrc}" width="800" height="600">
    `);

    instance.show();

    activeLightbox = instance;

    document.addEventListener('keydown', onKeyPress);
  }
});

function onKeyPress(el) {
  if (el.key === 'Escape' && activeLightbox) {
    activeLightbox.close();
    document.removeEventListener('keydown', onKeyPress);
  }
}
console.log(galleryItems);

