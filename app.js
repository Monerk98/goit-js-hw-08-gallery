const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// const gal = ({preview, original, description}) =>
//   `<li class="gallery__item">
//   <a
//   class="gallery__link"
//   href="${original}">
//   <img class="gallery__image" src = ${preview} data-source="${original}" alt = ${description}>
//   </a>
//   </li>`

//   const block = galleryItems.map(gal).join('');
//   const gale = document.querySelector('.gallery')
//   gale.insertAdjacentHTML("afterbegin", block)
  
// console.log(gale)



const galleryContainer = document.querySelector(".js-gallery");
const lightBoxContainer = document.querySelector(".js-lightbox");
const lightBoxImage = document.querySelector(".lightbox__image");
const lightBoxButtonClose = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const lightBoxContent = document.querySelector('.lightbox')

galleryContainer.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);

galleryContainer.addEventListener("click", galleryClick);
lightBoxButtonClose.addEventListener("click", onButtonClick);

// console.log(createGalleryMarkup(galleryItems));

function galleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const mainGallery = event.target.closest(".gallery__item");
  lightBoxContainer.classList.add("is-open");
  lightBoxImage.src = event.target.parentElement.href;
}

function onButtonClick() {
  lightBoxContainer.classList.remove("is-open");
  lightBoxImage.src = " ";

}

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `;
    })
    .join("");
}


document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape'){
    lightBoxContent.classList.remove('is-open')
  }
});
const lightboxOverlay = document.querySelector('.lightbox__overlay');
lightboxOverlay.addEventListener('click' , () => {
  lightBoxContent.classList.remove('is-open')
});
// window.addEventListener('keydown', function (event) {
//   if (event.key === 'Escape') {
//     lightBoxContent.style.display = 'none';
//     lightBoxImage.style.display = 'none'
//   }
// })

// window.onclick = function(ev){
//   if(ev.target === lightBoxContent){
//     lightBoxContent.style.display = 'none'
//     lightBoxImage.style.display = 'none'
//   }
// }



