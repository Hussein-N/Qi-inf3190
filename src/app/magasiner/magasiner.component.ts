import { Component, OnInit } from '@angular/core';
import * as liste from '../../assets/data/bd.json';

@Component({
  selector: 'app-magasiner',
  templateUrl: './magasiner.component.html',
  styleUrls: ['./magasiner.component.css']
})
export class MagasinerComponent implements OnInit {

  bd: any = (liste as any).liste;

  longueur_liste_bd: number = (this.bd).length;

  constructor() { }

  ngOnInit(): void {
  }

}
