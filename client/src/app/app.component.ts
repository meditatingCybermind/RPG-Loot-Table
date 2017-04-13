import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service';
// https://angular.io/docs/ts/latest/tutorial/toh-pt5.html <--- left off here

@Component({
	selector: 'app-root',
	templateUrl: './app.template.html',
    providers: [HeroService]
})

export class AppComponent {
    constructor(private heroService: HeroService) {
    }
    ngOnInit(): void {
		this.getHeroes();
	}
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
    selectedHero: Hero;
    onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	title = 'Tour of Heroes';
    heroes: Hero[];
    hero: Hero = {
		id: 1,
		name: 'Windstorm'
    };
}


const HEROES: Hero[] = [
	{ id: 11, name: 'Mr. Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];
