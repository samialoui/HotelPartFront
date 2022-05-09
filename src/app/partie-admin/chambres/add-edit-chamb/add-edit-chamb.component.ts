import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-chamb',
  templateUrl: './add-edit-chamb.component.html',
  styleUrls: ['./add-edit-chamb.component.css']
})
export class AddEditChambComponent implements OnInit {

  selectedImage: any = null;
  imageUrl: string = "/assets/images/img.png";
  fileToUpload: any ;
  ImageList: any=[];


  constructor(private service: SharedService) {}
  @Input() chamb:any;
  ChambreId!:string;
  ChambreNum!:string;
  TypeChamb!:string;
  PrixNuit!:string;
  NbLit!:string;
  Descript!:string;
  //Photo!:string;
  Photo: any;
  Disponibilite!:string;
  Saison!:string;
  PhotoPath!:string;

  
  formData:FormData= new FormData();

  ngOnInit(): void {
    this.ChambreId= this.chamb.ChambreId;
    this.ChambreNum=this.chamb.ChambreId;
    this.TypeChamb=this.chamb.TypeChamb;
    this.PrixNuit=this.chamb.PrixNuit;
    this.NbLit=this.chamb.NbLit;
    this.Descript=this.chamb.Descript;
    this.Photo=this.chamb.Photo;
    this.Disponibilite=this.chamb.Disponibilite;
    this.Saison=this.chamb.Saison;
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

  OnSubmit(ChambreNum: any,TypeChamb : any,PrixNuit: any,NbLit : any,Descript: any,Disponibilite: any,Saison: any,Photo: any){
    
   this.service.addChambre(ChambreNum.value,TypeChamb.value,PrixNuit.value,NbLit.value,Descript.value,Disponibilite.value,Saison.value,this.fileToUpload).subscribe( data =>{
       console.log('done');
       ChambreNum.value = null;
       TypeChamb.value = null;
       PrixNuit.value = null;
       NbLit.value = null;
       Descript.value = null;
       Disponibilite.value = null;
       Saison.value = null;
       Photo.value = null;
       console.log(this.fileToUpload);
       console.log(ChambreNum.value);
       this.imageUrl = "/assets/images/img.png";
     }
   );
  }


  updateChamb(){
    var val = {ChambreId: this.ChambreId,
      ChambreNum:this.ChambreNum,
      TypeChamb:this.TypeChamb,
      PrixNuit:this.PrixNuit,
      nbLit:this.NbLit,
      Descript:this.Descript,
      Photo:this.Photo,
      Disponibilite:this.Disponibilite,
      Saison:this.Saison};
    this.service.updateChambre(val).subscribe(res=>{
      alert("Modifier avec succée");
    });
  }

 

 /* addBlogeur(){
    const fd:FormData = new FormData();
      fd.append('nom',this.Nom);
      fd.append('prenom',this.Prenom);
      fd.append('note',this.Note);
      fd.append('descript',this.Descript);
      fd.append('pays',this.Pays);
      fd.append('photo',this.Photo);
      this.service.addBlog(fd).subscribe(data =>{
      alert("blogeur ajoutéeeeeeeeee");
      console.log(data);
      });
  }*/

}
