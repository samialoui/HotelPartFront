import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-offres',
  templateUrl: './show-offres.component.html',
  styleUrls: ['./show-offres.component.css']
})
export class ShowOffresComponent implements OnInit {

  
  p:number = 1;
  constructor( private service: SharedService) { }
  ServiceList: any=[];
  Modaltitle!:string;
  ActivateAddEditServComp: boolean=false;
  serv:any;

  NomServiceFilter:string="";
  ServiceListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshServList();

  }

  refreshServList(){
    this.service.getServList().subscribe(data=>{
      this.ServiceList=data;
      this.ServiceListWithoutFilter=data;
    });
  }
  addClick(){
    this.serv={
  ServiceId:0,
  NomS:"",
  Prix:"",
  Descript:"",
  Photo: null,
    }
    this.Modaltitle="Ajouter Service";
    this.ActivateAddEditServComp=true;
  }

  editClick(item: any){
    this.serv=item;
    this.Modaltitle="Modifier Service";
    this.ActivateAddEditServComp=true;
  }

  closeClick(){
    this.ActivateAddEditServComp=false;
    this.refreshServList();
  }

  deleteClick(item:any){
    if(confirm('are you sure??')){
      this.service.deleteService(item.BlogId).subscribe(data=>{
        alert("Supprimer avec succée");
        this.refreshServList()
      });
    }
  }

  filterFn(){
  var NomServiceFilter = this.NomServiceFilter;

  this.ServiceList = this.ServiceListWithoutFilter.filter(function (fl:any){
    return fl.Nom.toString().toLowerCase().includes(
      NomServiceFilter.toString().trim().toLowerCase())
  });
}


}
