import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'campaign-management',
	templateUrl: 'campaign-management.component.html',
})
export class CampaignManagementComponent implements OnInit {
    campaignSettings = {};

	systems = [{
        name: "pathfinder"
	}];

	constructor() { }

	ngOnInit() { }
}
