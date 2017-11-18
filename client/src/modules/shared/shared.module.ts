import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
        MatButtonModule,
  		MatTooltipModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatInputModule,
        FormsModule
    ],
  declarations: [],
  providers: [],
  exports: [
      MatButtonModule,
      MatTooltipModule,
      BrowserAnimationsModule,
      MatSelectModule,
      MatInputModule,
      FormsModule
  ]
})
export class SharedModule { }
