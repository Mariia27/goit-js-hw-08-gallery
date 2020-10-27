
import gelleryItems from './gallery-items.js';

const createPictureCollage = document.querySelector('.js-gallery');
createPictureCollage.addEventListener('click', onРhotoClic);
const parentCardImage = document.querySelector('.js-lightbox');
parentCardImage.addEventListener('click', addClassOnModal)
const closeButton = document.querySelector('.lightbox__button')
closeButton.addEventListener('click', closeModalOnClick);
const overlayEl = document.querySelector('.lightbox__overlay');
const modalOpenImage = document.querySelector('.lightbox__image');


const cardsMurcup = createCards(gelleryItems);
 createPictureCollage.insertAdjacentHTML('beforeend', cardsMurcup)
 function createCards(gelleryItems) {
  return gelleryItems
    .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}}"
    />
  </a>
</li>
  `;
  })
    .join('');
 
}

 
function onРhotoClic(evt) {
  evt.preventDefault();
  const containClassName = evt.target.classList.contains('gallery__image');
   if (!containClassName) {
     return;
   }
  addClassOnModal(parentCardImage);
  modalOpenImage.src = evt.target.dataset.source;
  modalOpenImage.alt = evt.target.alt;

  closeModalOnClick(closeButton);
  closeModalOnClick(overlayEl);
}


//parentCardImage.classList.remove('.is-open');
 function addClassOnModal() {
   parentCardImage.classList.add('is-open');
   return addClassOnModal
 }
function removeClassOnModal() {
  parentCardImage.classList.remove('is-open');
  modalOpenImage.src = "";
  modalOpenImage.alt = '';
}
function closeModalOnClick() {
  parentCardImage.addEventListener('click', removeClassOnModal)
  return closeModalOnClick
  
}