import { NgModule } from '@angular/core';
import { SkillRollerComponent } from './skill-roller.component';
import { CommonModule } from '@angular/common'

import { SharedModule } from '../shared/shared.module';
// import { NgModel } from '@angular/forms';



@NgModule({
	imports: [
		CommonModule,
		SharedModule
		// NgModel
	],
	declarations: [SkillRollerComponent],
	providers: [],
	exports: [SkillRollerComponent]
})
export class SkillRollerModule { }
