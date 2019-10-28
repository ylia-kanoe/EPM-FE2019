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

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    BattlefieldComponent,
    HelpersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BattlefieldService, HelpersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
