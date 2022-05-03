import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  success: any ;

  constructor( private service:SharedService, private router:Router) { }
type:any;
  ngOnInit(): void {
    this.type= localStorage.getItem("typeUser");
  }

  Connexion(login:any, password:any){
    var val={
      Prenom : login.value,
      Quartier : password.value,
    };
    this.service.Authenfication(val).subscribe(data=>{
      this.success = data;
      localStorage.setItem("verif",this.success);
    });

    if(localStorage.getItem("verif") === "true"){
    alert("Connexion avec Succée");
    localStorage.setItem("typeUser","admin");
    this.router.navigate(["/"]);
    

    }else{
      alert("Connexion a echoué");
    }
    

  }
}
