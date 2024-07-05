//comentar esta linea despues de ejecutar el npm run watch para que funcione el script
//import "../styles/main.scss"

const API_URL = "http://localhost:3000/";
const ENDPOINT = "estramypyme";

let currentSectionIndex = 0;
let sections = [];

async function getQuestions(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

function createSection(section) {
  const { title, questions } = section;

  const titleElement = document.getElementById("section-title");
  titleElement.textContent = title;

  const formGroup = document.getElementById("section-questions");
  formGroup.innerHTML = ''; 

  for (let question of questions) {
    const div = document.createElement("div");
    div.classList.add("mb-3");

    const label = document.createElement("label");
    label.textContent = question.question;
    label.classList.add("form-label");

    const input = document.createElement("input");
    if (question.type === 'integer') {
      input.setAttribute("type", "number");
    } else if (question.type === 'percentage') {
      input.setAttribute("type", "number");
      input.setAttribute("min", "0");
      input.setAttribute("max", "100");
    } else if (question.type === 'currency') {
      input.setAttribute("type", "number");
      input.setAttribute("step", "0.01");
    } else {
      input.setAttribute("type", "text");
    }
    input.classList.add("form-control");

    div.appendChild(label);
    div.appendChild(input);
    formGroup.appendChild(div);
  }
}

function showSection(index) {
  if (index >= 0 && index < sections.length) {
    createSection(sections[index]);
    currentSectionIndex = index;
    document.getElementById("prev").disabled = currentSectionIndex === 0;
    document.getElementById("next").disabled = currentSectionIndex === sections.length - 1;
    updateProgressBar(index);
  }
}

function handleNavigation(event) {
  const direction = event.target.id === 'next' ? 1 : -1;
  const newIndex = currentSectionIndex + direction;
  showSection(newIndex);
}

function updateProgressBar(index) {
  const progressBar = document.getElementById("progress-bar");
  const progress = ((index + 1) / sections.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function goToTop() {
  document.documentElement.scrollTop({
    top: 0,
    behavior: "smooth",
  });
}


window.addEventListener("DOMContentLoaded", async () => {
  //document.getElementById("go-top-btn").addEventListener("click", goToTop);

  sections = await getQuestions(API_URL + ENDPOINT);
  if (sections.length > 0) {
    showSection(currentSectionIndex);
    document.getElementById("prev").addEventListener("click", handleNavigation);
    document.getElementById("next").addEventListener("click", handleNavigation);
  } else {
    console.error("There're no sections to show.");
  }
});
