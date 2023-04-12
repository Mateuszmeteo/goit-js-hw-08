// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";




const galleryBase = document.querySelector('.gallery');


for (const item of galleryItems) {
    const galEl = 
    `<li>
    <a class="gallery__item" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`;
 galleryBase.insertAdjacentHTML('beforeend', galEl)
}
const lightBox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData:"alt",
    showCounter: true,
    scrollbarWidth: 20
})

