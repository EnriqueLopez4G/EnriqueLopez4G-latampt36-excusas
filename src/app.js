/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const RNwho = Math.floor(Math.random() * 4);
  const RNaction = Math.floor(Math.random() * 4);
  const RNwhat = Math.floor(Math.random() * 3);
  const RNwhen = Math.floor(Math.random() * 5);

  let imgs = [
    "https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200",
    "https://static.wikia.nocookie.net/doblaje/images/c/cb/Abuelita.png/revision/latest/thumbnail/width/360/height/360?cb=20110712203123&path-prefix=es",
    "https://img.freepik.com/vector-gratis/boceto-coloreado-cartero_1308-83554.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9SK8Kvi3AdbeJaXZoO4V8Y3y2GE39tajAAQ&s"
  ];

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoR = who[RNwho];
  let actionR = action[RNaction];
  let whatR = what[RNwhat];
  let whenR = when[RNwhen];

  let strExcusa = whoR + " " + actionR + " " + whatR + " " + whenR;
  let elementExcuse = document.getElementById("idExcuse");
  elementExcuse.innerHTML = strExcusa;

  let imgjs = document.getElementById("myImg4G");
  imgjs.src = imgs[RNwho];
};
