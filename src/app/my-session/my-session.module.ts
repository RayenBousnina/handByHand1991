import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySessionPageRoutingModule } from './my-session-routing.module';

import { MySessionPage } from './my-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MySessionPageRoutingModule
  ],
  declarations: [MySessionPage]
})
export class MySessionPageModule {}
