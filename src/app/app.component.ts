import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RepoViewerServiceService } from './repo-viewer-service.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  repositories = {};
  constructor(private repoViewerServiceService : RepoViewerServiceService) { }
   ngOnInit() {
    
    this.repoViewerServiceService.getUsersByRepositoryName("tom").subscribe(data => console.log(data));
      // this.http.get("https://api.github.com/search/users?q=tom").
      // map((response:Response) ⇒ response.json())
      
   }
}
