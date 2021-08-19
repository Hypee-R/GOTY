import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    //Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
