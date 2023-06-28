export class BuildingProduct{
  _id:number// 课程唯一id;
  id:number// 课程id;
  num:number// 课程数量;
  endTime:number// 结束时间;
  auto:number// 是否自动生成;
  buildingUid:number// 所属建筑唯一id（服务端产生的课程为0，移动到其他建筑，需要修改）;
  teacherUid:number// 教员唯一id			;
  skillId:number// 教员技能id;
}