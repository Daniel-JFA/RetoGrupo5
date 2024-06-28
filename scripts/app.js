const API_URL = "http://localhost:3000/";
let endpoint = "clientes";

window.addEventListener("DOMContentLoaded", () => {
  fetch(API_URL + endpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});

function openSection(event, section) {
  let tabcontent; 
  let tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (let tab of tabcontent) {
    tab.style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (let link of tablinks) {
    link.className = link.className.replace(" active", "");
  }
  document.getElementById(section).style.display = "block";
  event.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();