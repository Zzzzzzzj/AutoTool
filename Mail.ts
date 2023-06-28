export class Mail{
  _id:number// 唯一id;
  type:number// 类型：0系统 1公告（运营）;
  title:string// 标题;
  content:string// 内容;
  time:number// 发送时间;
  status:number// 状态：0未读取 1已读取未领取（针对有奖邮件） 2已读取或已领取;
}