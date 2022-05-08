import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  chambListSimple: any;
  chambListDouble: any;
  chambListTripple: any;

  constructor(private route:Router, private service: SharedService) { }
  type:any;
  ngOnInit(): void {
   
    this.type= localStorage.getItem("typeUser");
    this.ListChambreSimple();
    this.ListChambreDouble();
    this.ListChambreTripple();
  }

  ListChambreSimple(){
    return this.service.getChambDispo(1).subscribe(data=>{
      this.chambListSimple= data;
    });
  }
  ListChambreDouble(){
    return this.service.getChambDispo(2).subscribe(data=>{
      this.chambListDouble= data;
    });
  }
  ListChambreTripple(){
    return this.service.getChambDispo(3).subscribe(data=>{
      this.chambListTripple= data;
    });
  }

  deconnexion(){
    localStorage.setItem("typeUser","");
    localStorage.setItem("verif","");
    this.route.navigate(["/"]);
  
    }

}
