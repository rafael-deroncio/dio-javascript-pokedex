class Mapper {
    pokemonResponseToPokemonModel(response) {
        const pokemonModel = new PokemonModel();
        pokemonModel.number = response.id;
        pokemonModel.name = response.name;
        pokemonModel.types = response.types.map(slot => slot.type.name);
        pokemonModel.photo = response.sprites.other["official-artwork"].front_default;
        pokemonModel.shiny = response.sprites.other["official-artwork"].front_shiny;

        return pokemonModel;
    }
}