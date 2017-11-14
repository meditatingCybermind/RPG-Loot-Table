import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'main-view',
	templateUrl: 'main.component.html',
	styleUrls: ['main.component.css'],
})
export class MainComponent implements OnInit {
    toolList = [
		{
			name: 'Dashboard',
			icon: 'lock',
			route: 'dashboard'
		},
		{
			name: 'Campaign Management',
			icon: 'note',
			route: 'campaign-management'
		},
        {
            name: 'Player Management',
            icon: 'people',
			route: 'player-management'
        },
        {
            name: 'Skill Roller',
            icon: 'check',
			route: 'skill-roller'
        }
    ]
	constructor() { }

	ngOnInit() { }
}
