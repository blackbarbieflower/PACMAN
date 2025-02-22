const body = document.querySelector("body");
const button = document.querySelector(".start-button")
let on = false

body.addEventListener("keydown", (event) => {
  console.log("keydown", event.key);
  const key = event.key;
  if (
    key === "ArrowUp" ||
    key === "ArrowDown" ||
    key === "ArrowLeft" ||
    key === "ArrowRight"
  ) {
    direction = event.key; 
  }
    console.log("Direction change to: ", direction);

})

button.addEventListener("click", (e) => {
    console.log("button clicked", on);
    on = !on;
    if (on) {
        button.textContent = "Stop";
      } else {
        button.textContent = "Start";
      }
    });
  
;
