import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RepositoryItem } from './model/repository-item';
import { ItemVO } from './model/ItemVO';
import 'rxjs/add/operator/map';

@Injectable()
export class RepoViewerServiceService {
  private repositoryItems : Array<ItemVO>;
  private url : string ;
  private userDetailUrl:string;
  constructor (
    private http: Http
  ) {
    this.userDetailUrl = "https://api.github.com/users/";
    this.url = "https://api.github.com/search/users?q=";
    this.repositoryItems = [];
  }

 
  private repoItem : ItemVO;
  
  getUsersByRepositoryName(repositoryName:String){
   
    return this.http.get(this.url+repositoryName)
    .map((res:Response) => res.json());
  }

  getUserDetailsByLoginName(loginName:String){
    return this.http.get(this.userDetailUrl+loginName)
    .map((res:Response) => res.json());
  }

  getUserRepositoryDetailsForUser(loginName:String){
    return this.http.get(this.userDetailUrl+loginName+"/repos")
    .map((res:Response) => res.json());
  }

  // getUsersByRepository(repositoryName:String):Array<ItemVO>{
  //   this.repositoryItems = [];

  //   this.http.get(`https://api.github.com/search/users?q=`+repositoryName).
  //   map((res:Response) => res.json()). subscribe((item) =>{
  //     console.log("val");
  //     console.log(item);
  //     item.items.forEach((data:RepositoryItem)=>{
  //       this.repositoryItems.push(
  //         ItemVO.buildRepoItemVO(data.id,data.login,data.node_id,
  //         data.avatar_url,data.gravatar_id,data.url,data.html_url,
  //         data.followers_url,data.type,
  //         data.site_admin,data.score));
  //     });
  //       return this.repositoryItems
  //   });
  //   //console.log(this.repositoryItems);
  //  }
}

