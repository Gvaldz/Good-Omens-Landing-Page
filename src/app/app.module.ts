import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeasonsCardComponent } from './seasons/seasons-card/seasons-card.component';
import { CharacterCardComponent } from './characters/character-card/character-card.component'; 
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ButtonsDivComponent } from './buttons-div/buttons-div.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonsCardComponent,
    CharacterCardComponent,
    FooterComponent,
    HeaderComponent,
    ButtonsDivComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
