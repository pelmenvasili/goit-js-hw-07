import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryItemsRef = galleryItems
  .map(
    (current) => `<a class="gallery__item" href=${current.original}>
  <img class="gallery__image" src=${current.original} alt=${current.description}/>
</a>`
  )
  .join("");

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("afterbegin", galleryItemsRef);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


