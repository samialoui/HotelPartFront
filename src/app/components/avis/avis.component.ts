import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  blogList : any;
  constructor( private service: SharedService) { }

  ngOnInit(): void {
    this.refrechListBligeurs();
  }

  refrechListBligeurs(){
    return this.service.getBlogList().subscribe(data=>{
      this.blogList = data;

    });
  }

}
