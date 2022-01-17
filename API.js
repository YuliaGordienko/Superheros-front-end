function getAllHeros() {
  return fetch(`https://superheros-back-end.herokuapp.com/api/heros`)
    .then((response) => response.json())
    .then((response) => console.log(response));
}
export default getAllHeros;
