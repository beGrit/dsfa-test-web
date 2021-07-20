import leftTree from "./leftTree"
import rightLayout from "./rightLayout";

export default class DormitoryConfig {
  constructor(config) {
    this.config = config;
    const business = dsf.url.queryString("opt");
    if (!business) {
      this.alert("url里面缺少必要的opt参数");
    }
    if (!this.config[business]) {
      this.alert(`[${this.config.name}] url里面的opt参数没有对应的配置项`);
    }
    Object.getOwnPropertyNames(this.config[business]).forEach(key => {
      this[key] = this.config[business][key];
    })
  }
  
  alert(msg) {
    dsf.layer.alert({
      title: "警告",
      type: "warning",
      message: msg
    });
    throw new Error(msg)
  }
}

export {
  leftTree,
  rightLayout
}