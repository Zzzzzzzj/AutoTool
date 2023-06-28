export class Demand{
  id:number// 需求id;
  num:number// 需求数量;
  learnNum:number// 学习数量;
  status:number// 0正常，1挂起 2失败，3成功;
  reason:number// status变化原因;
  score1:number// 战力值;
  score2:number// 暴力值;
  score3:number// 美味值;
}