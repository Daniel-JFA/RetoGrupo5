import '../styles/main.scss';

const API_URL = "http://localhost:3000/";
let endpoint = "clientes";

window.addEventListener("DOMContentLoaded", () => {
  fetch(API_URL + endpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});

