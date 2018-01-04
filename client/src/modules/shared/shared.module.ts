import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@NgModule({
	imports: [
		MatButtonModule,
		MatTooltipModule,
		BrowserAnimationsModule,
		MatSelectModule,
		MatInputModule,
		FormsModule,
		MatTableModule
	],
	declarations: [],
	providers: [],
	exports: [
		MatButtonModule,
		MatTooltipModule,
		BrowserAnimationsModule,
		MatSelectModule,
		MatInputModule,
		FormsModule,
		MatTableModule
	]
})
export class SharedModule { }
