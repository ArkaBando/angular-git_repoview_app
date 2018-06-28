import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RepoViewerServiceService } from './repo-viewer-service.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [RepoViewerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
