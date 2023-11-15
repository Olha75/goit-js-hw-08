// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
gallery.addEventListener("click", onClick);

const galleryItemsList = document.querySelectorAll('.gallery__item');
galleryItemsList.forEach((item) => {
  item.style.listStyle = 'none';
});


function onClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return
  }
  
  const currentPhoto = event.target;
  const originalPhoto = currentPhoto.dataset.source;
  const descriptionPhoto = currentPhoto.alt;

  const instance = new SimpleLightbox(
    `<div>
      <img src="${originalPhoto}" alt="${descriptionPhoto}" />
    </div>`,
    {
      onShow: (instance) => {window.addEventListener("keydown", onKeyPress);},
   
      onClose: (instance) => {window.removeEventListener("keydown", onKeyPress);},
    }
  );
  instance.show();
  
  function onKeyPress(el) {
    if (el.key === "Escape") {
      instance.close();
    }
  }

}

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => 
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  
console.log(galleryItems);

