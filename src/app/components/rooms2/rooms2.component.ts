import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-rooms2',
  templateUrl: './rooms2.component.html',
  styleUrls: ['./rooms2.component.css']
})
export class Rooms2Component implements OnInit {

  chambList: any;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refrechListChambre();
  }

  refrechListChambre(){
    return this.service.getChambList().subscribe(data=>{
      this.chambList= data;
    
    });

  }


}
