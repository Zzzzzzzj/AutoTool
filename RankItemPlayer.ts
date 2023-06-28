export class RankItemPlayer{
  _id:number// 角色id;
  avatar_id:string;
  name:string;
  level:number;
  power:number;
  league_id:number;
  league_name:string;
  value:number// 积分;
  player:RankItemPlayer// 玩家信息;
  now:number;
  server_open_time:number;
  info:Player;
  recharge_id:number// 充值id;
  diamond:number// 得到的钻石;
  info:Player;
}