import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { Router } from '@angular/router';
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
  ChambreId: any;
  FactId: any = "1";
  ClientId:any;
  Coupon:any;
  PaymentId: any = "1";
  Confirmation: any = "0";

  nbEnfants:any;
  nbAdultes:any
  nbJours:any;
  constructor(private service:SharedService, private route:Router) { }

  ngOnInit(): void {
    this.getInformationRes();
    this.getNbEnfant();
    this.getNbAdult();
    this.getNbJours();
    this.getCoupon();
    this.getChambre();
    this.getClient();

  }

  addReservation(){
    var val = {
    DateArr: this.dateArr,
    DateDep: this.dateDep,
    NbPers: this.nbPersonne,
    ChambreId: this.ChambreId,
    NbLit: this.nbPersonne,
    Prix: this.PrixTotal+"3.104",
    FactId: this.FactId,
    ClientId: this.ClientId,
    DemandSpecial: this.demandeSpecial,
    Coupon: this.Coupon,
    PaymentId: this.PaymentId,
    Confirmation: this.Confirmation};
    this.service.addReservation(val).subscribe(res=>{
      alert("Ajouté avec succée");
      localStorage.setItem("Reservation","non Confirmé");
      this.route.navigate(["/facture"]);
    });
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


     getClient(){
      var client= localStorage.getItem("idClient");
      this.ClientId= client;
     }
     getChambre(){
      var chambre= localStorage.getItem("idChambre");
      this.ChambreId= chambre;
     }
     getCoupon(){
      var coupon= localStorage.getItem("coupon");
      this.Coupon= coupon;
     }

}
