import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Zodiac-Hammamet';

  type:any;
  constructor() { }

  ngOnInit(): void {
   this.type= localStorage.getItem("typeUser");
  }
}
