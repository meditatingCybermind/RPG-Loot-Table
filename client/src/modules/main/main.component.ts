import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'main-view',
	templateUrl: 'main.component.html',
	styleUrls: ['main.component.css'],
})
export class MainComponent implements OnInit {
    toolList = [
        {
            name: 'Player Management',
            icon: 'people'
        },
        {
            name: 'Skill Roller',
            icon: 'check'
        }
    ]
	constructor() { }

	ngOnInit() { }
}
