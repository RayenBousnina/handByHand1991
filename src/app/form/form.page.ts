import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  name:string="";
  date:string="";
  title:string="";
  description:string="";
  constructor(private rtr:Router,private fire:AngularFirestore) { }

  ngOnInit() {
  }
  toSession(){
    this.rtr.navigateByUrl("/my-session")
  }
  addNew(){
    this.fire.collection("dispo").add(
    { name:this.name, date:this.date, title:this.title, description:this.description}
  );
  this.rtr.navigateByUrl("dispo");}

}
