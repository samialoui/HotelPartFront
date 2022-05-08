import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-chtripple',
  templateUrl: './chtripple.component.html',
  styleUrls: ['./chtripple.component.css']
})
export class ChtrippleComponent implements OnInit {

  chambListTripple: any;


  constructor( private service: SharedService) { }

  ngOnInit(): void {
 
    this.ListChambreDouble();
  }

  ListChambreDouble(){
    return this.service.getChambDispo(3).subscribe(data=>{
      this.chambListTripple= data;
    });
  }
}
