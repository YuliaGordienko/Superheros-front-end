"use strict";
console.log("hello");
fetch(`https://superheros-back-end.herokuapp.com/api/heros`)
  .then((response) => response.json())
  .then((response) => response.data.heros)
  .then((response) => {
    const cards = response.reduce((acc, hero) => acc + markUpForHero(hero), []);
    const container = document.querySelector(".div-for-heros");
    container.insertAdjacentHTML("afterbegin", cards);
  });

function markUpForHero({ _id, nickname, superpowers, images }) {
  return `<li class="hero-gallery-item" data-item="${_id}">
    <img class="hero-gallery-item-poster" src="http://localhost:3000/${images}"
        alt="foto Hero"/>

    <div class="hero-gallery-item-description">
        <h2 class="hero-gallery-item-title">${nickname}</h2>
        <div class=hero-gallery-item-box">
            <p class="hero-gallery-item-genre">${superpowers} </p>
           </div>
   </div>
</li>`;
}
