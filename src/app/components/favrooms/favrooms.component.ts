import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-favrooms',
  templateUrl: './favrooms.component.html',
  styleUrls: ['./favrooms.component.css']
})
export class FavroomsComponent implements OnInit {
  nbEnfant: string = "";
  nbAdult: string = "";
  total: any;
  chambInfo: any;
  idChamb : any;


  constructor(private service: SharedService, private route:Router) { }
  @Input() redirectTo: string = "/etape2-res";
  ngOnInit(): void {
    this.refrechChambre();
  }

  selectAdult (event: any) {
    //update the ui
    this.nbAdult = event.target.value;
  }
  selectEnfant (event: any) {
    //update the ui
    this.nbEnfant = event.target.value;
  }

  refrechChambre(){
    var id = localStorage.getItem("idChambre");
    this.idChamb = id;
    return this.service.getChambreById(this.idChamb).subscribe(data=>{
      this.chambInfo= data;
    });

  }
 
  SauvInvite(arrive:any,depart:any){
    this.total = Number(this.nbAdult) + Number(this.nbEnfant);
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
