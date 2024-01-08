/*Aternar entre modos (claro e Escuro)*/

function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  /*Alterar a Foto de perfil*/
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./img/Perfil-Light.png")
  } else {
    img.setAttribute("src", "./img/Perfil-Dark.png")
  }
}