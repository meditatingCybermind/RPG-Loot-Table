import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'skill-roller',
	templateUrl: 'skill-roller.component.html',
})
export class SkillRollerComponent implements OnInit {
    selectedSkill = "";

    //fake player data
    players = [
        {
            name: 'Jiro',
            perception: 5,
            stealth: 10,
            knowledge: 3
        },
        {
            name: 'Tiberius',
            perception: 3,
            stealth: 1,
            knowledge: 20
        },
        {
            name: 'BoyHowdy',
            perception: 2,
            stealth: 10,
            knowledge: 5
        },
    ]

    skills = ["perception", "stealth", "knowledge"];

	constructor() { }

	ngOnInit() { }
}
