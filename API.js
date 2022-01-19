import markUpForHero from "./markUp/markupForHero";
export default function getAllHeros() {
  fetch(`https://superheros-back-end.herokuapp.com/api/heros`)
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
