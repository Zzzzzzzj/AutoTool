export class Question{
  id:number// ID;
  name:string// 标题;
  type:number// 类型（1单选 2多选 3问答）;
  max:number// 最大多选数;
  options:string// 选项（使用|分隔）;
}