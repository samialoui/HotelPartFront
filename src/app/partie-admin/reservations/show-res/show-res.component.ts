import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-res',
  templateUrl: './show-res.component.html',
  styleUrls: ['./show-res.component.css']
})
export class ShowResComponent implements OnInit {

  p:number = 1;
  constructor( private service: SharedService, private route:Router) { }
  ReservationList: any=[];
  Modaltitle!:string;
  ActivateAddEditResComp: boolean=false;
  res:any;

  ClientIdFilter:string="";
  ReservationListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshResList();

  }

  refreshResList(){
    this.service.getResList().subscribe(data=>{
      this.ReservationList=data;
      this.ReservationListWithoutFilter=data;
    });
  }

  conversionDispo(val: any){
    if(val == 1){
      return "disponible";
    }
    else{
      return "non disponible";
    }
  }
  conversionSaison(numSaison: any){
    if(numSaison == 3){
      return "printemps";
    }
    else if(numSaison == 5){
      return "ete";
    }
    else if(numSaison == 6){
      return "automne";
    }
    else{
      return "hiver";
    }
  }
  addClick(){
    this.res={
  Id:0,
  DateArr:"",
  DateDep:"",
  NbPers:"",
  ChambreId:"",
  NbLit:"",
  Prix: "",
  FactId:"",
  ClientId:"",
  DemandSpecial:"",
  Coupon: "",
  PaymentId: "",
  Confirmation: "",
    }
    this.Modaltitle="Ajouter Réservation";
    this.ActivateAddEditResComp=true;
  }

  editClick(item: any){
    this.res=item;
    this.Modaltitle="Modifier Réservation";
    this.ActivateAddEditResComp=true;
  }

  closeClick(){
    this.ActivateAddEditResComp=false;
    this.refreshResList();
  }

  deleteClick(item:any){
    if(confirm('are you sure??')){
      this.service.deleteReservation(item.Id).subscribe(data=>{
        alert("Supprimer avec succée");
        this.refreshResList()
      });
    }
  }

  filterFn(){
  var ClientIdFilter = this.ClientIdFilter;

  this.ReservationList = this.ReservationListWithoutFilter.filter(function (fl:any){
    return fl.ClientId.toString().toLowerCase().includes(
      ClientIdFilter.toString().trim().toLowerCase())
  });
}


}
