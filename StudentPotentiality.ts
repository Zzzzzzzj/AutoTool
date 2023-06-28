export class StudentPotentiality{
  att:double// 攻击;
  hp:double;
  _id:number// 学员唯一id;
  id:number// 学员id;
  sesson:number// 第N届;
  power:number// 战力;
  influence:number// 影响力;
  level:number// 学员等级;
  gold:number// 初始金币;
  costGold:number// 扣除金币;
  status:number// 0正常 1离开 2已毕业（待毕业是离开状态+学员等级达上限）;
  name:string// 学员名字;
  potentiality:StudentPotentiality// 潜力;
  attrInfo:StudentPotentiality// 属性;
  march:StudentMarch// 行军信息;
  graduateTime:number// 毕业时间;
  burnEndTime:number// 燃烧结束时间;
}