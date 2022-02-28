'use strict';

const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const reset = document.getElementById("reset");

const text1 = document.querySelector("#circle1 p");
const text2 = document.querySelector("#circle2 p");
const text3 = document.querySelector("#reset");

let firstCount = 0;
let secondCount = 0;
let active = false;
let active2 = false;

let idInterval;
let idInterval2;

const animateCircle1 = () => {
    firstCount++;
    idInterval = requestAnimationFrame(animateCircle1);
    if(firstCount < 50) {
      circle1.style.left = firstCount + "px";  
    } else if (firstCount < 200) {
      circle1.style.left = firstCount * 1.5 + "px";
      circle1.style.backgroundColor = "black";
      text1.style.color = "white";
    } else if (firstCount < 400) {
      circle1.style.left = firstCount * 3 + "px";
      circle1.style.backgroundColor = "#992600";
      text1.style.color = "pink";
    } else {
        cancelAnimationFrame(idInterval);
    }
};

const animateCircle2 = () => {
    secondCount++;
    idInterval2 = requestAnimationFrame(animateCircle2);
    if(secondCount < 100) {
        circle2.style.left = secondCount * 3 + "px";
    } else if (secondCount < 200) {
        circle2.style.top = secondCount * 3 + "px";
    } else {
        cancelAnimationFrame(idInterval2);
    }
};

circle1.addEventListener("click", () => {
    text1.textContent = "Catch me";
    if(active) {
        cancelAnimationFrame(idInterval);
        active = false;
    } else {
        text1.textContent = "Stop me";
        idInterval = requestAnimationFrame(animateCircle1);
        active = true;
    }
});

circle2.addEventListener("click", () => {
    text2.textContent = "Catch me";
    if(active2) {
      cancelAnimationFrame(idInterval2);
      active2 = false;
    } else {
      text2.textContent = "Stop me";
      idInterval2 = requestAnimationFrame(animateCircle2);
      active2 = true;
    }
  });

  reset.addEventListener("click", () => {
    text1.textContent = "Click me";
    text2.textContent = "Click me";
    circle1.style.backgroundColor = "#ffdb4d";
    text1.style.color = "#992600";
    circle1.style.left = 0;
    circle2.style.left = 0;
    circle2.style.top = 0;
  });

  // console.log(field);

  // field.addEventListener("click", () => {
    
  //   let ryhm = () => {
  //     let arr = ["Я на", "солнышке", "лежу,", "Я на", "солнышко", "гляжу…"];
  //     for (let word of arr) {
  //         text3.textContent = word;
  //     }
  //   };

  //   setTimeout(ryhm(), 5000);
    
  // });
