import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RepoViewerServiceService } from './repo-viewer-service.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RepositoryViewComponent } from './repository-view/repository-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    RepositoryViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RepoViewerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
