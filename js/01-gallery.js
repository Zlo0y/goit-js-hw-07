import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function galleryRender(gallary) {
    const renderingEl = gallary.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('');
    galleryContainer.innerHTML = renderingEl;
}

galleryRender(galleryItems);


galleryContainer.addEventListener('click', originalImage)

function originalImage (event) {
        event.preventDefault()
    if(event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `);

instance.show();


window.addEventListener("keydown", setModalListener);

function setModalListener (e) {
    if(e.code === "Escape"){
        instance.close()
        removeCloseListener()
    };

function removeCloseListener () {
    window.removeEventListener("keydown", setModalListener)
        }
    }
};

