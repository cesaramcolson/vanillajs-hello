/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = function() {
  let who = ["The cat", "My brother", "My teacher", "My dog"];
  let action = ["ate", "used", "broke"];
  let what = ["my homework", "my phone", "the car", "my guitar"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
