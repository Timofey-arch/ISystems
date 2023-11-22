import { Injectable } from "@nestjs/common";
import axios from "axios";
import PokemonList from "models/PokemonList";
import { Logger } from "@nestjs/common";

@Injectable()
export class AppService {
  async getPokemons(): Promise<any> {
    const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon");

    for (const pokemon of pokemons.data.results) {
      try {
        const record = await PokemonList.create({ name: pokemon.name, url: pokemon.url });
        return "Amongus";
      } catch (err) {
        console.log(err);
        return pokemon.data.results;
      }
    }
  }
}
