import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { ActionsComponent } from './actions/actions.component';
import { ObligationsComponent } from './obligations/obligations.component';
import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes= [
  {path:'actions', component: ActionsComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    ObligationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
