import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 { path: 'reactiveForms', component: ReactiveFormsComponent},
 { path: 'templateDriven', component: TemplateDrivenComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
