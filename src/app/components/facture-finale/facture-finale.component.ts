import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-facture-finale',
  templateUrl: './facture-finale.component.html',
  styleUrls: ['./facture-finale.component.css']
})
export class FactureFinaleComponent implements OnInit {

  nbPersonne:any;
  dateArr:any;
  dateDep:any;
  heureArr:any;
  heureDep:any;
  Chambre:any;

  Nom:any;
  Prenom:any;
  Email:any;
  NumTele:any;
  Adress:any;
  PrixTotal: any;
  demandeSpecial: any;


  nbEnfants:any;
  nbAdultes:any
  nbJours:any;
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.getInformationRes();
    this.getNbEnfant();
    this.getNbAdult();
    this.getNbJours();

  }

 

  getInformationRes(){
    var nom= localStorage.getItem("Nom");
    this.Nom=nom;

    var prenom= localStorage.getItem("Prenom");
    this.Prenom = prenom;
 
    var email= localStorage.getItem("Email");
    this.Email = email;
 
   var numero= localStorage.getItem("NumTele");
   this.NumTele= numero;
 
    var adress= localStorage.getItem("Adress");
    this.Adress= adress;

    var chambre= localStorage.getItem("typeChambre");
    this.Chambre= chambre;
  
    var DateArrive= localStorage.getItem("arrivée");
    this.dateArr=DateArrive;

    var DateDepart= localStorage.getItem("départ");
    this.dateDep = DateDepart;

    var HeureArrive= localStorage.getItem("heureArr");
    this.heureArr = HeureArrive;

   var HeureDepart= localStorage.getItem("heureDep");
   this.heureDep= HeureDepart;

    var nbInvite= localStorage.getItem("nbInvitee");
    this.nbPersonne= nbInvite;
 
    var demande= localStorage.getItem("specialDemande");
    this.demandeSpecial= demande;
  
     var prixTotal= localStorage.getItem("prixTotal");
     this.PrixTotal= prixTotal;
    }


    getNbAdult(){
      var nbAdult= localStorage.getItem("nbAdult");
      this.nbAdultes= nbAdult;
     }
     getNbEnfant(){
      var nbEnfant= localStorage.getItem("nbEnfant");
      this.nbEnfants= nbEnfant;
     }
     getNbJours(){
      var nbJour= localStorage.getItem("NbJours");
      this.nbJours= nbJour;
     }

}
