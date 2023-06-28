export class InfluenceReward{
  id:number// 奖励id;
  status:number// 奖励状态（1：普通，2：普通 + vip）;
  infStartTime:number// 赛季开始时间;
  infEndTime:number// 赛季结束时间;
  infScore:number// 影响力;
  infRank:number// 影响力排名;
  infStatus:number// 状态（0：常态，1：普通vip，2：超级vip）;
  influence:number// 玩家影响力（不包含infScore）;
}