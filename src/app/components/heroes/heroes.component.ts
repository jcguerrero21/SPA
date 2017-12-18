import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService, private router: Router) { }

  verHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

}
