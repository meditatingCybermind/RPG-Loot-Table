import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'skill-roller',
	templateUrl: 'skill-roller.component.html',
	styleUrls: ['skill-roller.component.less']
})
export class SkillRollerComponent implements OnInit {
	selectedSkill = "";

	rollResult = [];

	target = 0;

	//fake player data
	players = [
		new Character('Jiro', {perception: 5, stealth: 10, knowledge: 3}, 0),
		new Character('Tiberius', {perception: 3, stealth: 2, knowledge: 12}, 0),
		new Character('BoyHowdy', {perception: 6, stealth: 3, knowledge: 1}, 0),
	]

	skills = {
		list: ["perception", "stealth", "knowledge"],
		die: 20
	};

	constructor() { }

	ngOnInit() {
		this.clearModifier(this.players);
	}

	clearModifier(characterList: Array<Character>) {
		console.log(characterList);
		characterList.forEach((player) => { player.modifier = 0; });
	}

	roll(character: Character, selectedSkill: string, die: number) {
		let result = 0;
		result = (Math.floor(Math.random() * die) + 1)
					+ character.skills[selectedSkill]
					+ character.modifier;

		return result;
	}

	doCheck(characters: Array<Character>, selectedSkill: string, die: number, target: number) {
		let results = [];
		characters.forEach((character) => {
			let roll = this.roll(character, selectedSkill, die);
			results.push({
				roll,
				characterName: character.name,
				icon: roll >= target ? 'check' : 'clear',
				color: roll >= target ? 'green' : 'red'
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
