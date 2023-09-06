class PokedexService {
    constructor() {
        this.client = new PokedexRepository();
        this.mapper = new Mapper()
    }

    async getPokemons(pagination) {
        const pokemons = await this.client.getPokemons(pagination);
        const pokemonNames = pokemons.map(pokemon => pokemon.name);

        return await Promise.all(
            pokemonNames.map(
                async (name) => this.mapper.pokemonResponseToPokemonModel(
                    await this.client.getPokemonDetails(name))
            ));
    }

    async getPokemon(idOrName) {
        const pokedexResponse = await this.client.getPokemonDetails(idOrName);
        return this.mapper.pokemonResponseToPokemonModel(pokedexResponse);
    }
}