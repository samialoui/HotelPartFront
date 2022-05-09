import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
  @Input() redirectTo: string = "/gestion/hotel";

  type:any;
  constructor(private route:Router) { }

  ngOnInit(): void {
   this.type= localStorage.getItem("typeUser");
  }
  deconnexion(){
  localStorage.setItem("typeUser","");
  localStorage.setItem("verif","");
  window.location.assign(this.redirectTo);


  }

  

}
