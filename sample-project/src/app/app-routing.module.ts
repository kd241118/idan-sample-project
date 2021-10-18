import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainlayoutComponent } from './container/layout/mainlayout/mainlayout.component';

const routes: Routes = [
  {
    path: '',
    component: MainlayoutComponent,
    data: {
      title: 'Before Login'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./view/before-login/before-login.module').then(m => m.BeforeLoginModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
