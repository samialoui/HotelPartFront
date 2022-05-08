import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor( private service: SharedService,private route: Router) { }
  ChambreList: any=[];

  ngOnInit(): void {
    this.refreshChambList();
  }

  refreshChambList(){
    this.service.getChambList().subscribe(data=>{
      this.ChambreList=data;
      //this.ChambreListWithoutFilter=data;
    });
  }

  SauvChambre(id:any,prix:any,type:any){
    localStorage.clear();
    localStorage.setItem("idChambre",id);
    localStorage.setItem("prixChambre",prix);
    localStorage.setItem("typeChambre",type);
    this.route.navigate(["/chambre-favore"]);
  }
}
