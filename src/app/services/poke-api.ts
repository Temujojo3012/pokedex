import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApi {
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public getPokemonList() : any {
    var url: string = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0';
    return this.httpClient.get(url);
  }

  getPokemonDetails(url:any) : any {
      return this.httpClient.get(url);
  }
}
