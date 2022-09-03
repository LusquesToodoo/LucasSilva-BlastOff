const btnBottom = document.querySelector(".button-bottom");
const btnLeft = document.querySelector(".button-left");
const btnRight = document.querySelector(".button-right");
const btnTop = document.querySelector(".button-top");
const displayLedLeft = document.querySelector(".middle-button-left");
const displayLedRight = document.querySelector(".middle-button-right");
const joystick = document.querySelector(".joystick");
const nPokemons = 152;
const pokeballs = {};
const pokemonList = document.querySelector(".pokemon-list");
const pokemonListInfo = document.querySelector(".pokemon-info-list");
const screen = document.querySelector(".main-display-screen");
const searchBar = document.querySelector("#pokemon-name");

class Pokemon {
  constructor(image, name, id, weight, type) {
    this.image = image;
    this.name = name;
    this.id = id;
    this.weight = weight;
    this.type = type;
    this.card = this.createCard();
  }

  createCard = () => {
    const card = `
    <li class="pokemon-list-item" pokeId="${this.id}">
      <div class="pokemon-spot">
        <figure class="pokemon-img">
          <img src="${this.image}" alt="${this.name}">
        </figure>
        <p class="pokemon-name">${this.name}</p>
      </div>
    </li>`;
    return card;
  };

  writeCard = () => {
    pokemonList.insertAdjacentHTML("beforeend", this.card);
    this.nodeElement = document.querySelector(`[pokeId="${this.id}"]`);
    this.insertListItem();
    this.insertEvents();
  };

  insertEvents = () => {
    this.nodeElement.addEventListener("click", () => {
      this.showMore();
    });
    searchBar.addEventListener("keyup", () => {
      this.filterCard();
    });
  };

  showMore = () => {
    const lastCard = document.querySelector(".pokemon-info-item.active");
    const currentCard = document.querySelector(`[positionId="${this.id}"]`);
    lastCard ? lastCard.classList.remove("active") : "";
    currentCard.classList.add("active");
    pokemonListInfo.classList.remove("none");
  };
  insertListItem = () => {
    const currentPokemon = `
    <li class="pokemon-info-item" positionId="${this.id}">
      <figure class="pokemon-img">
        <img src="${this.image}" alt="${this.name}">
      </figure>
      <table class="pokemon-attributes">
        <tr>
          <td class="pokemon-info-img">
            <figure>
              <img src="${this.image}" alt="${this.name}">
            </figure>
          </td>
          <td class="pokemon-info-text">
            <p class="pokemon-name"><span>Nome:</span> ${this.name} </p>
            <p class="pokemon-type"><span>Tipo:</span> ${this.type}</p>
            <p class="pokemon-id"><span>Id:</span> ${this.id}</p>
            <p class="pokemon-weight"><span>Peso:</span> ${this.weight}kg</p>
          </td>
        </tr>
      </table>
    </li>
    `;
    pokemonListInfo.insertAdjacentHTML("beforeend", currentPokemon);
  };

  filterCard = () => {
    const name = searchBar.value;
    if (this.name.indexOf(name.toLowerCase()) != 0) {
      this.nodeElement.classList.add("none");
    } else {
      this.nodeElement.classList.remove("none");
    }
    if (this.id == nPokemons - 1) {
      const nElements = document.querySelectorAll(".pokemon-list-item").length;
      const nElementsHidden = document.querySelectorAll(
        ".pokemon-list-item.none",
      ).length;
      if (nElementsHidden == nElements) {
        displayLedLeft.classList.add("active");
        displayLedRight.classList.remove("active");
      } else {
        displayLedLeft.classList.remove("active");
        displayLedRight.classList.add("active");
      }
    }
  };
}

async function fetchPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const APIresponse = await fetch(url);
  const data = await APIresponse.json();
  return data;
}

async function renderPokemon(id) {
  const data = await fetchPokemon(id);
  return data;
}

async function createObjectPokemon(id) {
  const pokemonInfo = await renderPokemon(id);
  const image = pokemonInfo.sprites.front_default;
  const name = pokemonInfo.name;
  const weight = pokemonInfo.weight;
  const type = pokemonInfo.types[0].type.name;
  pokeballs[id] = new Pokemon(image, name, id, weight, type);
  id == nPokemons - 1 ? showPokemonsInDisplay() : "";
}

function showPokemonsInDisplay() {
  for (let i = 1; i < nPokemons; i++) {
    pokeballs[i].writeCard();
  }
}

function navigation(value) {
  debugger;
  const currentPokemon = document.querySelector(".pokemon-info-item.active");
  const currentCardId = parseInt(currentPokemon.getAttribute("positionId"));
  function validateId() {
    let nextCardId = currentCardId + value;
    nextCardId = nextCardId < 1 ? nPokemons - 1 + nextCardId : nextCardId;
    nextCardId =
      nextCardId > nPokemons - 1 ? nextCardId - (nPokemons - 1) : nextCardId;
    return nextCardId;
  }
  const nextPokemon = document.querySelector(`[positionId="${validateId()}"]`);
  currentPokemon.classList.remove("active");
  nextPokemon.classList.add("active");
}

for (let i = 1; i <= nPokemons; i++) {
  createObjectPokemon(i);
}

joystick.addEventListener("click", () => {
  pokemonListInfo.classList.toggle("none");
});

btnTop.addEventListener("click", () => {
  navigation(-3);
});

btnLeft.addEventListener("click", () => {
  navigation(-1);
});

btnRight.addEventListener("click", () => {
  navigation(1);
});

btnBottom.addEventListener("click", () => {
  navigation(3);
});
