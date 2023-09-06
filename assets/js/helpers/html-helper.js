function convertPokemonListToListItems(pokemons) {
    let html = "";
    pokemons.forEach(pokemon => {
        pokemonNumber = pokemon.number > 999 ?
            pokemon.number.toString() :
            pokemon.number.toString().padStart(3, '0');

        html += `
            <li class="pokemon ${pokemon.types[0]}">
            
                <span class="number">#${pokemonNumber}</span>

                <div class="info">
                    <h2 class="name">${_toTitleCase(pokemon.name)}</h2>
                    <div class="variant"
                        onmouseover="_shinyImgPokemon(this, '${pokemon.shiny}')"
                        onmouseout="_resetImgPokemon(this, '${pokemon.photo}', '${pokemon.name}')">
                        Shiny
                    </div>
                </div>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img class="photo" src="${pokemon.photo}" alt="${_toTitleCase(pokemon.name)}">
                </div>
            </li>
        `;
    });
    return html;
}

function _toTitleCase(str) {
    return str.replace(/\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function _shinyImgPokemon(divElement, shinyImageUrl) {
    const photo = divElement.parentNode.parentNode.querySelector('.photo');
    photo.src = shinyImageUrl;

    const name = divElement.parentNode.querySelector('.name')
    name.innerHTML += '&#x2728;';
}

function _resetImgPokemon(divElement, normalImageUrl, pokemonName) {
    const photo = divElement.parentNode.parentNode.querySelector('.photo');
    photo.src = normalImageUrl;

    const name = divElement.parentNode.querySelector('.name')
    name.innerHTML = _toTitleCase(pokemonName);
}