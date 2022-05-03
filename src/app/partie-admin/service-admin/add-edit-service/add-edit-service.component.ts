import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-service',
  templateUrl: './add-edit-service.component.html',
  styleUrls: ['./add-edit-service.component.css']
})
export class AddEditServiceComponent implements OnInit {

  imgSrc: string = '/assets/images/img.png';
  selectedImage: any = null;

  constructor(private service: SharedService) {}
  @Input() serv:any;
  ServiceId!:string;
  NomS!:string;
  Prix!:string;
  Descript!:string;
  //Photo!:string;
  Photo: any;
  PhotoPath!:string;

  
  formData:FormData= new FormData();

  ngOnInit(): void {
    this.ServiceId= this.serv.ServiceId;
    this.NomS=this.serv.NomS;
    this.Prix=this.serv.Prix;
    this.Photo=this.serv.Photo;
    this.Descript=this.serv.Descript;
    this.PhotoPath = this.service.PhotoUrl+this.Photo;
  }

 

  updateServ(){
    var val = {ServiceId: this.ServiceId,
      NomS:this.NomS,
      Prix:this.Prix,
      Descript:this.Descript,
      Photo:this.Photo};
    this.service.updateService(val).subscribe(res=>{
      alert("Modifier avec succée");
    });
  }

  showPreview(event: any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.Photo = event.target.file[0];
    }else{
      this.Photo = null;
      this.imgSrc = "/assets/images/img.png";
      this.selectedImage = null;
    }
  }
}
