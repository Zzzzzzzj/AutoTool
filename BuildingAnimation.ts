export class BuildingAnimation{
  type:number// 1打怪，2消费，3纪念品，4助学金，5自习;
  num:number// 课程产生的金币、经验;
  totalNum:number// 实际得到的金币、课程的数量、打怪掉落道具数量;
  power:number// 增加的战力;
  startTime:number// 动画开始时间;
  student:SimpleMonster// 学员（如果是消费，就只有_id）;
  product:SimpleMonster// 课程、怪物（如果是消费，就只有_id）;
}