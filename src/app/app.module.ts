import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MathComponent } from './games/math/math.component';
import { AboutComponent } from './games/about/about.component';
import { FormatPipe } from './pipes/format.pipe';
import { GameService } from  './services/games.service';
import { AttrDirective } from './directives/attr.directive'

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    AboutComponent,
    FormatPipe,
    AttrDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
