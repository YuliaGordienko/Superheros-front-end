// import getAllHeros from "./API";
// console.log(getAllHeros());
// getAllHeros();
function getAll() {
  return fetch(`https://superheros-back-end.herokuapp.com/api/heros`)
    .then((response) => response.json())
    .then((response) => response.data.heros)
    .then((response) => {
      const cards = response.reduce(
        (acc, hero) => acc + markUpForHero(hero),
        []
      );
      const container = document.querySelector(".div-for-heros");
      container.insertAdjacentHTML("afterbegin", cards);
    });
}
getAll();
function markUpForHero({ _id, nickname, superpowers, images }) {
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
const form = document.getElementById("form");
form.addEventListener("submit", async function postHero(e) {
  e.preventDefault();

  let response = await fetch(
    `https://superheros-back-end.herokuapp.com/api/heros`,
    {
      method: "POST",
      body: new FormData(form),
    }
  );

  let result = await response.json();

  if (result) {
    form.reset();
  }
});
const divForImg = document.querySelector(".div-for-heros");
divForImg.addEventListener("click", onDeleteClick);

async function onDeleteClick(event) {
  const buttonDel = document.getElementById(event.target.id);

  if (event.target !== buttonDel) {
    return;
  }
  let response = await fetch(
    `https://superheros-back-end.herokuapp.com/api/heros/${event.target.id}`,
    {
      method: "DELETE",
      body: event.target.id,
    }
  );
  let result = await response.json();
}
