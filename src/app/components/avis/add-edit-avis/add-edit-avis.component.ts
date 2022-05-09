import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { data } from 'jquery';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-avis',
  templateUrl: './add-edit-avis.component.html',
  styleUrls: ['./add-edit-avis.component.css']
})
export class AddEditAvisComponent implements OnInit {

  selectedImage: any = null;
  imageUrl: string = "/assets/images/blogeurs/default-image.png";
  fileToUpload: any ;
  ImageList: any=[];

  constructor(private service: SharedService) {}
  @Input() blog:any;
  BlogId!:string;
  Nom!:string;
  Prenom!:string;
  Note!:string;
  Descript!:string;
  Pays!:string;
  //Photo!:string;
  Photo: any;
  PhotoPath!:string;

  
  formData:FormData= new FormData();

  ngOnInit(): void {
    this.BlogId= this.blog.BlogId;
    this.Nom=this.blog.Nom;
    this.Prenom=this.blog.Prenom;
    this.Note=this.blog.Note;
    this.Descript=this.blog.Descript;
    this.Pays=this.blog.Pays;
    this.Photo=this.blog.Photo;
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

  OnSubmit(Nom: any,Prenom : any,Note: any,Descript: any,Pays: any,Photo: any){
    
   this.service.postFile(Nom.value,Prenom.value,Note.value,Descript.value,Pays.value,this.fileToUpload).subscribe( data =>{
       console.log('done');
       Nom.value = null;
       Prenom.value = null;
       Note.value = null;
       Descript.value = null;
       Pays.value = null;
       Photo.value = null;
       console.log(this.fileToUpload);
       console.log(Nom.value);
       this.imageUrl = "/assets/images/blogeurs/default-image.png";
     }
   );
  }

  updateBlog(){
    var val = {BlogId: this.BlogId,
      Nom:this.Nom,
      Prenom:this.Prenom,
      Note:this.Note,
      Descript:this.Descript,
      Pays:this.Pays,
      Photo:this.Photo};
    this.service.updateBlogeur(val).subscribe(res=>{
      alert("Modifier avec succée");
    });
  }


  addBlogeur(){
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
  }
 
}
