import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatButtonModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { PlayerManagementModule } from '../player-management/player-management.module';
import { PlayerManagementComponent } from '../player-management/player-management.component'

import { MainComponent } from './main.component';

const appRoutes: Routes = [
	{
		path: 'player-management',
		component: PlayerManagementComponent,
		data: { title: 'Player Management' }
	},
	{
		path: '',
		redirectTo: '/heroes',
		pathMatch: 'full'
	},
	{ path: '**', component: PlayerManagementComponent }
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
		PlayerManagementModule
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
