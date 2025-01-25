import{i as u,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const l=document.querySelector(".search-form"),c=document.querySelector(".gallery");document.querySelector(".loader");const m=n=>{n.preventDefault();const t=n.currentTarget.elements.user_query.value.trim();if(t===""){alert("Поле пошуку порожнє, заповніть поле пошуку!");return}const i={key:"48272938-5d16b358faf0ec3baa9736196",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0},a=new URLSearchParams(i);fetch(`https://pixabay.com/api/?${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{e.total===0&&(u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),c.innerHTML="",l.reset()),l.reset();const r=e.hits.map(o=>`
                <a href="${o.largeImageURL}">
                    <li class="gallary-card">
                        <img class="gallary-img" src="${o.webformatURL}" alt=""> </img>
                        <p> Likes ${o.likes}</p>
                        <p> Views ${o.views}</p>
                        <p> Comments ${o.comments}</p>
                        <p> Downloads ${o.downloads}</p>
                    </li>
                </a>`).join();c.innerHTML=r,new f(".gallery a").refresh()}).catch(e=>{})};l.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
