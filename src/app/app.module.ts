import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { Etape1ReservationComponent } from './components/etape1-reservation/etape1-reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Etape2ReservationComponent } from './components/etape2-reservation/etape2-reservation.component';
import { Etape3ReservationComponent } from './components/etape3-reservation/etape3-reservation.component';
import { FactureFinaleComponent } from './components/facture-finale/facture-finale.component';
import { ChambresComponent } from './partie-admin/chambres/chambres.component';
import { ReservationsComponent } from './partie-admin/reservations/reservations.component';
import { LoginComponent } from './partie-admin/login/login.component';
import { NavbarAdminComponent } from './partie-admin/navbar-admin/navbar-admin.component';
import { AcceuilAdminComponent } from './partie-admin/acceuil-admin/acceuil-admin.component';
import { ServiceAdminComponent } from './partie-admin/service-admin/service-admin.component';
import { AdminGestionComponent } from './partie-admin/admin-gestion/admin-gestion.component';
import { BlogeursComponent } from './partie-admin/blogeurs/blogeurs.component';
import { AddEditBlogComponent } from './partie-admin/blogeurs/add-edit-blog/add-edit-blog.component';
import { DetailBlogComponent } from './partie-admin/blogeurs/detail-blog/detail-blog.component';
import { ShowBlogComponent } from './partie-admin/blogeurs/show-blog/show-blog.component';
import { SharedService } from './services/shared.service';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import { AddEditChambComponent } from './partie-admin/chambres/add-edit-chamb/add-edit-chamb.component';
import { DetailChambComponent } from './partie-admin/chambres/detail-chamb/detail-chamb.component';
import { ShowChambComponent } from './partie-admin/chambres/show-chamb/show-chamb.component';
import { AddEditServiceComponent } from './partie-admin/service-admin/add-edit-service/add-edit-service.component';
import { ShowServiceComponent } from './partie-admin/service-admin/show-service/show-service.component';
import { OffresComponent } from './partie-admin/offres/offres.component';
import { AddEditOffComponent } from './partie-admin/offres/add-edit-off/add-edit-off.component';
import { ShowOffresComponent } from './partie-admin/offres/show-offres/show-offres.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AvisComponent } from './components/avis/avis.component';
import { Rooms2Component } from './components/rooms2/rooms2.component';





const appRoute: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'nav', component: NavbarComponent},
  {path: 'etape1-res', component: Etape1ReservationComponent},
  {path: 'etape2-res', component: Etape2ReservationComponent},
  {path: 'etape3-res', component: Etape3ReservationComponent},
  {path: 'facture', component: FactureFinaleComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'rooms2', component: Rooms2Component},
  /** partie admin */
  {path: 'adminNav', component: NavbarAdminComponent},
  {path: 'admin-acceuil', component: AcceuilAdminComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'serviceAdmin', component: OffresComponent},
  {path: 'chambres', component: ChambresComponent},
  {path: 'admin-gestion', component: AdminGestionComponent},
  {path: 'blogeurs', component: BlogeursComponent},
  {path: 'avis', component: AvisComponent},
  {path: 'login', component: LoginComponent},

  

];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    Etape1ReservationComponent,
    NavbarComponent,
    Etape2ReservationComponent,
    Etape3ReservationComponent,
    FactureFinaleComponent,
    ChambresComponent,
    ReservationsComponent,
    LoginComponent,
    NavbarAdminComponent,
    AdminGestionComponent,
    BlogeursComponent,
    AddEditBlogComponent,
    DetailBlogComponent,
    ShowBlogComponent,
    AddEditChambComponent,
    DetailChambComponent,
    ShowChambComponent,
    AddEditServiceComponent,
    ShowServiceComponent,
    OffresComponent,
    AddEditOffComponent,
    ShowOffresComponent,
    ChambresComponent,
    RoomsComponent,
    AvisComponent,
    Rooms2Component,

  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
