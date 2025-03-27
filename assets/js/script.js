// FORM

// const form = document.querySelector("form");

// form.onsubmit = (e) => {
//   e.preventDefault();

//   const inputAdd = document.getElementById("add");

//   const input = {
//     name: inputAdd.value,
//   };

//   const containerList = document.getElementById("containerList");

//   const div = document.createElement("div");
//   div.classList.add("card");

//   const button = document.createElement("button");
//   button.innerHTML = "Elimina";

//   button.onclick = (e) => {
//     e.currentTarget.closest(".card").remove();
//   };

//   const ul = document.createElement("ul");
//   const li = document.createElement("li");

//   li.innerHTML = inputAdd.value;

//   ul.append(li);
//   div.append(ul, button);
//   containerList.append(div);

//   form.reset();
// };

// TITLE

const h1 = document.querySelector("h1");
h1.innerHTML = "TO DO LIST";

const deleteIcon = `<i class="far fa-trash-alt"></i>`;

const deleteButton = () => {
  const button = document.createElement("button");
  button.innerHTML = deleteIcon;
  button.onclick = (e) => {
    e.currentTarget.closest(".card").remove();
  };

  return button;
};

// FORM

const containerForm = document.querySelector("form");

containerForm.onsubmit = (e) => {
  e.preventDefault();

  const containerAdd = document.getElementById("add");

  const add = {
    input: containerAdd.value,
  };

  const containerList = document.getElementById("containerList");

  const div = document.createElement("div");
  div.classList.add("card");

  deleteButton();

  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.innerHTML = containerAdd.value;

  ul.appendChild(li);
  div.append(ul, deleteButton());
  containerList.appendChild(div);
  containerForm.reset();
};
