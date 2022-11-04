import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-dispo',
  templateUrl: './dispo.page.html',
  styleUrls: ['./dispo.page.scss'],
})
export class DispoPage {
  infos:any[]
  constructor(private fire:AngularFirestore,private rtr:Router/* ,public afSG: AngularFirestoreModule */) {
    this.getInformations();
  }
  toLogin(){
    this.rtr.navigateByUrl('/login')
  }
  getInformations(){
    this.fire.collection("dispo").snapshotChanges()
    .subscribe(
      data => {
        this.infos = data.map(
          e=>{
            return {
              id:e.payload.doc.id,
              name:e.payload.doc.data()["name"],
              date:e.payload.doc.data()["date"],
              title:e.payload.doc.data()["title"],
              description:e.payload.doc.data()["description"]
            }
          }
        )
      }
    )
  }
  /* getImageStorage(image: any){
    const imgRef = image.payload.exportVal().ref;
    this.afSG.ref(imgRef)
  } */
}
