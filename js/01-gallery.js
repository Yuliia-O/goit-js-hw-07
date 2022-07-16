import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createImage(array) {
    return array.reduce(
        (acc, item) =>
            acc +
            `<a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a>`,
        '',
    );
}

const galleryImages = createImage(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('afterbegin', galleryImages);

function galleryHandler(event) {
    event.preventDefault();
    const originalImage = event.target.dataset.source;
    const modal = basicLightbox.create(`
        <img src="${originalImage}" width="800" height="600">
    `);
    modal.show();
}

galleryEl.addEventListener('click', galleryHandler);
