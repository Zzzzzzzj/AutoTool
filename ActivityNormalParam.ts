export class ActivityNormalParam{
  id:number// 参数id;
  groupId:number// 组ID;
  type:number// 参数类型;
  desc:string// 参数描述;
  minRank:number// 排名上限;
  maxRank:number// 排名下限（-1表示无限制）;
  param1:number// 参数1：限购次数、最大进度（人数、天数）;
  param2:number// 参数2：道具ID、人数统计最小积分;
  param3:number// 参数3：道具数量;
  param4:number// 参数4：重置小时数;
  param5:number// 参数5;
  id:number// 活动id;
  type:number// 类型;
  begin_time:number// 活动开始时间;
  end_time:number// 活动结束时间;
  show_begin_time:number// 活动显示开始时间;
  show_end_time:number// 活动显示结束时间;
  orders:number// 活动排序;
  is_cross:number// 是否跨服;
  keyword:string// 活动模板;
  name:string// 活动名字;
  desc:string// 活动描述;
  img:string// 活动外部图片;
  preview:string// 奖励预览;
}