import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

  const firebaseConfig = {
  apiKey: "AIzaSyBs42SN4quuJ0ILBF-ZbLTAbeLVY1bomsw",
  authDomain: "hbh-auth.firebaseapp.com",
  projectId: "hbh-auth",
  storageBucket: "hbh-auth.appspot.com",
  messagingSenderId: "743963084383",
  appId: "1:743963084383:web:e964e7f1d4174efd613dea"
};  
/* const firebaseConfig = {
  apiKey: "AIzaSyBu5-evpjUTbpHSSghhHVA08RJYkLiCRjM",
  authDomain: "workshop333-c8aff.firebaseapp.com",
  projectId: "workshop333-c8aff",
  storageBucket: "workshop333-c8aff.appspot.com",
  messagingSenderId: "52924028610",
  appId: "1:52924028610:web:75cce7f6c06f59672fcd5b"
}; */


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
