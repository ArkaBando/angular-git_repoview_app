import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RepositoryViewComponent } from "./repository-view/repository-view.component"
import { UserDetailsComponent } from "./user-details/user-details.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gitViewer',
    pathMatch: 'full'
  },
  {
    path: 'gitViewer',
    component: RepositoryViewComponent,
    data: { title: 'git Viewer' }
  },
  {
    path: 'viewUserDetails/:id',
    component: UserDetailsComponent,
    data: { title: 'git UserDetailsView' }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
