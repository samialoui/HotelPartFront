import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-chdouble',
  templateUrl: './chdouble.component.html',
  styleUrls: ['./chdouble.component.css']
})
export class ChdoubleComponent implements OnInit {

  chambListDouble: any;


  constructor( private service: SharedService) { }

  ngOnInit(): void {
 
    this.ListChambreDouble();
  }

  ListChambreDouble(){
    return this.service.getChambDispo(2).subscribe(data=>{
      this.chambListDouble= data;
    });
  }

}
