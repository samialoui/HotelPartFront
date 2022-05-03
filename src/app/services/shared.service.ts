import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public detailsItem : any=[];
  public detailsList = new BehaviorSubject<any>([]);

  readonly APIUrl = "https://localhost:44376/api";
  readonly PhotoUrl = "https://localhost:44376/api/blogeur/UploadImage";

 

  constructor( private http: HttpClient) { }
  
  headers = {
    headers: new HttpHeaders ({
         'Content-Type' : 'application/json'
          }),
    withCredentials: true,
    };

    //partie projet commerce
    getDetails(){
      return this.detailsList.asObservable();
    }
    
    addToDetail(product: any){
      this.detailsItem.push(product);
      this.detailsList.next(this.detailsItem);
   
    }
    
    viderDetails(){
      this.detailsItem = [];
      this.detailsList.next(this.detailsItem);
      this.detailsList.next(this.detailsItem);
    
    }
// all methods blogeur
  getBlogList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/blogeur/getAllBlogeurs');
  }

  postFile(Nom: any,Prenom : any,Note: any,Descript: any,Pays: any, fileToUpload: any ) {
   
    
    const formData: FormData = new FormData();
    formData.append('Photo', fileToUpload, fileToUpload.name);
    formData.append('Nom', Nom);
    formData.append('Prenom', Prenom);
    formData.append('Note', Note);
    formData.append('Descript', Descript);
    formData.append('Pays', Pays);

    return this.http.post(this.PhotoUrl, formData);
  }

  addBlogeur(val:any){
    return this.http.post(this.APIUrl+'/blogeur/addBlogeur',val);
  }

  addBlog(val:any){
    return this.http.post(this.APIUrl+'/blogeur/AddBlogeur',val);
  }

  updateBlogeur(val:any){
    return this.http.put(this.APIUrl+'/blogeur/putBlogeur',val);
  }
  deleteBlogeur(val:any){
    return this.http.delete(this.APIUrl+'/blogeur/',val);
  }

// all methods chambre
getChambList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/chambre/allChambres');
}

getChambDispo(val:any){
  return this.http.get(this.APIUrl+'/chambre/allChambDisponilbe/'+val);
}
addChambre(ChambreNum : any,TypeChamb : any,PrixNuit : any,NbLit : any,Descript : any,Disponibilite : any,Saison : any, fileToUpload: any ) {
   
    
  const formData: FormData = new FormData();
  formData.append('Photo', fileToUpload, fileToUpload.name);
  formData.append('ChambreNum', ChambreNum);
  formData.append('TypeChamb', TypeChamb);
  formData.append('PrixNuit', PrixNuit);
  formData.append('NbLit', NbLit);
  formData.append('Descript', Descript);
  formData.append('Disponibilite', Disponibilite);
  formData.append('Saison', Saison);

  return this.http.post(this.APIUrl+"/chambre/AddChambre", formData);
}
updateChambre(val:any){
  return this.http.put(this.APIUrl+'/chambre/putChambre',val);
}
deleteChambre(val:any){
  return this.http.delete(this.APIUrl+'/Chambre/',val);
}
getChambPrice(val : any){
  return this.http.get(this.APIUrl+'/chambre/getWithPrice/'+val);
}

getChambre(val : any){
  return this.http.get(this.APIUrl+'/chambre/getChambre/'+val);
}

GetAllSaisonNames(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Chambre/GetAllSaisonNames');
}
 //all methods client
 addClient(val:any){
  return this.http.post(this.APIUrl+'/client/addClient',val);
}
getLastClient(){
  return this.http.get(this.APIUrl+'/client/getLastClient');
}

// all methods service
getServList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/service/allServices');
}

addService(NomService : any, Prix : any,Descript : any, fileToUpload: any ) {
   
    
  const formData: FormData = new FormData();
  formData.append('Photo', fileToUpload, fileToUpload.name);
  formData.append('NomService', NomService);
  formData.append('Prix', Prix);
  formData.append('Descript', Descript);
 

  return this.http.post(this.APIUrl+"/service/AddService", formData);
}

/*addService(val:any){
  return this.http.post(this.APIUrl+'/service/addService',val);
}*/


updateService(val:any){
  return this.http.put(this.APIUrl+'/service/putService',val);
}
deleteService(val:any){
  return this.http.delete(this.APIUrl+'/service/',val);
}

    //all methods login
  
    Authenfication(val:any){
      return this.http.post(this.APIUrl+'/login/ValidateAuthentification',val);
    }
   


    /*****************/
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/blogeur/SaveFile',val);
  }
}
