import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-res',
  templateUrl: './add-edit-res.component.html',
  styleUrls: ['./add-edit-res.component.css']
})
export class AddEditResComponent implements OnInit {


  ImageList: any=[];


  constructor(private service: SharedService) {}
  @Input() res:any;
  Id!: string;
  DateArr!:string;
  DateDep!:string;
  NbPers!:string;
  ChambreId!:string;
  NbLit!:string;
  Prix!:string;
  FactId!:string;
  ClientId: any;
  DemandSpecial!:string;
  Coupon!:string;
  PaymentId!:string;
  Confirmation!:string;

  
  ngOnInit(): void {
    this.Id= this.res.Id;
    this.DateArr= this.res.DateArr;
    this.DateDep=this.res.DateDep;
    this.NbPers=this.res.NbPers;
    this.ChambreId=this.res.ChambreId;
    this.NbLit=this.res.NbLit;
    this.Prix=this.res.Prix;
    this.FactId=this.res.FactId;
    this.ClientId=this.res.ClientId;
    this.DemandSpecial=this.res.DemandSpecial;
    this.Coupon = this.res.Coupon;
    this.PaymentId=this.res.PaymentId;
    this.Confirmation = this.res.Confirmation;
  }



  addReservation(){
    var val = {
    Id: this.Id,
    DateArr: this.DateArr,
    DateDep: this.DateDep,
    NbPers: this.NbPers,
    ChambreId: this.ChambreId,
    NbLit: this.NbLit,
    Prix: this.Prix,
    FactId: this.FactId,
    ClientId: this.ClientId,
    DemandSpecial: this.DemandSpecial,
    Coupon: this.Coupon,
    PaymentId: this.PaymentId,
    Confirmation: this.Confirmation};
    this.service.addReservation(val).subscribe(res=>{
      alert("Modifier avec succée");
    });
  }


  putReservation(){
    var val = {
      Id: this.Id,
      DateArr: this.DateArr,
      DateDep: this.DateDep,
      NbPers: this.NbPers,
      ChambreId: this.ChambreId,
      NbLit: this.NbLit,
      Prix: this.Prix,
      FactId: this.FactId,
      ClientId: this.ClientId,
      DemandSpecial: this.DemandSpecial,
      Coupon: this.Coupon,
      PaymentId: this.PaymentId,
      Confirmation: this.Confirmation};
    this.service.updateReservation(val).subscribe(res=>{
      alert("Modifier avec succée");
    });
  }

 

}
