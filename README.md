# TP INF3190 Été 2020 – Québec Informatique sous Covid-19

 ## Description
 
 Qi est un site web développer par angular, pour commander des articles en ligne.
 
 Ce programme est développé dans le cadre du cours INF3190 de l'UQAM.

 ## Auteur

 Hussein Nahlé
 
 ## Fonctionnement

 Cloner le projet avec la commande
   
 ```ssh
 $ git clone https://github.com/Hussein-N/Qi-inf3190.git
 ```
Entrer dans le fichier de l'application qi et démarrer l'application `ng serve`

Ouvrir un navigateur web et visiter l'url (page principale): `localhost:4211/`

## Contenu du projet

La page principale contient une barre de navigation, qui elle même contient des liens vers: 

- Page magasiner : `localhost:4211/magasiner`

	- contenu du fichier bd.json
	- lien vers gerant (localhost:4211/gerant)
	- lien vers covid19 (localhost:4211/covid19)
	- lien vers données bruts bd.json et commande.json


- Page contact : `localhost:4211/contact`
	
	- photo et info gerant et contact

- Page commander : `localhost:4211/commander`

	- formulaire  à remplir pour faire une commande
	- boutton submit qui enregistre les donnees du formulaire et redirige vers la page paiement (localhost:4211/paiement) 
	- lien vers suivi (localhost:4211/suivi)(au dessus du boutton submit)
