import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RepoViewerServiceService } from './repo-viewer-service.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RepoViewerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
