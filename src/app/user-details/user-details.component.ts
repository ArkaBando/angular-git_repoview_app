import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RepoViewerServiceService } from './../repo-viewer-service.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  private userId: string;
  private repositoryItems : Array<any>;
  private userDetails : any;
  constructor(route: ActivatedRoute, private repoViewerServiceService : RepoViewerServiceService) {
    this.userId = route.snapshot.params['id'];
   }

  ngOnInit() {
  }

  public setUserDetails():void{
    this.repoViewerServiceService.getUserDetailsByLoginName(this.userId).subscribe(
      data =>{
        console.log("user Details");
        console.log(data);
        this.userDetails = data;
      }
    );
  }

  public setRepositoryDetails():void{
    this.repositoryItems = [];
    this.repoViewerServiceService.getUserRepositoryDetailsForUser(this.userId).subscribe(
      data =>{
        console.log("repositoryDetails");
        console.log(data);
        data.forEach(element => {
          this.repositoryItems.push(element);
        });
        console.log(this.repositoryItems);
      }
    );
  }

}
