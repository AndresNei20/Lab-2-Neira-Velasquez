let pokemon_id
async function getApi(pokemon_id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
    const data = await res.json()
    console.log(data);
    renderPokes(data)
}

    const bulbasaurBtn = document.createElement('button')
    bulbasaurBtn.addEventListener('click', ()=> {
        pokemon_id = 1;
        getApi(pokemon_id)
    })
    const bulbasaurImg = document.createElement('img')
    bulbasaurImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
    bulbasaurBtn.appendChild(bulbasaurImg)

    const charmanderBtn = document.createElement('button')
    charmanderBtn.addEventListener('click', () => {
        pokemon_id = 4;
        getApi(pokemon_id)
    })
    const charmanderImg = document.createElement('img')
    charmanderImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
    charmanderBtn.appendChild(charmanderImg)

    const squirttleBtn = document.createElement('button')
    squirttleBtn.addEventListener('click', () => {
        pokemon_id = 7;
        getApi(pokemon_id)
    })
    const squirttleImg = document.createElement('img')
    squirttleImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
    squirttleBtn.appendChild(squirttleImg)

    const section = document.createElement('section')
    section.appendChild(bulbasaurBtn)
    section.appendChild(charmanderBtn)
    section.appendChild(squirttleBtn)

    document.getElementById('btnsContainer').appendChild(section)

    function devolve (pokemon_id){
        if (pokemon_id >= 2 && pokemon_id <= 9) {
            getApi(--pokemon_id)
        }else {
            getApi(pokemon_id)
        }
    }
    
    function evolve(pokemon_id){
        if (pokemon_id >= 1 && pokemon_id <= 8) {
            getApi(++pokemon_id)
        }else{
            getApi(pokemon_id)
        }
    }


