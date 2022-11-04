import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email:string='';
  pass:string="";
  constructor(private auth:AngularFireAuth,private rtr:Router) { }

  ngOnInit() {
  }
  toReturn(){
    this.rtr.navigateByUrl("/login")
  }
  toInscrip(){
    this.auth.createUserWithEmailAndPassword(this.email,this.pass).then(
      (data)=>{
        this.rtr.navigateByUrl("/login")
      }
    ).catch(err => 
      {
        console.log(err)
      })
  }

}
