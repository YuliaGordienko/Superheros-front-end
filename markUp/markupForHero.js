export default function markUpForHero({ _id, nickname, superpowers, images }) {
  return `<li class="hero-gallery-item" data-item="${_id}">
    <img class="hero-gallery-item-poster" src="${images}"
        alt="foto Hero"/>

    <div class="hero-gallery-item-description">
        <h2 class="hero-gallery-item-title">${nickname}</h2>
        <div class=hero-gallery-item-box">
            <p class="hero-gallery-item-genre">${superpowers} </p>

           </div>
   </div>
   <div>
             <button  class="button-del" id="${_id}">delete</button>
           <button class="button-update" id="${_id}">update</button>
  </div>
             </li>`;
}