const renderPokes = (data) => {
    const dataContainer = document.createElement('div');

const image = document.createElement('img');
image.alt = "No gif found";
image.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;

const section = document.createElement('section');
section.id = "pokeCard";

const numberParagraph = document.createElement('p');
numberParagraph.textContent = `No° ${data.id}`;

const nameHeader = document.createElement('h3');
nameHeader.textContent = data.name;

const typeParagraph = document.createElement('p');
typeParagraph.textContent = data.types[0].type.name;
typeParagraph.id = "pokeType"

const heightFigure = document.createElement('figure');
const heightHeader = document.createElement('h5');
heightHeader.textContent = "Height";
const heightParagraph = document.createElement('p');
heightParagraph.textContent = data.height;
heightFigure.appendChild(heightHeader);
heightFigure.appendChild(heightParagraph);

const weightFigure = document.createElement('figure');
const weightHeader = document.createElement('h5');
weightHeader.textContent = "Weight";
const weightParagraph = document.createElement('p');
weightParagraph.textContent = data.weight;
weightFigure.appendChild(weightHeader);
weightFigure.appendChild(weightParagraph);

const backViewFigure = document.createElement('figure');
const backViewHeader = document.createElement('h5');
backViewHeader.textContent = "Back view";
const backViewImage = document.createElement('img');
backViewImage.src = data.sprites.versions["generation-v"]["black-white"].animated.back_default;
backViewFigure.appendChild(backViewHeader);
backViewFigure.appendChild(backViewImage);

const devolveButton = document.createElement('button');
devolveButton.textContent = "Devolve";
devolveButton.addEventListener('click', () => {
    devolve(data.id)
});

const evolveButton = document.createElement('button');
evolveButton.textContent = "Evolve";
evolveButton.addEventListener('click', () => {
    evolve(data.id)
});

const saveButtonSpan = document.createElement('span');
const saveButton = document.createElement('button');
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
section.appendChild(document.createElement('br'));
section.appendChild(saveButtonSpan);

dataContainer.appendChild(image);
dataContainer.appendChild(section);

document.getElementById('btnsResultsContainer').appendChild(dataContainer);

function colorPokeTypes(data){
    const type = data.types[0].type.name;
    const colorType = document.getElementById("pokeType")
    if(type === "fire")colorType.className = "Fire"
    else if(type === "grass")colorType.className = "Grass"
    else if(type === "water")colorType.className = "Water"
}
colorPokeTypes(data)
/*     const dataContainer = document.createElement('div');
    dataContainer.innerHTML = ``
     dataContainer.innerHTML = `
    <img alt="No gif found" src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}">
    <section id="pokeCard">
        <p>No° ${data.id}</p>
        <h3>${data.name}</h3>
        <p>${data.types[0].type.name}</p>
        <figure>
            <h5> height</h5>
            <p>${data.height}</p>
        </figure>
        <figure>
            <h5> Weight</h5>
            <p>${data.weight}</p>
        </figure>
        <figure>
            <h5> Back view</h5>
            <img src="${data.sprites.versions["generation-v"]["black-white"].animated.back_default}">
        </figure>
        <figure>
            <button onclick="devolve(${data.id})">Devolve</button>
            <button onclick="evolve(${data.id})">Evolve</button>
            <br>
            <span><button>Save</button></span>
            </figure>
    </section>
    `
    document.getElementById('btnsResultsContainer').appendChild(dataContainer)  */

// -------------------------------------------Second try with different sintaxis-------------------------------------//
/* 
    const sprayPoke = document.createElement('img') 
    sprayPoke.alt = "No gif found"
    sprayPoke.src = `${data.sprites.versions["generation-v"]["black-white"].animated.front_default}`
    const pokeCard = document.createElement('section')
    const p1 = document.createElement('p'); p1.innerText = `No° ${data.id} `
    const pName = document.createElement('h3'); pName.innerText = `${data.name}` 
    const p2 = document.createElement('p'); p2.innerText = `${data.types[0].type.name}`

    const figureHeight = document.createElement('figure')
        const height = document.createElement('h5'); height.innerText = "Height"
        const pHeight = document.createElement('p'); pHeight.innerText = `${data.height}`
        figureHeight.appendChild(height)
        figureHeight.appendChild(pHeight)

    const figureWeight = document.createElement('figure')
        const weight = document.createElement('h5'); weight.innerText = "Weight"
        const pWeight = document.createElement('p'); pWeight.innerText = `${data.weight}`
        figureWeight.appendChild(weight)
        figureWeight.appendChild(pWeight)

    const figureBack = document.createElement('figure')
        const backSpray = document.createElement('h5'); backSpray.innerText = "Height"
        const backImg = document.createElement('img'); backImg.src = `${data.sprites.versions["generation-v"]["black-white"].animated.back_default}`
        figureBack.appendChild(backSpray, backImg)
        figureBack.appendChild(backImg)

    const figureBtn = document.createElement('figure');
        const btnDevolve = document.createElement('button'); btnDevolve.innerText = "Devolve"; btnDevolve.addEventListener('click', devolve())
        const btnEvolve = document.createElement('button'); btnEvolve.innerText = "Evolve"; btnEvolve.addEventListener('click', evolve())
        const btnSave = document.createElement('button'); btnSave.innerText = "Save";
        figureBtn.appendChild(btnDevolve)
        figureBtn.appendChild(btnEvolve)
        figureBtn.appendChild(btnSave)

    pokeCard.appendChild(p1)
    pokeCard.appendChild(pName)
    pokeCard.appendChild(p2)
    pokeCard.appendChild(figureHeight)
    pokeCard.appendChild(figureWeight)
    pokeCard.appendChild(figureBack)
    pokeCard.appendChild(figureBtn)
    dataContainer.appendChild(pokeCard)
    document.getElementById('btnsResultsContainer').appendChild(dataContainer) */
}

    

//-----------------Pikachu attempt functions -------------------//

/* function evolvePokemon() {
    if (pokemon_id >= 1 && pokemon_id <= 8 || pokemon_id === 25) {
        getApi(++pokemon_id);
    } else if (pokemon_id === 172) {
        getApi(25);
    }
}

function devolvePokemon() {
    if (pokemon_id >= 2 && pokemon_id <= 9 || pokemon_id === 26) {
        getApi(--pokemon_id);
    } else if (pokemon_id === 25) {
        getApi(172);
    }
} */