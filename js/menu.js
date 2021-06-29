function abrir() {
  let el = document.querySelector(".collapse");
  if (el.classList.contains("show")) el.classList.remove("show");
  else el.classList.add("show");
}
