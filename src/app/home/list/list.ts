import { Component, OnInit } from '@angular/core';
import { PokeApi } from '../../services/poke-api';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List implements OnInit {

  public pokemonList: any[] = [];

  constructor(
    private pokeApi: PokeApi,
  ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('pokemonList')) {
      console.log('Fetching Pokémon list from API...');
      this.pokeApi.getPokemonList().subscribe((data: any) => {
        sessionStorage.setItem('pokemonList', JSON.stringify(data.results));
        this.pokemonList = data.results;
      });
    }
    this.pokemonList = JSON.parse(sessionStorage.getItem('pokemonList') || '[]');
  }
}
