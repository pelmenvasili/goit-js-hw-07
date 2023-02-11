import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryItemsRef = galleryItems
  .map(
    (current) =>
      `<div class = "gallery__item"><a class="gallery__link" href="${current.original}"><img class="gallery__image"
      src="${current.preview}"
    data-source="${current.original}"
    alt="${current.description}"/></a></div>`
  )
  .join("");

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("afterbegin", galleryItemsRef);

const instance = basicLightbox.create(
  `<img class="modal-img" src ="" alt="" width="800" height="600">`
);

const onImageClick = (event) => {
  event.preventDefault();
  if (!event.target.nodeName === "IMG") {
    return;
  }
  instance.show();
  const bigImage = document.querySelector(".modal-img");
  bigImage.alt = event.target.alt;
  bigImage.src = event.target.dataset.source;
  window.addEventListener("keydown", onEscModalClose);
};

const onEscModalClose = (evt) => {
  if (evt.code === "Escape") {
    window.removeEventListener("keydown", onEscModalClose);
    instance.close();
  }
};
galleryRef.addEventListener("click", onImageClick);
galleryRef.addEventListener("click", onEscModalClose);
