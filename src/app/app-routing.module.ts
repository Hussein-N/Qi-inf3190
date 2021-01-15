import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AchatComponent } from './achat/achat.component';
import { MagasinerComponent } from './magasiner/magasiner.component';
import { PaiementComponent } from './paiement/paiement.component';
import { SuiviComponent } from './suivi/suivi.component';

const routes: Routes = [
  { path: 'gerant', redirectTo: 'contact' },
  { path: 'contact', component: ContactComponent },
  { path: 'achat', component: AchatComponent },
  { path: 'magasiner', component: MagasinerComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'suivi', component: SuiviComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
