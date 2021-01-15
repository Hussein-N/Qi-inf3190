import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as liste from '../../assets/data/bd.json';
import * as article from '../../assets/data/commandes.json';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {

  numeroCommande = new FormControl('');
  bd: any = (liste as any).liste;
  commandes: any = (article as any).articles;

  constructor() { }


  chercher(): void {
    let id;

    document.getElementById('resultat').innerHTML = ('0 resultat');
    document.getElementById('msgErreur').innerHTML = ('');

    for (let e of this.commandes){
      if (this.numeroCommande.value.match(/^[0-9]+$/)){
        if (e.numero == this.numeroCommande.value){
          id = e.id;
          for (let i of this.bd){
            if (id == i.id){
              document.getElementById('resultat').innerHTML = ('Numero de commande : ' + e.numero + '<br>Prenom : ' + e.prenom +
              '<br>Ramassage : ' + e.ramassage + '<br>Statut : ' + e.statut + '<br>Id : ' + e.id + '<br>' +
              '<img src="../../assets/images/' + i.image + '" alt="article" style="max-width: 90px; max-height: 90px;">');
            }
          }
        }
      }else{
        document.getElementById('msgErreur').innerHTML = ('Numero de commande invalide !');
      }
    }
  }



  ngOnInit(): void {
  }

}
