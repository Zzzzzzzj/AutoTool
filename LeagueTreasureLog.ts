export class LeagueTreasureLog{
  type:number// 1参与 2寻宝开始 3随机事件 4寻宝结束;
  timestamp:number// 触发时间;
  eventId:number// 随机事件ID (随机事件);
  teacherId:number// 教员ID (参与);
  teacherPower:number// 教员战力 (参与);
  playerName:string// 参与玩家名字 (参与);
  status:number// 0失败 1成功;
  id:number;
}