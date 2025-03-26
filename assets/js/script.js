// FORM

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
