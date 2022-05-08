import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  type:any;
  constructor(private route:Router) { }

  ngOnInit(): void {
   this.type= localStorage.getItem("typeUser");
  }
  deconnexion(){
  localStorage.setItem("typeUser","");
  localStorage.setItem("verif","");
  this.route.navigate(["/"]);

  }

  

}
