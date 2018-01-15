import { NgModule } from '@angular/core';
import { CampaignManagementComponent } from './campaign-management.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [ SharedModule ],
	declarations: [CampaignManagementComponent],
	providers: [],
	exports: [CampaignManagementComponent]
})
export class CampaignManagementModule { }
