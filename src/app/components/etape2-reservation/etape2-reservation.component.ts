import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-etape2-reservation',
  templateUrl: './etape2-reservation.component.html',
  styleUrls: ['./etape2-reservation.component.css']
})
export class Etape2ReservationComponent implements OnInit {

  connecte: Boolean = false;

  Details : any;
  lastClient : any;
  nbPersonne:any;
  dateArr:any;
  dateDep:any;
  heureArr:any;
  heureDep:any;
  totalPrix:any;

  constructor( private service : SharedService, private route:Router) { }
  Nom!:string;
  Prenom!:string;
  Age!:string;
  Email!:string;
  NumTele!:string;
  Adress!:string;
  Password!:string;
  Ville!:string;
  CodePostal!:string;

  ngOnInit(): void {
    this.getChambre();
    this.getDateArr();
    this.getDateDep();
    this.getHeureArr();
    this.getHeureDep();
    this.getNbPersonne();
    this.service.getLastClient().subscribe(data=>{
      this.lastClient = data;
    }); 
  this.prixTotal();
  localStorage.setItem("prixTotal",this.totalPrix+".104");
  }

  addClient(nom:any,prenom:any,age:any,email:any,numTele:any,adress:any,password:any,ville:any,codePostal:any){
    if(localStorage.getItem('serviceMassage')=="" && localStorage.getItem('serviceAireport')=="" && localStorage.getItem('serviceGuide')==""){
      alert("Vous devez selectionner service avant");
    }
    else
    {
    var val = {Nom:nom.value,
      Prenom:prenom.value,
      Age:age.value,
      Email:email.value,
      NumTele:numTele.value,
      Adress:adress.value,
      Quartier:password.value,
      Ville:ville.value,
      CodePostal:codePostal.value};
    this.service.addClient(val).subscribe(res=>{
      alert("Client ajouté avec succée");
    }); 
    this.connecte = true;
  }
  }

  SauvinfoClient(id: any,nom: any,prenom: any,email: any,numtele:any,adress:any){
    if(localStorage.getItem('serviceMassage')==null || localStorage.getItem('serviceAireport')==null || localStorage.getItem('serviceGuide')==null){
      alert("Vous avez manque d'authentifier ou bien de saisir le coupon et la demande particuliére!!");
    }
    else
    {
    localStorage.setItem("idClient",id);
    localStorage.setItem("Nom",nom);
    localStorage.setItem("Prenom",prenom);
    localStorage.setItem("Email",email);
    localStorage.setItem("NumTele",numtele);
    localStorage.setItem("Adress",adress);
    this.route.navigate(["/etape3-res"]);

    }

  }

  getChambre(){
    var idChamb = localStorage.getItem("idChambre");
    this.service.getChambre(idChamb).subscribe(data=>{
      this.Details = data;
    })
    
  }


  changeTemps(e:any) {
    if(e.target.value == "10:00 - 11:00"){
      localStorage.setItem("heureArr","10h00");
      localStorage.setItem("heureDep","11h00");
      }
      else if(e.target.value == "12:00 - 13:00"){
        localStorage.setItem("heureArr","12h00");
        localStorage.setItem("heureDep","13h00");
        }
      else if(e.target.value == "13:00 - 14:00"){
          localStorage.setItem("heureArr","13h00");
          localStorage.setItem("heureDep","14h00");
          }
      else if (e.target.value == "17:00 - 118:00"){
            localStorage.setItem("heureArr","17h00");
            localStorage.setItem("heureDep","18h00");
        }
  }



  prixTotal(){

    var Massage =  Number(localStorage.getItem('serviceMassage'));
    var Aireport = Number(localStorage.getItem('serviceAireport'));
    var Guide = Number(localStorage.getItem('serviceGuide'));
    var tva = 3;
    //if(Massage != null && Aireport != null && Guide != null)
    var prixChambre = Number(localStorage.getItem('prixChambre'));
    var total = Massage+Aireport+Guide+tva+prixChambre;
    this.totalPrix=  total;
  }

  saveInfo(demande:any,coupon:any,massage:any,aireport:any,guide:any){
    if(localStorage.getItem("heureArr")=="" && localStorage.getItem("heureDep")==""){
      alert("Vous avez manque de selectionner le temps d'arrivée et de départ!!")
    }
    else{
    localStorage.setItem("serviceMassage",massage.value);
    localStorage.setItem("serviceAireport",aireport.value);
    localStorage.setItem("serviceGuide",guide.value);
    localStorage.setItem("specialDemande",demande.value);
    localStorage.setItem("coupon",coupon.value);
    }
  
  }

  getDateArr(){
    var DateArrive= localStorage.getItem("arrivée");
    this.dateArr=DateArrive;
  }
  getDateDep(){
    var DateDepart= localStorage.getItem("départ");
    this.dateDep = DateDepart;
  }
  getHeureArr(){
    var HeureArrive= localStorage.getItem("heureArr");
    this.heureArr = HeureArrive;
  }
  getHeureDep(){
   var HeureDepart= localStorage.getItem("heureDep");
   this.heureDep= HeureDepart;
  }
  getNbPersonne(){
    var nbInvite= localStorage.getItem("nbInvitee");
    this.nbPersonne= nbInvite;
   }
}
