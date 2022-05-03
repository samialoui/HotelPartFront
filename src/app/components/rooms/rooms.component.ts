import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor( private service: SharedService) { }
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

}
