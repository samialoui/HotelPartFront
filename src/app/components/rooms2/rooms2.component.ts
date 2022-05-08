import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-rooms2',
  templateUrl: './rooms2.component.html',
  styleUrls: ['./rooms2.component.css']
})
export class Rooms2Component implements OnInit {
  @Input() redirectTo: string = "/etape2-res";
  nbEnfant: string = "";
  nbAdult: string = "";
  total: any;
  chambList: any;

  constructor(private service: SharedService, private route:Router) { }
  

  ngOnInit(): void {
    this.refrechListChambre();
  }

  refrechListChambre(){
    return this.service.getChambList().subscribe(data=>{
      this.chambList= data;
    
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
  SauvChambre(id:any,prix:any,type:any,arrive:any,depart:any){
    this.total = Number(this.nbAdult) + Number(this.nbEnfant);
    localStorage.clear();
    localStorage.setItem("idChambre",id);
    localStorage.setItem("prixChambre",prix);
    localStorage.setItem("typeChambre",type);
    if(this.total != 0){
      localStorage.setItem("arrivée",arrive.value);
      localStorage.setItem("départ",depart.value);
      localStorage.setItem('nbInvitee', this.total);
      localStorage.setItem('nbEnfant', this.nbEnfant);
      localStorage.setItem('nbAdult', this.nbAdult);
      localStorage.setItem('serviceMassage',"");
      localStorage.setItem('serviceAireport',"");
      localStorage.setItem('serviceGuide',"");
      localStorage.setItem("heureArr","");
      localStorage.setItem("coupon","");
      localStorage.setItem("heureDep","");
      localStorage.setItem("specialDemande","");
      window.location.assign(this.redirectTo);
      }
      else{
        alert("S'il vous plait ,vous devez choisir la date et le nombre de visiteurs");
      }
  }


  

}
