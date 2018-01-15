import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


@Component({
	selector: 'skill-roller',
	templateUrl: 'skill-roller.component.html',
	styleUrls: ['skill-roller.component.scss']
})
export class SkillRollerComponent implements OnInit {
	selectedSkill = "";

	target = 0;

	//fake player data
	players = [
		new Character('Arotis', {
			"C. Acrobatics": 11,
			"C. Athletics": 12,
			"C. Finesse": -2,
			"C. Influence": 13,
			"C. Nature": -2,
			"C. Perception": 5,
			"C. Performance": 8,
			"C. Religion": -2,
			"C. Society": -2,
			"C. Spellcraft": -2,
			"C. Stealth": 12,
			"C. Survival": 6
		}, 0),
		new Character('Chroi', {
			"C. Acrobatics": 11,
			"C. Athletics": 9,
			"C. Finesse": 9,
			"C. Influence": 7,
			"C. Nature": 5,
			"C. Perception": 8,
			"C. Performance": 4,
			"C. Religion": 2,
			"C. Society": 2,
			"C. Spellcraft": 2,
			"C. Stealth": 9,
			"C. Survival": 2
		}, 0),
		new Character('Daisy', {
			"C. Acrobatics": 4,
			"C. Athletics": 1,
			"C. Finesse": 4,
			"C. Influence": 13,
			"C. Nature": 15,
			"C. Perception": 10,
			"C. Performance": 2,
			"C. Religion": 12,
			"C. Society": 10,
			"C. Spellcraft": 15,
			"C. Stealth": 22,
			"C. Survival": 3
		}, 0),
		new Character('Dimple', {
			"C. Acrobatics": -3,
			"C. Athletics": -5,
			"C. Finesse": -3,
			"C. Influence": 4,
			"C. Nature": 3,
			"C. Perception": 9,
			"C. Performance": 3,
			"C. Religion": 5,
			"C. Society": 2,
			"C. Spellcraft": 8,
			"C. Stealth": -4,
			"C. Survival": 7
		}, 0),
		new Character('Iliyana', {
			"C. Acrobatics": 11,
			"C. Athletics": 7,
			"C. Finesse": 10,
			"C. Influence": 13,
			"C. Nature": 4,
			"C. Perception": 9,
			"C. Performance": 5,
			"C. Religion": 6,
			"C. Society": 8,
			"C. Spellcraft": 5,
			"C. Stealth": 11,
			"C. Survival": 4
		}, 0),
		new Character('Remi', {
			"C. Acrobatics": -1,
			"C. Athletics": 6,
			"C. Finesse": -2,
			"C. Influence": 8,
			"C. Nature": 5,
			"C. Perception": 10,
			"C. Performance": 3,
			"C. Religion": 5,
			"C. Society": 2,
			"C. Spellcraft": 5,
			"C. Stealth": -1,
			"C. Survival": 6
		}, 0),
	]

	skills = {
		list: [
			"C. Acrobatics",
			"C. Athletics",
			"C. Finesse",
			"C. Influence",
			"C. Nature",
			"C. Perception",
			"C. Performance",
			"C. Religion",
			"C. Society",
			"C. Spellcraft",
			"C. Stealth",
			"C. Survival"
		],
		die: 20,
		// TODO: support for graduating die and exploding die a la savage worlds
		// TODO: support for fate die
		dieType: 'standard',
		explodingDie: false
	};



	constructor() { }

	playerDataSource = new MatTableDataSource();
	rollDataSource = new MatTableDataSource();

	ngOnInit() {
		this.clearModifier(this.players);
		this.playerDataSource.data = this.players;
	}

	clearModifier(characterList: Array<Character>) {
		console.log(characterList);
		characterList.forEach((player) => { player.modifier = 0; });
	}

	roll(character: Character, selectedSkill: string, die: number) {
		let result = (Math.floor(Math.random() * die) + 1);

		let crit = result === die;

		console.log(crit);

		result = result + character.skills[selectedSkill]
					    + character.modifier;

		return {result, crit};
	}

	doCheck(characters: Array<Character>, selectedSkill: string, die: number, target: number) {
		let results = [];
		characters.forEach((character) => {
			let roll = this.roll(character, selectedSkill, die);
			results.push({
				roll: roll.result,
				characterName: character.name,
				icon: roll.crit ? 'error_outline' : roll.result >= target ? 'check' : 'clear',
				color: roll.crit ? 'blue' : roll.result >= target ? 'green' : 'red'
			});
		});
		results.sort((a, b) => a.roll <= b.roll ? 1 : -1);
		console.log(results);

		return results;
	}
}

class Character {
	constructor(name: string, skills: Object, modifier: number) {
		this.name = name;
		this.skills = skills;
		this.modifier = modifier;
	}

	name: string;
	skills: Object;
	modifier: number;
}
