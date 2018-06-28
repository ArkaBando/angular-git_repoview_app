import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RepositoryItem } from './model/repository-item';
import { ItemVO } from './model/ItemVO';
import 'rxjs/add/operator/map';

@Injectable()
export class RepoViewerServiceService {
  private repositoryItems : Array<ItemVO>;
  private url : string ;
  constructor (
    private http: Http
  ) {
    this.url = "https://api.github.com/search/users?q=";
    this.repositoryItems = [];
  }

 
  private repoItem : ItemVO;
  
  getUsersByRepositoryName(repositoryName:String){
   
    return this.http.get(this.url+repositoryName)
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

// class ItemVO {

// id : number;
// login:String;
// node_id:String;
// avatar_url:String;
// gravatar_id:String;
// url:String;
// followers_url:String;
// type:String;
// site_admin:Boolean;
// score:number;

// constructor(){

// }

// public static buildRepoItemVO(id,login,node_id,avatar_url,gravatar_id,url,html_url,
//   followers_url,type,site_admin,score):ItemVO {
//   let item = {
//     id:id,
//     login:login,
//     node_id:node_id,
//     avatar_url:avatar_url,
//     gravatar_id:gravatar_id,
//     url:url,
//     followers_url:followers_url,
//     type:type,
//     site_admin:site_admin,
//     score:score
//   };
//   return item;
// }

