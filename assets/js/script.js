// FORM

// const form = document.querySelector("form");

// form.onsubmit = (e) => {
//   e.preventDefault();
//   const inputName = document.getElementById("add");
//   const eleAdd = {
//     name: inputName.value,
//   };

//   //   console.log(eleAdd);

//   //   CONTAINER-LIST
//   const containerlist = document.getElementById("containerList");

//   const createDiv = document.createElement("div");

//   createDiv.classList.add("card");

//   const createUl = document.createElement("ul");
//   const createLi = document.createElement("li");

//   const createButton = document.createElement("button");
//   createButton.innerHTML = `Elimina`;

//   createButton.onclick = (e) => {
//     // metodi equivalenti per partire dal e.currentTarget che è il bottone cliccato, e risalire al genitore da eliminare

//     // e.currentTarget.parentNode.remove()
//     e.currentTarget.closest(".card").remove();
//   };

//   createLi.innerHTML = inputName.value;
//   createUl.append(createLi);
//   createDiv.append(createUl, createButton);
//   containerlist.append(createDiv);
//   form.reset();
// };

const form = document.querySelector("form");

form.onsubmit = (e) => {
  e.preventDefault();

  const inputAdd = document.getElementById("add");

  const input = {
    name: inputAdd.value,
  };

  const containerList = document.getElementById("containerList");

  const div = document.createElement("div");
  div.classList.add("card");

  const button = document.createElement("button");
  button.innerHTML = "Elimina";

  button.onclick = (e) => {
    e.currentTarget.closest(".card").remove();
  };

  const ul = document.createElement("ul");
  const li = document.createElement("li");

  li.innerHTML = inputAdd.value;

  ul.append(li);
  div.append(ul, button);
  containerList.append(div);

  form.reset();
};
