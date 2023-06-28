export class PlayerFriend{
  _id:number// 玩家ID;
  sid:number// 区服ID（sid - 1000 = 区服序号）;
  schLevel:number// 学院等级;
  avatar_id:string// 头像ID;
  name:string// 昵称;
  league_id:number// 联盟ID;
  league_name:string// 联盟名字;
  login_time:number// 登录时间;
  logout_time:number// 登出时间;
  power:number// 战力;
}