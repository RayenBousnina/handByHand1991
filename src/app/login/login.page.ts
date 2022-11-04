import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  email:string="";
  pass:string="";
  email2: any;
  name: any;
  sson: any;

  constructor(private auth:AngularFireAuth,private rtr:Router) {}
  ngOnInit(){

  }
  toInscr(){
    this.rtr.navigateByUrl('/signup')
  }
  toDispo(){
    this.rtr.navigateByUrl('/dispo')
  }
  verify(){
    this.auth.signInWithEmailAndPassword(this.email,this.pass).then(
      data=>{
        this.rtr.navigateByUrl("/my-session")
      }
    ).catch(
      (err)=>{
        console.log(err)
      }
    )
  }
}
