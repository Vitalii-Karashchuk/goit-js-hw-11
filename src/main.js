// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



// import {fetchOption, urlParams, searchApi} from './js/pixabay-api.js'; 

const formEl = document.querySelector('.search-form');
const listItemsEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');


 
const handleClick = event => {
    event.preventDefault();
    // loader start
    
    const searchData = event.currentTarget.elements.user_query.value.trim();
    
    if(searchData === ''){
       alert('Поле пошуку порожнє, заповніть поле пошуку!');
      return;
    };
     
    const fetchOption = {
            key: "48272938-5d16b358faf0ec3baa9736196",
            q: `${searchData}`,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        };

        const urlParams = new URLSearchParams(fetchOption);

    fetch(`https://pixabay.com/api/?${urlParams}`)

        .then(responce => {
        if(!responce.ok){
           
            throw new Error(responce.status );
        };

            return responce.json();
    })
            .then(img => {
            if (img.total === 0) {
                iziToast.error({ 
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'center',
                 }); 
                 
                 listItemsEl.innerHTML = '';

                 formEl.reset();
            };                   

                formEl.reset();
           
            const cardImg = img.hits.map(imgs => {
                return `
                <a href="${imgs.largeImageURL}">
                    <li class="gallary-card">
                        <img class="gallary-img" src="${imgs.webformatURL}" alt=""> </img>
                        <p> Likes ${imgs.likes}</p>
                        <p> Views ${imgs.views}</p>
                        <p> Comments ${imgs.comments}</p>
                        <p> Downloads ${imgs.downloads}</p>
                    </li>
                </a>`
             }).join();

            listItemsEl.innerHTML = cardImg;
            
            // loader end

            let gallery = new SimpleLightbox('.gallery a');
            gallery.refresh();
            
            return;
        })
        .catch(err => {
           
        });
}

    formEl.addEventListener('submit', handleClick);


