let pokemon_id;
async function getApi(pokemon_id) {
  const local = localStorage.getItem("data")
  if (local) {
    return local 
    
  } else if (!local) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`);
  const data = await res.json();
  console.log(data);
  renderPokes(data);
  localStorage.setItem("data",data)
  return data;
  }
}

const bulbasaurBtn = document.createElement("button");
bulbasaurBtn.addEventListener("click", () => {
  dataContainer.innerHTML = "";
  pokemon_id = 1;
  getApi(pokemon_id);
});
const bulbasaurImg = document.createElement("img");
bulbasaurImg.src =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif";
bulbasaurBtn.appendChild(bulbasaurImg);

const charmanderBtn = document.createElement("button");
charmanderBtn.addEventListener("click", () => {
  dataContainer.innerHTML = "";
  pokemon_id = 4;
  getApi(pokemon_id);
});
const charmanderImg = document.createElement("img");
charmanderImg.src =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif";
charmanderBtn.appendChild(charmanderImg);

const squirttleBtn = document.createElement("button");
squirttleBtn.addEventListener("click", () => {
  dataContainer.innerHTML = "";
  pokemon_id = 7;
  getApi(pokemon_id);
});
const squirttleImg = document.createElement("img");
squirttleImg.src =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif";
squirttleBtn.appendChild(squirttleImg);

const section = document.createElement("section");
section.appendChild(bulbasaurBtn);
section.appendChild(charmanderBtn);
section.appendChild(squirttleBtn);

document.getElementById("btnsContainer").appendChild(section);

function devolve(pokemon_id) {
  if (pokemon_id >= 2 && pokemon_id <= 9) {
    getApi(--pokemon_id);
  } else {
    getApi(pokemon_id);
  }
}

function evolve(pokemon_id) {
  if (pokemon_id >= 1 && pokemon_id <= 8) {
    getApi(++pokemon_id);
  } else {
    getApi(pokemon_id);
  }
}
const dataContainer = document.createElement("div");

const renderPokes = (data) => {
  const image = document.createElement("img");
  image.alt = "No gif found";
  image.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;

  const section = document.createElement("section");
  section.id = "pokeCard";

  const numberParagraph = document.createElement("p");
  numberParagraph.textContent = `No° ${data.id}`;

  const nameHeader = document.createElement("h3");
  nameHeader.textContent = data.name;

  const typeParagraph = document.createElement("p");
  typeParagraph.textContent = data.types[0].type.name;
  typeParagraph.id = "pokeType";

  const heightFigure = document.createElement("figure");
  const heightHeader = document.createElement("h5");
  heightHeader.textContent = "Height";
  const heightParagraph = document.createElement("p");
  heightParagraph.textContent = data.height;
  heightFigure.appendChild(heightHeader);
  heightFigure.appendChild(heightParagraph);

  const weightFigure = document.createElement("figure");
  const weightHeader = document.createElement("h5");
  weightHeader.textContent = "Weight";
  const weightParagraph = document.createElement("p");
  weightParagraph.textContent = data.weight;
  weightFigure.appendChild(weightHeader);
  weightFigure.appendChild(weightParagraph);

  const backViewFigure = document.createElement("figure");
  const backViewHeader = document.createElement("h5");
  backViewHeader.textContent = "Back view";
  const backViewImage = document.createElement("img");
  backViewImage.src =
    data.sprites.versions["generation-v"]["black-white"].animated.back_default;
  backViewFigure.appendChild(backViewHeader);
  backViewFigure.appendChild(backViewImage);

  const devolveButton = document.createElement("button");
  devolveButton.textContent = "Devolve";
  devolveButton.addEventListener("click", () => {
    dataContainer.innerHTML = "";
    devolve(data.id);
  });

  const evolveButton = document.createElement("button");
  evolveButton.textContent = "Evolve";
  evolveButton.addEventListener("click", () => {
    dataContainer.innerHTML = "";
    evolve(data.id);
  });

  const saveButtonSpan = document.createElement("span");
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButtonSpan.appendChild(saveButton);

  section.appendChild(numberParagraph);
  section.appendChild(nameHeader);
  section.appendChild(typeParagraph);
  section.appendChild(heightFigure);
  section.appendChild(weightFigure);
  section.appendChild(backViewFigure);
  section.appendChild(devolveButton);
  section.appendChild(evolveButton);
  section.appendChild(document.createElement("br"));
  section.appendChild(saveButtonSpan);

  dataContainer.appendChild(image);
  dataContainer.appendChild(section);

  document.getElementById("btnsResultsContainer").appendChild(dataContainer);

  function colorPokeTypes(data) {
    const type = data.types[0].type.name;
    const colorType = document.getElementById("pokeType");
    if (type === "fire") colorType.className = "Fire";
    else if (type === "grass") colorType.className = "Grass";
    else if (type === "water") colorType.className = "Water";
  }
  colorPokeTypes(data);
}
