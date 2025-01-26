import{i as a,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const f=t=>{const s={key:"48272938-5d16b358faf0ec3baa9736196",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0},i=new URLSearchParams(s);return fetch(`https://pixabay.com/api/?${i}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},d=t=>`
   <a href="${t.largeImageURL}">
        <li class="gallary-card">
            <img class="gallary-img" src="${t.webformatURL}" alt=""> </img>
            <div class="description">
                <p>Likes ${t.likes}</p>
                <p>Views ${t.views}</p>
                <p>Comments ${t.comments}</p>
                <p>Downloads ${t.downloads}</p>
            </div>
        </li>
    </a>`,l=document.querySelector(".search-form"),u=document.querySelector(".gallery"),c=document.querySelector(".loader");c.style.display="none";const p=t=>{t.preventDefault(),c.style.display="block";const s=t.currentTarget.elements.user_query.value.trim();if(s===""){a.show({title:"Error",message:"Поле пошуку порожнє, заповніть поле пошуку!",position:"center"});return}f(s).then(i=>{i.total===0&&(a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),u.innerHTML="",l.reset()),l.reset();const o=i.hits.map(r=>d(r)).join("");u.innerHTML=o,c.style.display="none",new m(".gallery a").refresh()}).catch(i=>{a.error({title:"Error",message:"Error!",position:"center"})})};l.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
