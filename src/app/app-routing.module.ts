import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gitViewer',
    pathMatch: 'full'
  },
  {
    path: 'gitViewer',
    children: [
      {
        path: '',
        component: AppComponent
      },
      {
        path: ':id',
        component: AppComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
