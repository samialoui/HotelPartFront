import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-chquintiple',
  templateUrl: './chquintiple.component.html',
  styleUrls: ['./chquintiple.component.css']
})
export class ChquintipleComponent implements OnInit {

  chambListcinq: any;


  constructor( private service: SharedService) { }

  ngOnInit(): void {
 
    this.ListChambrecinq();
  }

  ListChambrecinq(){
    return this.service.getChambDispo(5).subscribe(data=>{
      this.chambListcinq= data;
    });
  }

}
