export class ItemVO {

    id : number;
    login:String;
    node_id:String;
    avatar_url:String;
    gravatar_id:String;
    url:String;
    followers_url:String;
    type:String;
    site_admin:Boolean;
    score:number;
    
    constructor(){
    
    }
    
    public static buildRepoItemVO(id,login,node_id,avatar_url,gravatar_id,url,html_url,
      followers_url,type,site_admin,score):ItemVO {
      let item = {
        id:id,
        login:login,
        node_id:node_id,
        avatar_url:avatar_url,
        gravatar_id:gravatar_id,
        url:url,
        followers_url:followers_url,
        type:type,
        site_admin:site_admin,
        score:score
      };
      return item;
    }
    
    }