export class PlayerDetail{
  _id:number// 玩家ID;
  sid:number// 区服ID;
  schLevel:number// 学院等级;
  avatar_id:string// 头像ID;
  name:string// 昵称;
  league_id:number// 联盟ID;
  league_name:string// 联盟简称;
  power:number// 战力;
  infScore:number// 影响力;
  likeNum:number// 收到的点赞次数;
  targetId:number;
  info:PlayerDetail;
  name:string;
  targetId:number;
  targetId:number;
  targetId:number// 玩家ID（0表示一键处理）;
  type:number// 0拒绝 1同意;
  targetId:number// 玩家ID;
  type:number// 0取消拉黑 1拉黑;
}