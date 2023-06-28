export class ClientInfo{
  time_zone:number// 时区差值，比如：东八区是 -8;
  country:string// 国家;
  province:string// 省份;
  city:string// 城市;
  cpu:string// cpu;
  ram:string// 处理器;
  mac:string// mac地址;
  device_model:string// 设备码 -> device_token;
  sdk_oaid:string// sdk_oaid;
  sdk_uuid:string// sdk_uuid;
  phone_resolution:string// 手机分辨率;
  phone_size:string// 手机尺寸;
  phone_model:string// 手机型号;
  client_version:string// 客户端版本号;
  operator:string// 运营商;
  network_type:string// 网络类型;
  platform:string// 平台标识，1、安卓 2、IOS 3、获取不到 4、鸿蒙系统 -> device_type;
  app_id:string// 益玩appid;
  channel_id:string// 渠道id;
  openid:string// 账号openid;
  package_name:string// 包名;
  uid:string// 账号;
  host:string// 地址;
  port:string// 端口;
}