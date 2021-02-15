import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    {id: 1, name: "Snailman", adress: "Paris", superpower: "super slow-motion"},
    {id: 2, name: "Explosito", adress: "Mexico City", superpower: "can exploding"},
    {id: 3, name: "Jacky Darko", adress: "Sin City", superpower: "invisibility in the dark"},
    {id: 4, name: "Randoman", adress: "New York", superpower: "50% chance bulletproof"},
    {id: 5, name: "Mr. Blindspeed", adress: "Monaco", superpower: "superspeed with closed eyes"}
  ];

  heroes$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  constructor() { }

  getAll(): void {
    console.log(this.heroes);
    return this.heroes$.next(this.heroes);
  }
}