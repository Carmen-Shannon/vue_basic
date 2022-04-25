<template>
  <h1>{{ pokeName }}</h1>
</template>

<script>
import PokemonService from "../services/MainService";

export default {
  name: "Pokemon",
  data() {
    return {
      pokeName: "TEST",
    };
  },
  methods: {
    async getPokemonName() {
      try {
        var pokemon = await PokemonService.getPokemon();
        pokemon = pokemon.data;
        this.pokeName = pokemon["name"];
      } catch (e) {
        console.log(e);
      }
      //   PokemonService.getPokemon().then((response) => {
      //     var pokemon = response.data;
      //     console.log(pokemon["name"]);
      //     this.pokeName = pokemon["name"];
      //   });
    },
  },
  created() {
    this.getPokemonName();
  },
};
</script>

<style>
</style>