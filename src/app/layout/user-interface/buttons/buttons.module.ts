/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { ButtonsComponent } from './buttons.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: ButtonsComponent
  	}, {
		path: '**', component: ButtonsComponent
  	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
  	],
  	declarations: [ButtonsComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class ButtonsModule { }


