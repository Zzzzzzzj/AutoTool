export class Player{
  _id:number;
  avatar_id:string;
  name:string;
  level:number;
  exp:number;
  power:number;
  vip:number;
  vip_exp:number;
  login_time:number;
  logout_time:number;
  create_time:number;
  sgid:number// 区服组id;
  sid:number// 区服id;
  likeNum:number// 收到的点赞次数;
  token:string// account_id（之前是管理平台返回的token）;
  lang:string// 语言;
  account_id:string// 账号;
  sid:number// 区服;
  device_model:string// 设备码;
  player:Player// player里只返回部分字段，仅用于管理平台数据上传;
  channel:string// 渠道id;
  sub_channel:string// 子渠道id;
  sid:number// 区服;
  client_info:ClientInfo// 客户端信息;
  player:Player// 与entry返回一样;
  msg:string// 消息;
}