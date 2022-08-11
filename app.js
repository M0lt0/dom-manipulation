const container = document.querySelector("#container");
const content = document.createElement("div");
const p = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
const divH1 = document.createElement("h1");
const divP = document.createElement("p");

content.classList.add("content");
p.style = "color : red";
h3.style = "color : blue";
div.style = "border:2px solid black; background-color:pink;";

content.textContent = "This is the glorious text-content!";
p.textContent = "hey i'am red!";
h3.textContent = "I'am a blue h3!";
divH1.textContent = "I’m in a div";
divP.textContent = "me too";

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);
container.appendChild(div);
div.appendChild(divH1);
div.appendChild(divP);
