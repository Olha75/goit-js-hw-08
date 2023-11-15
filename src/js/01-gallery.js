// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";


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
  
      const instance = SimpleLightbox.create(`
        <div>
          <img src="${imageSrc}" alt="${galleryItems[index].description}" />
        </div>`,
        {
          onShow: (instance) => {
            window.addEventListener('keydown', onKeyPress);
            activeLightbox = instance;
          },
          onClose: (instance) => {
            window.removeEventListener('keydown', onKeyPress);
            activeLightbox = null;
          },
        }
      );
  
      instance.show();
    }
  });
  
  function onKeyPress(event) {
    if (event.key === 'Escape' && activeLightbox) {
      activeLightbox.close();
    }
  }
  
  console.log(galleryItems);

