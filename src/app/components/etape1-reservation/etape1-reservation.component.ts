import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-etape1-reservation',
  templateUrl: './etape1-reservation.component.html',
  styleUrls: ['./etape1-reservation.component.css']
})
export class Etape1ReservationComponent implements OnInit {
  chambList: any;
  nbInvt : any;
  dateArr:any;
  dateDep:any;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refrechListChambre();
    this.getDateArrive();
    this.getDateDepart();
  }

  refrechListChambre(){
    var nbInvitee = localStorage.getItem("nbInvitee");
    this.nbInvt = nbInvitee;
    return this.service.getChambDispo(this.nbInvt).subscribe(data=>{
      this.chambList= data;
    });

  }
 
  SauvChambre(id :any,prix:any,type:any){
    localStorage.setItem("idChambre",id);
    localStorage.setItem("prixChambre",prix);
    localStorage.setItem("typeChambre",type);
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
