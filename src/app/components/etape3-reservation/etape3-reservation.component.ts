import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-etape3-reservation',
  templateUrl: './etape3-reservation.component.html',
  styleUrls: ['./etape3-reservation.component.css']
})
export class Etape3ReservationComponent implements OnInit {
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

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.getInformationRes();

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


}
