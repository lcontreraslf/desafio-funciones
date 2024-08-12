// function pintar() {
//   ele.style.backgroundColor = "yellow";
// }
// const ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);



// Requerimiento 2.2

// function pintar(elementoClickeado) {
//   elementoClickeado.style.backgroundColor = "yellow";
// }

// const ele = document.getElementById("ele1");
// ele.addEventListener("click", function (event) {
//   pintar(event.target);
// });


// Requerimiento 2.3

function pintar(elementoClickeado, color = "green") {
  elementoClickeado.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

ele.addEventListener("click", function (event) {
  pintar(event.target, "yellow");
});

pintar(ele);
