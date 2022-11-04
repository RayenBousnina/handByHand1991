import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-session',
  templateUrl: './my-session.page.html',
  styleUrls: ['./my-session.page.scss'],
})
export class MySessionPage implements OnInit {
  hist:any=[]
  constructor(private rtr:Router,private fire:AngularFirestore) {
    this.getHist();
   }

  ngOnInit() {
  }
  toForm(){
    this.rtr.navigateByUrl('/form')
  }
  getHist(){
    this.fire.collection("hist").snapshotChanges()
    .subscribe(
      data => {
        this.hist = data.map(
          e=>{
            return {
              id:e.payload.doc.id,
              date:e.payload.doc.data()["date"],
              title:e.payload.doc.data()["title"],
              image:e.payload.doc.data()["image"]
            }
          }
        )
      }
    )
  }

}
