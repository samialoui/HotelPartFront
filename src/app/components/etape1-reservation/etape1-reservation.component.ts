import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-etape1-reservation',
  templateUrl: './etape1-reservation.component.html',
  styleUrls: ['./etape1-reservation.component.css']
})
export class Etape1ReservationComponent implements OnInit {
  @Input() redirectTo: string = "/etape2-res";
  total: any;
  nbEnfant: string = "";
  nbAdult: string = "";

  enfants:any;
  adultes:any;

  chambList: any;
  nbInvt : any;
  dateArr:any;
  dateDep:any;

 
  constructor(private service: SharedService, private route:Router) { }

  ngOnInit(): void {
    this.refrechListChambre();
    this.getDateArrive();
    this.getDateDepart();
    this.enfants = localStorage.getItem('nbEnfant');
     this.adultes = localStorage.getItem('nbAdult');


    

  }

  refrechListChambre(){
    var nbInvitee = localStorage.getItem("nbInvitee");
    this.nbInvt = nbInvitee;
    return this.service.getChambDispo(this.nbInvt).subscribe(data=>{
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
  SauvChambre(id :any,prix:any,type:any){
    this.total = Number(this.nbAdult) + Number(this.nbEnfant);
    localStorage.setItem("idChambre",id);
    localStorage.setItem("prixChambre",prix);
    localStorage.setItem("typeChambre",type);
    if(this.dateDep == "" || this.dateArr == "" || this.total == 0   ){
     
    window.location.assign(this.redirectTo);
    // localStorage.setItem('serviceMassage',"");
    //localStorage.setItem('serviceAireport',"");
    //localStorage.setItem('serviceGuide',"");
    localStorage.setItem("heureArr","");
    localStorage.setItem("coupon","");
    localStorage.setItem("heureDep","");
    localStorage.setItem("specialDemande","");
  }
  else
  {
    localStorage.setItem("arrivée",this.dateArr);
    localStorage.setItem("départ",this.dateDep);
    localStorage.setItem('nbInvitee', this.total);
    this.route.navigate(["/etape2-res"]);
  }
  }


  addToDetails(item : any){
    this.service.addToDetail(item.value);
  }

  getDateArrive(){
    this.dateArr = localStorage.getItem('arrivée');
  }
  getDateDepart(){
    this.dateDep = localStorage.getItem('départ');
  }


 

}
