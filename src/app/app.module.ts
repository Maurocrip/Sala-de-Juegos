import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { BaseDatosService } from './servicios/base-datos.service';
import { FIREBASE_OPTIONS} from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';import { NavtabService } from './servicios/navtab.service';
import { HttpClientModule } from '@angular/common/http';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { NavbarComponent } from "./components/navbar/navbar.component";
;

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent
],
  providers: [ { provide: FIREBASE_OPTIONS, useValue: environment.firebase },BaseDatosService, NavtabService, provideFirebaseApp(() => initializeApp({"projectId":"sala-de-juegos-2a66d","appId":"1:988090100122:web:9c8defd400c8c69ddff223","storageBucket":"sala-de-juegos-2a66d.appspot.com","apiKey":"AIzaSyDcYStp8gbvPZRG0LAOJGuUQQF85Ldroe4","authDomain":"sala-de-juegos-2a66d.firebaseapp.com","messagingSenderId":"988090100122"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())],
  bootstrap: [AppComponent]
})
export class AppModule { }
