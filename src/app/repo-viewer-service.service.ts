import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RepositoryItem } from './model/repository-item';
import 'rxjs/add/operator/map';

@Injectable()
export class RepoViewerServiceService {
  private repositoryItems : Array<RepositoryItem>;

  constructor (
    private http: Http
  ) {}

  private repoItem : RepositoryItem;
  
  getUsersByRepositoryName(repositoryName:String){
    return this.http.get(`https://api.github.com/search/users?q=`+repositoryName)
    .map((res:Response) => res.json());
  }

  getUsersByRepository(repositoryName:String):Array<RepositoryItem>{
    this.http.get(`https://api.github.com/search/users?q=`+repositoryName).
    map((res:Response) => res.json()). subscribe(data =>{
      var repoItem : RepositoryItem ;
      repoItem
    });
    return this.repositoryItems }
}
