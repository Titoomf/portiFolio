var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
  /* fazendo a separacao de dois elementos*/
  document.querySelector(".container").classList.toggle("show-menu");
});