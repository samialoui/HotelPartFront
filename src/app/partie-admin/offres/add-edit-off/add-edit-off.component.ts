import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-off',
  templateUrl: './add-edit-off.component.html',
  styleUrls: ['./add-edit-off.component.css']
})
export class AddEditOffComponent implements OnInit {
  selectedImage: any = null;
  imageUrl: string = "/assets/images/img.png";
  fileToUpload: any ;
  ImageList: any=[];

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

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(NomS: any,Prix : any,Descript: any,Photo: any){
    
   this.service.addService(NomS.value,Prix.value,Descript.value,this.fileToUpload).subscribe( data =>{
       console.log('done');
       NomS.value = null;
       Prix.value = null;
       Descript.value = null;
       Photo.value = null;
       console.log(this.fileToUpload);
       console.log(NomS.value);
       this.imageUrl = "/assets/images/img.png";
     }
   );
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

 

}
