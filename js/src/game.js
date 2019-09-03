document.body.onload = () => {
  let height = window.innerHeight - 250;
  let width = window.innerWidth - 100;
  document.querySelector("#gameBoard").innerHTML += `<canvas id="gameCanvas" height="${height}" width="${width}">`
}