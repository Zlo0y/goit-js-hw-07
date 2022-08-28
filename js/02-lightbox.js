import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function galleryRender(gallary) {
    const renderingEl = gallary.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join('');
    galleryContainer.innerHTML = renderingEl;
}

function openLightbox(container) {
    container.addEventListener('click', (e) => e.preventDefault());
};

galleryRender(galleryItems);
new SimpleLightbox('.gallery a', { captions: true, captionDelay: 250 });
openLightbox(galleryContainer);