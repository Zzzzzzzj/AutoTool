export class MissionInfo{
  id:number// 任务id;
  v:number// 任务进度;
  repeat:number// 任务奖励状态：0未领取 1已领取;
  startTime:number// 任务开始时间（挑战任务开启后才会有，是否限时根据表格判断）;
  finishTime:number// 任务完成时间（挑战任务完成的时间戳）;
}