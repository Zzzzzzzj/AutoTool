export class SchoolEvent{
  _id:number// 事件唯一ID;
  id:number// 事件ID;
  startTime:number// 事件触发时间;
  dealTime:number// 事件处理时间;
  status:number// 事件状态：0已触发 1成功 2失败 3放弃;
  param:number// 事件参数：敌人ID（战斗事件）、赛事级别（比赛事件）、分身黑猫（已点击次数）、交换生（cd时间）、恶龙ID（恶龙肆虐）;
  param2:number// 事件参数2：赛事进度（比赛事件）、分身黑猫（是否点击失败）、恶龙已勒索金币（恶龙肆虐）;
  _id:number// 事件唯一ID;
  status:number// 处理类型：1成功 2失败 3放弃;
  _id:number// 事件唯一ID;
}