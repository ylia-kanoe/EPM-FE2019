import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';
import { BattlefieldService } from './battlefield.service';
import { HelpersComponent } from './helpers/helpers.component';
import { HttpClientModule } from '@angular/common/http';
import { HelpersService } from './helpers/helpers.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';


@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    BattlefieldComponent,
    HelpersComponent,
    ReactiveFormsComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BattlefieldService, HelpersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
