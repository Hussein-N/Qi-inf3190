import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as liste from '../../assets/data/bd.json';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {

  quantite = new FormControl('');
  prenom = new FormControl('');
  id = new FormControl('');
  achats: any = [];
  commande: any = 'hus';
  numeroCommande = 0;

  bd: any = (liste as any).liste;

  valider(): any{

	let p = this.prenom.value;
	let q = this.quantite.value;

	document.getElementById('msg_err1').innerHTML = '';
	document.getElementById('msg_err2').innerHTML = '';

	if (((p == null) || (p === '')) && ((q == null) || (q === ''))) {

		document.getElementById('msg_err1').innerHTML = 'Encoder un prénom svp!';
		document.getElementById('msg_err2').innerHTML = 'Encoder une quantité svp!';

	} else if (p == null || p === '') {

		document.getElementById('msg_err1').innerHTML = 'Encoder un prénom svp!';

	} else if (((p == null) || (p === ''))
			&& (q.match(/[A-Za-z]/) || (q <= 0) || (q > 20))) {

		document.getElementById("msg_err1").innerHTML = 'Encoder un prénom svp!';
		document.getElementById("msg_err2").innerHTML = 'Encoder une quantité valide svp!';

	} else {

		if (q.match(/[A-Za-z]/) || (q <= 0) || (q > 20)) {

			document.getElementById('msg_err2').innerHTML = 'Encoder une quantité valide svp!';
			document.getElementById('msg_err1').innerHTML = '';

		} else if ((q == null) || (q === '')) {

			document.getElementById('msg_err2').innerHTML = 'Encoder une quantité svp!';
			document.getElementById('msg_err1').innerHTML = '';

		} else {
			this.numeroCommande++;
			this.commande = 'Prénom: ' + p + ' Quantité: ' + q + ' Id: ' + this.id.value + ' Numero Commande: ' + this.numeroCommande;
			this.achats.push(this.commande)

			return (true);
		}
	}
	return (false)
}

  constructor() { }

  ngOnInit(): void {
  }

}
