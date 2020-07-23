const selectBtn = document.getElementById("select-breed");
const selectColor = document.getElementById("select-color");
const selectFont = document.getElementById("select-font");
const nameInput = document.getElementById("dog-name");
const submitBtn = document.getElementById("submit-btn");
const nameContainer = document.getElementById("name-container");
const saveBtn = document.getElementById("save");

//API
const changeUrl = (path) => {
  const url = `https://dog.ceo/api${path}`;
  return url;
};

//Get Breeds
const getBreeds = () => {
  const path = "/breeds/list";
  const url = changeUrl(path);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const breeds = data.message;
      let output = `
        <option selected="true" disabled="disabled">Raça</option>
      `;
      for (let i in breeds) {
        output += `
             <option id = "dogsBreed" value="${breeds[i]}">${breeds[i]}</option> 
        `;
      }
      document.getElementById("select-breed").innerHTML = output;
    });
};

// Get image
selectBtn.addEventListener("change", () => {
  const path = `/breed/${selectBtn.value}/images/random`;
  const url = changeUrl(path);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const dogImg = data.message;

      let output = `
          <img src = "${dogImg}" alt = "dog"/>
      `;
      document.getElementById("img-container").innerHTML = output;
    });
});

getBreeds();

// Set name style
selectColor.addEventListener("change", () => {
  const value = selectColor.value;
  nameContainer.classList.add(`${value}`);
});

selectFont.addEventListener("change", () => {
  const value = selectFont.value;
  nameContainer.classList.add(`${value}`);
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const setDogName = nameInput.value;
  let output = `
     <h1>${setDogName}</h1>
   `;
  document.getElementById("name-container").innerHTML = output;
});

// Save data
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let date = new Date();
  window.localStorage.setItem("date", date);
  localStorage.setItem("dogName", nameInput.value);
  localStorage.setItem("nameColor", selectColor.value);
  localStorage.setItem("nameFont", selectFont.value);
  localStorage.setItem("Breed", selectBtn.value);

  alert("Dados salvos com sucesso");
});
