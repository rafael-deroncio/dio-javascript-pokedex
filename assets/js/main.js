const pokedex = new PokedexService();
const pagination = new PaginationModel(0, 10, 151);
const loadModeButton = document.getElementById("buttonLoadMore");

async function loadPokemons(pagination) {
    document.getElementById("pokemons").innerHTML +=
        convertPokemonListToListItems(
            await pokedex.getPokemons(pagination));
};

loadPokemons(pagination);

loadModeButton.addEventListener("click", () => {
    pagination.next();
    loadPokemons(pagination);

    if (!pagination.hasMore()) {
        loadModeButton.parentElement.removeChild(loadModeButton);
    }
});