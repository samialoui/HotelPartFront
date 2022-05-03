import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {
  p:number = 1;
  constructor( private service: SharedService) { }
  BlogeurList: any=[];
  Modaltitle!:string;
  ActivateAddEditBlogComp: boolean=false;
  blog:any;

  NomBlogeurFilter:string="";
  BlogeurListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshBlogList();

  }

  refreshBlogList(){
    this.service.getBlogList().subscribe(data=>{
      this.BlogeurList=data;
      this.BlogeurListWithoutFilter=data;
    });
  }
  addClick(){
    this.blog={
  BlogId:0,
  Nom:"",
  Prenom:"",
  Note:"",
  Descript:"",
  Pays:"",
  Photo: null,
    }
    this.Modaltitle="Ajouter Blogeur";
    this.ActivateAddEditBlogComp=true;
  }

  editClick(item: any){
    this.blog=item;
    this.Modaltitle="Modifier Blogeur";
    this.ActivateAddEditBlogComp=true;
  }

  closeClick(){
    this.ActivateAddEditBlogComp=false;
    this.refreshBlogList();
  }

  deleteClick(item:any){
    if(confirm('are you sure??')){
      this.service.deleteBlogeur(item.BlogId).subscribe(data=>{
        alert("Supprimer avec succée");
        this.refreshBlogList()
      });
    }
  }

  filterFn(){
  var NomBlogeurFilter = this.NomBlogeurFilter;

  this.BlogeurList = this.BlogeurListWithoutFilter.filter(function (fl:any){
    return fl.Nom.toString().toLowerCase().includes(
      NomBlogeurFilter.toString().trim().toLowerCase())
  });
}
}
