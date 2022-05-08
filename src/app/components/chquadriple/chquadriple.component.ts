import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-chquadriple',
  templateUrl: './chquadriple.component.html',
  styleUrls: ['./chquadriple.component.css']
})
export class ChquadripleComponent implements OnInit {

  chambListQuadruple: any;


  constructor( private service: SharedService) { }

  ngOnInit(): void {
 
    this.ListChambreQuadruple();
  }

  ListChambreQuadruple(){
    return this.service.getChambDispo(4).subscribe(data=>{
      this.chambListQuadruple= data;
    });
  }

}
