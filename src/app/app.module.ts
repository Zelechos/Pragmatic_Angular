import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EtherHackerComponent } from './app.component';
import { CodeButtonComponent } from './code-button/code-button.component';

@NgModule({
  declarations: [
    EtherHackerComponent,
    CodeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EtherHackerComponent],
  exports: []
})
export class AppModule { }
