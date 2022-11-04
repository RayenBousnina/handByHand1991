import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySessionPage } from './my-session.page';

const routes: Routes = [
  {
    path: '',
    component: MySessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySessionPageRoutingModule {}
