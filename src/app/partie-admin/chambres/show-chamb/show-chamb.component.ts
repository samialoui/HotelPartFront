import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-chamb',
  templateUrl: './show-chamb.component.html',
  styleUrls: ['./show-chamb.component.css']
})
export class ShowChambComponent implements OnInit {

  p:number = 1;
  constructor( private service: SharedService, private route:Router) { }
  ChambreList: any=[];
  Modaltitle!:string;
  ActivateAddEditChambComp: boolean=false;
  chamb:any;

  NumChambreFilter:string="";
  ChambreListWithoutFilter:any=[];

  type:any;
  ngOnInit(): void {
   
    this.type= localStorage.getItem("typeUser");
    this.refreshChambList();

  }

  refreshChambList(){
    this.service.getChambList().subscribe(data=>{
      this.ChambreList=data;
      this.ChambreListWithoutFilter=data;
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
    this.chamb={
  ChambreId:0,
  ChambreNum:"",
  TypeChamb:"",
  PrixNuit:"",
  NbLit:"",
  Descript:"",
  Photo: null,
  Disponibilite:"",
  Saison:"",
    }
    this.Modaltitle="Ajouter Chambre";
    this.ActivateAddEditChambComp=true;
  }

  editClick(item: any){
    this.chamb=item;
    this.Modaltitle="Modifier Chambre";
    this.ActivateAddEditChambComp=true;
  }

  closeClick(){
    this.ActivateAddEditChambComp=false;
    this.refreshChambList();
  }

  deleteClick(item:any){
    if(confirm('are you sure??')){
      this.service.deleteChambre(item.BlogId).subscribe(data=>{
        alert("Supprimer avec succée");
        this.refreshChambList()
      });
    }
  }

  filterFn(){
  var NumChambreFilter = this.NumChambreFilter;

  this.ChambreList = this.ChambreListWithoutFilter.filter(function (fl:any){
    return fl.Nom.toString().toLowerCase().includes(
      NumChambreFilter.toString().trim().toLowerCase())
  });
}


}
