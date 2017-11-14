import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatButtonModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { PlayerManagementModule } from '../player-management/player-management.module';
import { PlayerManagementComponent } from '../player-management/player-management.component'

import { SkillRollerModule } from '../skill-roller/skill-roller.module';
import { SkillRollerComponent } from '../skill-roller/skill-roller.component';

import { DashboardModule } from '../dashboard/dashboard.module';
import { DashboardComponent } from '../dashboard/dashboard.component';

import {CampaignManagementModule} from '../campaign-management/campaign-management.module';
import {CampaignManagementComponent} from '../campaign-management/campaign-management.component';

import { MainComponent } from './main.component';

const appRoutes: Routes = [
	{
		path: 'player-management',
		component: PlayerManagementComponent,
	},
	{
		path: 'campaign-management',
		component: CampaignManagementComponent,
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
	},
	{
		path: 'skill-roller',
		component: SkillRollerComponent,
	},
	{ path: '**', component: DashboardComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		),
		CommonModule,
		MatButtonModule,
		MatTooltipModule,
		BrowserAnimationsModule,
		PlayerManagementModule,
		SkillRollerModule,
		DashboardModule,
		CampaignManagementModule
	],
	exports: [
		MainComponent,
	],
	declarations: [
		MainComponent,
	],
	providers: [],
})
export class MainModule { }
