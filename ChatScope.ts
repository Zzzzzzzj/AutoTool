export class ChatScope{
  scope:number// 类型：0私聊 1世界 2联盟 3跨服;
  scopeUid:string// 频道唯一ID;
  chatUid:number// 最新的消息唯一ID（如果大于客户端本地ID，表示有红点）;
  offlineNum:number// 离线期间收到的私聊消息数（作为初始化红点数，如果chatUid判断有红点，但是offlineNum为0，则红点数为1）;
  target:PlayerFriend// 私聊对象信息;
}