const API_URL = "http://localhost:3000/";
const ENDPOINT = "estramypyme";

async function getQuestions(url) {
  try {
    const response = await fetch(url,  { mode: 'no-cors' });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getQuestions(API_URL + ENDPOINT)
});

