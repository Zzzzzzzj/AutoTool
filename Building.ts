export class Building{
  _id:number// 建筑唯一id;
  id:number// 建筑id;
  pos:string// 建筑位置（由客户端自定义，服务端不判断）;
  level:number// 建筑等级;
  exp:number// 建筑经验;
  locked:number// 是否加锁;
  studentNum:number// 可容纳学员数量;
  productNum:number// 可容纳课程数量;
  autoNum:number// 可自动标记数量;
  gold:number// 学员产出总金币;
  productAuto:number// 是否设置过课程自动;
  todayGold:number// 黄金树今日产出;
  startTime:number// 黄金树开始时间;
  moveAuto:number// 是否自动上架;
  movePercent:number// 自动上架百分比（怪物）;
  influence:number// 影响力;
  uInt:"optional// 学员打怪掉落总宝箱数量;
  _id:number// 建筑唯一id;
  _id:number// 建筑唯一id;
  _id:number// 建筑唯一id;
  _id:number// 建筑唯一id;
}