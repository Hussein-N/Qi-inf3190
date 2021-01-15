import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MagasinerComponent } from './magasiner/magasiner.component';
import { AchatComponent } from './achat/achat.component';
import { PaiementComponent } from './paiement/paiement.component';
import { SuiviComponent } from './suivi/suivi.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MagasinerComponent,
    AchatComponent,
    PaiementComponent,
    SuiviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
