import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
 
  nbEnfant: string = "";
  nbAdult: string = "";
  bebe : any = "";
  adult : any = "";

  total: any;

  ServiceList : any;
  chamb1 : any;
  chamb2 : any;
  chamb3 : any;
  chamb4 : any;
  chamb5 : any;
  chambre1: any = 140;
  chambre2: any = 160;
  chambre3: any = 190;
  chambre4: any = 270;
  chambre5: any = 290;
  type:any;
  constructor( private service: SharedService, private route: Router) { }

  ngOnInit(): void {
    this.type= localStorage.getItem("typeUser");
    this.refreshChambList();
    this.getChabmre1();
    this.getChabmre2();
    this.getChabmre3();
    this.getChabmre4();
    this.getChabmre5();

    
  }

  refreshChambList(){
    this.service.getServList().subscribe(data=>{
      this.ServiceList=data;
      //this.ChambreListWithoutFilter=data;
    });
  }
  SauvChambre1(id:any,prix:any,type:any){
    localStorage.clear();
    localStorage.setItem("idChambre",id);
    localStorage.setItem("prixChambre",prix);
    localStorage.setItem("typeChambre",type);
    this.route.navigate(["/chambre-favore"]);
  }
  SauvChambre2(id:any,prix:any,type:any){
    localStorage.clear();
    localStorage.setItem("idChambre",id);
    localStorage.setItem("prixChambre",prix);
    localStorage.setItem("typeChambre",type);
    this.route.navigate(["/chambre-favore"]);
  }
  SauvChambre3(id:any,prix:any,type:any){
    localStorage.clear();
    localStorage.setItem("idChambre",id);
    localStorage.setItem("prixChambre",prix);
    localStorage.setItem("typeChambre",type);
    this.route.navigate(["/chambre-favore"]);
  }
  SauvChambre4(id:any,prix:any,type:any){
    localStorage.clear();
    localStorage.setItem("idChambre",id);
    localStorage.setItem("prixChambre",prix);
    localStorage.setItem("typeChambre",type);
    this.route.navigate(["/chambre-favore"]);
  }
  SauvChambre5(id:any,prix:any,type:any){
    localStorage.clear();
    localStorage.setItem("idChambre",id);
    localStorage.setItem("prixChambre",prix);
    localStorage.setItem("typeChambre",type);
    this.route.navigate(["/chambre-favore"]);
  }
  getChabmre1(){
    this.service.getChambPrice(this.chambre1).subscribe(data=>{
      this.chamb1 = data;
    });
  }
  getChabmre2(){
    this.service.getChambPrice(this.chambre2).subscribe(data=>{
      this.chamb2 = data;
    });
  }
  getChabmre3(){
    this.service.getChambPrice(this.chambre3).subscribe(data=>{
      this.chamb3 = data;
    });
  }
  getChabmre4(){
    this.service.getChambPrice(this.chambre4).subscribe(data=>{
      this.chamb4 = data;
    });
  }
  getChabmre5(){
    this.service.getChambPrice(this.chambre5).subscribe(data=>{
      this.chamb5 = data;
    });
  }

  selectAdult (event: any) {
    //update the ui
    this.nbAdult = event.target.value;
  }
  selectEnfant (event: any) {
    //update the ui
    this.nbEnfant = event.target.value;
  }

  SauvInvite(arrive:any,depart:any){
     this.total = Number(this.nbAdult) + Number(this.nbEnfant);
    if(this.total != 0){
    localStorage.clear();
    
    localStorage.setItem("arrivée",arrive.value);
    localStorage.setItem("départ",depart.value);

    localStorage.setItem('nbInvitee', this.total);
    localStorage.setItem('nbEnfant', this.nbEnfant);
    localStorage.setItem('nbAdult', this.nbAdult);
    this.route.navigate(["/etape1-res"]);
    /*@Input() redirectTo: string = "/etape1-res";
    window.location.assign(this.redirectTo);*/
        }
    else{
      alert("S'il vous plait ,vous devez choisir la date et le nombre de visiteurs");
    }
  }
  /* localStorage.setItem("nbInvitee","");
    localStorage.setItem("specialDemande","");
    localStorage.setItem("heureArr","");
    localStorage.setItem("heureDep","");
    localStorage.setItem("idChambre","");
    localStorage.setItem("coupon","");
    localStorage.setItem("idClient","");
    localStorage.setItem("Nom","");
    localStorage.setItem("Prenom","");
    localStorage.setItem("Email","");
    localStorage.setItem("NumTele","");
    localStorage.setItem("Adress","");
    localStorage.setItem("serviceMassage","");
    localStorage.setItem("serviceAireport","");
    localStorage.setItem("serviceGuide","");
    localStorage.setItem("prixChambre","");  */
}
