// FORM

const form = document.querySelector("form");

form.onsubmit = (e) => {
  e.preventDefault();
  const inputName = document.getElementById("add");
  const eleAdd = {
    name: inputName.value,
  };

  //   console.log(eleAdd);

  //   CONTAINER-LIST
  const containerlist = document.getElementById("containerList");
  const createDiv = document.createElement("div");
  const createUl = document.createElement("ul");
  const createLi = document.createElement("li");

  createLi.innerHTML = inputName.value;
  createUl.append(createLi);
  createDiv.append(createUl);
  containerlist.append(createDiv);
  form.reset();
};
