import { NgModule } from '@angular/core';
import { SkillRollerComponent } from './skill-roller.component';
import { CommonModule } from '@angular/common'
import { MatSelectModule } from '@angular/material/select';
// import { NgModel } from '@angular/forms';



@NgModule({
	imports: [
		CommonModule,
		MatSelectModule,
		// NgModel
	],
	declarations: [SkillRollerComponent],
	providers: [],
	exports: [SkillRollerComponent]
})
export class SkillRollerModule { }
