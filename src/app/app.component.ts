import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RepoViewerServiceService } from './repo-viewer-service.service';
import { ItemVO } from './model/ItemVO';
import { RepositoryItem } from './model/repository-item';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // searchText = "ArkaBando"
  // private repositoryItems : Array<ItemVO>;
  // constructor(private repoViewerServiceService : RepoViewerServiceService) { }
  // //  ngOnInit() {
  // //   // this.repositoryItems = [];
  // //   this.repositoryItems = this.repoViewerServiceService.getUsersByRepository("tom");
  // //   console.log(this.repositoryItems);
  // //   // this.repoViewerServiceService.
  // //   // getUsersByRepositoryName("tom").
  // //   // subscribe(data => console.log(data));
  // //     // this.http.get("https://api.github.com/search/users?q=tom").
  // //     // map((response:Response) ⇒ response.json())
      
  // //  }

  //  showItems():void{
  //   this.repositoryItems = [];
  //   console.log("searchText =>"+this.searchText);
  //   this.repoViewerServiceService.getUsersByRepositoryName(this.searchText).
  //    subscribe((item) =>{
  //     console.log("val");
  //     console.log(item);
  //     item.items.forEach((data:RepositoryItem)=>{
  //       this.repositoryItems.push(
  //         ItemVO.buildRepoItemVO(data.id,data.login,data.node_id,
  //         data.avatar_url,data.gravatar_id,data.url,data.html_url,
  //         data.followers_url,data.type,
  //         data.site_admin,data.score));
  //     });
  //        this.repositoryItems
  //   });
  //   console.log(this.repositoryItems);
  //  }
}
