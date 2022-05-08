import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() redirectTo: string = "/chambres";

  success: any ;
  constructor( private service:SharedService, private router:Router) { } //private toastr: ToastrService
type:any;
  ngOnInit(): void {
    this.type= localStorage.getItem("typeUser");
  }

  Connexion(email:any, password:any){
    var val={
      Email : email.value,
      Quartier : password.value,
    };
    this.service.Authenfication(val).subscribe(data=>{
      this.success = data;
      localStorage.setItem("verif",this.success);
      if(localStorage.getItem("verif") == "true"){
        window.location.assign(this.redirectTo);
        alert("Connexion avec Succée");
        localStorage.setItem("typeUser","admin"); 
        }
        else{
          alert("Vérifier, votre login ou mot de passe n'est pas correcte");
        }
    });   

  }
 
}
