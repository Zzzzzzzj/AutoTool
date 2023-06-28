export class Chat{
  _id:number// 消息唯一ID;
  scope:number// 频道类型;
  scopeUid:string// 频道唯一ID;
  type:number// 消息类型 0普通聊天 1分享消息;
  content:string// 消息内容;
  time:number// 消息时间;
  toId:number// 接收者ID;
  fromId:number// 发送者ID;
  from:PlayerFriend// 发送者信息;
  scopeUid:string;
  maxUid:number// 已有消息列表的最小唯一id;
  scope:number;
  content:string;
  toId:number;
  scopeUid:string;
}