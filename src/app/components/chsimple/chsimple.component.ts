import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-chsimple',
  templateUrl: './chsimple.component.html',
  styleUrls: ['./chsimple.component.css']
})
export class ChsimpleComponent implements OnInit {

  chambListSimple: any;


  constructor( private service: SharedService) { }

  ngOnInit(): void {
 
    this.ListChambreSimple();
  }

  ListChambreSimple(){
    return this.service.getChambDispo(1).subscribe(data=>{
      this.chambListSimple= data;
    });
  }
  



}
