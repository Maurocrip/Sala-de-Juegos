import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ErrorComponent } from './components/error/error.component';
import { BaseDatosService } from './servicios/base-datos.service';
import { FIREBASE_OPTIONS} from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';import { NavtabService } from './servicios/navtab.service';
import { ChatComponent } from './components/chat/chat.component';
import { MayorMenorComponent } from './components/juegos/mayor-menor/mayor-menor.component';
import { HttpClientModule } from '@angular/common/http';
import { AhorcadoComponent } from './components/juegos/ahorcado/ahorcado.component';
import { PreguntadosComponent } from './components/juegos/preguntados/preguntados.component';
import { BlackJackComponent } from './components/juegos/black-jack/black-jack.component';
;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    RegistroComponent,
    ErrorComponent,
    ChatComponent,
    MayorMenorComponent,
    AhorcadoComponent,
    PreguntadosComponent,
    BlackJackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(c)),
    provideFirestore(() => getFirestore())
  ],
  providers: [ { provide: FIREBASE_OPTIONS, useValue: environment.firebase },BaseDatosService, NavtabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
