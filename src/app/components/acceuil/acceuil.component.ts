import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  bebe : any = "";
  adult : any = "";

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

  SauvInvite(total:any,arrive:any,depart:any){
    if(total.textContent != 1){
    localStorage.clear();
    
    localStorage.setItem("arrivée",arrive.value);
    localStorage.setItem("départ",depart.value);

    localStorage.setItem('nbInvitee', total.textContent);
    this.route.navigate(["/etape1-res"]);
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
