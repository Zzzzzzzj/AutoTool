export class StudentMarch{
  _id:number// 学员唯一id（0表示没行军）;
  from:string// 建筑位置;
  to:string// 建筑位置;
  startTime:number// 开始时间;
  endTime:number// 结束时间;
  freeTime:number// 闲逛多长时间;
  initFrom:string// 起点;
  type:number// 1使用道具或钻石 2看广告;
  energyType:number// 0体力 1关卡体力;
  times:number// 使用道具次数;
}