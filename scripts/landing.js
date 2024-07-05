function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("click", () => {
  const goTopBtn = document.getElementById("go-top-btn");
  if(goTopBtn){
    goToTop()
  }
})