// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



import {searchApi} from './js/pixabay-api'; 
import {templateCard} from './js/render-functions';

const formEl = document.querySelector('.search-form');
const listItemsEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

loaderEl.style.display = 'none';

const handleClick = event => {
    event.preventDefault();
    loaderEl.style.display = 'block';
    
    const searchData = event.currentTarget.elements.user_query.value.trim();
    
    if(searchData === ''){
       alert('Поле пошуку порожнє, заповніть поле пошуку!');
      return;
    };
        
     searchApi(searchData)
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
               
            const cardImg = img.hits.map(element => templateCard(element)).join('');

            listItemsEl.innerHTML = cardImg;
            
            loaderEl.style.display = 'none';

            let gallery = new SimpleLightbox('.gallery a');
            gallery.refresh();
            
            return;
        })
        .catch(err => {
           
        });
}

    formEl.addEventListener('submit', handleClick);


