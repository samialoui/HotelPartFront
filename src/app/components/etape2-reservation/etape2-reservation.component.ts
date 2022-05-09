import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-etape2-reservation',
  templateUrl: './etape2-reservation.component.html',
  styleUrls: ['./etape2-reservation.component.css']
})
export class Etape2ReservationComponent implements OnInit {
  @Input() redirectTo: string = "/etape3-res";
  @Input() actualiser: string = "/etape2-res";
  form!: FormGroup;
  websiteList: any = [
    { id: 1, name: 'massage & Spa', prix:'60', description:'      (Chambre / Voyage)' },
    { id: 2, name: 'Prise en charge à l aireport', prix:'24', description:'     (Chambre / Voyage)' },
    { id: 3, name: 'Visite guidée', prix:'36', description:'      (Adultes + Enfants / Voyage)' }
  ];

  
  connecte: Boolean = false;
  verifCode : boolean = false;
 

  Details : any;
  lastClient : any;
  nbPersonne:any;
  nbEnfants:any;
  nbAdultes:any
  nbJours:any;
  dateArr:any;
  dateDep:any;
  heureArr:any;
  heureDep:any;
  totalPrix:any;
  Chamb: any;

  alertCoupon: string ="";
  alertDemande: string ="";


  valDatArr1:any;
  valDatArr2:any;
  valDatDep1:any;
  valDatDep2:any;
  nbNuits:any;

  constructor( private service : SharedService, private route:Router,private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      website: this.formBuilder.array([], [Validators.required])
    })
  }


      
  onCheckboxChange(e:any) {
    const website: FormArray = this.form.get('website') as FormArray;
   
    if (e.target.checked) {
      website.push(new FormControl(e.target.value));
      if(e.target.value == "massage & Spa") {
      localStorage.setItem("Massage","60");
      localStorage.setItem("idMassage","3");
      }
      if(e.target.value == "Prise en charge à l aireport") {
        localStorage.setItem("Aireport","24");
        localStorage.setItem("idAireport","1003");
        }
        if(e.target.value == "Visite guidée") {
          localStorage.setItem("Visite","36");
          localStorage.setItem("idVisite","1002");
          }
    } else {
      localStorage.setItem("Massage","");
   
      localStorage.setItem("Aireport","");
    
        localStorage.setItem("Visite","");
    }
  }
     
  submit(){
    console.log();
  }
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
    this.getNbEnfant();
    this.getNbAdult();
    this.getNbJours();
    this.service.getLastClient().subscribe(data=>{
      this.lastClient = data;
    }); 
     //calcul nombre de jours
     this.valDatArr1 = localStorage.getItem('arrivée')?.charAt(8);
     this.valDatArr2 = localStorage.getItem('arrivée')?.charAt(9);
     var final1 = this.valDatArr1 + this.valDatArr2;
    

     this.valDatDep1 = localStorage.getItem('départ')?.charAt(8);
     this.valDatDep2 = localStorage.getItem('départ')?.charAt(9);
     var final2 = this.valDatDep1 + this.valDatDep2;
    

     var tot = Number(final2) - Number(final1);
     this.nbNuits = tot;
     localStorage.setItem("NbJours",this.nbNuits);
  this.prixTotal();
  localStorage.setItem("prixTotal",this.totalPrix+".104");
  }



  

  onChangeMassage(event:any){
    const val = event.target.checked;
    if(val){
    localStorage.setItem("valMassage","60");
    }

  }


  addClient(nom:any,prenom:any,age:any,email:any,numTele:any,adress:any,password:any,ville:any,codePostal:any){
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
      this.connecte = true;
    }); 
    if(this.connecte == false){
      alert("l'ajout de client est échoué");
    }
  }

  SauvinfoClient(id: any,nom: any,prenom: any,email: any,numtele:any,adress:any){
 if(localStorage.getItem("coupon") == ""){
      alert("Vous avez manque d'authentifier ou bien de vérifier le coupon!!");
    }
    else
    {
    localStorage.setItem("idClient",id);
    localStorage.setItem("Nom",nom);
    localStorage.setItem("Prenom",prenom);
    localStorage.setItem("Email",email);
    localStorage.setItem("NumTele",numtele);
    localStorage.setItem("Adress",adress);
    window.location.assign(this.redirectTo);
    }
    

  }

  getChambre(){
    var idChamb = localStorage.getItem("idChambre");
    this.Chamb = idChamb;
    this.service.getChambre(this.Chamb).subscribe(data=>{
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
    var nbJours = Number(localStorage.getItem("NbJours"));
    //if(Massage != null && Aireport != null && Guide != null)
    var prixChambre = Number(localStorage.getItem('prixChambre'));
    var total = (Massage+Aireport+Guide+prixChambre) * nbJours + tva;
    this.totalPrix=  total;
  }

  saveInfo(demande:any,coupon:any){
   // var Massage =  localStorage.getItem('serviceMassage');
   // var Aireport = localStorage.getItem('serviceAireport');
   // var Guide = localStorage.getItem('serviceGuide');
    var heureArr = localStorage.getItem("heureArr");
    var heureDep = localStorage.getItem("heureDep");
   // var Demande = localStorage.getItem("specialDemande");
    if(  (heureArr == "" && heureDep =="") || coupon.value == "" || demande.value == "" || this.connecte ==false ){
      this.alertCoupon = "Veuillez saisir le coupon, c'est un champ obligatoire";
      alert("Vous avez manque d'authentifier ou bien de sélectionner le temps d'arrivée/départ !!");
    }
    else{
    //localStorage.setItem("serviceMassage",massage.value);
    //localStorage.setItem("serviceAireport",aireport.value);
    //localStorage.setItem("serviceGuide",guide.value);
    localStorage.setItem("specialDemande",demande.value);
    localStorage.setItem("coupon",coupon.value);
    this.verifCode = true;
    alert("le coupon a été vérifié avec succée");
    window.location.assign(this.actualiser);
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
