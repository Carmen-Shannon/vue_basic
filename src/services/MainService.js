const axios = require('axios');

const API_URL = 'http://pokeapi.co/api/v2/pokemon/pikachu';

class PokemonService {
    async getPokemon() {
        return await axios.get(API_URL);
    }
}

export default new PokemonService();