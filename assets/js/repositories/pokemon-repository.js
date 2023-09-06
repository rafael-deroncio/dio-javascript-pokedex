class PokedexRepository {
    _scheme = `https`;
    _host = `pokeapi.co`;
    _path = `api/v2/pokemon`;

    async getPokemons(pagination) {
        const url = new UriBuilder()
            .addScheme(this._scheme)
            .addHost(this._host)
            .addPath(this._path)
            .addParams({
                offset: pagination.offset,
                limit: pagination.limit
            })
            .build();
        try {
            const response = await fetch(url);
            const json = await response.json();
            return json.results;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getPokemonDetails(idOrName) {
        const url = new UriBuilder()
            .addScheme(this._scheme)
            .addHost(this._host)
            .addPath(this._path)
            .addPath(idOrName)
            .build();

        try {
            const response = await fetch(url);
            const json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}