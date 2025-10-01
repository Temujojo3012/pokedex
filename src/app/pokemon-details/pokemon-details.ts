import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PokeApi } from '../services/poke-api';

@Component({
  selector: 'app-pokemon-details',
  imports: [RouterLink],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.scss'
})
export class PokemonDetails implements OnInit {

  constructor(
    private router: Router,
    private pokeApi: PokeApi
  ) { }

  ngOnInit(): void {
    console.log('Destalles');
    console.log(this.router.url)
    let url = 'https://pokeapi.co/api/v2/pokemon' + this.router.url;
    this.pokeApi.getPokemonDetails(url).subscribe({
      next: (data: any) => {
        console.log(data)
      }
    })
  }

}
