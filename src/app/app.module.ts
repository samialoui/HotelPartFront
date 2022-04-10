import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { Etape1ReservationComponent } from './components/etape1-reservation/etape1-reservation.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Etape2ReservationComponent } from './components/etape2-reservation/etape2-reservation.component';
import { Etape3ReservationComponent } from './components/etape3-reservation/etape3-reservation.component';

const appRoute: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'etape1-res', component: Etape1ReservationComponent},
  {path: 'etape2-res', component: Etape2ReservationComponent},
  {path: 'etape3-res', component: Etape3ReservationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    Etape1ReservationComponent,
    NavbarComponent,
    Etape2ReservationComponent,
    Etape3ReservationComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
